(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{820:function(_,v,t){"use strict";t.r(v);var d=t(16),e=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_2021-12-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2021-12-24"}},[_._v("#")]),_._v(" 2021.12.24")]),_._v(" "),t("h3",{attrs:{id:"今日任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#今日任务"}},[_._v("#")]),_._v(" 今日任务")]),_._v(" "),t("ul",[t("li",[_._v("训练SCANet网络\n"),t("ul",[t("li",[_._v("验证多波段通道注意力的作用![7d1f78031203e8b86b91344de76513b](C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\WeChat Files\\7d1f78031203e8b86b91344de76513b.jpg)")]),_._v(" "),t("li",[_._v("原理：维度为（S,C,B,H,W）做注意力得到的（S,C,B,1,1）【SCANet】，表示的是对应每个特征通道的不同波段的重要性，如果当前特征是无用的，那么此通道特征求得的注意力就是无意义的。为了弥补这个问题，可以先做（S,C,1,1,1）的注意力，再做（S,C,B,1,1）注意力，但是参数量和显存就会大很多。而（S,B,C,H,W）做注意力得到的（S,B,C,1,1）【SSANet】,表示的是对应波段下某些特征通道的重要性。")]),_._v(" "),t("li",[_._v("添加SSIM Loss 效果会不会更好？")])])]),_._v(" "),t("li",[_._v("将可训练的稀疏编码网络放入我们框架进行训练，还在调试中")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("方法")]),_._v(" "),t("th",[_._v("ICVL30")]),_._v(" "),t("th",[_._v("ICVL50")]),_._v(" "),t("th",[_._v("ICVL70")]),_._v(" "),t("th",[_._v("Blind")]),_._v(" "),t("th",[_._v("non.i.i.d")]),_._v(" "),t("th",[_._v("strip")]),_._v(" "),t("th",[_._v("deadline")]),_._v(" "),t("th",[_._v("impulse")]),_._v(" "),t("th",[_._v("mixture")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("QRNN3D")]),_._v(" "),t("td",[_._v("42.28/0.973")]),_._v(" "),t("td",[_._v("40.23/0.961")]),_._v(" "),t("td",[_._v("38.57/0.945")]),_._v(" "),t("td",[_._v("41.5/0.967")]),_._v(" "),t("td",[_._v("42.79/0.978")]),_._v(" "),t("td",[_._v("42.35/0.976")]),_._v(" "),t("td",[_._v("42.23/0.976")]),_._v(" "),t("td",[_._v("39.23/0.945")]),_._v(" "),t("td",[_._v("38.25/0.938")])]),_._v(" "),t("tr",[t("td",[_._v("SSANet (37 epoch)")]),_._v(" "),t("td",[_._v("41.92/0.9878")]),_._v(" "),t("td",[_._v("40.12/0.985")]),_._v(" "),t("td",[_._v("38.66/0.975")]),_._v(" "),t("td",[_._v("41.33/0.985")]),_._v(" "),t("td",[_._v("43.383/0.9924")]),_._v(" "),t("td",[_._v("43.217/0.9921")]),_._v(" "),t("td",[_._v("43.38/0.9924")]),_._v(" "),t("td",[_._v("41.213/0.9805")]),_._v(" "),t("td",[_._v("40.452/0.98")])]),_._v(" "),t("tr",[t("td",[_._v("SCANet(40 epoch)")]),_._v(" "),t("td",[_._v("41.33/0.9868")]),_._v(" "),t("td",[_._v("39.48/0.9805")]),_._v(" "),t("td",[_._v("37.97/0.973")]),_._v(" "),t("td",[_._v("40.72/0.984")]),_._v(" "),t("td",[_._v("42.792/0.9916")]),_._v(" "),t("td",[_._v("42.629/0.9914")]),_._v(" "),t("td",[_._v("42.805/0.9918")]),_._v(" "),t("td",[_._v("40.597/0.9787")]),_._v(" "),t("td",[_._v("39.759/0.9769")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);