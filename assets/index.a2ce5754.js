var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{r as i,c as l,y as o,q as c,I as m,B as s,_ as d,a as g,b as u,w as p,F as h,d as v,e as w,H as b,S as E,E as f,N as x,P as _,A as y,f as S,g as N,h as C,i as k,j as $,k as L,l as B,m as I,n as T,o as H,p as R,s as z,t as M,u as A,v as P,x as F,z as j,C as W,D as O,L as D,G as U,J as V,K as G,M as q,O as X,Q as Y,T as J,R as K,U as Q,V as Z,W as ee,X as te,Y as ae}from"./vendor.5418dfc9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,i)=>{const l=new URL(e,r);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const o=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){i(new Error(`Failed to import: ${e}`)),n(c)},onload(){a(self[t].moduleMap[l]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");var re="_HeroSection_heroSection__33caa",ne="_HeroSection_heroContainer__33caa",ie="_HeroSection_heroHeading__33caa",le="_HeroSection_title__33caa",oe="_HeroSection_subtitle__33caa";function ce(){return i.createElement("div",{className:re},i.createElement("div",{className:ne},i.createElement("div",{className:ie},i.createElement("div",{className:le},"Production Ready UI Boilerplate"),i.createElement("div",{className:oe},"Crafted with TailwindCSS"))))}var me="_LandingPage_container__b7365",se="_LandingPage_section__b7365",de="_LandingPage_heading__b7365",ge="_LandingPage_title__b7365",ue="_LandingPage_subtitle__b7365",pe="_LandingPage_body__b7365",he="_LandingPage_sectionItem__b7365",ve="_LandingPage_sectionItemImage__b7365",we="_LandingPage_sectionItemTitle__b7365";const be=()=>i.createElement(i.Fragment,null,i.createElement(ce,null),i.createElement(Ee,null,i.createElement(fe,{title:"Pages",subtitle:"General pages for any web application. Signin, Register"},i.createElement(xe,{title:"Signin",thumbnail:"/assets/images/examples/signin.jpeg",link:"/show-case/signin"})))),Ee=({children:e})=>i.createElement("div",{className:l("app-container",me)},e),fe=({children:e,title:t,subtitle:a})=>i.createElement("div",{className:se},i.createElement("div",{className:de},i.createElement("div",{className:ge},t),i.createElement("div",{className:ue},a)),i.createElement("div",{className:pe},e)),xe=({title:e,thumbnail:t,link:a})=>i.createElement(o,{className:he,to:a},i.createElement("img",{className:ve,src:t}),i.createElement("div",{className:we},e));function _e({placeholder:e,name:t,type:a,prependIcon:r,formik:n}){const l=((null==n?void 0:n.touched)?null==n?void 0:n.touched[t]:null)&&Boolean((null==n?void 0:n.errors)?null==n?void 0:n.errors[t]:null),[o,c]=i.useState(!1);return i.createElement(Ne,null,i.createElement(ke,{isError:l,isFocus:o},r&&i.createElement(Se,null,r),i.createElement(Ce,{name:t,placeholder:e,type:a,value:(null==n?void 0:n.values)?null==n?void 0:n.values[t]:null,onChange:null==n?void 0:n.handleChange,onFocus:()=>{c(!0)},onBlur:()=>{c(!1)},error:l})),(null==n?void 0:n.touched)&&(null==n?void 0:n.touched[t])&&(null==n?void 0:n.errors)&&(null==n?void 0:n.errors[t])?i.createElement(ye,null,null==n?void 0:n.errors[t]):null)}const ye=c.div`
  ${{color:"var(--error)",fontSize:"0.875rem",lineHeight:"1.25rem"}}
`,Se=c.div`
  ${{color:"var(--on-input)",paddingLeft:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",borderColor:"var(--surface)",opacity:"0.5"}}
`,Ne=c.div`
  ${{marginBottom:"0.5rem"}}
`,Ce=c(m)`
  ${{fontWeight:"300",color:"var(--on-input)",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0px",paddingBottom:"0px",width:"100%"}}
`,ke=c.div`
  ${{position:"relative",borderRadius:"0.25rem",backgroundColor:"var(--input)",borderWidth:"1px",borderColor:"var(--outline)","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",display:"flex",alignItems:"center",padding:"0px"}}
  height: var(--input-height);

  ${e=>e.isFocus&&{"--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderColor:"var(--primary)"}}
  ${e=>e.isError&&{borderColor:"var(--error)"}}
`;function $e({isLoading:e,text:t,type:a="button"}){return i.createElement(Le,{type:a,variant:"contained"},i.createElement(d,{color:"#FFFFFF",loading:e,size:6}),!e&&i.createElement("div",{className:"label"},t))}const Le=c(s)`
  ${{borderRadius:"0.25rem",position:"relative",color:"var(--on-primary)",backgroundColor:"var(--primary)",textTransform:"uppercase",fontWeight:"700",borderStyle:"none",paddingTop:"0.75rem",paddingBottom:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"3rem","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",paddingLeft:"0.75rem",paddingRight:"0.75rem",marginBottom:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem"}}
    &:hover,
    &:focus {
      ${{backgroundColor:"var(--primary)",color:"var(--on-primary)","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}}
    }
`;var Be,Ie;(Ie=Be||(Be={}))[Ie.Nop=0]="Nop",Ie[Ie.Loading=1]="Loading",Ie[Ie.Success=2]="Success",Ie[Ie.Error=3]="Error",Ie[Ie.NoConnection=4]="NoConnection";const Te=p({mapPropsToValues:e=>({email:e.initialEmail||"",password:""}),validationSchema:g().shape({email:u().required(),password:u().required()}),handleSubmit:(e,{props:t})=>{t.onSubmit(e)}})((e=>{const{touched:t,errors:a,isSubmitting:r,formStatus:n}=e;return i.createElement(h,{onSubmit:e.handleSubmit},i.createElement(He,null,i.createElement(_e,{label:"Email",prependIcon:i.createElement(v,null),name:"email",placeholder:"Create Account",formik:e}),i.createElement(_e,{label:"Password",prependIcon:i.createElement(w,null),name:"password",type:"password",placeholder:"Password",formik:e})),i.createElement(ze,null,i.createElement(Me,{href:"/forgot-password"},"Forgot Password?"),i.createElement(Me,{href:"/register"},"Create Account")),i.createElement(Re,null,i.createElement($e,{text:"Sign In",isLoading:n===Be.Loading,type:"submit"})))})),He=c.div`
  ${{marginBottom:"0.75rem"}}
`,Re=c.div`
`,ze=c.div`
  ${{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem",paddingTop:"0px",paddingBottom:"0px"}}
`,Me=c.a`
  ${{fontSize:"0.875rem",lineHeight:"1.25rem",color:"var(--on-surface)",opacity:"0.5"}}
  &:hover {
    ${{opacity:"1"}}
  }
`;function Ae({isLoading:e,text:t,logo:a,type:r="button"}){return i.createElement(je,{type:r,variant:"contained"},i.createElement(Pe,{src:a}),i.createElement(Fe,null,t))}const Pe=c.img`
  ${{marginLeft:"auto",marginRight:"auto",height:"2rem",width:"2rem"}}
`,Fe=c.div`
  ${{flex:"1 1 0%",color:"var(--on-surface)"}}
`,je=c(s)`
  ${{borderRadius:"0.25rem",position:"relative",color:"var(--primary)",backgroundColor:"var(--surface)",textTransform:"uppercase",fontWeight:"700",paddingTop:"0px",paddingBottom:"0px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"3rem","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--outline)",paddingLeft:"0.75rem",paddingRight:"0.75rem",marginBottom:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem",letterSpacing:"0.05em"}}
  height: var(--button-height);
  
  &:hover,
  &:focus {
    ${{backgroundColor:"var(--background)",color:"var(--on-background)","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}}
  }
`,We=({text:e})=>i.createElement(Oe,null,i.createElement(De,null),i.createElement(Ue,null,e)),Oe=c.div`${{position:"relative",display:"block",marginBottom:"2rem",width:"10rem",marginLeft:"auto",marginRight:"auto"}}`,De=c.hr`${{borderWidth:"1px",borderColor:"var(--background)"}}`,Ue=c.div`${{"--tw-translate-x":"-50%","--tw-translate-y":"-50%","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",position:"absolute",top:"50%",left:"50%",backgroundColor:"var(--surface)",paddingLeft:"1rem",paddingRight:"1rem",fontSize:"0.875rem",lineHeight:"1.25rem",color:"var(--secondary)"}}`,Ve=()=>{const[e,t]=i.useState({response:null,error:null,errorFields:null,status:Be.Nop});return i.createElement(i.Fragment,null,i.createElement(b,null,i.createElement("title",null,"SignIn Page")),i.createElement(nt,null,i.createElement(et,null,i.createElement(tt,null,i.createElement(at,null,i.createElement(Ze,null),i.createElement(qe,null,i.createElement(Xe,null,"Signin to:"),i.createElement(Ye,null,"Accounting")),i.createElement(Ge,null,i.createElement(Te,{formStatus:e.status,onSubmit:async e=>{try{t({response:null,error:null,errorFields:null,status:Be.Loading}),setTimeout((()=>{}),2e3)}catch(a){t({response:null,error:null==a?void 0:a.message,errorFields:null==a?void 0:a.errors,status:Be.Error})}return e}})),i.createElement(We,{text:"OR"}),i.createElement(rt,null,i.createElement(Ae,{text:"Signin with Google",logo:"/assets/images/social/google.png",type:"button"}),i.createElement(Ae,{text:"Signin with Line",logo:"/assets/images/social/line.png",type:"button"}),i.createElement(Ae,{text:"Signin with Microsoft",logo:"/assets/images/social/microsoft.png",type:"button"}))))),i.createElement(mt,null,i.createElement(dt,null,i.createElement(gt,null,"Privacy Policy"),i.createElement(ut,null,"•"),i.createElement(gt,null,"User Notice")),i.createElement(st,null,"@ 2021 ABugLife Studio, Inc. All rights reserved"))))},Ge=c.div`
  ${{marginBottom:"2.5rem"}}
`,qe=c.div`
  ${{textAlign:"center",marginBottom:"1rem"}}
`,Xe=c.div`
  ${{color:"var(--on-background)",opacity:"0.5"}}
`,Ye=c.div`
  ${{fontWeight:"700",color:"var(--primary)"}}
`,Je=c.div`
  ${{marginBottom:"2rem",backgroundColor:"var(--surface)"}}
`,Ke=c.img`
  ${{marginLeft:"auto",marginRight:"auto",height:"5rem",width:"auto",marginBottom:"0.5rem",opacity:"0.75",mixBlendMode:"difference"}}
`,Qe=c.div`
  ${{textAlign:"center",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"800",color:"var(--on-background)"}}
`,Ze=()=>i.createElement(Je,null,i.createElement(Ke,{src:"/assets/images/signin/logo-white.png"}),i.createElement(Qe,null,"ABugLife Studio")),et=c.div`
  ${{flex:"1 1 0%",display:"flex",alignItems:"center",width:"100%",maxWidth:"28rem",marginLeft:"auto",marginRight:"auto",paddingTop:"1rem","@media (min-width: 768px)":{paddingTop:"2rem"}}}
`,tt=c.div`
  ${{"--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",backgroundColor:"var(--surface)",paddingTop:"3rem",paddingBottom:"3rem",paddingLeft:"1rem",paddingRight:"1rem",zIndex:"40",borderRadius:"0.5rem",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"0px",maxWidth:"28rem","@media (min-width: 768px)":{height:"auto",minHeight:"0px",paddingTop:"4rem",paddingBottom:"4rem"}}}
`,at=c.div`
  ${{width:"100%",maxWidth:"20rem"}}
`,rt=c.div`
  & > * {
    ${{marginBottom:"0.5rem"}}
  }
  & > *:last-child {
    ${{marginBottom:"0px"}}
  }
`,nt=({children:e})=>i.createElement(it,null,i.createElement(lt,null),i.createElement(ot,null),i.createElement(ct,null,e)),it=c.div`
  ${{height:"100%",minHeight:"100vh",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",padding:"0px",backgroundColor:"var(--background)"}}
`,lt=c.div`
  ${{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"20",backgroundSize:"cover",backgroundPosition:"center",mixBlendMode:"multiply"}}
  background-image: url(/assets/images/signin/bg2.png);
`,ot=c.div`
  ${{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",backgroundColor:"var(--primary)",opacity:"0.05",zIndex:"30",mixBlendMode:"multiply"}}
`,ct=c.div`
  ${{maxWidth:"100%",width:"100%",position:"relative",zIndex:"40",display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",paddingLeft:"1rem",paddingRight:"1rem"}}
`,mt=c.div`
  ${{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"1rem",position:"sticky","@media (min-width: 768px)":{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"2rem",paddingBottom:"2rem"}}}
`,st=c.div`
  ${{color:"var(--on-background)",opacity:"0.25",textAlign:"center",whiteSpace:"nowrap",fontSize:"0.875rem",lineHeight:"1.25rem","@media (min-width: 768px)":{fontSize:"1rem",lineHeight:"1.5rem"}}}
`,dt=c.div`
  ${{display:"flex",alignItems:"center",marginBottom:"0.25rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":0,marginRight:"calc(1rem * var(--tw-space-x-reverse))",marginLeft:"calc(1rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","@media (min-width: 768px)":{marginBottom:"1rem",fontSize:"1rem",lineHeight:"1.5rem"}}}
`,gt=c.a`
  ${{color:"var(--on-background)",opacity:"0.5",cursor:"pointer",fontSize:"0.875rem",lineHeight:"1.25rem","@media (min-width: 768px)":{fontSize:"1rem",lineHeight:"1.5rem"}}}

  &:hover {
    ${{color:"var(--primary)",opacity:"1"}}
  }
`,ut=c.div`
  ${{opacity:"0.5"}}
`;E.use([f,x,_,y]);const pt=()=>{const[e,t]=i.useState({response:null,error:null,errorFields:null,status:Be.Nop});return i.createElement(St,null,i.createElement(It,null,i.createElement(Tt,null,i.createElement(Ht,null,i.createElement(Lt,null,i.createElement(Bt,null,i.createElement(ht,null),i.createElement(wt,null,i.createElement(bt,null,"Signin to:"),i.createElement(Et,null,"Accounting")),i.createElement(vt,null,i.createElement(Te,{formStatus:e.status,onSubmit:async e=>{try{t({response:null,error:null,errorFields:null,status:Be.Loading}),setTimeout((()=>{}),2e3)}catch(a){t({response:null,error:null==a?void 0:a.message,errorFields:null==a?void 0:a.errors,status:Be.Error})}return e}})),i.createElement(We,{text:"OR"}),i.createElement(yt,null,i.createElement(Ae,{text:"Signin with Google",logo:"/assets/images/social/google.png",type:"button"}),i.createElement(Ae,{text:"Signin with Line",logo:"/assets/images/social/line.png",type:"button"}),i.createElement(Ae,{text:"Signin with Microsoft",logo:"/assets/images/social/microsoft.png",type:"button"})))),i.createElement(Kt,null)))),i.createElement(Rt,null,i.createElement(Mt,null,i.createElement(At,null,"Privacy Policy"),i.createElement(Pt,null,"•"),i.createElement(At,null,"User Notice")),i.createElement(zt,null,"@ 2021 ABugLife Studio, Inc. All rights reserved")))},ht=()=>i.createElement(ft,null,i.createElement(xt,{src:"/assets/images/signin/logo-white.png"}),i.createElement(_t,null,"ABugLife Studio")),vt=c.div`
  ${{marginBottom:"2.5rem"}}
`,wt=c.div`
  ${{textAlign:"center",marginBottom:"1rem"}}
`,bt=c.div`
  ${{color:"var(--on-background)",opacity:"0.5"}}
`,Et=c.div`
  ${{fontWeight:"700",color:"var(--primary)"}}
`,ft=c.div`
  ${{marginBottom:"2rem",backgroundColor:"var(--surface)"}}
`,xt=c.img`
  ${{marginLeft:"auto",marginRight:"auto",height:"5rem",width:"auto",marginBottom:"0.5rem",opacity:"0.75",mixBlendMode:"difference"}}
`,_t=c.div`
  ${{textAlign:"center",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"800",color:"var(--on-background)"}}
`,yt=c.div`
  & > * {
    ${{marginBottom:"0.5rem"}}
  }
  & > *:last-child {
    ${{marginBottom:"0px"}}
  }
`,St=({children:e})=>i.createElement(Nt,null,i.createElement(Ct,null),i.createElement(kt,null),i.createElement($t,null,e)),Nt=c.div`
  ${{height:"100%",minHeight:"100vh",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",padding:"0px",backgroundColor:"var(--background)"}}
`,Ct=c.div`
  ${{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"20",backgroundSize:"cover",backgroundPosition:"center",mixBlendMode:"multiply"}}
  background-image: url(/assets/images/signin/bg2.png);
`,kt=c.div`
  ${{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",backgroundColor:"var(--primary)",opacity:"0.05",zIndex:"30",mixBlendMode:"multiply"}}
`,$t=c.div`
  ${{maxWidth:"100%",width:"100%",position:"relative",zIndex:"40",display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",paddingLeft:"1rem",paddingRight:"1rem"}}
`,Lt=c.div`
  ${{width:"100%",paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"1rem",paddingRight:"1rem","@media (min-width: 768px)":{height:"auto",minHeight:"0px",paddingTop:"4rem",paddingBottom:"4rem",width:"50%"}}}
`,Bt=c.div`
  ${{maxWidth:"none",marginLeft:"auto",marginRight:"auto","@media (min-width: 768px)":{maxWidth:"20rem"}}}
`,It=c.div`
  ${{flex:"1 1 0%",display:"flex",alignItems:"center",width:"100%",maxWidth:"72rem",marginLeft:"auto",marginRight:"auto",paddingTop:"1rem","@media (min-width: 768px)":{paddingTop:"2rem"}}}
`,Tt=c.div`
  ${{"--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",backgroundColor:"var(--surface)",paddingTop:"3rem",paddingBottom:"3rem",paddingLeft:"1rem",paddingRight:"1rem",zIndex:"40",borderRadius:"0.5rem",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"0px",overflow:"hidden","@media (min-width: 768px)":{height:"auto",minHeight:"0px",paddingTop:"0px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px"}}}
`,Ht=c.div`
  ${{width:"100%",display:"flex",alignItems:"stretch",justifyContent:"center"}}
`,Rt=c.div`
  ${{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"1rem",position:"sticky","@media (min-width: 768px)":{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"2rem",paddingBottom:"2rem"}}}
`,zt=c.div`
  ${{color:"var(--on-background)",opacity:"0.25",textAlign:"center",whiteSpace:"nowrap",fontSize:"0.875rem",lineHeight:"1.25rem","@media (min-width: 768px)":{fontSize:"1rem",lineHeight:"1.5rem"}}}
`,Mt=c.div`
  ${{display:"flex",alignItems:"center",marginBottom:"0.25rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":0,marginRight:"calc(1rem * var(--tw-space-x-reverse))",marginLeft:"calc(1rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","@media (min-width: 768px)":{marginBottom:"1rem",fontSize:"1rem",lineHeight:"1.5rem"}}}
`,At=c.a`
  ${{color:"var(--on-background)",opacity:"0.5",cursor:"pointer",fontSize:"0.875rem",lineHeight:"1.25rem","@media (min-width: 768px)":{fontSize:"1rem",lineHeight:"1.5rem"}}}

  &:hover {
    ${{color:"var(--primary)",opacity:"1"}}
  }
`,Pt=c.div`
  ${{opacity:"0.5"}}
`,Ft=c((({className:e,children:t})=>i.createElement(S,{className:e,spaceBetween:0,slidesPerView:1,effect:"fade",autoplay:!0,navigation:!0,pagination:{clickable:!0},onSlideChange:()=>console.log("slide change")},t)))`
  ${{width:"50%",display:"none",alignItems:"center",justifyContent:"center",flexDirection:"column","@media (min-width: 768px)":{display:"flex"}}}
  --swiper-pagination-color: var(--background);
  --swiper-navigation-color: var(--background);
`,jt=c.div`
  ${{"--tw-backdrop-blur":"blur(8px)","--tw-backdrop-brightness":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-contrast":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-grayscale":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-hue-rotate":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-invert":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-opacity":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-saturate":"var(--tw-empty,/*!*/ /*!*/)","--tw-backdrop-sepia":"var(--tw-empty,/*!*/ /*!*/)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",backgroundSize:"cover"}}

  &:before {
    ${{position:"absolute",top:"0px",width:"100%",height:"100%",left:"0px",display:"block",zIndex:"0",opacity:"0.5","--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))"}}
    content: "";
  }
  &:after {
    ${{position:"absolute",top:"0px",width:"100%",height:"100%",left:"0px",display:"block",zIndex:"0",opacity:"0.5",backgroundColor:"var(--primary)"}}
    content: "";
  }
`,Wt=c.div`
  ${{width:"100%",height:"100%",display:"flex",alignItems:"center",zIndex:"40",position:"relative"}}
`,Ot=c.div`
  ${{padding:"2rem",paddingLeft:"4rem",paddingRight:"4rem",textAlign:"center",marginLeft:"auto",marginRight:"auto","@media (min-width: 1536px)":{padding:"3rem",paddingLeft:"5rem",paddingRight:"5rem"}}}
`,Dt=c.div`
  ${{"--tw-blur":"var(--tw-empty,/*!*/ /*!*/)","--tw-brightness":"var(--tw-empty,/*!*/ /*!*/)","--tw-contrast":"var(--tw-empty,/*!*/ /*!*/)","--tw-grayscale":"var(--tw-empty,/*!*/ /*!*/)","--tw-hue-rotate":"var(--tw-empty,/*!*/ /*!*/)","--tw-invert":"var(--tw-empty,/*!*/ /*!*/)","--tw-saturate":"var(--tw-empty,/*!*/ /*!*/)","--tw-sepia":"var(--tw-empty,/*!*/ /*!*/)","--tw-drop-shadow":"drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",marginBottom:"0.5rem","@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"},"@media (min-width: 1536px)":{fontSize:"3rem",lineHeight:"1"}}}
`,Ut=c.div`
  ${{"--tw-blur":"var(--tw-empty,/*!*/ /*!*/)","--tw-brightness":"var(--tw-empty,/*!*/ /*!*/)","--tw-contrast":"var(--tw-empty,/*!*/ /*!*/)","--tw-grayscale":"var(--tw-empty,/*!*/ /*!*/)","--tw-hue-rotate":"var(--tw-empty,/*!*/ /*!*/)","--tw-invert":"var(--tw-empty,/*!*/ /*!*/)","--tw-saturate":"var(--tw-empty,/*!*/ /*!*/)","--tw-sepia":"var(--tw-empty,/*!*/ /*!*/)","--tw-drop-shadow":"drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",fontSize:"1.125rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",marginBottom:"4rem",textAlign:"center","@media (min-width: 1024px)":{fontSize:"1.25rem",lineHeight:"1.75rem"},"@media (min-width: 1536px)":{fontSize:"1.5rem",lineHeight:"2rem"}}}
`,Vt=c.div`
  ${{marginBottom:"8rem"}}
`,Gt=c.div`
  ${{display:"flex",alignItems:"center",marginBottom:"1rem"}}
`,qt=c.div`
  ${{marginRight:"1.5rem",fontSize:"2.25rem",lineHeight:"2.5rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}}
`,Xt=c.div`
  ${{marginRight:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}}
`,Yt=c.div`
  ${{marginLeft:"1.5rem",fontSize:"1.5rem",lineHeight:"2rem"}}
`,Jt=c(s)`
  ${{borderRadius:"9999px",position:"relative","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",backgroundColor:"transparent",textTransform:"uppercase",fontWeight:"700",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))",borderStyle:"solid",paddingTop:"1.5rem",paddingBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center",width:"auto",paddingLeft:"2rem",height:"2rem","--tw-shadow":"0 0 #0000",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",fontSize:"1rem",lineHeight:"1.5rem",marginLeft:"auto",marginRight:"auto","@media (min-width: 1280px)":{paddingLeft:"3rem",height:"3rem",fontSize:"1.125rem",lineHeight:"1.75rem"}}}

  &:hover,
  &:focus {
    ${{"--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(55, 65, 81, var(--tw-text-opacity))","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}}
  }

  ${Yt}
`,Kt=()=>i.createElement(Ft,null,i.createElement(N,null,i.createElement(jt,{style:{backgroundImage:"url(/assets/images/signin/highlight-bg1.png)"}}),i.createElement(Wt,null,i.createElement(Ot,null,i.createElement(Dt,null,"Rush Accounting"),i.createElement(Ut,null,"Accounting have more fun"),i.createElement(Vt,null,i.createElement(Gt,null,i.createElement(qt,null,i.createElement(C,null)),i.createElement(Xt,null,"perspiciatis unde omnis iste natus")),i.createElement(Gt,null,i.createElement(qt,null,i.createElement(k,null)),i.createElement(Xt,null,"numquam eius modi tempora")),i.createElement(Gt,null,i.createElement(qt,null,i.createElement($,null)),i.createElement(Xt,null,"Nam libero tempore")),i.createElement(Gt,null,i.createElement(qt,null,i.createElement(L,null)),i.createElement(Xt,null,"cupidatat non proident"))),i.createElement(Jt,{variant:"contained"},"Create new account",i.createElement(Yt,null,i.createElement(B,null)))))),i.createElement(N,null,i.createElement(jt,{style:{backgroundImage:"url(/assets/images/signin/highlight-bg1.png)"}}),i.createElement(Wt,null,i.createElement(Ot,null,i.createElement(Dt,null,"Rush Accounting"),i.createElement(Ut,null,"Accounting have more fun"),i.createElement(Vt,null,i.createElement(Gt,null,i.createElement(qt,null,i.createElement(k,null)),i.createElement(Xt,null,"numquam eius modi tempora")),i.createElement(Gt,null,i.createElement(qt,null,i.createElement(C,null)),i.createElement(Xt,null,"perspiciatis unde omnis iste natus")),i.createElement(Gt,null,i.createElement(qt,null,i.createElement(L,null)),i.createElement(Xt,null,"cupidatat non proident")),i.createElement(Gt,null,i.createElement(qt,null,i.createElement($,null)),i.createElement(Xt,null,"Nam libero tempore"))),i.createElement(Jt,{variant:"contained"},"Create new account",i.createElement(Yt,null,i.createElement(B,null)))))));var Qt={heading:"_ShowCase_heading__5405c",title:"_ShowCase_title__5405c",subtitle:"_ShowCase_subtitle__5405c",frameContainer:"_ShowCase_frameContainer__5405c",inner:"_ShowCase_inner__5405c",isMobile:"_ShowCase_isMobile__5405c",isTablet:"_ShowCase_isTablet__5405c",header:"_ShowCase_header__5405c",leftSection:"_ShowCase_leftSection__5405c",rightSection:"_ShowCase_rightSection__5405c",displayModeButtonContainer:"_ShowCase_displayModeButtonContainer__5405c",button:"_ShowCase_button__5405c",icon:"_ShowCase_icon__5405c",isActive:"_ShowCase_isActive__5405c",codeButtonContainer:"_ShowCase_codeButtonContainer__5405c",codeContainer:"_ShowCase_codeContainer__5405c",code:"_ShowCase_code__5405c",style:"_ShowCase_style__5405c"};const Zt=({children:e})=>i.createElement("div",{className:l("app-container",Qt.container)},e),ea=({subtitle:e,title:t,children:a})=>i.createElement(i.Fragment,null,i.createElement("div",{className:Qt.heading},i.createElement("div",{className:Qt.title},t),e&&i.createElement("div",{className:Qt.subtitle},e)),a);var ta,aa,ra,na;(aa=ta||(ta={})).Mobile="mobile",aa.Tablet="tablet",aa.Desktop="desktop",(na=ra||(ra={})).ReactCssModule="react-css-modules",na.ReactStyledComponent="react-styled-component",na.Vue="vue",na.Angular="angular";const ia=({children:e,reactCssModuleCode:t,reactCssModuleStyle:a})=>{const[r,n]=i.useState(ta.Desktop),[o,c]=i.useState(null);return i.createElement("div",{className:Qt.frameContainer},i.createElement("div",{className:Qt.header},i.createElement("div",{className:Qt.leftSection},i.createElement(I,{className:Qt.displayModeButtonContainer},i.createElement(s,{onClick:()=>{n(ta.Mobile)},className:l(Qt.button,{[Qt.isActive]:r===ta.Mobile})},i.createElement(T,{className:Qt.icon}),i.createElement("div",{className:Qt.title},"Mobile")),i.createElement(s,{onClick:()=>{n(ta.Tablet)},className:l(Qt.button,{[Qt.isActive]:r===ta.Tablet})},i.createElement(H,{className:Qt.icon}),i.createElement("div",{className:Qt.title},"Tablet")),i.createElement(s,{onClick:()=>{n(ta.Desktop)},className:l(Qt.button,{[Qt.isActive]:r===ta.Desktop})},i.createElement(R,{className:Qt.icon}),i.createElement("div",{className:Qt.title},"Desktop")))),i.createElement("div",{className:Qt.rightSection},i.createElement("div",{className:Qt.codeButtonContainer},i.createElement("a",{href:"https://github.com/abuglife/rush-ui/tree/main/snippets/react-styled",className:l(Qt.button,{[Qt.isActive]:o===ra.ReactStyledComponent})},i.createElement(z,{className:Qt.icon}),i.createElement("div",{className:Qt.title}," + Styled Component")),i.createElement("a",{href:"https://github.com/abuglife/rush-ui/tree/main/snippets/react-css-module",className:l(Qt.button,{[Qt.isActive]:o===ra.ReactCssModule})},i.createElement(z,{className:Qt.icon}),i.createElement("div",{className:Qt.title}," + CSS Modules")),i.createElement("a",{href:"https://github.com/abuglife/rush-ui/tree/main/snippets/vue",className:l(Qt.button,{[Qt.isActive]:o===ra.Vue})},i.createElement(M,{className:Qt.icon}),i.createElement("div",{className:Qt.title}," Vue")),i.createElement("a",{href:"https://github.com/abuglife/rush-ui/tree/main/snippets/angular",className:l(Qt.button,{[Qt.isActive]:o===ra.Angular})},i.createElement(A,{className:Qt.icon}),i.createElement("div",{className:Qt.title}," Angular"))))),i.createElement("div",{className:l(Qt.inner,{[Qt.isMobile]:r===ta.Mobile,[Qt.isTablet]:r===ta.Tablet,[Qt.isDesktop]:r===ta.Desktop})},e))},la=()=>i.createElement(Zt,null,i.createElement(ea,{title:"Card Style",subtitle:"With illustration background for any common login page / register page"},i.createElement(ia,null,i.createElement(P,{src:"/#/examples/signin?iframe=true",style:{width:"1px",minWidth:"100%"}}))));var oa={btnToggle:"_ThemeConfiguration_btnToggle__1129c",listContainer:"_ThemeConfiguration_listContainer__1129c",listItem:"_ThemeConfiguration_listItem__1129c",title:"_ThemeConfiguration_title__1129c",themeList:"_ThemeConfiguration_themeList__1129c",item:"_ThemeConfiguration_item__1129c",icon:"_ThemeConfiguration_icon__1129c"};var ca="_NightModeToggle_button__2c581",ma="_NightModeToggle_selected__2c581",sa="_NightModeToggle_toggleCircle__2c581",da="_NightModeToggle_item__2c581",ga="_NightModeToggle_isLight__2c581",ua="_NightModeToggle_isDark__2c581",pa="_NightModeToggle_isDarkMode__2c581";function ha(){const[e,t]=i.useState(!1);return i.useEffect((()=>{(localStorage.getItem("theme")||"").includes("dark")&&t(!0)}),[]),i.useEffect((()=>{!function(){const t=localStorage.getItem("theme")||"";if(e){const e=t.replace("dark-","");e?(document.body.setAttribute("data-theme","dark-"+e),localStorage.setItem("theme","dark-"+e)):(document.body.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}else{const e=t.replace("dark-","");e?(document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)):(document.body.setAttribute("data-theme",""),localStorage.setItem("theme",""))}}()}),[e]),i.createElement(s,{className:l(ca,{[pa]:e}),onClick:()=>{t(!e)}},i.createElement("div",{className:l(da,ga)},i.createElement(F,null)),i.createElement("div",{className:l(da,ua)},i.createElement(j,null)),i.createElement("div",{className:ma},i.createElement("div",{className:sa})))}const va=()=>{const[e,t]=i.useState(!1),a=()=>{t(!e)},r=e=>{(localStorage.getItem("theme")||"").includes("dark")?localStorage.setItem("theme",`dark-${e}`):localStorage.setItem("theme",e)};return i.useEffect((()=>{window.addEventListener("storage",(()=>{const e=localStorage.getItem("theme")||"";e&&document.body.setAttribute("data-theme",e)}))}),[]),i.createElement(i.Fragment,null,i.createElement(s,{className:oa.btnToggle,onClick:a},i.createElement(W,null)),i.createElement(O,{anchor:"right",open:e,onClose:a,BackdropProps:{invisible:!0}},i.createElement("div",{className:oa.listContainer},i.createElement("div",{className:oa.listItem},i.createElement("div",{className:oa.title},"Dark Mode"),i.createElement("div",{className:oa.body},i.createElement(ha,null))),i.createElement("div",{className:oa.listItem},i.createElement("div",{className:oa.title},"Theme"),i.createElement("div",{className:oa.body},i.createElement(D,{className:oa.themeList},i.createElement(U,{button:!0,className:oa.item,onClick:()=>{r("green")}},i.createElement("div",{className:oa.icon,style:{backgroundColor:"#10B981"}}),i.createElement("div",{className:oa.text},"Green")),i.createElement(U,{button:!0,className:oa.item,onClick:()=>{r("blue")}},i.createElement("div",{className:oa.icon,style:{backgroundColor:"#16679a"}}),i.createElement("div",{className:oa.text},"Blue")),i.createElement(U,{button:!0,className:oa.item,onClick:()=>{r("viridian-green")}},i.createElement("div",{className:oa.icon,style:{backgroundColor:"#0e9594"}}),i.createElement("div",{className:oa.text},"Viridian Green")),i.createElement(U,{button:!0,className:oa.item,onClick:()=>{r("indigo")}},i.createElement("div",{className:oa.icon,style:{backgroundColor:"#8B5CF6"}}),i.createElement("div",{className:oa.text},"Indigo")),i.createElement(U,{button:!0,className:oa.item,onClick:()=>{r("orange")}},i.createElement("div",{className:oa.icon,style:{backgroundColor:"#ff8500"}}),i.createElement("div",{className:oa.text},"Orange"))))))))};function wa(){const[e,t]=i.useState({}),a=V.parse(G().search);return i.useEffect((()=>{(function(e,t){var a=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(a.length!=r.length)return!1;for(var n=0;n<a.length;n++){var i=a[n];if(e[i]!==t[i])return!1}return!0})(e,a)||t(a)}),[a]),e}const ba=()=>{const e=wa();return i.createElement(i.Fragment,null,i.createElement(q,null),!e.iframe&&i.createElement(va,null))};var Ea={navbar:"_Navbar_navbar__1e4c7",toolbar:"_Navbar_toolbar__1e4c7",logo:"_Navbar_logo__1e4c7",postfix:"_Navbar_postfix__1e4c7",isTop:"_Navbar_isTop__1e4c7",isHeroSection:"_Navbar_isHeroSection__1e4c7",githubLink:"_Navbar_githubLink__1e4c7",leftSection:"_Navbar_leftSection__1e4c7",rightSection:"_Navbar_rightSection__1e4c7",centerSection:"_Navbar_centerSection__1e4c7",appContainer:"_Navbar_appContainer__1e4c7"};const fa=e=>{var{onMobileNavOpen:o,size:c="normal",hasHeroSection:m}=e,s=((e,n)=>{var i={};for(var l in e)t.call(e,l)&&n.indexOf(l)<0&&(i[l]=e[l]);if(null!=e&&a)for(var l of a(e))n.indexOf(l)<0&&r.call(e,l)&&(i[l]=e[l]);return i})(e,["onMobileNavOpen","size","hasHeroSection"]);const d=X(60);return i.createElement(Y,((e,i)=>{for(var l in i||(i={}))t.call(i,l)&&n(e,l,i[l]);if(a)for(var l of a(i))r.call(i,l)&&n(e,l,i[l]);return e})({position:"fixed",className:l(Ea.navbar,{[Ea.isTop]:0==d,[Ea.isHeroSection]:m}),elevation:1},s),i.createElement(Sa,null,i.createElement(J,{className:Ea.toolbar},i.createElement(ya,null),i.createElement(Ca,null,i.createElement(_a,null)),i.createElement(Na,null,i.createElement(xa,null),i.createElement(ha,null)))))},xa=()=>i.createElement("a",{href:"https://github.com/abuglife/rush-ui",className:Ea.githubLink},i.createElement(K,null)),_a=()=>i.createElement(o,{className:Ea.logo,to:"/"},i.createElement("div",{className:Ea.name},"Rush"),i.createElement("div",{className:Ea.postfix},"UI")),ya=({children:e})=>i.createElement("div",{className:Ea.leftSection},e),Sa=({children:e})=>i.createElement("div",{className:Ea.appContainer},e),Na=({children:e})=>i.createElement("div",{className:Ea.rightSection},e),Ca=({children:e})=>i.createElement("div",{className:Ea.centerSection},e);var ka="_TopBarLayout_container__8f711";const $a=()=>i.createElement(La,null,i.createElement(fa,null),i.createElement(q,null),i.createElement(va,null)),La=({children:e})=>i.createElement("div",{className:l(ka)},e),Ba=()=>i.createElement(i.Fragment,null,i.createElement(fa,{hasHeroSection:!0}),i.createElement(q,null),i.createElement(va,null)),Ia=[{path:"examples",element:i.createElement(ba,null),children:[{path:"/signin",element:i.createElement(Ve,null)},{path:"/signin/split-card",element:i.createElement(pt,null)}]},{path:"show-case",element:i.createElement($a,null),children:[{path:"/signin",element:i.createElement(la,null)}]},{path:"",element:i.createElement(Ba,null),children:[{path:"/",element:i.createElement(be,null)},{path:"*",element:i.createElement(Q,{to:"/"})},{path:"",element:i.createElement(Q,{to:"/"})}]}];function Ta(){const e=Z(Ia);return i.useEffect((()=>{!function(){const e=localStorage.getItem("theme")||"";document.body.setAttribute("data-theme",e)}()}),[]),i.createElement(i.Fragment,null,e)}ee.render(i.createElement(i.StrictMode,null,i.createElement(te,{injectFirst:!0},i.createElement(ae,null,i.createElement(Ta,null)))),document.getElementById("root"));
