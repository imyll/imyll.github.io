(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hot"],{"0b70":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hots"},[t._m(0),a("ul",t._l(t.hotsongs,(function(s,i){return a("li",{key:s.id,staticClass:"item-list",on:{click:function(a){t.$emit("change-current-song",s),t.$emit("change-current-play-list",t.hotsong)}}},[a("span",{staticClass:"serial-num"},[t._v(t._s(i+1))]),a("div",{staticClass:"left"},[a("div",{staticClass:"song-name"},[t._v(t._s(s.name))]),a("div",{staticClass:"info"},[a("div",{staticClass:"hot-list-img"}),a("span",{staticClass:"song-singer"},[t._v(t._s(s.ar[0].name))]),a("span",{staticClass:"album"},[t._v(" - "+t._s(s.al.name))])])]),a("div",{staticClass:"icon"},[a("div",{staticClass:"play",class:{current:t.currentSongId===s.id,playing:t.playing}},[a("i"),a("i"),a("i"),a("i")])])])})),0)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hots-nav"},[a("div",{staticClass:"bgimg"})])}],e=(a("a9e3"),{props:{currentSongId:{type:Number},playing:Boolean},data:function(){return{hotsongs:[]}},created:function(){var t=this;this.axios.get("http://apis.netstart.cn/music/playlist/detail?id=3778678").then((function(s){t.hotsongs=s.data.playlist.tracks}))}}),c=e,l=(a("653d"),a("2877")),o=Object(l["a"])(c,i,n,!1,null,"30dc2fa2",null);s["default"]=o.exports},"653d":function(t,s,a){"use strict";a("708d")},"708d":function(t,s,a){}}]);
//# sourceMappingURL=hot.ec49b5a5.js.map