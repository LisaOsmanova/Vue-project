(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8321d764"],{"0e73":function(e,t,s){},a980:function(e,t,s){"use strict";s.r(t);var a=s("7a23");const i=e=>(Object(a["z"])("data-v-55a313fc"),e=e(),Object(a["x"])(),e),r={class:"form-control"},o=i(()=>Object(a["i"])("label",{for:"email"},"Your email",-1)),c={class:"form-control"},l=i(()=>Object(a["i"])("label",{for:"message"},"Message",-1)),n={key:0,class:"errors"},m={class:"actions"};function d(e,t,s,i,d,b){const u=Object(a["E"])("base-dialog"),h=Object(a["E"])("base-button");return Object(a["w"])(),Object(a["h"])("div",null,[Object(a["k"])(u,{show:!!d.error,title:"requests",onClose:b.handleError},{default:Object(a["N"])(()=>[Object(a["i"])("p",null,Object(a["I"])(d.error),1)]),_:1},8,["show","onClose"]),Object(a["i"])("form",{onSubmit:t[2]||(t[2]=Object(a["P"])((...e)=>b.submitForm&&b.submitForm(...e),["prevent"]))},[Object(a["i"])("div",r,[o,Object(a["O"])(Object(a["i"])("input",{name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>d.email=e)},null,512),[[a["L"],d.email,void 0,{trim:!0}]])]),Object(a["i"])("div",c,[l,Object(a["O"])(Object(a["i"])("textarea",{row:"5",id:"message","onUpdate:modelValue":t[1]||(t[1]=e=>d.message=e)},null,512),[[a["L"],d.message,void 0,{trim:!0}]])]),d.formIsValid?Object(a["g"])("",!0):(Object(a["w"])(),Object(a["h"])("p",n," Please valid the valid email and non-empty message ")),Object(a["i"])("div",m,[Object(a["k"])(h,null,{default:Object(a["N"])(()=>[Object(a["j"])("Send message")]),_:1})])],32)])}var b={data(){return{email:"",message:"",formIsValid:!0,error:null}},methods:{async submitForm(){if(this.formIsValid=!0,this.error=null,""!==this.email&&this.email.includes("@")&&""!==this.message)try{await this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")}catch(e){this.error=e.message||"Something went wrong!"}else this.formIsValid=!1},handleError(){this.error=null}}},u=(s("f3d3"),s("6b0d")),h=s.n(u);const O=h()(b,[["render",d],["__scopeId","data-v-55a313fc"]]);t["default"]=O},f3d3:function(e,t,s){"use strict";s("0e73")}}]);
//# sourceMappingURL=chunk-8321d764.d9413520.js.map