(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c94ec"],{"591c":function(e,t,c){"use strict";c.r(t);var n=c("7a23");const l=Object(n["i"])("h2",null,"Interested?Reach out now!",-1);function a(e,t,c,a,i,s){const r=Object(n["E"])("base-card"),u=Object(n["E"])("base-button"),b=Object(n["E"])("router-view"),o=Object(n["E"])("base-badge");return Object(n["w"])(),Object(n["h"])("div",null,[Object(n["i"])("section",null,[Object(n["k"])(r,null,{default:Object(n["N"])(()=>[Object(n["i"])("h2",null,Object(n["I"])(s.fullName),1),Object(n["i"])("h3",null,"$"+Object(n["I"])(s.rate)+"/hour",1)]),_:1})]),Object(n["i"])("section",null,[Object(n["k"])(r,null,{default:Object(n["N"])(()=>[Object(n["i"])("header",null,[l,Object(n["k"])(u,{link:"",to:s.contactLink},{default:Object(n["N"])(()=>[Object(n["j"])("Contact")]),_:1},8,["to"])]),Object(n["k"])(b)]),_:1})]),Object(n["i"])("section",null,[Object(n["k"])(r,null,{default:Object(n["N"])(()=>[(Object(n["w"])(!0),Object(n["h"])(n["a"],null,Object(n["C"])(s.areas,e=>(Object(n["w"])(),Object(n["f"])(o,{key:e,type:e,title:e},null,8,["type","title"]))),128)),Object(n["i"])("p",null,Object(n["I"])(s.description),1)]),_:1})])])}var i={props:["id"],computed:{fullName(){return this.selectedCoach.firstName+" "+this.selectedCoach.lastName},areas(){return this.selectedCoach.areas},contactLink(){return this.$route.path+"/"+this.id+"/contact"},rate(){return this.selectedCoach.hourlyRate},description(){return this.selectedCoach.description}},data(){return{selectedCoach:null}},created(){this.selectedCoach=this.$store.getters["coaches/coaches"].find(e=>e.id===this.id)}},s=c("6b0d"),r=c.n(s);const u=r()(i,[["render",a]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-2d0c94ec.e35b8397.js.map