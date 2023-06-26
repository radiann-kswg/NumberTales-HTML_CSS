const linksPluMiNTs = {
	template: `
		<a class="a-link" href="https://youtu.be/57t1AXKGObs">ミニゲームPV(YouTube)</a><br>
		<a class="a-link" href="https://radiann-kswg.booth.pm/items/3962593">ステッカー<slot name="shopsfx"></slot></a><br>
		<a class="a-link" href="https://radiann-kswg.booth.pm/items/3962617">キーホルダー<slot name="shopsfx"></slot></a>
	`
};

const linksSXG2022 = {
	components: {
		'a-links-plumints': linksPluMiNTs
	},
	template: `
		<a class="a-link" href="https://twitter.com/ShowXGuys/">SXG公式Twitter</a><br>
		<a class="a-link" href="https://twitter.com/showxguys/status/1543104339094683654">出展紹介(Twitter)</a>
	`
};

const linksOkaUniCalender = {
	components: {
		'a-links-sxg2022': linksSXG2022
	},
	template: `
		<a class="a-link" href="/news/news202112_calender2022.html">利用されたカレンダー</a><br>
		<a class="a-link" href="https://okauni.connpass.com/">岡山Unity勉強会</a>
	`
};

const linksOfficialShop = {
	components: {
		'a-links-okauni-calender': linksOkaUniCalender
	},
	template: `
		<a class="a-link" href="https://radiann-kswg.booth.pm/items/3937073">クッション<slot></slot></a><br>
		<a class="a-link" href="https://radiann-kswg.booth.pm/items/3940881">アクリルキーホルダー<slot></slot></a>
	`
};

const listComponent = {
	components: {
		'a-links-official-shop': linksOfficialShop
	},
	props: {
		wideStyle: {
			type: Boolean,
			required: false,
			default: false
		},
		smallStyle: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	template: `<div v-bind:class="{'character-list1-small': contentsStyleIsSmall, 'character-list1': !contentsStyleIsSmall}">
		<div class="character-list2">
		<h3 v-bind:class="{'h3-wide': titleStyleIsWide}"><slot name="title">(Non Title)</slot></h3><br>
			<slot></slot>
		</div>
		<slot name="imagelink"><img alt="/img/icn_nonimg.png" src="/img/icn_nonimg.png"
		class="character-list-img"></slot>
	</div>`,
	data() {
		return {
			titleStyleIsWide: this.wideStyle,
			contentsStyleIsSmall: this.smallStyle
		};
	}
};

Vue.createApp({
	components: {
		'list-comp': listComponent,
		'a-links-official-shop': linksOfficialShop,
		'a-links-okauni-calender': linksOkaUniCalender,
		'a-links-sxg2022': linksSXG2022,
		'a-links-plumints': linksPluMiNTs
	}
})
	.mount('#app-list-comp')