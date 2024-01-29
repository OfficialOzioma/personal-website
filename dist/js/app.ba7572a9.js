(function(){"use strict";var e={921:function(e,t,r){var a=r(963),o=r(252),i=r(577);const n=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function l(e,t,r,l,s,d){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),u=(0,o.up)("back-to-top"),p=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)([e.appTheme,"pt-0.5"])},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[n])),_:1}),(0,o.Wm)(p)],2)}var s=r(508),d=r.n(s),c=r.p+"img/logo-dark.3458db44.svg",m=r.p+"img/logo-light.3333e3a3.svg";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:c,class:"w-36",alt:"Dark Logo"},f={key:1,src:m,class:"w-36",alt:"Light Logo"},b={class:"sm:hidden"},y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},x={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},k={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},w={class:"hidden md:block"};function _(e,t,r,a,i,n){const l=(0,o.up)("router-link"),s=(0,o.up)("theme-switcher"),d=(0,o.up)("AppHeaderLinks"),c=(0,o.up)("Button"),m=(0,o.up)("HireMeModal");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",p,[(0,o._)("div",g,[(0,o._)("div",null,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>["light"===i.theme?((0,o.wg)(),(0,o.iD)("img",h)):((0,o.wg)(),(0,o.iD)("img",f))])),_:1})]),(0,o.Wm)(s,{theme:i.theme,onThemeChanged:n.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",b,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>i.isOpen=!i.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",y,[i.isOpen?((0,o.wg)(),(0,o.iD)("path",x)):(0,o.kq)("",!0),i.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",v))]))])])]),(0,o.Wm)(d,{showModal:n.showModal,isOpen:i.isOpen},null,8,["showModal","isOpen"]),(0,o._)("div",k,[(0,o._)("div",w,[(0,o.Wm)(c,{title:"Hire Me",class:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=e=>n.showModal()),"aria-label":"Hire Me Button"})]),(0,o.Wm)(s,{theme:i.theme,onThemeChanged:n.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),(0,o.Wm)(m,{showModal:n.showModal,modal:i.modal,categories:i.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}const j={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},T={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function O(e,t,r,i,n,l){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.toggleTheme&&l.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",j)):((0,o.wg)(),(0,o.iD)("i",T))])}var P={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("theme-changed",e),this.$router.go()}}},D=r(744);const A=(0,D.Z)(P,[["render",O]]);var M=A;const I=e=>((0,o.dD)("data-v-21f98f20"),e=e(),(0,o.Cn)(),e),C={class:"font-general-regular fixed inset-0 z-30"},S={class:"flex flex-col items-center justify-center h-full w-full"},z={class:"modal-wrapper flex items-center z-30"},W={class:"modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},B={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},H=I((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," What project are you looking for? ",-1))),L=I((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),Z=[L],E={class:"modal-body p-5 w-full h-full"},F={action:"#",method:"GET",class:"max-w-xl m-4 text-left"},q={class:"mt-6 mb-4"},N=I((()=>(0,o._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:"project"},"Project Type",-1))),Y={class:"w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"project",name:"project",type:"text",required:"","aria-label":"Project Category"},R=["value"],U={class:"mt-1 pb-4 sm:pb-1"},G={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function V(e,t,r,n,l,s){const d=(0,o.up)("FormInput"),c=(0,o.up)("FormTextarea"),m=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",C,[(0,o.wy)((0,o._)("div",{onClick:t[0]||(t[0]=e=>r.showModal()),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a.F8,r.modal]]),(0,o._)("main",S,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",z,[(0,o._)("div",W,[(0,o._)("div",B,[H,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=e=>r.showModal())},Z)]),(0,o._)("div",E,[(0,o._)("form",F,[(0,o.Wm)(d,{label:"Full Name",inputIdentifier:"name",class:"mb-2"}),(0,o.Wm)(d,{label:"Email",inputIdentifier:"email",inputType:"email"}),(0,o._)("div",q,[N,(0,o._)("select",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.value},(0,i.zw)(e.name),9,R)))),128))])]),(0,o.Wm)(c,{label:"Details",textareaIdentifier:"details"}),(0,o._)("div",U,[(0,o.Wm)(m,{title:"Send Request",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",type:"submit","aria-label":"Submit Request"})])])]),(0,o._)("div",G,[(0,o.Wm)(m,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",onClick:t[2]||(t[2]=e=>r.showModal()),"aria-label":"Close Modal"})])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}var $=r(135),K=r(492),J=r(411),Q={props:["showModal","modal","categories"],components:{Button:$.Z,FormInput:K.Z,FormTextarea:J.Z},data(){return{}},mounted(){d().replace()},updated(){d().replace()},methods:{}};const X=(0,D.Z)(Q,[["render",V],["__scopeId","data-v-21f98f20"]]);var ee=X;const te={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function re(e,t,r,a,n,l){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(s,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1}),(0,o.Wm)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[(0,o.Uk)("About Me")])),_:1}),(0,o.Wm)(s,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1}),(0,o._)("div",te,[(0,o._)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var ae={props:["showModal","isOpen"]};const oe=(0,D.Z)(ae,[["render",re]]);var ie=oe,ne={components:{ThemeSwitcher:M,HireMeModal:ee,AppHeaderLinks:ie,Button:$.Z},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"API",name:"API Development"},{id:3,value:"Database",name:"Database Design"},{id:4,value:"branding",name:"Branding & Anim"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const le=(0,D.Z)(ne,[["render",_],["__scopeId","data-v-0288d4fa"]]);var se=le;const de={class:"container mx-auto"},ce={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},me={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},ue=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow me ",-1),pe={class:"flex gap-4 sm:gap-8"},ge=["href"],he=["data-feather"];function fe(e,t,r,a,i,n){const l=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",ce,[(0,o._)("div",me,[ue,(0,o._)("ul",pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,he)],8,ge)))),128))])]),(0,o.Wm)(l)])])}const be={class:"flex justify-center items-center text-center"},ye={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},xe={href:"https://github.com/OfficialOzioma",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},ve={href:"https://www.linkedin.com/in/oziomaofficial",target:"__blank",class:"font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function ke(e,t,r,a,n,l){return(0,o.wg)(),(0,o.iD)("div",be,[(0,o._)("div",ye,[(0,o.Uk)(" © "+(0,i.zw)(e.copyrightDate)+". ",1),(0,o._)("a",xe,(0,i.zw)(e.projectName),1),(0,o.Uk)(" . Developed by "),(0,o._)("a",ve,(0,i.zw)(e.author),1)])])}var we={data:()=>({copyrightDate:(new Date).getFullYear(),projectName:"Ozioma Dike Portfolio",author:"Ozioma Dike"})};const _e=(0,D.Z)(we,[["render",ke]]);var je=_e;const Te=[{id:1,name:"Website",icon:"globe",url:"https://www.stoman.me/"},{id:2,name:"GitHub",icon:"github",url:"https://github.com/OfficialOzioma"},{id:3,name:"Twitter",icon:"twitter",url:"https://twitter.com/officialozioma"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/oziomaofficial"},{id:5,name:"YouTube",icon:"youtube",url:"https://www.youtube.com/@EatDcode"}];var Oe={components:{FooterCopyright:je},data(){return{socials:Te}},mounted(){d().replace()},updated(){d().replace()}};const Pe=(0,D.Z)(Oe,[["render",fe]]);var De=Pe,Ae={components:{AppHeader:se,AppFooter:De},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){d().replace()},updated(){d().replace()}};const Me=(0,D.Z)(Ae,[["render",l]]);var Ie=Me,Ce=r(201);const Se={class:"container mx-auto"},ze={class:"mt-10 sm:mt-20 flex justify-center"};function We(e,t,r,a,i,n){const l=(0,o.up)("AppBanner"),s=(0,o.up)("ProjectsGrid"),d=(0,o.up)("Button"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Se,[(0,o.Wm)(l,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(s),(0,o._)("div",ze,[(0,o.Wm)(c,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{title:"More Projects"})])),_:1})])])}var Be=r.p+"img/developer.d30886eb.svg",He=r.p+"img/developer-dark.cfadf07a.svg";const Le={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Ze=(0,o.uE)('<div class="w-full md:w-1/3 text-left"><h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"> Hi, I am Ozioma Dike </h1><p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"> A Full-Stack Developer &amp; AI Enthusiast </p><div class="flex justify-center sm:block"><a download="Stoman-Resume.pdf" href="https://drive.google.com/file/d/1-iVv6OEZ-8p5cOuJ3YI0WCYBqKzpOvgq/view?usp=sharing" target="_blank" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume"><i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i><span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span></a></div></div>',1),Ee={class:"w-full md:w-2/3 text-right float-right"},Fe={key:0,src:Be,alt:"Developer"},qe={key:1,src:He,alt:"Developer"};function Ne(e,t,r,a,i,n){return(0,o.wg)(),(0,o.iD)("section",Le,[Ze,(0,o._)("div",Ee,["light"===e.theme?((0,o.wg)(),(0,o.iD)("img",Fe)):((0,o.wg)(),(0,o.iD)("img",qe))])])}var Ye={name:"Home",data:()=>({theme:""}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){d().replace()},methods:{}};const Re=(0,D.Z)(Ye,[["render",Ne]]);var Ue=Re,Ge=r(88),Ve={name:"Home",components:{AppBanner:Ue,ProjectsGrid:Ge.Z,Button:$.Z}};const $e=(0,D.Z)(Ve,[["render",We]]);var Ke=$e;const Je=[{path:"/",name:"Home",component:Ke,meta:{title:"Ozioma Dike - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,188)),meta:{title:"Ozioma Dike - About"}},{path:"/projects",name:"Projects",component:()=>r.e(176).then(r.bind(r,773)),meta:{title:"Ozioma Dike - Projects"}},{path:"/projects/single-project",name:"Single Project",component:()=>r.e(176).then(r.bind(r,443)),meta:{title:"Ozioma Dike - Single Project"}},{path:"/contact",name:"Contact",component:()=>r.e(176).then(r.bind(r,110)),meta:{title:"Ozioma Dike - Contact"}}],Qe=(0,Ce.p7)({history:(0,Ce.PO)("/"),routes:Je,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var Xe=Qe;Qe.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),i=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:i&&(document.title=i.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var et=r(617);const tt=r(508);tt.replace(),(0,a.ri)(Ie).use(Xe).use(et.Z).mount("#app");const rt=localStorage.getItem("theme");"dark"===rt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},88:function(e,t,r){r.d(t,{Z:function(){return C}});var a=r(252),o=r(577);const i={class:"pt-10 sm:pt-14"},n={class:"text-center"},l={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},s={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},d=(0,a._)("div",{class:"m-10"},[(0,a._)("a",{href:"https://github.com/OfficialOzioma?tab=repositories",target:"__blank",class:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[(0,a.Uk)(" View Projects on Github   "),(0,a._)("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[(0,a._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})])])],-1);function c(e,t,r,c,m,u){const p=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",n,[(0,a._)("p",l,(0,o.zw)(e.projectsHeading),1)]),(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(p,{key:e.id,project:e},null,8,["project"])))),128))]),d])}var m=r(508),u=r.n(m);const p={class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},g=["src","alt"],h={class:"text-center px-4 py-6"},f={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},b=(0,a._)("hr",null,null,-1),y={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"},x=(0,a._)("hr",null,null,-1),v={class:"m-2 font-general-medium text-lg text-justify text-ternary-dark dark:text-ternary-light"},k=["href"],w=(0,a._)("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[(0,a._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1);function _(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("section",p,[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none aspect-[4/3]"},null,8,g)]),(0,a._)("div",h,[(0,a._)("p",f,(0,o.zw)(r.project.title),1),b,(0,a._)("span",y,(0,o.zw)(r.project.category),1),x,(0,a._)("p",v,(0,o.zw)(r.project.description),1),(0,a._)("span",null,[(0,a._)("a",{href:n.link,target:"_blank",class:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[(0,a.Uk)(" Link to project   "),w],8,k)])])])}var j={props:["project"],data(){return{link:this.project.link}}},T=r(744);const O=(0,T.Z)(j,[["render",_]]);var P=O;const D=[{id:1,title:"Bookly REST API",category:"API Application",img:r(481),link:"https://github.com/OfficialOzioma/bookly",description:"This is a RESTful API where users can search for books related to programming, IT or technology, from https://itbook.store. Registered users can also add books to their favourite list."},{id:2,title:"The Movie App",category:"Web Application",img:r(30),link:"https://github.com/OfficialOzioma/Movie-app",description:"This movie App fetches data from TMDB API and displays it on the page. The user can See all availble movies, Actors and TV shows. The user can also view the details of the movie or TV show."},{id:3,title:"Laundry App",category:"Web Application",img:r(987),link:"https://github.com/OfficialOzioma/Laundry_management-_system",description:"Welcome to the laundry management system. This is a simple system that allows you to manage your laundry. You can add, delete, update and view your laundry. This system is built using PHP and MYSQL"},{id:4,title:"Projects Management API",category:"API Application",img:r(775),link:"https://github.com/OfficialOzioma/Project-manager-api",description:"This is the API collection for the Project Manager Application Built with AdonisJs version 5. Its Mini eCommerce API is a crud API."},{id:5,title:"Job Listing App",category:"Web Application",img:r(829),link:"https://github.com/OfficialOzioma/Laravel-job-listing",description:"This is an open-source job board application powered by Laravel. The goal of this is to let you self-host your own job board website, similar to larajobs.com or remoteok.io."},{id:6,title:"OTP generator Package",category:"Laravel Package",img:r(58),link:"https://github.com/OfficialOzioma/otp-generator",description:'This is Laravel package for generation One Time Password (OTP) generator and validation. This is done on the cache it supported all the laravel cache drivers: "apc", "array", "database", "file", "memcached", "redis"'}];var A=D,M={components:{ProjectSingle:P},data:()=>({projects:A,projectsHeading:"My Projects",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){u().replace()}};const I=(0,T.Z)(M,[["render",c]]);var C=I},135:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(252),o=r(577);function i(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var n={props:["title"],data:()=>({})},l=r(744);const s=(0,l.Z)(n,[["render",i]]);var d=s},492:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(252),o=r(577);const i=["for"],n=["id","name","placeholder","aria-label","value","type"];function l(e,t,r,l,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:r.label},(0,o.zw)(r.label),9,i),(0,a._)("input",(0,a.dG)({class:"w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.inputIdentifier,name:r.inputIdentifier,placeholder:r.label,"aria-label":r.inputIdentifier,value:r.val,type:r.inputType},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),required:""}),null,16,n)])}var s={props:{label:{type:String,default:""},inputIdentifier:{type:String,default:""},val:{type:[String,Number],default:""},inputType:{type:String,default:"text"}}},d=r(744);const c=(0,d.Z)(s,[["render",l]]);var m=c},411:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(252),o=r(577);const i=["for"],n=["id","name","aria-label","placeholder"];function l(e,t,r,l,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:r.textareaIdentifier},(0,o.zw)(r.label),9,i),(0,a._)("textarea",(0,a.dG)({class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.textareaIdentifier,name:r.textareaIdentifier,"aria-label":r.textareaIdentifier,placeholder:r.label},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),cols:"14",rows:"6"}),null,16,n)])}var s={props:{label:{type:String,default:""},textareaIdentifier:{type:String,default:""},val:{type:[String,Number],default:""}}},d=r(744);const c=(0,d.Z)(s,[["render",l]]);var m=c},481:function(e,t,r){e.exports=r.p+"img/bookly_image.b9f68a5b.webp"},829:function(e,t,r){e.exports=r.p+"img/job_list_app.6d2c63b4.jpeg"},987:function(e,t,r){e.exports=r.p+"img/laundry_app.0c2b3812.jpg"},30:function(e,t,r){e.exports=r.p+"img/movie_app.57aec0b7.jpg"},58:function(e,t,r){e.exports=r.p+"img/otp_generate_package.7672fd05.png"},775:function(e,t,r){e.exports=r.p+"img/projects_management_api.328fa455.jpg"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,i){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&i||n>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(l=!1,i<n&&(n=i));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"."+{176:"a3fb1844",443:"a18966b2"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(a,o,i,n){if(e[a])e[a].push(o);else{var l,s;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+i){l=m;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+i),l.src=a),e[a]=[o];var u=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=i);var n=r.p+r.u(t),l=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,o[1](l)}};r.l(n,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,n=a[0],l=a[1],s=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(a);d<n.length;d++)i=n[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(921)}));a=r.O(a)})();
//# sourceMappingURL=app.ba7572a9.js.map