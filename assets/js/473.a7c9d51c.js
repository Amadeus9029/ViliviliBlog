(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{971:function(_,v,l){"use strict";l.r(v);var i=l(16),$=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"数学基础及环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数学基础及环境"}},[_._v("#")]),_._v(" 数学基础及环境")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("马尔科夫决策过程")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("马尔科夫性质")]),_._v(" "),l("ol",[l("li",[_._v("无后效性：t+1时刻的环境反馈只与当前状态s和动作a有关，与t-1时刻无关")])])]),_._v(" "),l("li",[l("p",[_._v("马尔科夫决策过程")]),_._v(" "),l("ol",[l("li",[_._v("马尔科夫决策过程由四元组组成：$MDP$=$(S, A, P_{sa}, R)$\n"),l("ol",[l("li",[_._v("$S$:状态空间集 $S$ =${s_1,s_2,...,s_n}$")]),_._v(" "),l("li",[_._v("$A$:动作空间集 $A = {a_1,a_2,...,a_n}$")]),_._v(" "),l("li",[_._v("$P_{sa}$:状态转移概率,在当前状态$s$下执行$a$动作后转移到$s’$的概率分布")]),_._v(" "),l("li",[_._v("$R$：奖励函数 $r = R(s,a)$")])])])])]),_._v(" "),l("li",[l("p",[_._v("强化学习的数学基础理论")]),_._v(" "),l("p",[_._v("强化学习就是通过在环境中不断尝试采样，学习到一个最优策略$\\pi$,智能体在$\\pi$的指导下得到的累计奖励的期望就是价值$v$")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("策略 $\\pi$")]),_._v(" "),l("ol",[l("li",[_._v("确定性策略 $a = \\pi(s)$,根据策略函数$\\pi$，以及当前状态s能直接确定接下来要执行的动作 $a$")]),_._v(" "),l("li",[_._v("随机性策略 $\\pi(s,a)$,表示在当前状态s下执行a的概率，$\\pi(s,a) = P[a_t=a|s_t=s]$")])])]),_._v(" "),l("li",[l("p",[_._v("奖励 $R$")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("总奖励 $R = r_1 + r_2 + ... + r_n$")])]),_._v(" "),l("li",[l("p",[_._v("未来累积奖励 $R = r_t + r_{t+1} + ... + r_n$")])]),_._v(" "),l("li",[l("p",[_._v("折扣未来累积奖励 $G_t = R_t + \\gamma R_{t+1} + \\gamma^2 R_{t+2} + ... + \\gamma^{n-t} R_{n} = R_t + \\gamma G_{t+1}$ , $\\gamma \\in [0,1]$的常数")]),_._v(" "),l("p",[_._v("$\\textcolor{red}{强化学习的目标是学习一个使未来折扣累积奖励最大的最优策略 \\pi}$")])])])]),_._v(" "),l("li",[l("p",[_._v("价值函数")]),_._v(" "),l("ol",[l("li",[_._v("状态值函数 $v(s)=E[G_t|s_t=s]$,当前状态下执行a会得到的奖励期望")]),_._v(" "),l("li",[_._v("动作值函数$q(s,a)=E[G_t|s_t=s,a_t=a]$")])])])])]),_._v(" "),l("li",[l("p",[_._v("求解强化学习")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("贝尔曼方程")]),_._v(" "),l("ol",[l("li",[_._v("表示当前状态下的价值$v(s_t)$和下个时刻的价值$v(s_{t+1})$的关系，动作值也可以用贝尔曼方程表示\n"),l("ol",[l("li",[_._v("$v(s)=E[G_t|s_t=s]=E[r_t+\\gamma v(s_{t+1})|s_t=s]$")]),_._v(" "),l("li",[_._v("贝尔曼方程:$v(s)=R_s+\\gamma \\sum_{s'\\in S}P_{ss'}v(s')$,简化：$v=R+\\gamma Pv$")])])])])]),_._v(" "),l("li",[l("p",[_._v("最优值函数")]),_._v(" "),l("ol",[l("li",[_._v("$\\pi^"),l("em",[_._v("(s)\\rightarrow v^")]),_._v("(s)=max_\\pi v(s)$")]),_._v(" "),l("li",[_._v("同理，最优动作值函数 $q^*(s,a)=max_\\pi q_\\pi(s,a)$")])])]),_._v(" "),l("li",[l("p",[_._v("最优策略")])]),_._v(" "),l("li",[l("p",[_._v("求解最优策略")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("动态规划法")])]),_._v(" "),l("li",[l("p",[_._v("蒙特卡洛法")])]),_._v(" "),l("li",[l("p",[_._v("时间差分法")]),_._v(" "),l("p",[_._v("$\\textcolor{red}{以上方法都存在探索-利用困境，为了权衡的两者的重要性，具体方法 \\varepsilon - 贪婪算法}$")])])])])])])])])]),_._v(" "),l("h1",{attrs:{id:"动态规划"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[_._v("#")]),_._v(" 动态规划")]),_._v(" "),l("ol",[l("li",[_._v("动态规划\n"),l("ol",[l("li",[_._v("概述\n"),l("ol",[l("li",[_._v("动态规划与贝尔曼方程")])])]),_._v(" "),l("li",[_._v("策略评估\n"),l("ol",[l("li",[_._v("策略评估算法")]),_._v(" "),l("li",[_._v("策略评估算法实现")])])]),_._v(" "),l("li",[_._v("策略改进")]),_._v(" "),l("li",[_._v("策略迭代\n"),l("ol",[l("li",[_._v("策略迭代算法")]),_._v(" "),l("li",[_._v("策略迭代算法实现")])])]),_._v(" "),l("li",[_._v("值迭代\n"),l("ol",[l("li",[_._v("值迭代算法")]),_._v(" "),l("li",[_._v("值迭代算法实现")])])]),_._v(" "),l("li",[_._v("异步动态规划\n"),l("ol",[l("li",[_._v("In-Place动态规划")]),_._v(" "),l("li",[_._v("加权扫描动态规划")]),_._v(" "),l("li",[_._v("实时动态规划")])])])])])]),_._v(" "),l("h1",{attrs:{id:"蒙特卡洛"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#蒙特卡洛"}},[_._v("#")]),_._v(" 蒙特卡洛")])])}),[],!1,null,null,null);v.default=$.exports}}]);