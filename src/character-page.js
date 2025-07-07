const characterPageComponent = {
  props: {
    wideStyle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  template: `<h1>ナンバーテールズ紹介</h1>
	<h2 v-bind:class="{'h2-wide': titleStyleIsWide}"><slot name="title">(No Name)</slot></h2>
	<div class="character0">
		<div class="character1">
			<p><slot><span class="p-bold">Comming Soon...</span></slot></p><br>
			<p>
			<span class="p-bold">一人称</span>：<slot name="callingme">？？？</slot><br>
			<span class="p-bold">主人の呼び方</span>：<slot name="callingyou">？？？</slot>
			</p><p>
				<span class="p-bold">性別</span>：<slot name="gender">？？</slot>　
				<span class="p-bold">設定年齢</span>：<slot name="conceptage">???</slot>　
				<span class="p-bold">身長</span>：<slot name="height">???cm</slot>　
				<span class="p-bold">体重</span>：<slot name="weight">??kg</slot><br>
				※ヒューマノイド形態時の体格。コアフォルダ形態は全員身長55cm前後で体重は積載量による<br>
				<span class="p-bold">尾の本数(束数)</span>：<slot name="numberoftails">???</slot>　　
				<span class="p-bold">クラス</span>：<slot name="belongingclass">？？？</slot>
			</p><p>
				<span class="p-bold">加護：<slot name="potential">？？？？</slot></span><br>
				<span class="p-bold">性格</span>：<slot name="characteristic">？？？</slot><br>
				<span class="p-bold">趣味</span>：<slot name="hobby">？？？</slot>　
				<span class="p-bold">特技</span>：<slot name="skill">？？？</slot><br>
				<span class="p-bold">好きなもの</span>：<slot name="favors">？？？</slot>　
				<span class="p-bold">苦手なもの</span>：<slot name="unlikes">？？？</slot>
			</p><slot name="additions"></slot>
		</div><slot name="characterimage"><img alt="画像が見つかりませんでした" src="/img/cnsp/cnsp_img22.png" class="character-img">
	</slot></div>
		<a href="/characters.html">
			<h2 class="h2-a-link">ナンバーテールズ(2桁)紹介はこちら</h2>
		</a><a href="/characters-special.html">
			<h2 class="h2-a-link">ナンバーテールズ(3桁)紹介はこちら</h2>
		</a>`,
  data() {
    return {
      titleStyleIsWide: this.wideStyle,
    };
  },
};

Vue.createApp({
  components: {
    "character-page-comp": characterPageComponent,
  },
}).mount("#app-character-page");
