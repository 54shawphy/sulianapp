webpackJsonp([120],{"Q+/B":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),o={data:function(){return{show:!1,redData:{},red_packet:"",shareData:{}}},activated:function(){this.getData(),this.getShare()},methods:{goback:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.url||this.$router.go(-1)},getShare:function(){var e=this;$http.get("plugin.red-packet.api.red-packet-logs.share",{},"加载中").then(function(t){1===t.result?(e.shareData=t.data,e.initShare()):Object(i.Toast)(t.msg)}).catch(function(e){console.log(e)})},initShare:function(){var e=this,t={url:"android"===this.fun.isIosOrAndroid()?window.location.href:window.initUrl};$http.post("member.member.wxJsSdkConfig",t).then(function(t){1===t.result&&t.data.config&&e.share(t.data)}).catch(function(e){})},share:function(e){var t=this;wx.config(e.config),wx.ready(function(){var n=t.fun.isTextEmpty(t.shareData.share_title)?e.share.title:t.shareData.share_title,a=document.location.href+"&share_tag=2";a=t.fun.isMid(a,e.info.uid);var o=t.fun.isTextEmpty(t.shareData.share_pictures)?e.share.icon:t.shareData.share_pictures,d=t.fun.isTextEmpty(t.shareData.share_content)?e.share.desc:t.shareData.share_content;wx.showOptionMenu(),wx.onMenuShareTimeline({title:n,link:a,imgUrl:o,success:function(){Object(i.Toast)("分享成功")},cancel:function(){Object(i.Toast)("取消分享")}}),wx.onMenuShareAppMessage({title:n,desc:d,link:a,imgUrl:o,type:"link",dataUrl:"",success:function(){Object(i.Toast)("分享成功")},cancel:function(){Object(i.Toast)("取消分享")}})})},getData:function(){var e=this;$http.get("plugin.red-packet.api.red-packet-logs.index",{},"加载中").then(function(t){1===t.result?(e.redData=t.data,e.amount=t.data.amount,e.receive_log=t.data.receive_log,e.bjcolor=t.data.color,e.receive_color=t.data.receive_color,e.amount_color=t.data.amount_color,e.out_color=t.data.out_color,e.red_packet_color=t.data.red_packet_color,e.fun.setWXTitle(e.redData.red_packet_title)):Object(i.Toast)(t.msg)}).catch(function(e){console.log(e)})},toPage:function(e){this.$router.push(this.fun.getUrl(e))},sureGet:function(){var e=this,t=localStorage.getItem("uid");$http.get("plugin.red-packet.api.red-packet-logs.memberAmount",{red_packet_id:this.redData.amount.id,uid:t},"加载中").then(function(t){1===t.result?(e.red_packet=t.data,e.show=!0,e.getData()):Object(i.Toast)(t.msg)}).catch(function(e){console.log(e)})},toGood:function(e){this.$router.push(this.fun.getUrl("goods",{id:e}))}},components:{cTitle:a.a}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"daily_red"}},[a("div",{staticClass:"content",style:{width:3==e.fun.getPhoneEnv()?"375px":""}},[a("div",{staticClass:"headImg"},[a("div",{staticClass:"header",style:{width:3==e.fun.getPhoneEnv()?"375px":""}},[a("i",{staticClass:"iconfont icon-back",on:{click:e.goback}}),e._v(" "),a("span",[e._v(e._s(e.redData.red_packet_title))])]),e._v(" "),a("img",{attrs:{src:e.redData.thumb,alt:""}})]),e._v(" "),a("div",{staticClass:"ImgBg",style:{backgroundColor:e.bjcolor}},[a("div",{staticClass:"red-box"},[a("div",{staticClass:"head"},[a("span",[e._v("今日红包")]),e._v(" "),0==Boolean(e.redData.redPacket)?a("div",{staticClass:"get-gray",style:{backgroundColor:e.red_packet_color}},[a("em",[e._v("暂无红包")])]):e._e(),e._v(" "),0==this.redData.receive_one&&!this.fun.isTextEmpty(this.redData.redPacket)&&Number(e.receive_log.amount_sum)-Number(e.receive_log.receive_amount)>0?a("div",{staticClass:"get-red",style:{backgroundColor:e.redData.receive_color},on:{click:e.sureGet}},[a("em",[e._v("立即领取")])]):e._e(),e._v(" "),Number(e.receive_log.amount_sum)-Number(e.receive_log.receive_amount)<=0&&0==e.redData.receive_one&&!this.fun.isTextEmpty(this.redData.redPacket)?a("div",{staticClass:"get-gray",style:{backgroundColor:e.amount_color}},[a("em",[e._v("额度不足")])]):e._e(),e._v(" "),Number(e.amount.number_sum)-Number(e.amount.totle)<=0&&1==e.redData.receive_one?a("div",{staticClass:"get-gray",style:{backgroundColor:e.out_color}},[a("em",[e._v("红包已领完")])]):e._e(),e._v(" "),1==e.redData.receive_one?a("div",{staticClass:"red-color"},[a("em",[e._v(e._s(e.redData.receive_amount_sum.receive_amount))]),a("span",[e._v("元")])]):e._e()]),e._v(" "),a("div",{staticClass:"red-number"},[a("div",{staticClass:"red-Vdi"},[a("span",[e._v("今日红包总额")]),e._v(" "),a("span",[e._v(e._s(e.amount.amount))])]),e._v(" "),a("div",{staticClass:"red-Vdi"},[a("span",[e._v("今日红包总量")]),e._v(" "),a("span",[e._v(e._s(e.amount.number_sum))])]),e._v(" "),a("div",{staticClass:"red-Vdi"},[a("span",[e._v("剩余数量")]),e._v(" "),a("span",[e._v(e._s(0==e.redPacket?"":Number(e.amount.number_sum)-Number(e.amount.totle)))])])]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"process"},[a("span",{staticClass:"bar",style:{width:Number(e.receive_log.receive_amount)/Number(e.receive_log.amount_sum).toFixed(2)*100+"%"}})]),e._v(" "),a("div",{staticClass:"much"},[a("div",{staticClass:"num",staticStyle:{"text-align":"left"}},[a("span",[e._v("已领取")]),e._v(" "),a("span",[e._v("￥"+e._s(e.redData.receive_log.receive_amount.toFixed(2)))])]),e._v(" "),a("div",{staticClass:"num",staticStyle:{"text-align":"right"}},[a("span",[e._v("剩余")]),e._v(" "),a("span",[e._v("￥"+e._s((e.receive_log.amount_sum-e.receive_log.receive_amount).toFixed(2)))])])]),e._v(" "),a("div",{staticClass:"get-ab"},[a("div",{staticClass:"gray",on:{click:function(t){return e.toPage("GetRedRecord")}}},[e._v("领取记录")]),e._v(" "),a("div",{staticClass:"orange",on:{click:function(t){return e.toPage("RedAmount")}}},[e._v("我的额度")])])]),e._v(" "),a("div",{staticClass:"list-box"},[a("div",{staticClass:"title"},[a("span",[e._v("今日领取记录")]),e._v(" "),a("span",{staticClass:"gray-text"},[e._v("有"+e._s(e.redData.amount.totle)+"人已领取")])]),e._v(" "),a("ul",[a("van-swipe",{ref:"swipe",attrs:{vertical:"",height:"65",loop:!0,autoplay:4e3,"initial-swipe":0,"show-indicators":!1,touchable:!1,width:3==e.fun.getPhoneEnv()?375:e.clientWidths},on:{change:e.swipeToTop}},e._l(e.redData.receive_log.list,function(t,n){return a("van-swipe-item",{key:n},[a("li",[t.belongs_to_member?a("div",{staticClass:"left"},[a("img",{attrs:{src:t.belongs_to_member.avatar_image,alt:""}})]):e._e(),e._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"right-box"},[t.belongs_to_member?a("span",{staticClass:"name"},[e._v(e._s(t.belongs_to_member.username))]):e._e(),e._v(" "),a("span",{staticClass:"price"},[e._v(e._s(t.receive_amount)+"元")])]),e._v(" "),a("div",{staticClass:"right-box"},[a("span",{staticClass:"time",staticStyle:{"text-align":"left"}},[e._v(e._s(t.created_at))]),e._v(" "),a("span",{staticClass:"time"},[e._v("已领取")])])])])])}),1)],1)]),e._v(" "),a("div",{staticClass:"text-box"},[a("div",{staticClass:"title"},[e._v("活动介绍")]),e._v(" "),a("div",{staticStyle:{margin:"0.5rem 1rem","text-align":"left","font-size":"12px",color:"#333333"}},[e._v("\n          "+e._s(e.redData.content)+"\n        ")])]),e._v(" "),a("div",{staticClass:"good-box"},[a("div",{staticClass:"title"},[e._v("红包商品")]),e._v(" "),a("ul",{staticClass:"goods"},e._l(e.redData.goods_list,function(t){return a("li",{key:t.id,on:{click:function(n){return e.toGood(t.id)}}},[a("div",{staticClass:"good-img"},[a("img",{attrs:{src:t.thumb,alt:""}})]),e._v(" "),a("div",{staticClass:"good-title",staticStyle:{"-webkit-box-orient":"vertical"}},[e._v("\n              "+e._s(t.title)+"\n            ")]),e._v(" "),e.fun.isTextEmpty(t.quota_proportion)?e._e():a("span",{staticClass:"amount"},[e._v("红包额度:"+e._s(t.quota_proportion)+"%")]),e._v(" "),a("div",{staticClass:"buy"},[a("span",[e._v("￥"+e._s(t.price))]),e._v(" "),a("span",{staticClass:"red-buy"},[e._v("立即抢购")])])])}),0)])])]),e._v(" "),a("van-popup",{attrs:{overlay:!0},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("div",{staticClass:"red-popup"},[a("img",{attrs:{src:n("UHMf"),alt:""}}),e._v(" "),a("div",{staticClass:"pop-text"},[a("span",{staticClass:"money"},[e._v("￥"+e._s(e.red_packet))]),e._v(" "),a("span",{staticClass:"tip"},[e._v("恭喜您成功领取到红包！")]),e._v(" "),a("span",{staticClass:"sure-btn",on:{click:function(t){e.show=!1}}},[e._v("确定")])])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"margin-top":"0.6rem"}},[t("span",{staticStyle:{"font-size":"14px"}},[this._v("个人额度")])])}]};var r=n("VU/8")(o,d,!1,function(e){n("mIHA")},"data-v-63cd95f1",null);t.default=r.exports},UHMf:function(e,t,n){e.exports=n.p+"static/app/img/bg_redenvelope@2x.7b5d3fc.png"},"f/hE":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'\n#daily_red[data-v-63cd95f1] {\n  background: #f70034;\n  margin-bottom: 2rem;\n}\n#daily_red .headImg[data-v-63cd95f1] {\n    width: 100%;\n}\n#daily_red .headImg .header[data-v-63cd95f1] {\n      color: white;\n      font-weight: bold;\n      line-height: 22px;\n      font-size: 18px;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      text-align: center;\n      padding: 0.5rem 0;\n}\n#daily_red .headImg .icon-back[data-v-63cd95f1] {\n      position: absolute;\n      left: 1.5rem;\n      font-weight: bolder;\n}\n#daily_red .headImg img[data-v-63cd95f1] {\n      width: 100%;\n}\n#daily_red .ImgBg[data-v-63cd95f1] {\n    padding: 1rem 0;\n    margin-top: -1rem;\n    /*background: url("/addons/yun_shop/static/img/bg_2@2x.png") no-repeat;*/\n}\n#daily_red .red-box[data-v-63cd95f1],\n  #daily_red .list-box[data-v-63cd95f1],\n  #daily_red .text-box[data-v-63cd95f1],\n  #daily_red .good-box[data-v-63cd95f1] {\n    margin: 0 auto 1rem auto;\n    padding-bottom: 1rem;\n    width: 22rem;\n    background-color: #ffffff;\n    border-radius: 5px;\n}\n#daily_red .title[data-v-63cd95f1] {\n    font-size: 14px;\n    color: #fd2352;\n    font-weight: bold;\n    padding: 0.8rem;\n    margin: 0 1rem;\n    border-bottom: 0.01rem solid #dcdbdb;\n}\n#daily_red .list-box .title[data-v-63cd95f1] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n#daily_red .list-box .gray-text[data-v-63cd95f1] {\n    font-size: 12px;\n    color: #6e6e6e;\n}\n#daily_red .list-box ul[data-v-63cd95f1] {\n    margin: 0.5rem 1rem;\n    max-height: 16rem;\n}\n#daily_red .list-box ul li[data-v-63cd95f1] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#daily_red .list-box ul .left[data-v-63cd95f1] {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 2.5rem;\n              flex: 0 0 2.5rem;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n#daily_red .list-box ul .left img[data-v-63cd95f1] {\n        width: 2rem;\n        height: 2rem;\n        border-radius: 50%;\n}\n#daily_red .list-box ul .right[data-v-63cd95f1] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-left: 1rem;\n}\n#daily_red .list-box ul .right-box[data-v-63cd95f1] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#daily_red .list-box ul .right-box .name[data-v-63cd95f1] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        text-align: left;\n}\n#daily_red .list-box ul .right-box .price[data-v-63cd95f1] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        text-align: right;\n        color: #ff2a50;\n}\n#daily_red .list-box ul .right-box .time[data-v-63cd95f1] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        text-align: right;\n        color: #999999;\n}\n#daily_red .red-Vdi[data-v-63cd95f1] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n#daily_red .red-box[data-v-63cd95f1] {\n    position: relative;\n}\n#daily_red .red-box .head[data-v-63cd95f1] {\n      padding: 0.5rem;\n}\n#daily_red .red-box .red-color[data-v-63cd95f1] {\n      font-size: 46px;\n      color: #fe3055;\n      margin: 1rem;\n}\n#daily_red .red-box .red-color span[data-v-63cd95f1] {\n        color: #fe3055;\n}\n#daily_red .red-box .get-red[data-v-63cd95f1],\n    #daily_red .red-box .get-gray[data-v-63cd95f1] {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      color: #ffffff;\n      text-align: center;\n      margin: 0.5rem auto 0 auto;\n}\n#daily_red .red-box .get-red em[data-v-63cd95f1],\n      #daily_red .red-box .get-gray em[data-v-63cd95f1] {\n        line-height: 100px;\n        font-size: 18px;\n}\n#daily_red .red-box .get-red[data-v-63cd95f1] {\n      background-blend-mode: normal, normal;\n}\n#daily_red .red-box .get-gray[data-v-63cd95f1] {\n      background-color: #e1e1e1;\n}\n#daily_red .red-box .red-number[data-v-63cd95f1] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#daily_red .red-box .red-number div[data-v-63cd95f1] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#daily_red .red-box .process[data-v-63cd95f1] {\n      width: 20rem;\n      height: 6px;\n      background-color: #dfdfdf;\n      border-radius: 3px;\n      margin: 1rem auto;\n      margin-top: 0.5rem;\n      position: relative;\n}\n#daily_red .red-box .process .bar[data-v-63cd95f1] {\n        position: absolute;\n        left: 0;\n        height: 6px;\n        border-radius: 3px;\n        background-color: #fd2352;\n}\n#daily_red .red-box .much[data-v-63cd95f1] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 20rem;\n      margin: 0 auto;\n}\n#daily_red .red-box .much .num[data-v-63cd95f1] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n}\n#daily_red .red-box span[data-v-63cd95f1] {\n      font-size: 12px;\n      color: #666666;\n}\n#daily_red .get-ab[data-v-63cd95f1] {\n    position: absolute;\n    top: 1rem;\n    right: 0;\n    font-size: 12px;\n    color: #ffffff;\n}\n#daily_red .gray[data-v-63cd95f1] {\n    padding: 0.1rem 0.5rem;\n    background-color: #d8d8d8;\n    border-radius: 8px 0px 0px 8px;\n    margin-bottom: 0.5rem;\n}\n#daily_red .orange[data-v-63cd95f1] {\n    padding: 0.1rem 0.5rem;\n    background-color: #ff9f59;\n    border-radius: 8px 0px 0px 8px;\n}\n#daily_red .good-box .goods[data-v-63cd95f1] {\n    margin: 0.5rem 1rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n#daily_red .good-box .goods li[data-v-63cd95f1] {\n      width: 48%;\n      text-align: left;\n      font-size: 12px;\n      margin-bottom: 0.5rem;\n}\n#daily_red .good-box .goods li[data-v-63cd95f1]:nth-child(odd) {\n      margin-right: 0.7rem;\n}\n#daily_red .good-box .goods .good-img[data-v-63cd95f1] {\n      width: 9.6rem;\n      height: 9.6rem;\n}\n#daily_red .good-box .goods .good-img img[data-v-63cd95f1] {\n        width: 100%;\n        height: 100%;\n}\n#daily_red .good-box .goods .good-title[data-v-63cd95f1] {\n      word-break: break-all;\n      color: #333333;\n      min-height: 2rem;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n      text-overflow: ellipsis;\n}\n#daily_red .good-box .goods .amount[data-v-63cd95f1] {\n      color: #fd2352;\n      border: 1px solid #fd2352;\n      line-height: 2rem;\n      padding: 0.2rem;\n      border-radius: 3px;\n}\n#daily_red .good-box .goods .buy[data-v-63cd95f1] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 14px;\n}\n#daily_red .good-box .goods .buy span[data-v-63cd95f1]:first-child {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n}\n#daily_red .good-box .goods .red-buy[data-v-63cd95f1] {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 4rem;\n              flex: 0 0 4rem;\n      margin-left: 0.4rem;\n      font-size: 12px;\n      background-color: #fd2352;\n      border-radius: 7px;\n      color: #ffffff;\n      padding: 0.1rem 0.3rem;\n}\n#daily_red .red-popup[data-v-63cd95f1] {\n    width: 17rem;\n    margin: 0 auto;\n    position: relative;\n}\n#daily_red .red-popup .pop-text[data-v-63cd95f1] {\n      color: #ffffff;\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      bottom: 3rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 90%;\n}\n#daily_red .red-popup .money[data-v-63cd95f1] {\n      font-size: 44px;\n}\n#daily_red .red-popup .tip[data-v-63cd95f1] {\n      font-size: 12px;\n      margin: 1rem;\n}\n#daily_red .red-popup .sure-btn[data-v-63cd95f1] {\n      background-color: #ffc900;\n      border-radius: 20px;\n      padding: 0.5rem;\n      font-size: 20px;\n}\n#daily_red .red-popup img[data-v-63cd95f1] {\n      width: 100%;\n}\n#daily_red .van-popup[data-v-63cd95f1] {\n    background-color: transparent;\n}\n',""])},mIHA:function(e,t,n){var a=n("f/hE");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("32b50112",a,!0,{})}});