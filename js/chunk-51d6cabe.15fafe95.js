(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d6cabe"],{"3c3d":function(e,t,n){},5407:function(e,t,n){"use strict";var c=n("7a23"),r={class:"p-3 bg-white d-flex justify-content-between align-items-center"},a={class:"breadcrumb m-0"},o=Object(c["createElementVNode"])("li",{class:"breadcrumb-item"},"管理系統",-1),i={class:"breadcrumb-item active"},s=Object(c["createElementVNode"])("i",{class:"material-icons-outlined me-1"},"logout",-1),l=Object(c["createTextVNode"])("登出 "),d=[s,l];function u(e,t,n,s,l,u){return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",r,[Object(c["createElementVNode"])("ol",a,[o,Object(c["createElementVNode"])("li",i,Object(c["toDisplayString"])(n.subTitle),1)]),Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-secondary d-flex align-items-center",onClick:t[0]||(t[0]=function(){return s.logout&&s.logout.apply(s,arguments)})},d)])}var b=n("6c02"),f={name:"AdminHeader",props:{subTitle:{type:String,default:"產品管理"}},setup:function(){var e=Object(b["d"])(),t=function(){document.cookie="hexToken=;expires=;",e.push("/")};return{logout:t}}},m=n("6b0d"),p=n.n(m);const O=p()(f,[["render",u]]);t["a"]=O},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var c=n("ade3");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"5a0c":function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e=1e3,t=6e4,n=36e5,c="millisecond",r="second",a="minute",o="hour",i="day",s="week",l="month",d="quarter",u="year",b="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},j=function(e,t,n){var c=String(e);return!c||c.length>=t?e:""+Array(t+1-c.length).join(n)+e},h={s:j,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),c=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+j(c,2,"0")+":"+j(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var c=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(c,l),a=n-r<0,o=t.clone().add(c+(a?-1:1),l);return+(-(c+(n-r)/(a?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:s,d:i,D:b,h:o,m:a,s:r,ms:c,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",g={};g[v]=O;var y=function(e){return e instanceof k},E=function(e,t,n){var c;if(!e)return v;if("string"==typeof e)g[e]&&(c=e),t&&(g[e]=t,c=e);else{var r=e.name;g[r]=e,c=r}return!n&&c&&(v=c),c||!n&&v},V=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},N=h;N.l=E,N.i=y,N.w=function(e,t){return V(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function O(e){this.$L=E(e.locale,null,!0),this.parse(e)}var j=O.prototype;return j.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(N.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var c=t.match(m);if(c){var r=c[2]-1||0,a=(c[7]||"0").substring(0,3);return n?new Date(Date.UTC(c[1],r,c[3]||1,c[4]||0,c[5]||0,c[6]||0,a)):new Date(c[1],r,c[3]||1,c[4]||0,c[5]||0,c[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},j.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},j.$utils=function(){return N},j.isValid=function(){return!(this.$d.toString()===f)},j.isSame=function(e,t){var n=V(e);return this.startOf(t)<=n&&n<=this.endOf(t)},j.isAfter=function(e,t){return V(e)<this.startOf(t)},j.isBefore=function(e,t){return this.endOf(t)<V(e)},j.$g=function(e,t,n){return N.u(e)?this[t]:this.set(n,e)},j.unix=function(){return Math.floor(this.valueOf()/1e3)},j.valueOf=function(){return this.$d.getTime()},j.startOf=function(e,t){var n=this,c=!!N.u(t)||t,d=N.p(e),f=function(e,t){var r=N.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?r:r.endOf(i)},m=function(e,t){return N.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,O=this.$M,j=this.$D,h="set"+(this.$u?"UTC":"");switch(d){case u:return c?f(1,0):f(31,11);case l:return c?f(1,O):f(0,O+1);case s:var v=this.$locale().weekStart||0,g=(p<v?p+7:p)-v;return f(c?j-g:j+(6-g),O);case i:case b:return m(h+"Hours",0);case o:return m(h+"Minutes",1);case a:return m(h+"Seconds",2);case r:return m(h+"Milliseconds",3);default:return this.clone()}},j.endOf=function(e){return this.startOf(e,!1)},j.$set=function(e,t){var n,s=N.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[i]=d+"Date",n[b]=d+"Date",n[l]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[r]=d+"Seconds",n[c]=d+"Milliseconds",n)[s],m=s===i?this.$D+(t-this.$W):t;if(s===l||s===u){var p=this.clone().set(b,1);p.$d[f](m),p.init(),this.$d=p.set(b,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},j.set=function(e,t){return this.clone().$set(e,t)},j.get=function(e){return this[N.p(e)]()},j.add=function(c,d){var b,f=this;c=Number(c);var m=N.p(d),p=function(e){var t=V(f);return N.w(t.date(t.date()+Math.round(e*c)),f)};if(m===l)return this.set(l,this.$M+c);if(m===u)return this.set(u,this.$y+c);if(m===i)return p(1);if(m===s)return p(7);var O=(b={},b[a]=t,b[o]=n,b[r]=e,b)[m]||1,j=this.$d.getTime()+c*O;return N.w(j,this)},j.subtract=function(e,t){return this.add(-1*e,t)},j.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var c=e||"YYYY-MM-DDTHH:mm:ssZ",r=N.z(this),a=this.$H,o=this.$m,i=this.$M,s=n.weekdays,l=n.months,d=function(e,n,r,a){return e&&(e[n]||e(t,c))||r[n].substr(0,a)},u=function(e){return N.s(a%12||12,e,"0")},b=n.meridiem||function(e,t,n){var c=e<12?"AM":"PM";return n?c.toLowerCase():c},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:N.s(i+1,2,"0"),MMM:d(n.monthsShort,i,l,3),MMMM:d(l,i),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:N.s(a,2,"0"),h:u(1),hh:u(2),a:b(a,o,!0),A:b(a,o,!1),m:String(o),mm:N.s(o,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:r};return c.replace(p,(function(e,t){return t||m[e]||r.replace(":","")}))},j.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},j.diff=function(c,b,f){var m,p=N.p(b),O=V(c),j=(O.utcOffset()-this.utcOffset())*t,h=this-O,v=N.m(this,O);return v=(m={},m[u]=v/12,m[l]=v,m[d]=v/3,m[s]=(h-j)/6048e5,m[i]=(h-j)/864e5,m[o]=h/n,m[a]=h/t,m[r]=h/e,m)[p]||h,f?v:N.a(v)},j.daysInMonth=function(){return this.endOf(l).$D},j.$locale=function(){return g[this.$L]},j.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),c=E(e,t,!0);return c&&(n.$L=c),n},j.clone=function(){return N.w(this.$d,this)},j.toDate=function(){return new Date(this.valueOf())},j.toJSON=function(){return this.isValid()?this.toISOString():null},j.toISOString=function(){return this.$d.toISOString()},j.toString=function(){return this.$d.toUTCString()},O}(),$=k.prototype;return V.prototype=$,[["$ms",c],["$s",r],["$m",a],["$H",o],["$W",i],["$M",l],["$y",u],["$D",b]].forEach((function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),V.extend=function(e,t){return e.$i||(e(t,k,V),e.$i=!0),V},V.locale=E,V.isDayjs=y,V.unix=function(e){return V(1e3*e)},V.en=g[v],V.Ls=g,V.p={},V}))},"5d51":function(e,t,n){"use strict";n("d3b7"),n("d9e2");var c=n("7a23"),r=n("7093"),a=document.createElement("div");a.setAttribute("class","go-confirm-container"),document.body.appendChild(a),t["a"]=function(e){var t=e.title,n=e.text;return new Promise((function(e,o){var i=function(){Object(c["render"])(null,a),o(new Error("點擊取消"))},s=function(){Object(c["render"])(null,a),e()},l=Object(c["createVNode"])(r["default"],{title:t,text:n,cancelCallback:i,submitCallback:s});Object(c["render"])(l,a)}))}},"8ee8":function(e,t,n){},"94f2":function(e,t,n){"use strict";n("8ee8")},a8f7:function(e,t,n){},b64b:function(e,t,n){var c=n("23e7"),r=n("7b0b"),a=n("df75"),o=n("d039"),i=o((function(){a(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(e){return a(r(e))}})},bcde:function(e,t,n){"use strict";n("3c3d")},c7259:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-bf8700ce"),e=e(),Object(c["popScopeId"])(),e},a={class:"flex-fill overflow-auto p-3",style:{position:"relative"}},o={class:"card p-2 shadow-sm",style:{"min-height":"200px"}},i={class:"card-body"},s={class:"d-flex justify-content-end align-items-center mb-3"},l=r((function(){return Object(c["createElementVNode"])("i",{class:"material-icons-outlined me-1"},"delete",-1)})),d=Object(c["createTextVNode"])(" 刪除全部訂單 "),u=[l,d],b=Object(c["createStaticVNode"])('<ul class="row g-0 list-unstyled rounded-0 p-2 order-list text-nowrap border-bottom border-2" data-v-bf8700ce><li class="col-2" data-v-bf8700ce>建立時間</li><li class="col-4" data-v-bf8700ce>購買款項</li><li class="col-2" data-v-bf8700ce>金額</li><li class="col-2" data-v-bf8700ce>狀態</li><li class="col-2" data-v-bf8700ce>操作</li></ul>',1),f={class:"list-group list-group-flush shadow-sm mb-4"},m={class:"col-2"},p={class:"col-4"},O={class:"list-unstyled"},j={class:"col-2"},h={key:0,class:"col-2 text-success"},v=r((function(){return Object(c["createElementVNode"])("span",null,"已付款",-1)})),g=[v],y={key:1,class:"col-2 text-danger"},E=r((function(){return Object(c["createElementVNode"])("span",null,"未付款",-1)})),V=[E],N={class:"col-2 d-flex justify-content-center"},k=["onClick"],$=["onClick"];function M(e,t,n,r,l,d){var v,E=Object(c["resolveComponent"])("AdminHeader"),M=Object(c["resolveComponent"])("Loading"),x=Object(c["resolveComponent"])("GoPagination"),D=Object(c["resolveComponent"])("OrderModal");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(E,{subTitle:"訂單管理"}),Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(M,{active:r.isLoading,"is-full-page":!1},null,8,["active"]),Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("button",{class:"btn btn-danger d-flex",type:"button",onClick:t[0]||(t[0]=function(){return r.removeAllOrders&&r.removeAllOrders.apply(r,arguments)})},u)]),b,Object(c["createElementVNode"])("ul",f,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.orders,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:"list-group-item p-2",key:t.id},[Object(c["createElementVNode"])("div",m,Object(c["toDisplayString"])(r.dayjs.unix(t.create_at).format("YYYY-MM-DD HH:mm:ss")),1),Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("ul",O,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.products,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t},Object(c["toDisplayString"])(e.product.title)+" 數量："+Object(c["toDisplayString"])(e.qty)+" "+Object(c["toDisplayString"])(e.product.unit),1)})),128))])]),Object(c["createElementVNode"])("div",j,"NT$"+Object(c["toDisplayString"])(e.$currency(Math.round(t.total))),1),t.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",h,g)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",y,V)),Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("button",{class:"btn btn-sm btn-outline-primary fs-7",type:"button",onClick:function(e){return r.open(t)}}," 編輯 ",8,k),Object(c["createElementVNode"])("button",{class:"btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3",type:"button",onClick:function(e){return r.removeOrder(t.id)}}," 刪除 ",8,$)])])})),128))]),(null===(v=r.pagination)||void 0===v?void 0:v.total_pages)>1?(Object(c["openBlock"])(),Object(c["createBlock"])(x,{key:0,pages:r.pagination,onChangePage:r.changePager},null,8,["pages","onChangePage"])):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createVNode"])(D,{ref:"orderModalCom",onUpdateList:r.updateOrderList},null,8,["onUpdateList"])],64)}var x=n("1da1"),D=(n("96cf"),n("5407")),w={ref:"orderModal",class:"modal fade",id:"orderModal"},S={class:"modal-dialog modal-lg modal-dialog-centered"},B={key:0,class:"modal-content"},C={class:"modal-header bg-dark p-3 text-light"},T={class:"modal-title",id:"orderModalLabel"},_={class:"modal-body"},I={class:"nav rounded p-2 mb-3 d-flex align-items-center"},P=Object(c["createTextVNode"])(" 訂單狀態： "),U={key:0,class:"text-success"},Y={key:1,class:"text-danger"},H={class:"form-check ms-2"},L={class:"row g-3 d-md-flex"},A={class:"modal-footer"},W=["disabled"];function F(e,t,n,r,a,o){var i,s=Object(c["resolveComponent"])("UserInfo"),l=Object(c["resolveComponent"])("OrderDetail");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,[Object(c["createElementVNode"])("div",S,[null!==(i=r.order)&&void 0!==i&&i.id?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",B,[Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("h5",T," 訂單編號："+Object(c["toDisplayString"])(r.order.id),1),Object(c["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-white",onClick:t[0]||(t[0]=function(){return r.closeModal&&r.closeModal.apply(r,arguments)})})]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("div",null,[P,r.paidStatus?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",U,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",Y,"未付款"))]),Object(c["createElementVNode"])("div",H,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.paidStatus=e}),onChange:t[2]||(t[2]=function(){return r.updatePaid&&r.updatePaid.apply(r,arguments)})},null,544),[[c["vModelCheckbox"],r.paidStatus]])])]),Object(c["createElementVNode"])("div",L,[Object(c["createVNode"])(s,{"is-edit":r.isEdit,onChangeEdit:r.changeEdit},null,8,["is-edit","onChangeEdit"]),Object(c["createVNode"])(l)])]),Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-secondary",onClick:t[3]||(t[3]=function(){return r.closeModal&&r.closeModal.apply(r,arguments)})}," 取消 "),Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary",disabled:r.isEdit,onClick:t[4]||(t[4]=function(){return r.submit&&r.submit.apply(r,arguments)})}," 確認修改 ",8,W)])])):Object(c["createCommentVNode"])("",!0)])],512)}var J=n("806c"),z=(n("b0c0"),{class:"col-md-6"}),R={class:"fs-5 d-flex align-items-center mb-3"},Z=Object(c["createTextVNode"])(" 訂購人資訊 "),q={key:0},G={key:1},Q={class:"list-unstyled"},K={class:"d-flex align-items-center mb-2"},X=Object(c["createElementVNode"])("span",{class:"form-label m-0 col-4"},"建立時間：",-1),ee={class:"d-flex align-items-center mb-1"},te=Object(c["createElementVNode"])("label",{for:"email",class:"form-label m-0 col-4"},"Email：",-1),ne=["disabled"],ce={class:"d-flex align-items-center mb-1"},re=Object(c["createElementVNode"])("label",{for:"name",class:"form-label m-0 col-4"},"收件人姓名：",-1),ae=["disabled"],oe={class:"d-flex align-items-center mb-1"},ie=Object(c["createElementVNode"])("label",{for:"tel",class:"form-label m-0 col-4"},"聯絡電話：",-1),se=["disabled"],le={class:"d-flex align-items-center mb-1"},de=Object(c["createElementVNode"])("label",{for:"address",class:"form-label m-0 col-4"},"收件地址：",-1),ue=["disabled"],be={class:"d-flex align-items-start mb-1"},fe=Object(c["createElementVNode"])("label",{for:"message",class:"form-label m-0 col-4"},"備註",-1),me=["disabled"];function pe(e,t,n,r,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",z,[Object(c["createElementVNode"])("h3",R,[Z,Object(c["createElementVNode"])("button",{type:"button",class:Object(c["normalizeClass"])(["btn btn-sm ms-2",r.isEditInfo?"btn-danger":"btn-primary"]),onClick:t[0]||(t[0]=function(){return r.edit&&r.edit.apply(r,arguments)})},[r.isEditInfo?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",G,"完成")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",q,"修改"))],2)]),Object(c["createElementVNode"])("ul",Q,[Object(c["createElementVNode"])("li",K,[X,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(r.dayjs.unix(r.order.create_at).format("YYYY-MM-DD HH:mm:ss")),1)]),Object(c["createElementVNode"])("li",ee,[te,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"email",id:"email",class:"form-control form-control-sm","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.user.email=e}),disabled:!r.isEditInfo},null,8,ne),[[c["vModelText"],r.user.email]])]),Object(c["createElementVNode"])("li",ce,[re,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",id:"name",class:"form-control form-control-sm","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.user.name=e}),disabled:!r.isEditInfo},null,8,ae),[[c["vModelText"],r.user.name]])]),Object(c["createElementVNode"])("li",oe,[ie,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",id:"tel",class:"form-control form-control-sm","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.user.tel=e}),disabled:!r.isEditInfo},null,8,se),[[c["vModelText"],r.user.tel]])]),Object(c["createElementVNode"])("li",le,[de,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",id:"address",class:"form-control form-control-sm","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.user.address=e}),disabled:!r.isEditInfo},null,8,ue),[[c["vModelText"],r.user.address]])]),Object(c["createElementVNode"])("li",be,[fe,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{id:"message",class:"form-control",row:"3",placeholder:"無","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.message=e}),disabled:!r.isEditInfo},null,8,me),[[c["vModelText"],r.message]])])])])}var Oe=n("5530"),je=n("5a0c"),he=n.n(je),ve={name:"UserInfo",props:{isEdit:{type:Boolean}},setup:function(e,t){var n=t.emit,r=Object(c["ref"])(!1),a=Object(c["ref"])(null),o=Object(c["ref"])(null),i=Object(c["inject"])("tempOrder"),s=Object(c["inject"])("updateTempUser"),l=s.updateTempUser,d=Object(c["inject"])("updateMessage"),u=d.updateMessage;Object(c["watch"])((function(){return i}),(function(){var e;a.value=Object(Oe["a"])({},i.value.user),o.value=null!==(e=i.value.message)&&void 0!==e?e:""}),{immediate:!0,deep:!0});var b=function(){r.value=!r.value,n("change-edit",r.value),r.value||(l(a.value),u(o.value))};return{isEditInfo:r,user:a,message:o,order:i,dayjs:he.a,edit:b}}},ge=n("6b0d"),ye=n.n(ge);const Ee=ye()(ve,[["render",pe]]);var Ve=Ee,Ne=(n("b64b"),function(e){return Object(c["pushScopeId"])("data-v-4d89f49c"),e=e(),Object(c["popScopeId"])(),e}),ke={class:"col-md-6"},$e={class:"d-flex align-items-center mb-3"},Me=Ne((function(){return Object(c["createElementVNode"])("h3",{class:"fs-5 m-0"},"購買產品內容",-1)})),xe={key:0,class:"text-danger ms-auto"},De={class:"d-flex justify-content-between align-items-center border rounded p-2 my-2"},we={class:"m-0"},Se={class:"m-0"},Be=Object(c["createTextVNode"])(" 訂單金額： "),Ce={class:"fs-5 fw-bold text-danger"},Te={class:"list-unstyled mt-3"},_e={class:"col-5 img-box me-2"},Ie=["src"],Pe={class:"col-4 d-flex flex-column justify-content-center"},Ue={class:"m-0"},Ye={class:"col-3 d-flex align-items-center text-nowrap"},He=Object(c["createTextVNode"])(" 數量：");function Le(e,t,n,r,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",ke,[Object(c["createElementVNode"])("div",$e,[Me,r.order.code?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",xe,"優惠碼："+Object(c["toDisplayString"])(r.order.code),1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",De,[Object(c["createElementVNode"])("p",we,"品項："+Object(c["toDisplayString"])(Object.keys(r.order.products).length),1),Object(c["createElementVNode"])("p",Se,[Be,Object(c["createElementVNode"])("span",Ce,Object(c["toDisplayString"])("$"+e.$currency(Math.round(r.order.total))),1)])]),Object(c["createElementVNode"])("ul",Te,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.order.products,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:"row d-flex align-items-center justify-content-around mb-2",key:e},[Object(c["createElementVNode"])("div",_e,[Object(c["createElementVNode"])("img",{src:e.product.imageUrl},null,8,Ie)]),Object(c["createElementVNode"])("div",Pe,[Object(c["createElementVNode"])("p",Ue,Object(c["toDisplayString"])(e.product.title),1),Object(c["createElementVNode"])("small",null,"NT$"+Object(c["toDisplayString"])(e.product.price),1)]),Object(c["createElementVNode"])("div",Ye,[He,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.qty),1)])])})),128))])])}var Ae={name:"OrderDetail",setup:function(){var e=Object(c["inject"])("tempOrder");return{order:e}}};n("bcde");const We=ye()(Ae,[["render",Le],["__scopeId","data-v-4d89f49c"]]);var Fe=We,Je=n("f8b7"),ze=n("2f59"),Re={name:"OrderModal",components:{UserInfo:Ve,OrderDetail:Fe},emits:["update-list"],setup:function(e,t){var n=t.emit,r=Object(c["ref"])(null),a=Object(J["b"])(r),o=a.openModal,i=a.closeModal,s=Object(c["ref"])(!1),l=function(e){s.value=e},d=Object(c["inject"])("tempOrder"),u=Object(c["inject"])("updatePaid"),b=u.updatePaid,f=Object(c["ref"])(!1);Object(c["watch"])((function(){return d}),(function(){f.value=d.value.is_paid}),{deep:!0});var m=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Je["g"])(d.value);case 2:t=e.sent,t.success?(Object(ze["a"])({type:"success",text:t.message}),i(),n("update-list")):Object(ze["a"])({type:"error",text:t.message});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{orderModal:r,openModal:o,closeModal:i,order:d,paidStatus:f,updatePaid:b,submit:m,isEdit:s,changeEdit:l}}};n("e4c5");const Ze=ye()(Re,[["render",F],["__scopeId","data-v-511bdcfe"]]);var qe=Ze,Ge=n("5d51"),Qe={name:"AdminOrders",components:{AdminHeader:D["a"],OrderModal:qe},setup:function(){var e=Object(c["ref"])(!0),t=Object(c["ref"])(null),n=Object(c["ref"])(null),r=Object(c["ref"])(null),a=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(c){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,Object(Je["e"])(c);case 3:a=t.sent,n.value=a.orders,r.value=a.pagination,e.value=!1;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();a();var o=function(){return a()},i=function(e){return a(e)},s=Object(c["ref"])({}),l=function(e){s.value=e,t.value.openModal()},d=function(){s.value.is_paid=!s.value.is_paid},u=function(e){s.value.user=e},b=function(e){s.value.message=e};Object(c["provide"])("tempOrder",Object(c["readonly"])(s)),Object(c["provide"])("updatePaid",{updatePaid:d}),Object(c["provide"])("updateTempUser",{updateTempUser:u}),Object(c["provide"])("updateMessage",{updateMessage:b});var f=function(e){Object(Ge["a"])({title:"刪除訂單",text:"確定要刪除該筆訂單嗎"}).then((function(){Object(Je["c"])(e).then((function(){Object(ze["a"])({type:"success",text:"已永久刪除該筆訂單"}),a()}))})).catch((function(e){}))},m=function(){Object(Ge["a"])({title:"清空訂單列表",text:"確定要刪除所有訂單嗎"}).then((function(){Object(Je["a"])().then((function(){Object(ze["a"])({type:"success",text:"已永久刪除所有訂單"}),a()}))})).catch((function(e){}))};return{orderModalCom:t,isLoading:e,updateOrderList:o,changePager:i,orders:n,dayjs:he.a,pagination:r,open:l,tempOrder:s,removeOrder:f,removeAllOrders:m}}};n("94f2");const Ke=ye()(Qe,[["render",M],["__scopeId","data-v-bf8700ce"]]);t["default"]=Ke},dbb4:function(e,t,n){var c=n("23e7"),r=n("83ab"),a=n("56ef"),o=n("fc6a"),i=n("06cf"),s=n("8418");c({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,c=o(e),r=i.f,l=a(c),d={},u=0;while(l.length>u)n=r(c,t=l[u++]),void 0!==n&&s(d,t,n);return d}})},e439:function(e,t,n){var c=n("23e7"),r=n("d039"),a=n("fc6a"),o=n("06cf").f,i=n("83ab"),s=r((function(){o(1)})),l=!i||s;c({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(a(e),t)}})},e4c5:function(e,t,n){"use strict";n("a8f7")},f8b7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u}));n("99af");var c=n("b775"),r="".concat("sheep-api"),a=function(e){return Object(c["a"])("/api/".concat(r,"/order"),"post",{data:e})},o=function(e){return Object(c["a"])("/api/".concat(r,"/order/").concat(e),"get")},i=function(e){return Object(c["a"])("/api/".concat(r,"/pay/").concat(e),"post")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(c["a"])("/api/".concat(r,"/admin/orders?page=").concat(e),"get")},l=function(e){return Object(c["a"])("/api/".concat(r,"/admin/order/").concat(e.id),"put",{data:e})},d=function(e){return Object(c["a"])("/api/".concat(r,"/admin/order/").concat(e),"delete")},u=function(){return Object(c["a"])("/api/".concat(r,"/admin/orders/all"),"delete")}}}]);
//# sourceMappingURL=chunk-51d6cabe.15fafe95.js.map