webpackJsonp([429],{BgTZ:function(t,e,n){var i=n("mL8m");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("3582ed89",i,!0,{})},PfLD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Pexp"),a=n("Tg7E"),s={data:function(){return{toi:this.fun.getKeyByI(),_id:"",info:{},order:{},goods:{},income_name_text:""}},activated:function(){this.toi=this.fun.getKeyByI(),this._id=this.$route.params.id,this.info={},this.order={},this.goods={},this.getData(),this.customizeIncome(),this.fun.setWXTitle(this.income_name_text+"明细详情")},mounted:function(){this.toi=this.fun.getKeyByI()},methods:{getData:function(){var t=this,e={id:this._id,i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("finance.income.get-detail",e,"加载中...").then(function(e){console.log(e),1==e.result?t.setData(e.data):console.log(e.msg)},function(t){console.log(t)})},setData:function(t){var e=this;if(null!=t&&""!=t&&void 0!=t)return this.fun.isTextEmpty(t.commission)?this.fun.isTextEmpty(t.area_dividend)?void 0:(this.info=t.area_dividend,this.order=t.order,void(this.goods=t.goods)):(this.info=t.commission,this.order=t.order,void(this.goods=t.goods));Object(a.MessageBox)({title:"提示",message:"无详情显示",showCancelButton:!0}).then(function(t){e.$router.go(-1)})},customizeIncome:function(){var t=this.fun.initMailLanguage();this.income_name_text=t.income.income_name}},components:{cTitle:i.a}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"commission"}},[n("c-title",{attrs:{hide:!1,text:t.income_name_text+"详情"}}),t._v(" "),n("div",{staticStyle:{height:"40px"}}),t._v(" "),t.info?n("div",{staticClass:"atitem"},[n("div",{staticClass:"title"},[t._v(t._s(t.info.title))]),t._v(" "),n("div",{staticStyle:{height:"0.625rem"}}),t._v(" "),t._l(t.info.data,function(e,i){return t.info?n("div",{key:i,staticClass:"tbs"},[n("div",{staticClass:"item1"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"item2"},[t._v(t._s(e.value))])]):t._e()})],2):t._e(),t._v(" "),t.order?n("div",{staticClass:"atitem"},[n("div",{staticClass:"title"},[t._v(t._s(t.order.title))]),t._v(" "),n("div",{staticStyle:{height:"0.625rem"}}),t._v(" "),t._l(t.order.data,function(e,i){return n("div",{key:i,staticClass:"tbs"},[n("div",{staticClass:"item1"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"item2"},[t._v(t._s(e.value))])])})],2):t._e(),t._v(" "),t.goods?n("div",{staticClass:"atitem"},[n("div",{staticClass:"title"},[t._v(t._s(t._f("escapeTitle")(t.goods.title)))]),t._v(" "),n("div",t._l(t.goods.data,function(e,i){return n("div",{key:i,staticClass:"tbs goods-info"},t._l(e,function(e,i){return n("div",{key:i,staticClass:"goods"},[n("div",{staticClass:"item1"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"item2"},[t._v(t._s(e.value))])])}),0)}),0)]):t._e()],1)},staticRenderFns:[]};var d=n("VU/8")(s,o,!1,function(t){n("BgTZ")},"data-v-4a0ba2d7",null);e.default=d.exports},mL8m:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#commission[data-v-4a0ba2d7] {\n  /*.goods{display: flex;align-items:center;flex-wrap:wrap;background:#fff;border-top:1px solid #f1f1f1;\n\t\tb{flex: 2; img{width: 50%;margin:10px 0  ;}}*/\n}\n#commission .times[data-v-4a0ba2d7] {\n    text-align: left;\n    text-indent: 10px;\n    line-height: 2rem;\n    border-bottom: #D9D9D9 solid 0.0625rem;\n    font-weight: bold;\n    font-size: 1rem;\n}\n#commission .times font[data-v-4a0ba2d7] {\n      color: #008000;\n      padding-left: 0.8125rem;\n}\n#commission .atitem[data-v-4a0ba2d7] {\n    background: #FFF;\n    padding-bottom: 0.625rem;\n}\n#commission .atitem .title[data-v-4a0ba2d7] {\n      background: #f5f5f5;\n      line-height: 1.875rem;\n      font-size: 14px;\n      padding: 0 0.75rem;\n      text-align: left;\n}\n#commission .atitem .tbs.goods-info[data-v-4a0ba2d7] {\n      padding-top: 0.625rem;\n}\n#commission font[data-v-4a0ba2d7] {\n    -webkit-box-flex: 5;\n        -ms-flex: 5;\n            flex: 5;\n    text-align: left;\n    margin: 0.625rem;\n}\n#commission span[data-v-4a0ba2d7] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: right;\n    margin-right: 0.625rem;\n}\n.tbs[data-v-4a0ba2d7] {\n  background: #FFF;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0 0.875rem;\n  line-height: 1.875rem;\n}\n.tbs .item1[data-v-4a0ba2d7] {\n    color: #8c8c8c;\n    -webkit-box-flex: 35%;\n        -ms-flex: 35%;\n            flex: 35%;\n    text-align: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.tbs .item2[data-v-4a0ba2d7] {\n    -webkit-box-flex: 65%;\n        -ms-flex: 65%;\n            flex: 65%;\n    text-align: left;\n    color: #333;\n    text-align: right;\n}\n.tbs .item2 .reg[data-v-4a0ba2d7] {\n      color: #259B24;\n}\n.tbs .goods[data-v-4a0ba2d7] {\n    background: #FFF;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    line-height: 1.875rem;\n    width: 100%;\n}\n.tbs .goods .item1[data-v-4a0ba2d7] {\n      color: #888;\n      -webkit-box-flex: 35%;\n          -ms-flex: 35%;\n              flex: 35%;\n      text-align: left;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n.tbs .goods .item2[data-v-4a0ba2d7] {\n      -webkit-box-flex: 65%;\n          -ms-flex: 65%;\n              flex: 65%;\n      text-align: left;\n      color: #000;\n      text-align: right;\n}\n.tbs .goods .item2 .reg[data-v-4a0ba2d7] {\n        color: #259B24;\n}\n",""])}});