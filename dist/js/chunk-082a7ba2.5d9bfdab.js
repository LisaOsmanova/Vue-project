(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-082a7ba2"],{"1fbc":function(t,e,i){},"212c":function(t,e,i){"use strict";i.r(e);var o=i("7a23");const s=t=>(Object(o["z"])("data-v-3a85f5f9"),t=t(),Object(o["x"])(),t),a={class:"form-control"},r=s(()=>Object(o["i"])("label",{for:"email"},"Email",-1)),c={class:"form-control"},n=s(()=>Object(o["i"])("label",{for:"password"},"Password",-1)),l={key:0};function d(t,e,i,s,d,b){const u=Object(o["E"])("base-dialog"),h=Object(o["E"])("base-spinner"),m=Object(o["E"])("base-button"),p=Object(o["E"])("base-card");return Object(o["w"])(),Object(o["h"])("div",null,[Object(o["k"])(u,{show:!!d.error,title:"An error occurred",onClose:b.handleError},{default:Object(o["N"])(()=>[Object(o["i"])("p",null,Object(o["I"])(d.error),1)]),_:1},8,["show","onClose"]),Object(o["k"])(u,{fixed:"",show:d.isLoading,title:"Authenticating.."},{default:Object(o["N"])(()=>[Object(o["k"])(h)]),_:1},8,["show"]),Object(o["k"])(p,null,{default:Object(o["N"])(()=>[Object(o["i"])("form",{onSubmit:e[2]||(e[2]=Object(o["P"])((...t)=>b.submitForm&&b.submitForm(...t),["prevent"]))},[Object(o["i"])("div",a,[r,Object(o["O"])(Object(o["i"])("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=t=>d.email=t)},null,512),[[o["L"],d.email,void 0,{trim:!0}]])]),Object(o["i"])("div",c,[n,Object(o["O"])(Object(o["i"])("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>d.password=t)},null,512),[[o["L"],d.password,void 0,{trim:!0}]])]),d.formIsValid?Object(o["g"])("",!0):(Object(o["w"])(),Object(o["h"])("p",l," Please enter a valid email and password (must be at least 6 characters long) ")),Object(o["k"])(m,null,{default:Object(o["N"])(()=>[Object(o["j"])(Object(o["I"])(b.submitButtonCaption),1)]),_:1}),Object(o["k"])(m,{type:"button",mode:"flat",onClick:b.switchAuthMode},{default:Object(o["N"])(()=>[Object(o["j"])(Object(o["I"])(b.switchModeButtonCaption),1)]),_:1},8,["onClick"])],32)]),_:1})])}var b={data(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption(){return"login"===this.mode?"login":"signup"},switchModeButtonCaption(){return"login"===this.mode?"signup instead":"login instead"}},methods:{async submitForm(){if(this.formIsValid=!0,""===this.email||!this.email.includes("@")||this.password.length<6)this.formIsValid=!1;else{try{"login"===this.mode?await this.$store.dispatch("login",{email:this.email,password:this.password}):await this.$store.dispatch("signup",{email:this.email,password:this.password});const t="/"+(this.$route.query.redirect||"coaches");this.$router.replace(t)}catch(t){this.error=t.message||"Failed to authenticate, try later"}this.isLoading=!1}},switchAuthMode(){"login"===this.mode?this.mode="sighup":this.mode="login"},handleError(){this.error=null}}},u=(i("fac5"),i("6b0d")),h=i.n(u);const m=h()(b,[["render",d],["__scopeId","data-v-3a85f5f9"]]);e["default"]=m},fac5:function(t,e,i){"use strict";i("1fbc")}}]);
//# sourceMappingURL=chunk-082a7ba2.5d9bfdab.js.map