(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cc954fa"],{"1b8b":function(e,t,s){},"7cf3":function(e,t,s){"use strict";s.r(t);var c=s("7a23");const n=e=>(Object(c["z"])("data-v-93d77930"),e=e(),Object(c["x"])(),e),a=n(()=>Object(c["i"])("header",null,[Object(c["i"])("h2",null,"Requests Received")],-1)),r={key:0},i={key:1},u={key:2};function o(e,t,s,n,o,d){const l=Object(c["E"])("base-dialog"),b=Object(c["E"])("base-spinner"),h=Object(c["E"])("request-item"),j=Object(c["E"])("base-card");return Object(c["w"])(),Object(c["h"])("div",null,[Object(c["k"])(l,{show:!!o.error,title:"ey",onClose:d.handleError},null,8,["show","onClose"]),Object(c["i"])("section",null,[Object(c["k"])(j,null,{default:Object(c["N"])(()=>[a,o.isLoading?(Object(c["w"])(),Object(c["h"])("div",r,[Object(c["k"])(b)])):d.hasRequests&&!o.isLoading?(Object(c["w"])(),Object(c["h"])("ul",i,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["C"])(d.receivedRequests,e=>(Object(c["w"])(),Object(c["f"])(h,{key:e.id,email:e.userEmail,message:e.message},null,8,["email","message"]))),128))])):d.hasRequests?Object(c["g"])("",!0):(Object(c["w"])(),Object(c["h"])("h3",u,"You have not received any requests yet"))]),_:1})])])}const d=["href"];function l(e,t,s,n,a,r){return Object(c["w"])(),Object(c["h"])("li",null,[Object(c["i"])("div",null,[Object(c["i"])("a",{href:r.emailLink},Object(c["I"])(s.email),9,d)]),Object(c["i"])("p",null,Object(c["I"])(s.message),1)])}var b={props:["email","message"],computed:{emailLink(){return"mailto:"+this.email}}},h=(s("dfea"),s("6b0d")),j=s.n(h);const O=j()(b,[["render",l],["__scopeId","data-v-5f521cad"]]);var m=O,w={data(){return{isLoading:!1,error:null}},components:{requestItem:m},created(){this.loadRequests()},computed:{receivedRequests(){return this.$store.getters["requests/requests"]},hasRequests(){return this.$store.getters["requests/hasRequests"]}},methods:{async loadRequests(){this.isLoading=!0;try{await this.$store.dispatch("requests/loadRequests")}catch(e){this.error=e.message||"Something went wrong!"}this.isLoading=!1},handleError(){this.error=null}}};s("dedc");const f=j()(w,[["render",o],["__scopeId","data-v-93d77930"]]);t["default"]=f},b6a1:function(e,t,s){},dedc:function(e,t,s){"use strict";s("b6a1")},dfea:function(e,t,s){"use strict";s("1b8b")}}]);
//# sourceMappingURL=chunk-3cc954fa.d383f4c9.js.map