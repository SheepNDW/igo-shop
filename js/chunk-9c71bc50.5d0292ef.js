(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c71bc50"],{"157f":function(e,t,c){},"15f4":function(e,t,c){"use strict";c.r(t);c("4de4"),c("d3b7");var n=c("7a23"),o=function(e){return Object(n["pushScopeId"])("data-v-4451ec58"),e=e(),Object(n["popScopeId"])(),e},r={class:"flex-fill overflow-auto p-3",style:{position:"relative"}},a={class:"card p-2 shadow-sm",style:{"min-height":"200px"}},l={class:"card-body"},d={class:"d-flex justify-content-between mb-3"},i=o((function(){return Object(n["createElementVNode"])("option",{value:"",selected:""},"全部",-1)})),u=["value"],s=o((function(){return Object(n["createElementVNode"])("i",{class:"material-icons-outlined me-2"},"add_circle_outline",-1)})),b=Object(n["createTextVNode"])(" 新增產品 "),m=[s,b],p=Object(n["createStaticVNode"])('<ul class="row g-0 list-unstyled rounded-0 p-2 products-list text-nowrap border-bottom border-2" data-v-4451ec58><li class="col-2 d-none d-md-block" data-v-4451ec58>分類</li><li class="col-3 text-start" data-v-4451ec58>商品名稱</li><li class="col-2" data-v-4451ec58>原價</li><li class="col-2" data-v-4451ec58>售價</li><li class="col-1" data-v-4451ec58>狀態</li><li class="col-3 col-md-2" data-v-4451ec58>操作</li></ul>',1),f={key:0,class:"list-group list-group-flush shadow-sm mb-4"},O={class:"col-2 d-none d-md-block"},j={class:"badge bg-secondary fw-light category-badge"},v={class:"col-3 text-start"},g={class:"col-2"},E={class:"col-2"},V={key:0,class:"col-1 text-success"},N=o((function(){return Object(n["createElementVNode"])("i",{class:"material-icons-outlined"},"check_circle",-1)})),h=[N],y={key:1,class:"col-1 text-danger"},k=o((function(){return Object(n["createElementVNode"])("i",{class:"material-icons-outlined"},"cancel",-1)})),x=[k],w={class:"col-3 col-md-2 d-flex justify-content-center"},B=["onClick"],U=["onClick"];function C(e,t,c,o,s,b){var N,k=Object(n["resolveComponent"])("AdminHeader"),C=Object(n["resolveComponent"])("Loading"),M=Object(n["resolveComponent"])("GoPagination"),P=Object(n["resolveComponent"])("ProductModal");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(k),Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(C,{active:o.isLoading,"is-full-page":!1},null,8,["active"]),Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",d,[Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{class:"form-select filter-form","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.filter=e}),onChange:t[1]||(t[1]=function(){return o.getFilterProducts&&o.getFilterProducts.apply(o,arguments)})},[i,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.category,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:e,value:e},Object(n["toDisplayString"])(e),9,u)})),128))],544),[[n["vModelSelect"],o.filter]]),Object(n["createElementVNode"])("button",{class:"btn btn-primary ms-auto d-flex",type:"button",onClick:t[2]||(t[2]=function(e){return o.openModal("new")})},m)]),p,o.products?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",f,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.products,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:"list-group-item p-2",key:t.id},[Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("span",j,Object(n["toDisplayString"])(t.category),1)]),Object(n["createElementVNode"])("div",v,Object(n["toDisplayString"])(t.title),1),Object(n["createElementVNode"])("div",g,Object(n["toDisplayString"])(e.$currency(t.origin_price)),1),Object(n["createElementVNode"])("div",E,Object(n["toDisplayString"])(e.$currency(t.price)),1),t.is_enabled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,h)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",y,x)),Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("button",{class:"btn btn-sm btn-outline-primary fs-7",type:"button",onClick:function(e){return o.openModal("edit",t)}}," 編輯 ",8,B),Object(n["createElementVNode"])("button",{class:"btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3",type:"button",onClick:function(e){return o.removeProduct(t.id)}}," 刪除 ",8,U)])])})),128))])):Object(n["createCommentVNode"])("",!0),(null===(N=o.pagination)||void 0===N?void 0:N.total_pages)>1?(Object(n["openBlock"])(),Object(n["createBlock"])(M,{key:1,pages:o.pagination,onChangePage:o.changePager},null,8,["pages","onChangePage"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(P,{ref:"productModalCom","temp-product":o.tempProduct,"is-edit":o.isEdit,onUpdateList:o.getProducts},null,8,["temp-product","is-edit","onUpdateList"])])])])],64)}var M=c("1da1"),P=(c("96cf"),c("c4c8")),D=(c("a4d3"),c("e01a"),function(e){return Object(n["pushScopeId"])("data-v-1ed60982"),e=e(),Object(n["popScopeId"])(),e}),_={class:"modal-dialog modal-dialog-centered modal-lg"},S={class:"modal-content border-0"},F={class:"modal-header bg-dark p-3 text-light"},T={key:0},I={key:1},A=D((function(){return Object(n["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-white me-1","data-bs-dismiss":"modal"},null,-1)})),L={class:"modal-body"},R=D((function(){return Object(n["createElementVNode"])("ul",{class:"nav nav-tabs",id:"productTab",role:"tablist"},[Object(n["createElementVNode"])("li",{class:"nav-item",role:"presentation"},[Object(n["createElementVNode"])("button",{class:"nav-link active",id:"info-tab","data-bs-toggle":"tab","data-bs-target":"#info",type:"button",role:"tab"}," 產品資訊 ")]),Object(n["createElementVNode"])("li",{class:"nav-item",role:"presentation"},[Object(n["createElementVNode"])("button",{class:"nav-link",id:"content-tab","data-bs-toggle":"tab","data-bs-target":"#content",type:"button",role:"tab"}," 產品內容 ")]),Object(n["createElementVNode"])("li",{class:"nav-item",role:"presentation"},[Object(n["createElementVNode"])("button",{class:"nav-link",id:"picture-tab","data-bs-toggle":"tab","data-bs-target":"#picture",type:"button",role:"tab"}," 產品圖片 ")])],-1)})),J={class:"tab-content",id:"tabContent"},q={class:"tab-pane fade show active",id:"info",role:"tabpanel"},$={class:"row g-2"},H={class:"col-8"},G=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-title"},[Object(n["createTextVNode"])(" 商品名稱"),Object(n["createElementVNode"])("small",{class:"text-danger ms-1"},"*")],-1)})),z={class:"col-4"},K=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-category"},[Object(n["createTextVNode"])(" 商品類別"),Object(n["createElementVNode"])("small",{class:"text-danger ms-1"},"*")],-1)})),Q=D((function(){return Object(n["createElementVNode"])("option",{value:"",selected:"",disabled:""},"選擇類別",-1)})),W=["value"],X={class:"col-4 mt-2"},Y=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-origin-price"},[Object(n["createTextVNode"])(" 原價"),Object(n["createElementVNode"])("small",{class:"text-danger ms-1"},"*")],-1)})),Z={class:"col-4 mt-2"},ee=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-price"},[Object(n["createTextVNode"])(" 售價"),Object(n["createElementVNode"])("small",{class:"text-danger ms-1"},"*")],-1)})),te={class:"col-4 mt-2"},ce=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-unit"},[Object(n["createTextVNode"])(" 單位"),Object(n["createElementVNode"])("small",{class:"text-danger ms-1"},"*")],-1)})),ne=D((function(){return Object(n["createElementVNode"])("hr",{class:"mt-4"},null,-1)})),oe={class:"col-4 d-flex align-items-center"},re=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label m-0",for:"product-active"},"是否上架",-1)})),ae={class:"form-check ms-2"},le={class:"col-4 d-flex align-items-center"},de=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label m-0",for:"product-hot"},"人氣推薦",-1)})),ie={class:"form-check ms-2"},ue={class:"tab-pane fade show",id:"content",role:"tabpanel"},se={class:"row g-0"},be={class:"col-12"},me=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-desc"},"產品描述",-1)})),pe={class:"col-12 mt-2"},fe=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-content"},"產品內容",-1)})),Oe={class:"tab-pane fade show",id:"picture",role:"tabpanel"},je={class:"row overflow-auto",style:{"max-height":"600px"}},ve={class:"col-12 mt-2"},ge=D((function(){return Object(n["createElementVNode"])("h3",{class:"mb-3"},[Object(n["createTextVNode"])(" 新增主圖"),Object(n["createElementVNode"])("small",{class:"text-danger ms-1"},"*")],-1)})),Ee={class:"mb-1"},Ve={class:"mb-3"},Ne={class:"figure-fluid bg-light text-center"},he=["src"],ye={class:"col-12 mt-2"},ke=D((function(){return Object(n["createElementVNode"])("h3",{class:"mb-3"},"其他圖片",-1)})),xe={key:0},we={class:"col-12 d-flex"},Be=["onUpdate:modelValue"],Ue=["src"],Ce={key:0},Me=D((function(){return Object(n["createElementVNode"])("i",{class:"material-icons"},"add_photo_alternate",-1)})),Pe=[Me],De={key:1},_e=D((function(){return Object(n["createElementVNode"])("i",{class:"material-icons"},"delete_outline",-1)})),Se=[_e],Fe={key:1},Te=D((function(){return Object(n["createElementVNode"])("i",{class:"material-icons"},"add_photo_alternate",-1)})),Ie=[Te],Ae={class:"col-12 mt-3"},Le=D((function(){return Object(n["createElementVNode"])("label",{class:"form-label",for:"product-upload-file"},"上傳圖片",-1)})),Re={class:"input-group"},Je=D((function(){return Object(n["createElementVNode"])("div",{class:"modal-footer"},[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),Object(n["createElementVNode"])("button",{type:"submit",class:"btn btn-primary"},"確定")],-1)}));function qe(e,t,c,o,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("form",{ref:"productModal",class:"modal fade",id:"productModal","data-bs-backdrop":"static","data-bs-keyboard":"false",onSubmit:t[15]||(t[15]=Object(n["withModifiers"])((function(){return o.updateProduct&&o.updateProduct.apply(o,arguments)}),["prevent"]))},[Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("div",S,[Object(n["createElementVNode"])("div",F,[c.isEdit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",T,"編輯產品")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",I,"新增產品")),A]),Object(n["createElementVNode"])("div",L,[R,Object(n["createElementVNode"])("div",J,[Object(n["createElementVNode"])("div",q,[Object(n["createElementVNode"])("div",$,[Object(n["createElementVNode"])("div",H,[G,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",id:"product-title",class:"form-control",placeholder:"輸入商品名稱",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.product.title=e})},null,512),[[n["vModelText"],o.product.title]])]),Object(n["createElementVNode"])("div",z,[K,Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{id:"product-category",class:"form-control form-select",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.product.category=e})},[Q,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.category,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:e,value:e},Object(n["toDisplayString"])(e),9,W)})),128))],512),[[n["vModelSelect"],o.product.category]])]),Object(n["createElementVNode"])("div",X,[Y,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",min:"0",id:"product-origin-price",class:"form-control",placeholder:"輸入原價",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.product.origin_price=e})},null,512),[[n["vModelText"],o.product.origin_price]])]),Object(n["createElementVNode"])("div",Z,[ee,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",min:"0",id:"product-price",class:"form-control",placeholder:"輸入售價",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.product.price=e})},null,512),[[n["vModelText"],o.product.price]])]),Object(n["createElementVNode"])("div",te,[ce,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"product-unit",class:"form-control",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.product.unit=e})},null,512),[[n["vModelText"],o.product.unit]])]),ne,Object(n["createElementVNode"])("div",oe,[re,Object(n["createElementVNode"])("div",ae,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"product-active",role:"button","true-value":1,"false-value":0,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.product.is_enabled=e})},null,512),[[n["vModelCheckbox"],o.product.is_enabled,void 0,{number:!0}]])])]),Object(n["createElementVNode"])("div",le,[de,Object(n["createElementVNode"])("div",ie,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"product-hot",role:"button","true-value":1,"false-value":0,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.product.is_hot=e})},null,512),[[n["vModelCheckbox"],o.product.is_hot,void 0,{number:!0}]])])])])]),Object(n["createElementVNode"])("div",ue,[Object(n["createElementVNode"])("div",se,[Object(n["createElementVNode"])("div",be,[me,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{class:"form-control",id:"product-desc",style:{"min-height":"120px"},placeholder:"輸入產品內容",row:"5","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.product.description=e})},null,512),[[n["vModelText"],o.product.description]])]),Object(n["createElementVNode"])("div",pe,[fe,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{id:"product-content",class:"form-control",style:{"min-height":"120px"},placeholder:"輸入產品內容",row:"5","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.product.content=e})},null,512),[[n["vModelText"],o.product.content]])])])]),Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("div",je,[Object(n["createElementVNode"])("div",ve,[ge,Object(n["createElementVNode"])("div",Ee,[Object(n["createElementVNode"])("div",Ve,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[9]||(t[9]=function(e){return o.product.imageUrl=e})},null,512),[[n["vModelText"],o.product.imageUrl]])]),Object(n["createElementVNode"])("figure",Ne,[Object(n["createElementVNode"])("img",{src:o.product.imageUrl,class:"figure-img img-fluid rounded picture"},null,8,he)])])]),Object(n["createElementVNode"])("div",ye,[ke,Array.isArray(o.product.imagesUrl)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",xe,[Object(n["createElementVNode"])("div",we,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.product.imagesUrl,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"img-box",key:t},[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(e){return o.product.imagesUrl[t]=e}},null,8,Be),[[n["vModelText"],o.product.imagesUrl[t]]]),Object(n["createElementVNode"])("img",{class:"img-fluid img-thumbnail",src:e,alt:""},null,8,Ue)])})),128)),!o.product.imagesUrl.length||o.product.imagesUrl[o.product.imagesUrl.length-1]?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ce,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-secondary btn-sm d-flex align-items-center",onClick:t[10]||(t[10]=function(e){return o.product.imagesUrl.push("")})},Pe)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",De,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm d-flex align-items-center",onClick:t[11]||(t[11]=function(e){return o.product.imagesUrl.pop()})},Se)]))])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Fe,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-secondary btn-sm d-flex align-items-center",onClick:t[12]||(t[12]=function(){return o.addImg&&o.addImg.apply(o,arguments)})},Ie)]))]),Object(n["createElementVNode"])("div",Ae,[Le,Object(n["createElementVNode"])("div",Re,[Object(n["createElementVNode"])("input",{type:"file",name:"file-to-upload",class:"form-control",id:"product-upload-file",ref:"uploadInputRef",onChange:t[13]||(t[13]=function(){return o.getUploadFile&&o.getUploadFile.apply(o,arguments)})},null,544),Object(n["createElementVNode"])("button",{class:"btn btn-outline-secondary",onClick:t[14]||(t[14]=Object(n["withModifiers"])((function(){return o.uploadImage&&o.uploadImage.apply(o,arguments)}),["prevent"]))}," 上傳圖片 ")])])])])])]),Je])])],544)}c("e9c4");var $e=c("dd5d"),He=c("2f59"),Ge=c("806c"),ze={name:"ProductModal",props:{tempProduct:{type:Object,default:function(){return{imagesUrl:[]}}},isEdit:{type:Boolean,default:!1}},emits:["update-list"],setup:function(e,t){var c=t.emit,o=Object(n["ref"])(null),r=Object(Ge["b"])(o),a=r.openModal,l=r.closeModal,d=Object(n["ref"])(e.tempProduct);Object(n["watch"])((function(){return e.tempProduct}),(function(){d.value=JSON.parse(JSON.stringify(e.tempProduct))}),{immediate:!0});var i=function(){d.value.imagesUrl=[],d.value.imagesUrl.push("")},u=function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isEdit){t.next=5;break}return t.next=3,Object(P["b"])(d.value.id,d.value);case 3:n=t.sent,Object(He["a"])({type:"success",text:n.message});case 5:if(e.isEdit){t.next=10;break}return t.next=8,Object(P["f"])(d.value);case 8:o=t.sent,Object(He["a"])({type:"success",text:o.message});case 10:l(),c("update-list");case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=Object(Ge["e"])(),b=s.uploadInputRef,m=s.file,p=s.getUploadFile,f=s.upload,O=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,t&&(d.value.imagesUrl||(d.value.imagesUrl=[]),d.value.imagesUrl.push(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{category:$e["a"],product:d,productModal:o,closeModal:l,openModal:a,addImg:i,updateProduct:u,uploadInputRef:b,file:m,getUploadFile:p,uploadImage:O}}},Ke=(c("e1d5"),c("6b0d")),Qe=c.n(Ke);const We=Qe()(ze,[["render",qe],["__scopeId","data-v-1ed60982"]]);var Xe=We,Ye=c("5407"),Ze=c("5d51"),et={name:"AdminProducts",components:{AdminHeader:Ye["a"],ProductModal:Xe},setup:function(){var e=Object(n["ref"])(!0),t=Object(n["ref"])(""),c=Object(n["ref"])(null),o=Object(n["ref"])(null),r=function(){var n=Object(M["a"])(regeneratorRuntime.mark((function n(r){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.next=3,Object(P["c"])(r,t.value);case 3:a=n.sent,c.value=a.products,o.value=a.pagination,e.value=!1;case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();r();var a=function(e){return r(e)},l=function(){return r()},d=Object(n["ref"])({imagesUrl:[]}),i=Object(n["ref"])(null),u=Object(n["ref"])(!1),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{imagesUrl:[],is_enabled:1};d.value=t,"new"===e&&(u.value=!1),"edit"===e&&(u.value=!0),i.value.openModal()},b=function(e){Object(Ze["a"])({text:"你確認要刪除此產品嗎"}).then((function(){Object(P["a"])(e).then((function(e){Object(He["a"])({type:"success",text:e.message}),r()}))})).catch((function(e){}))};return{category:$e["a"],filter:t,getFilterProducts:l,isLoading:e,products:c,pagination:o,changePager:a,tempProduct:d,isEdit:u,openModal:s,productModalCom:i,getProducts:r,removeProduct:b}}};c("17a0");const tt=Qe()(et,[["render",C],["__scopeId","data-v-4451ec58"]]);t["default"]=tt},"17a0":function(e,t,c){"use strict";c("157f")},5407:function(e,t,c){"use strict";var n=c("7a23"),o={class:"p-3 bg-white d-flex justify-content-between align-items-center"},r={class:"breadcrumb m-0"},a=Object(n["createElementVNode"])("li",{class:"breadcrumb-item"},"管理系統",-1),l={class:"breadcrumb-item active"},d=Object(n["createElementVNode"])("i",{class:"material-icons-outlined me-1"},"logout",-1),i=Object(n["createTextVNode"])("登出 "),u=[d,i];function s(e,t,c,d,i,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",o,[Object(n["createElementVNode"])("ol",r,[a,Object(n["createElementVNode"])("li",l,Object(n["toDisplayString"])(c.subTitle),1)]),Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-secondary d-flex align-items-center",onClick:t[0]||(t[0]=function(){return d.logout&&d.logout.apply(d,arguments)})},u)])}var b=c("6c02"),m={name:"AdminHeader",props:{subTitle:{type:String,default:"產品管理"}},setup:function(){var e=Object(b["d"])(),t=function(){document.cookie="hexToken=;expires=;",e.push("/")};return{logout:t}}},p=c("6b0d"),f=c.n(p);const O=f()(m,[["render",s]]);t["a"]=O},"5d51":function(e,t,c){"use strict";c("d3b7"),c("d9e2");var n=c("7a23"),o=c("7093"),r=document.createElement("div");r.setAttribute("class","go-confirm-container"),document.body.appendChild(r),t["a"]=function(e){var t=e.title,c=e.text;return new Promise((function(e,a){var l=function(){Object(n["render"])(null,r),a(new Error("點擊取消"))},d=function(){Object(n["render"])(null,r),e()},i=Object(n["createVNode"])(o["default"],{title:t,text:c,cancelCallback:l,submitCallback:d});Object(n["render"])(i,r)}))}},"63dd":function(e,t,c){},c4c8:function(e,t,c){"use strict";c.d(t,"d",(function(){return r})),c.d(t,"e",(function(){return a})),c.d(t,"c",(function(){return l})),c.d(t,"f",(function(){return d})),c.d(t,"b",(function(){return i})),c.d(t,"a",(function(){return u}));c("99af");var n=c("b775"),o="".concat("sheep-api"),r=function(e){return Object(n["a"])("/api/".concat(o,"/product/").concat(e),"get")},a=function(){return Object(n["a"])("/api/".concat(o,"/products/all"),"get")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(n["a"])("/api/".concat(o,"/admin/products?page=").concat(e),"get",{category:t})},d=function(e){return Object(n["a"])("/api/".concat(o,"/admin/product"),"post",{data:e})},i=function(e,t){return Object(n["a"])("/api/".concat(o,"/admin/product/").concat(e),"put",{data:t})},u=function(e){return Object(n["a"])("/api/".concat(o,"/admin/product/").concat(e),"delete")}},dd5d:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=["圍棋子","圍棋罐","圍棋盤 / 棋墩","其他"]},e1d5:function(e,t,c){"use strict";c("63dd")},e9c4:function(e,t,c){var n=c("23e7"),o=c("da84"),r=c("d066"),a=c("2ba4"),l=c("e330"),d=c("d039"),i=o.Array,u=r("JSON","stringify"),s=l(/./.exec),b=l("".charAt),m=l("".charCodeAt),p=l("".replace),f=l(1..toString),O=/[\uD800-\uDFFF]/g,j=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,g=function(e,t,c){var n=b(c,t-1),o=b(c,t+1);return s(j,e)&&!s(v,o)||s(v,e)&&!s(j,n)?"\\u"+f(m(e,0),16):e},E=d((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:E},{stringify:function(e,t,c){for(var n=0,o=arguments.length,r=i(o);n<o;n++)r[n]=arguments[n];var l=a(u,null,r);return"string"==typeof l?p(l,O,g):l}})}}]);
//# sourceMappingURL=chunk-9c71bc50.5d0292ef.js.map