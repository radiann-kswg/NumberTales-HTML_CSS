Vue.createApp({})
	.component('footer-credit', {
		template: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://misskey.numbertales-radiann.net/@official">100BeautiesLab.(百花繚乱研究所) Primary Works/Creations</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://misskey.io/@RadianN_kswg">RadianN_kswg(ラジアン/柏木主税)</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a></p>
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