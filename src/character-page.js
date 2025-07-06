const characterPageComponent = {
	props: {
		charNum: {
			type: [Number, String],
			required: true,
		},
		wideStyle: {
			type: Boolean,
			required: false,
			default: false,
		},
		isSp: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	template: `<h1>ナンバーテールズ紹介</h1>
	<h2 v-bind:class="{'h2-wide': titleStyleIsWide}" v-if="characterData"><slot name="title" v-if="characterName">{{characterNum}}({{characterName}})</slot></h2>
	<div class="character0">
		<div class="character1">
			<p><slot v-if="[characterAbout, characterIsReleased]">{{characterAbout}}</slot><slot v-else><span class="p-bold">Comming Soon...</span></slot></p><br>
			<p>
			<span class="p-bold">一人称</span>：<slot name="callingme" v-if="characterCallingMe">{{characterCallingMe}}</slot><slot name="callingme" v-else>？？？</slot><br>
			<span class="p-bold">主人の呼び方</span>：<slot name="callingyou" v-if="characterCallingYou">{{characterCallingYou}}</slot><slot name="callingyou" v-else>？？？</slot>
			</p><p>
				<span class="p-bold">性別</span>：<slot name="gender" v-if="characterGender">{{characterGender}}</slot><slot name="gender" v-else>？？</slot>　
				<span class="p-bold">設定年齢</span>：<slot name="conceptage" v-if="characterConceptAge">{{characterConceptAge}}</slot><slot name="conceptage" v-else>???</slot>　
				<span class="p-bold">身長</span>：<slot name="height" v-if="characterHeight">{{characterHeight}}</slot><slot name="height" v-else>???cm</slot>　
				<span class="p-bold">体重</span>：<slot name="weight" v-if="characterWeight">{{characterWeight}}</slot><slot name="weight" v-else>???kg</slot><br>
				※ヒューマノイド形態時の体格。コアフォルダ形態は全員身長55cm前後で体重は積載量による<br>
				<span class="p-bold">尾の本数(束数)</span>：<slot name="numberoftails" v-if="characterTails">{{characterTails}}</slot><slot name="numberoftails" v-else>？？？</slot><br>
				<span class="p-bold">クラス</span>：<slot name="belongingclass" v-if="characterBelongs">{{characterBelongs}}</slot><slot name="belongingclass" v-else>？？？</slot>
			</p><p>
				<span class="p-bold">加護：<slot name="potential">？？？？</slot></span><br>
				<span class="p-bold">性格</span>：<slot name="characteristic" v-if="characteristic">{{characteristic}}</slot><slot name="characteristic" v-else>？？？</slot><br>
				<span class="p-bold">趣味</span>：<slot name="hobby" v-if="characterHobby">{{characterHobby}}</slot><slot name="hobby" v-else>？？？</slot>　
				<span class="p-bold">特技</span>：<slot name="skill" v-if="characterSpetialSkill">{{characterSpetialSkill}}</slot><slot name="skill" v-else>？？？</slot><br>
				<span class="p-bold">好きなもの</span>：<slot name="favors" v-if="characterFavor">{{characterFavor}}</slot><slot name="favors" v-else>？？？</slot>　
				<span class="p-bold">苦手なもの</span>：<slot name="unlikes" v-if="characterUnlike">{{characterUnlike}}</slot><slot name="unlikes" v-else>？？？</slot>
			</p><slot name="additions"></slot>
		</div><slot name="characterimage"><img alt="画像が見つかりませんでした" src="/img/cnsp/cnsp_img22.png" class="character-img">
	</slot></div>
		<a href="/characters.html">
			<h2 class="h2-a-link">ナンバーテールズ(2桁)紹介はこちら</h2>
		</a>
		<a href="/characters-special.html">
			<h2 class="h2-a-link">ナンバーテールズ(3桁)紹介はこちら</h2>
		</a>`,
	data: function () {
		return {
			titleStyleIsWide: this.wideStyle,
			characterNum: this.charNum,
			databaseIsSemiPrimary: this.isSp ? true : false,
			itemsInDatabase: null,
			characterData: {},
			characterName: '',
			characterIsReleased: false,
			characterAbout: '',
			characterCallingMe: '？？？',
			characterCallingYou: '？？？',
			characterGender: '？？',
			characterConceptAge: '???',
			characterHeight: '???cm',
			characterHeight: '???kg',
			characterTails: '？？？',
			characterBelongs: '？？？',
			characteristic: '？？？',
			characterHobby: '？？？',
			characterSpetialSkill: '？？？',
			characterFavor: '？？？',
			characterUnlike: '？？？',
		};
	},
	created: function () {
		if (this.databaseIsSemiPrimary) {
			axios.get("/databases/NumberTales/DataBases/db_SemiPrimary.json").then((response) => (this.itemsInDatabase = response.data)).catch((error) => console.log(error));
		} else {
			axios.get("/databases/NumberTales/DataBases/db_Primary.json").then((response) => (this.itemsInDatabase = response.data)).catch((error) => console.log(error));
		}
	},
	watch: {
		itemsInDatabase: function () {
			//console.log(this.itemsInDatabase);
			this.characterData = {};
			this.characterData = this.itemsInDatabase.find((v) => (v.Num == this.characterNum || v.Num === this.characterNum));
		},
		characterData: function () {
			//console.log(this.characterData);
			// 名前(呼び名)
			var name = this.characterData.Name;
			this.characterName = name.replace(/\n/g, "/");
			// 概要
			this.characterIsReleased = this.characterData.Progress ? (this.characterData.Progress === "released") : false;
			if (this.characterIsReleased) {
				var about = this.characterData.Summary
				this.characterAbout = about; // 概要文を工作する場合はここを編集

				// 一人称
				var callingme = this.characterData.FirstPersonCalling
				this.characterCallingMe = callingme.replace(/\n/g, "、");
				// 主人の呼び方
				var callingyou = this.characterData.ForMasterCalling
				this.characterCallingYou = callingyou.replace(/\n/g, "、");
			}
			// 性別
			switch (this.characterData.GenderType) {
				case "Female":
					this.characterGender = "女性";
					break;
				case "Neutral":
					this.characterGender = "中性";
					break;
				case "Male":
					this.characterGender = "男性";
					break;
				default:
					break;
			}
			// 設定年齢
			var conceptage = this.characterData.ConceptAge ? this.characterData.ConceptAge : undefined;
			if (Number.isInteger(conceptage)) {
				this.characterConceptAge = conceptage;
			} else {
				if (conceptage.value) {
					this.characterConceptAge = conceptage.about ? `${conceptage.value}(${conceptage.about})` : conceptage.value;
				} else {
					this.characterConceptAge = conceptage.about ? conceptage.about : '???';
				}
				this.characterConceptAge = this.characterConceptAge.replace(/？/g, '?');
			}
			// 身長
			var height = this.characterData.Height_cm ? this.characterData.Height_cm : undefined;
			if (Number.isInteger(height)) {
				this.characterHeight = `${height}cm`;
			} else {
				// https://qiita.com/myzkyy/items/8b1b91e998ef890e868c
				if (Object.prototype.toString.call(height) === '[object Array]')
				{
					var heightElem = [];
					height.forEach(elem => {
						var v = '';
						if (elem.value) {
							v = elem.about ? `${elem.value}cm(${elem.about})` : `${elem.value}cm`;
						} else {
							v = elem.about ? elem.about : '';
						}
						heightElem[heightElem.length] = v;
					});
					this.characterHeight = heightElem.join('+');
				} else {
					this.characterHeight = height.HideText ? height.HideText : "???cm";
				}
			}
			// 体重
			var weight = this.characterData.Weight_kg ? this.characterData.Weight_kg : undefined;
			if (Number.isInteger(weight)) {
				this.characterWeight = `${weight}kg`;
			} else {
				// https://qiita.com/myzkyy/items/8b1b91e998ef890e868c
				if (Object.prototype.toString.call(weight) === '[object Array]')
				{
					var weightElem = [];
					weight.forEach(elem => {
						var v = '';
						if (elem.value) {
							v = elem.about ? `${elem.value}kg(${elem.about})` : `${elem.value}kg`;
						} else {
							v = elem.about ? elem.about : '';
						}
						weightElem[weightElem.length] = v;
					});
					this.characterWeight = weightElem.join('+');
				} else {
					this.characterWeight = weight.HideText ? weight.HideText : '???kg';
				}
			}
			// 尻尾の形状
			var tailsunit = this.characterData.TailsUnit;
			this.characterTails = tailsunit; // 概要文を工作する場合はここを編集
			// クラス
			var belongingClass = this.characterData.Class;
			this.characterBelongs = belongingClass; // 概要文を工作する場合はここを編集
			// 性格
			var charc = this.characterData.Character;
			this.characteristic = charc ? charc.replace(/\n/g, '。') : '？？？';
			// 趣味
			var hobby = this.characterData.Hobby;
			if (hobby) {
				this.characterHobby = hobby.HideText ? `(${hobby.HideText})` : hobby.replace(/\n/g, '、');
			} else {
				this.characterHobby = '？？？';
			}
			// 特技
			var sp = this.characterData.SpetialSkill;
			if(sp){
				this.characterSpetialSkill = sp.HideText ? `(${sp.HideText})` : sp.replace(/\n/g, '、');
			} else {
				this.characterSpetialSkill = '？？？';
			}
			// 好きなもの
			var favor = this.characterData.Favor;
			if (favor) {
				this.characterFavor = favor.HideText ? `(${favor.HideText})` : favor.replace(/\n/g, '、');
			} else {
				this.characterFavor = '？？？';
			}
			// 苦手なもの
			var unlike = this.characterData.Unlike;
			if (unlike) {
				this.characterUnlike = unlike.HideText ? `(${unlike.HideText})` : unlike.replace(/\n/g, '、');
			} else {
				this.characterUnlike = '？？？';
			}
		},
	}
};

Vue.createApp({
	components: {
		"character-page-comp": characterPageComponent,
	},
}).mount("#app-character-page");
