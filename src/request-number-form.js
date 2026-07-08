// Cloudflare Turnstile (managed siteverify Worker: cf-worker/turnstile-verify/) 経由でBot対策後、
// Formspreeへ送信するリクエストナンバー受付フォーム。
const TURNSTILE_SITE_KEY = "0x4AAAAAADxtdRS4PjrHbAaF";
const TURNSTILE_WORKER_URL = "https://numbertales-turnstile-verify.radiannkswg-mcp.workers.dev";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdlqvwn";

const NUMBER_MAX_LENGTH = 20;
const REASON_MAX_LENGTH = 1000;
const BACKGROUND_MAX_LENGTH = 500;

window.onloadTurnstileCallback = function () {
	document.dispatchEvent(new CustomEvent("numbertales-turnstile-loaded"));
};

const requestNumberFormComponent = {
	template: `<form v-on:submit.prevent="handleSubmit" novalidate>
		<div class="form-group">
			<label for="request-number">リクエストする数字/番号 <span class="required-mark">*</span></label>
			<input
				type="text"
				id="request-number"
				v-model.trim="formData.number"
				v-bind:maxlength="numberMaxLength"
				placeholder="例: 45 / 123 / 3×11 のような表記も可"
				v-bind:class="{'input-error': errors.number}"
				v-bind:disabled="isSubmitting"
			/>
			<p class="form-error" v-if="errors.number">{{ errors.number }}</p>
		</div>

		<div class="form-group">
			<label for="request-reason">リクエスト理由 <span class="required-mark">*</span></label>
			<textarea
				id="request-reason"
				v-model="formData.reason"
				v-bind:maxlength="reasonMaxLength"
				rows="5"
				placeholder="この数字をナンバーテールズにしてほしい理由を教えてください"
				v-bind:class="{'input-error': errors.reason}"
				v-bind:disabled="isSubmitting"
			></textarea>
			<p class="char-counter">{{ formData.reason.length }} / {{ reasonMaxLength }}</p>
			<p class="form-error" v-if="errors.reason">{{ errors.reason }}</p>
		</div>

		<div class="form-group">
			<label for="request-background">番号のいわれ・モチーフ情報（任意）</label>
			<textarea
				id="request-background"
				v-model="formData.background"
				v-bind:maxlength="backgroundMaxLength"
				rows="4"
				placeholder="例: 数秘術／名数／数学的特徴／伝承／技術的慣用コード／有名な番号 など"
				v-bind:class="{'input-error': errors.background}"
				v-bind:disabled="isSubmitting"
			></textarea>
			<p class="char-counter">{{ formData.background.length }} / {{ backgroundMaxLength }}</p>
			<p class="form-error" v-if="errors.background">{{ errors.background }}</p>
		</div>

		<!-- 以下は仮の文言です。取り扱い方針の最終確認・修正はUser側でお願いします -->
		<div class="form-security-notice secure-connection">
			<p>いただいた内容は、キャラクター展開の検討資料として保管します。</p>
		</div>

		<div class="turnstile-container" ref="turnstileContainer"></div>
		<p class="form-error" role="alert" v-if="turnstileError">認証チェックが完了していません。チェックボックスにチェックしてから、もう一度送信してください。</p>

		<div class="error-alert" role="alert" v-if="submitFailed">
			<p>送信に失敗しました。時間をおいて再度お試しください。</p>
			<button type="button" v-on:click="submitFailed = false">閉じる</button>
		</div>

		<button type="submit" class="submit-button" v-bind:disabled="isSubmitting">
			<span v-if="isSubmitting" class="loading-spinner"></span>
			<span>{{ isSubmitting ? '送信中...' : 'リクエストを送信する' }}</span>
		</button>
	</form>

	<div class="modal-overlay" v-if="submitSucceeded">
		<div class="modal-content success-message">
			<h2 class="contact-title">送信ありがとうございました！</h2>
			<p>リクエストを受け付けました。今後のキャラクター展開の参考にさせていただきます。</p>
			<button type="button" class="submit-button" v-on:click="submitSucceeded = false">閉じる</button>
		</div>
	</div>`,
	data() {
		return {
			formData: {
				number: "",
				reason: "",
				background: "",
			},
			errors: {},
			isSubmitting: false,
			submitSucceeded: false,
			submitFailed: false,
			turnstileToken: "",
			turnstileWidgetId: null,
			turnstileError: false,
			numberMaxLength: NUMBER_MAX_LENGTH,
			reasonMaxLength: REASON_MAX_LENGTH,
			backgroundMaxLength: BACKGROUND_MAX_LENGTH,
		};
	},
	mounted() {
		if (window.turnstile) {
			this.renderTurnstile();
		} else {
			document.addEventListener("numbertales-turnstile-loaded", this.renderTurnstile, { once: true });
		}
	},
	beforeUnmount() {
		if (window.turnstile && this.turnstileWidgetId !== null) {
			window.turnstile.remove(this.turnstileWidgetId);
		}
	},
	methods: {
		validateForm() {
			this.errors = {};
			let valid = true;
			const number = this.formData.number.trim();
			const reason = this.formData.reason.trim();
			const background = this.formData.background.trim();

			if (!number) {
				this.errors.number = "リクエストする数字/番号は必須です";
				valid = false;
			} else if (number.length > NUMBER_MAX_LENGTH) {
				this.errors.number = `${NUMBER_MAX_LENGTH}文字以内で入力してください`;
				valid = false;
			}

			if (!reason) {
				this.errors.reason = "リクエスト理由は必須です";
				valid = false;
			} else if (reason.length > REASON_MAX_LENGTH) {
				this.errors.reason = `${REASON_MAX_LENGTH}文字以内で入力してください`;
				valid = false;
			}

			if (background.length > BACKGROUND_MAX_LENGTH) {
				this.errors.background = `${BACKGROUND_MAX_LENGTH}文字以内で入力してください`;
				valid = false;
			}

			return valid;
		},

		renderTurnstile() {
			if (!window.turnstile || !this.$refs.turnstileContainer) return;
			this.turnstileWidgetId = window.turnstile.render(this.$refs.turnstileContainer, {
				sitekey: TURNSTILE_SITE_KEY,
				action: "turnstile-spin-v1",
				callback: (token) => {
					this.turnstileToken = token;
					this.turnstileError = false;
				},
				"error-callback": () => {
					this.turnstileToken = "";
				},
				"expired-callback": () => {
					this.turnstileToken = "";
				},
			});
		},

		resetTurnstile() {
			this.turnstileToken = "";
			if (window.turnstile && this.turnstileWidgetId !== null) {
				window.turnstile.reset(this.turnstileWidgetId);
			}
		},

		async verifyTurnstile() {
			const response = await fetch(TURNSTILE_WORKER_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token: this.turnstileToken }),
			});
			const data = await response.json();
			return !!data.success;
		},

		async submitToFormspree() {
			const response = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					number: this.formData.number.trim(),
					reason: this.formData.reason.trim(),
					background: this.formData.background.trim(),
				}),
			});
			return response.ok;
		},

		resetForm() {
			this.formData = { number: "", reason: "", background: "" };
			this.errors = {};
		},

		async handleSubmit() {
			this.submitFailed = false;

			if (!this.validateForm()) {
				return;
			}

			if (!this.turnstileToken) {
				this.turnstileError = true;
				return;
			}
			this.turnstileError = false;

			this.isSubmitting = true;
			try {
				const verified = await this.verifyTurnstile();
				if (!verified) {
					this.turnstileError = true;
					this.resetTurnstile();
					return;
				}

				const sent = await this.submitToFormspree();
				if (!sent) {
					throw new Error("formspree submission failed");
				}

				this.resetForm();
				this.resetTurnstile();
				this.submitSucceeded = true;
			} catch (error) {
				this.submitFailed = true;
			} finally {
				this.isSubmitting = false;
			}
		},
	},
};

Vue.createApp({})
	.component("request-number-form", requestNumberFormComponent)
	.mount("#app-request-form");
