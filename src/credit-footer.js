Vue.createApp({})
	.component('footer-credit', {
		template: `<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">クリエイティブ・コモンズ 表示 - 非営利 4.0 国際 ライセンス</a>の下に提供されています。<br>
		<p>百花繚乱研究所（©ラジアン(柏木主税) Radian-N 2021-{{nowYear}}）</p><p>
			スペシャルサンクス：<a class="a-p" src="https://okauni.connpass.com/">岡山Unity勉強会</a>, <a class="a-p" src="https://sanuki-gamen.connpass.com/">讃岐GameN</a>
		</p>`,
		// https://qiita.com/ron-Qiita/items/17af311a506d08b7bf14
		data: function () {
			return {
				nowYear: 2022
			};
		},
		methods: {
			dateTime: function () {
				var date = new Date();
				this.nowYear = date.getFullYear();
			}
		}
	})
	.mount('#app-credit')