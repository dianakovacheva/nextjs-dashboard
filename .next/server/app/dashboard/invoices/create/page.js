(()=>{var e={};e.id=671,e.ids=[671],e.modules={5486:e=>{"use strict";e.exports=require("bcrypt")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},87900:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=t(60674),a=t(40053),i=t(46061),n=t.n(i),o=t(87906),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["dashboard",{children:["invoices",{children:["create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,46241)),"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/dashboard/invoices/create/page.tsx"]}]},{}]},{error:[()=>Promise.resolve().then(t.bind(t,549)),"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/dashboard/invoices/error.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,58876)),"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/dashboard/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,45163))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(t.bind(t,58009))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,41635)),"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,39859,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,45163))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(t.bind(t,58009))).default(e)],twitter:[],manifest:void 0}}],c=["/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/dashboard/invoices/create/page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/dashboard/invoices/create/page",pathname:"/dashboard/invoices/create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},58660:(e,r,t)=>{"use strict";t.r(r),t.d(r,{"40516ca5328a198076851edbde83461e4ba2f5a7bf":()=>w,"601ccaf9c5a570ff2ef0479df91e8c7d19e35fc74d":()=>j,"60532e03dbcce827ee1d34a21e8c93d8b66d315da6":()=>N,"70bfeea6e612ec68e9e5fd9e3aed8a4e622441e26d":()=>y});var s=t(5176);t(88982);var a=t(86937),i=t(68058),n=t(5717),o=t(44958),d=t(15294),l=t(60899),c=t(5486),u=t.n(c);async function m(e){try{return(await (0,i.ll)`SELECT * FROM users WHERE email=${e}`).rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:p,signIn:x,signOut:f}=(0,d.Ay)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:r}}){let t=!!e?.user;return r.pathname.startsWith("/dashboard")?!!t:!t||Response.redirect(new URL("/dashboard",r))}},providers:[],providers:[(0,l.A)({async authorize(e){let r=a.z.object({email:a.z.string().email(),password:a.z.string().min(6)}).safeParse(e);if(r.success){let{email:e,password:t}=r.data,s=await m(e);if(!s)return null;if(await u().compare(t,s.password))return s}return console.log("Invalid credentials"),null}})]});var h=t(73954);let b=a.z.object({id:a.z.string(),customerId:a.z.string({invalid_type_error:"Please select a customer."}),amount:a.z.coerce.number().gt(0,{message:"Please enter an amount greater than $0."}),status:a.z.enum(["pending","paid"],{invalid_type_error:"Please select an invoice status."}),date:a.z.string()}),v=b.omit({id:!0,date:!0}),g=b.omit({id:!0,date:!0});async function j(e,r){let t=v.safeParse({customerId:r.get("customerId"),amount:r.get("amount"),status:r.get("status")});if(!t.success)return{errors:t.error.flatten().fieldErrors,message:"Missing Fields. Failed to Create Invoice."};let{customerId:s,amount:a,status:d}=t.data,l=new Date().toISOString().split("T")[0];try{await (0,i.ll)`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${s}, ${100*a}, ${d}, ${l})
  `}catch(e){return{message:"Database Error: Failed to Create Invoice."}}(0,n.revalidatePath)("/dashboard/invoices"),(0,o.redirect)("/dashboard/invoices")}async function y(e,r,t){let s=g.safeParse({customerId:t.get("customerId"),amount:t.get("amount"),status:t.get("status")});if(!s.success)return{errors:s.error.flatten().fieldErrors,message:"Missing Fields. Failed to Update Invoice."};let{customerId:a,amount:d,status:l}=s.data;try{await (0,i.ll)`
    UPDATE invoices
    SET customer_id = ${a}, amount = ${100*d}, status = ${l}
    WHERE id = ${e}
  `}catch(e){return{message:"Database Error: Failed to Update Invoice."}}(0,n.revalidatePath)("/dashboard/invoices"),(0,o.redirect)("/dashboard/invoices")}async function w(e){await (0,i.ll)`DELETE FROM invoices WHERE id = ${e}`,(0,n.revalidatePath)("/dashboard/invoices")}async function N(e,r){try{await x("credentials",r)}catch(e){if(e instanceof d.lR){if("CredentialsSignin"===e.type)return"Invalid credentials.";return"Something went wrong."}throw e}}(0,h.D)([j,y,w,N]),(0,s.A)(j,"601ccaf9c5a570ff2ef0479df91e8c7d19e35fc74d",null),(0,s.A)(y,"70bfeea6e612ec68e9e5fd9e3aed8a4e622441e26d",null),(0,s.A)(w,"40516ca5328a198076851edbde83461e4ba2f5a7bf",null),(0,s.A)(N,"60532e03dbcce827ee1d34a21e8c93d8b66d315da6",null)},92568:(e,r,t)=>{"use strict";t.r(r),t.d(r,{"00365b75ab664f029673e846ae0ccd8fb69c3d3d2d":()=>s.x});var s=t(69491)},6602:(e,r,t)=>{Promise.resolve().then(t.bind(t,549))},46354:(e,r,t)=>{Promise.resolve().then(t.bind(t,24521))},65709:(e,r,t)=>{Promise.resolve().then(t.bind(t,58646)),Promise.resolve().then(t.t.bind(t,72527,23))},29325:(e,r,t)=>{Promise.resolve().then(t.bind(t,53899)),Promise.resolve().then(t.t.bind(t,23371,23))},24521:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(73566);function a({error:e,reset:r}){return(0,s.jsxs)("main",{className:"flex h-full flex-col items-center justify-center",children:[(0,s.jsx)("h2",{className:"text-center",children:"Something went wrong!"}),(0,s.jsx)("button",{className:"mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400",onClick:()=>r(),children:"Try again"})]})}t(36463)},94816:(e,r,t)=>{"use strict";t.d(r,{$:()=>i});var s=t(73566),a=t(8219);function i({children:e,className:r,...t}){return(0,s.jsx)("button",{...t,className:(0,a.A)("flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",r),children:e})}},53899:(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var s=t(73566),a=t(79070),i=t(48869),n=t(25211),o=t(73240),d=t(90726),l=t(94816),c=t(29830);let u=(0,c.createServerReference)("601ccaf9c5a570ff2ef0479df91e8c7d19e35fc74d",c.callServer,void 0,c.findSourceMapURL,"createInvoice");var m=t(36463);function p({customers:e}){let[r,t]=(0,m.useActionState)(u,{message:null,errors:{}});return(0,s.jsxs)("form",{action:t,children:[(0,s.jsxs)("div",{className:"rounded-md bg-gray-50 p-4 md:p-6",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"customer",className:"mb-2 block text-sm font-medium",children:"Choose customer"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("select",{id:"customer",name:"customerId",className:"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500",defaultValue:"","aria-describedby":"customer-error",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Select a customer"}),e.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,s.jsx)(i.A,{className:"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"})]}),(0,s.jsx)("div",{id:"customer-error","aria-live":"polite","aria-atomic":"true",children:r.errors?.customerId&&r.errors.customerId.map(e=>(0,s.jsx)("p",{className:"mt-2 text-sm text-red-500",children:e},e))})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"amount",className:"mb-2 block text-sm font-medium",children:"Choose an amount"}),(0,s.jsxs)("div",{className:"relative mt-2 rounded-md",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{id:"amount",name:"amount",type:"number",step:"0.01",placeholder:"Enter USD amount",className:"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500","aria-describedby":"customer-error"}),(0,s.jsx)(n.A,{className:"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"})]}),(0,s.jsx)("div",{id:"customer-error","aria-live":"polite","aria-atomic":"true",children:r.errors?.amount&&r.errors.amount.map(e=>(0,s.jsx)("p",{className:"mt-2 text-sm text-red-500",children:e},e))})]})]}),(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("legend",{className:"mb-2 block text-sm font-medium",children:"Set the invoice status"}),(0,s.jsx)("div",{className:"rounded-md border border-gray-200 bg-white px-[14px] py-3",children:(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{id:"pending",name:"status",type:"radio",value:"pending",className:"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2","aria-describedby":"customer-error"}),(0,s.jsxs)("label",{htmlFor:"pending",className:"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600",children:["Pending ",(0,s.jsx)(o.A,{className:"h-4 w-4"})]})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{id:"paid",name:"status",type:"radio",value:"paid",className:"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2","aria-describedby":"customer-error"}),(0,s.jsxs)("label",{htmlFor:"paid",className:"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white",children:["Paid ",(0,s.jsx)(d.A,{className:"h-4 w-4"})]})]})]})}),(0,s.jsx)("div",{id:"customer-error","aria-live":"polite","aria-atomic":"true",children:r.errors?.status&&r.errors.status.map(e=>(0,s.jsx)("p",{className:"mt-2 text-sm text-red-500",children:e},e))}),(0,s.jsx)("div",{id:"customer-error","aria-live":"polite","aria-atomic":"true",children:r.errors?.customerId&&r.errors?.amount&&r.errors?.status&&(0,s.jsx)("p",{className:"mt-2 text-sm text-red-500",children:"Missing Fields. Failed to Create Invoice."})})]})]}),(0,s.jsxs)("div",{className:"mt-6 flex justify-end gap-4",children:[(0,s.jsx)(a.default,{href:"/dashboard/invoices",className:"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200",children:"Cancel"}),(0,s.jsx)(l.$,{type:"submit",children:"Create Invoice"})]})]})}},46241:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>o});var s=t(36050),a=t(58646),i=t(46255),n=t(62127);let o={title:"Create Invoice"};async function d(){let e=await (0,n.gn)();return(0,s.jsxs)("main",{children:[(0,s.jsx)(i.A,{breadcrumbs:[{label:"Invoices",href:"/dashboard/invoices"},{label:"Create Invoice",href:"/dashboard/invoices/create",active:!0}]}),(0,s.jsx)(a.default,{customers:e})]})}},549:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(16994).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/dashboard/invoices/error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/dashboard/invoices/error.tsx","default")},46255:(e,r,t)=>{"use strict";t.d(r,{A:()=>d});var s=t(36050),a=t(72491),i=t(79834),n=t(3622),o=t.n(n);function d({breadcrumbs:e}){return(0,s.jsx)("nav",{"aria-label":"Breadcrumb",className:"mb-6 block",children:(0,s.jsx)("ol",{className:(0,a.$)(o().className,"flex text-xl md:text-2xl"),children:e.map((r,t)=>(0,s.jsxs)("li",{"aria-current":r.active,className:(0,a.$)(r.active?"text-gray-900":"text-gray-500"),children:[(0,s.jsx)(i.default,{href:r.href,children:r.label}),t<e.length-1?(0,s.jsx)("span",{className:"mx-3 inline-block",children:"/"}):null]},r.href))})})}},58646:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});let s=(0,t(16994).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/ui/invoices/create-form.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/diana/Learning/01-Web-Dev/16-Nextjs/nextjs-dashboard/app/ui/invoices/create-form.tsx","default")},90726:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var s=t(36463);let a=s.forwardRef(function({title:e,titleId:r,...t},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},t),e?s.createElement("title",{id:r},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))})},73240:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var s=t(36463);let a=s.forwardRef(function({title:e,titleId:r,...t},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},t),e?s.createElement("title",{id:r},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})},25211:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var s=t(36463);let a=s.forwardRef(function({title:e,titleId:r,...t},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},t),e?s.createElement("title",{id:r},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})},48869:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var s=t(36463);let a=s.forwardRef(function({title:e,titleId:r,...t},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},t),e?s.createElement("title",{id:r},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))})},72491:(e,r,t)=>{"use strict";function s(){for(var e,r,t=0,s="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=function e(r){var t,s,a="";if("string"==typeof r||"number"==typeof r)a+=r;else if("object"==typeof r){if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(s=e(r[t]))&&(a&&(a+=" "),a+=s)}else for(s in r)r[s]&&(a&&(a+=" "),a+=s)}return a}(e))&&(s&&(s+=" "),s+=r);return s}t.d(r,{$:()=>s,A:()=>a});let a=s}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[263,562,191,857,412,851,167,514],()=>t(87900));module.exports=s})();