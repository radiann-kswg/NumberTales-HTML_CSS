[_tb_system_call storage=system/_title_screen.ks]

[iscript]
TYRANO.kag.stat.charas['Zera'].jname = '零'
TYRANO.kag.stat.charas['Nintris'].jname = '93(クミ)'
TYRANO.kag.stat.charas['Trenina'].jname = '39(サク)'
TYRANO.kag.stat.charas['Nozomi'].jname = '希'
TYRANO.kag.stat.charas['Hudret'].jname = '百'
TYRANO.kag.stat.charas['Tenim'].jname = '10(ミツル)'
[endscript]

[hidemenubutton]

[tb_clear_images]

[tb_keyconfig  flag="0"  ]
[tb_hide_message_window  ]
[playbgm  volume="50"  time="1000"  loop="true"  storage="nt93_piano.ogg"  fadein="true"  ]
[bg  storage="メンテナンス室.png"  ]
[mask_off  time="500"  effect="fadeOut"  ]
[tb_keyconfig  flag="1"  ]
*title

[glink  color="black"  text="プロローグ"  x="600"  y="370"  size="20"  target="*prologue"  ]
[glink  color="black"  text="第１話"  x="600"  y="440"  size="20"  target="*episode1"  width=""  height=""  _clickable_img=""  ]
[glink  color="black"  text="クレジット"  x="600"  y="510"  size="20"  target="*credit"  width=""  height=""  _clickable_img=""  ]
[s  ]
[cm  ]
*prologue

[stopbgm  time="500"  fadeout="true"  ]
[mask  time="500"  effect="fadeIn"  color="0xd1efef"  ]
[jump  storage="scene1.ks"  target=""  ]
[cm  ]
*episode1

[stopbgm  time="500"  fadeout="true"  ]
[mask  time="500"  effect="fadeIn"  color="0xd1efef"  ]
[jump  storage="episode_1.ks"  target=""  ]
[cm  ]
*credit

[tb_show_message_window  ]
[tb_start_text mode=1 ]
# 創作
ラジアン(柏木主税)　https://misskey.numbertales-radiann.net/@RadianN_kswg[p]
# 立ち絵・背景
喜雨 kiu/xiyu　https://kiuxiyu.myportfolio.com/[p]
# サウンド
ヨシアミ＠4735　https://misskey.io/@yoshiami4735[p]
# UI素材
空想曲線　https://kopacurve.blog.fc2.com/[p]
# 制作
百花繚乱研究所（©ラジアン, 2021-2025） https://misskey.numbertales-radiann.net/@official[p]
[_tb_end_text]

[tb_hide_message_window  ]
[jump  storage="title_screen.ks"  target="*title"  ]
[s  ]
