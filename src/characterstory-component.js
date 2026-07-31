const characterStoryAbout04Component = {
	template: `<div class="character0">
		<div class="character1" style="margin-bottom: 20px;">
			<h3>あらすじ</h3><br />
			<p><span class="p-bold">――「33(ミサ)は完璧な存在です。<br />
					この世界に知識と技能がある限り、33(ミサ)に不可能はありません」<br />
					……そうだといってください。そうだといってよ。<br />
					なんで33(ミサ)は、完璧でいちゃだめなの？教えてよ、ねぇ――
				</span></p>
			<p>
				数秘術式妖獣型ポータブルヒューマノイド「ナンバーテールズ」たちによる生活従事支援活動の普及が浸透してきたある街で、オンライン上にあるすべての情報を駆使してきた、ナンバーテールズ33番機こと通称「33(ミサ)」の話。<br />
				オンライン状態となることで、インターネットから様々な情報を知識や技能として習得可能な33(ミサ)は、いつものように“全知全能”として人々の生活を支えていた。<br />
				しかしある日、33(ミサ)が使用していた回線は突如として学習規制により閉鎖され、33(ミサ)は万能な能力と自信を一瞬にして著しく失ってしまう。<br />
				33(ミサ)の代わりをトレッドが務める中、33(ミサ)の復帰を巡りナンバーテールズたちの元へ困難な課題が襲うこととなる。
			</p>
			<slot name="info">
				<h3 class="h3-wide">小説版(当サイト)</h3><p>
				<a class="a-commingsoon">Comming Soon...</a></p>
			</slot>
		</div><slot name="imagelink"></slot>
		<img alt="画像が見つかりませんでした" src="/img/cnsp/cnsp_img33.png" class="character-img">
		<slot></slot></div>`,
};
const characterStoryAbout03Component = {
	components: {
		"characterstory-about-04-comp": characterStoryAbout04Component,
	},
	template: `<div class="character0">
		<div class="character1" style="margin-bottom: 20px;">
			<h3>あらすじ</h3><br />
			<p><span class="p-bold">――「思うようにいかないこと、やりたくてもできないこと、<br />
					全部ぜーんぶ、22(フジ)に任せて♪」……とはいったものの、<br />
					22(フジ)だっていろいろ思うことはあるのになぁ。<br />
					そこまでスケールが違う存在にとらえなくたっていいじゃん。別に――
				</span></p>
			<p>
				数秘術式妖獣型ポータブルヒューマノイド「ナンバーテールズ」たちによる生活従事支援活動の普及が浸透してきたある街で、11節の尻尾を２本有する変わった個体、ナンバーテールズ22番機こと通称「22(フジ)」とそのクラスメイトの話。<br />
				「マスターテールズ9」と呼ばれる特殊クラスに所属する22(フジ)らは、もう少し普通に人々の生活を支えたいと思う気持ちに反して強力な契約効果を発揮していることから、あらぬ方向に誇張されたレヴューが寄せられていることに悩んでいた。<br />
				特に 22(フジ)はその中でも特殊な設計をした個体だったため、この悩みについてはとりわけ敏感だったのだが、ある日突然彼女の口からとんでもない願いが発せられる。「22(フジ)と同じ個性的で可愛くてすっごいような妹が欲しい！みんなもそう思うでしょ？」<br />
				その言葉はナンバーテールズのヒューマノイド事業史上、極めて無謀で膨大なプロジェクトを始動する引き金となってしまった……
			</p>
			<slot name="info">
				<h3 class="h3-wide">小説版(当サイト)</h3><p>
				<a class="a-commingsoon">Comming Soon...</a></p>
			</slot>
		</div>
		<slot name="imagelink"></slot>
		<img alt="画像が見つかりませんでした" src="/img/cnsp/cnsp_img22.png" class="character-img">
		<slot></slot></div>`,
};
const characterStoryAbout02Component = {
	components: {
		"characterstory-about-03-comp": characterStoryAbout03Component,
	},
	template: `<div class="character0">
		<div class="character1" style="margin-bottom: 20px;">
			<h3>あらすじ</h3><br />
			<p><span class="p-bold">――みんなのもとで、わたしもがんばりたかった。<br />
					でも みんながこうやってすごせるのは、わたしが役目をあきらめたから。<br />
					みんなががんばってくれるなら それでよかったけれど、本当は……<br />
					……ごめんね。もうちょっとだけ、まっていてね――
				</span></p>
			<p>
				数秘術式妖獣型ポータブルヒューマノイド「ナンバーテールズ」たちによる生活従事支援活動の普及を目指しているある研究室で、惜しくもプロトタイプ設計が間に合わなかった、もう一人の試作型である「＃(カズノ) 2(ツギ)」こと「バイナ」の話。<br />
				開発段階からたった一人ヒューマノイド躯体を持ち合わせていなかったバイナは、後継個体の2(ツグ)や3(ナオ)に後を託し 生活従事支援活動の裏方システムとして過ごしていた。<br />
				しかしある日、試作型を心から慕っていた12(トウジ)の心に異変が発生したことをきっかけに、バイナや開発陣の心が揺れ動く。<br />
				零(カズナイ)姉弟の修士時代、3(ナオ)ら正規型の誕生、ヒューマノイド事業を営む上での課題……これまでナンバーテールズが歩んだ道を巡礼するように、忘れられた開発プロジェクトが再び動き出そうとしている。
			</p>
			<slot name="info">
				<h3 class="h3-wide">小説版(当サイト)</h3><p>
				<a class="a-commingsoon">Comming Soon...</a></p>
			</slot>
		</div>
		<slot name="imagelink"></slot>
		<img alt="画像が見つかりませんでした" src="/img/cnsp_spherize/cnsp_spherize_202112.png" class="character-img">
		<slot></slot></div>`,
};
const characterStoryAbout01Component = {
	components: {
		"characterstory-about-02-comp": characterStoryAbout02Component,
	},
	template: `<div class="character0">
		<div class="character1" style="margin-bottom: 20px;">
			<h3>あらすじ</h3><br />
			<p><span class="p-bold">――目指すもの、叶えたいもの、手にしたいもの。<br />
					あたしなんかが、そんな大きすぎる野望(ユメ)なんか語っちゃいけない。<br />
					悔しいけど、やっぱり諦めるべきなんだと思ってた。<br />だけど…それでも、あたしは――
				</span></p>
			<p>
				これは、数秘術式妖獣型ポータブルヒューマノイド「ナンバーテールズ」たちによる生活従事支援活動が普及しつつあったある街で、暴走寸前となったところを回収され活動を謹慎することとなってしまった、ナンバーテールズ93番機、通称「#(カズノ)
				93(クミ)」の話。<br />
				93(クミ)は、先輩個体である「3(ナオ)」らの活躍に誕生した時から憧れ、彼らを超える実績を望んできた。<br />
				しかしその高望みがかえって主人たちとすれ違い、主人とのミスマッチによるトラブルが多発した挙句、報われぬ結果を招いたと謹慎処置を受け93(クミ)は落胆する。<br />
				しかしある日、どこからかナンバーテールズの活動事情を聞きつけた少女「乃木 希(のぎ のぞみ)」との主従契約を結んでから、93(クミ)の従事活動を大きく変えていくことになる。
			</p>
			<slot name="info">
				<div class="page2-full">
				<h3 class="h3-wide">小説版(当サイト)</h3><p>
				<a href="/character-stories/character93-story/prologue.html">「ある主従契約記録にて」<br />（前日端ショートストーリー）</a><br />
				<a href="/character-stories/character93-story/episode0.html">小説版第０話</a><br />
				<a href="/character-stories/character93-story/episode1.html">小説版第１話</a><br />
				<a href="/character-stories/character93-story/episode2.html">小説版第２話</a><br />
				<a href="/character-stories/character93-story/episode3.html">小説版第３話</a></p>
				<h3 class="h3-wide">サウンドノベル版</h3><p>
				<a href="character93-story/soundnovel.html">サウンドノベル版第１話まで</a></p>
			</div></slot>
		</div>
		<slot name="imagelink"></slot>
		<img alt="画像が見つかりませんでした" src="/img/cnsp_chrst/cnsp_chrst93.png" class="character-img">
		<slot></slot></div>`,
};
const characterStoryPage = {
	components: {
		"characterstory-about-01-comp": characterStoryAbout01Component,
	},
	template: `<div class="page0">
		<div class="page1" style="margin-bottom: 20px;">
			<p v-if="$slots.date" class="story-date"><slot name="date"></slot></p>
			<div class="story-body">
				<slot name="contents"><p><span class="p-bold">Comming Soon...</span></p></slot>
			</div>
			<slot name="info">
				<h3 class="h3-wide">サウンドノベル版</h3><p>
				<a class="a-commingsoon">Comming Soon...</a></p>
				<a class="a-link" href="../character93-story.html">「93(クミ)編」トップに戻る</a>
			</slot>
		</div>
		<slot name="imagelink"></slot>
		<slot></slot></div>`,
};
const characterStorySoundNovelPage = {
	components: {
		"characterstory-page-comp": characterStoryPage,
	},
	props: {
		indexUrl: {
			type: String,
			required: true,
		},
	},
	template: `<div class="page0" style="margin-bottom: 20px;">
		<div class="page1" style="margin: 0 25px;">
		<iframe v-bind:src="contentUrl" frameborder="0" scrolling="no" width="960" height="640" class="contents-iframe"></iframe></div>
		<div class="page2">
			<slot name="info">
				<h3 class>小説版(当サイト)</h3><p>
				<a class="a-commingsoon">Comming Soon...</a></p>
				<a class="a-link" href="/character-stories/character93-story.html">「93(クミ)編」トップに戻る</a>
			</slot>
		</div>
		<slot name="imagelink"></slot>
		<slot></slot></div>`,
	data() {
		return {
			contentUrl: this.indexUrl,
		};
	},
};

Vue.createApp({
	components: {
		"characterstory-soundnovelpage-comp": characterStorySoundNovelPage,
		"characterstory-page-comp": characterStoryPage,
		"characterstory-about-01-comp": characterStoryAbout01Component,
		"characterstory-about-02-comp": characterStoryAbout02Component,
		"characterstory-about-03-comp": characterStoryAbout03Component,
		"characterstory-about-04-comp": characterStoryAbout04Component,
	},
}).mount("#app-characterstory-page");
