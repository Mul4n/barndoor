(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{9877:function(e,t,n){Promise.resolve().then(n.bind(n,6950))},1097:function(e,t,n){"use strict";var r=n(9018),o=n(7437);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},7266:function(e,t,n){"use strict";var r=n(9018),o=n(7437);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},3423:function(e,t,n){"use strict";var r=n(9018),o=n(7437);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},6950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7437),o=n(2265),c=n(6463),s=n(1733),d=n(9806),i=n(335),a=n(511),l=n(1097),u=n(3423),h=n(7266),b=n(5150),f=n(8371);function g(e){let{id:t}=e,n=(0,c.useRouter)(),g=(0,c.useSearchParams)().has("edit"),[j,p]=(0,o.useState)({_id:"",name:"",grade:"",holds:{}});if((0,o.useEffect)(()=>{(async()=>{let{data:e}=await (await fetch("http://localhost:7668/boulders/".concat(t))).json();p(e)})()},[t]),!j)return(0,r.jsx)(r.Fragment,{children:"Whoops not a known boulder"});let x=async()=>{let e=JSON.stringify(j);await (await fetch("http://localhost:7668/boulders/".concat(t),{method:"PUT",body:e,headers:{"Content-Type":"application/json"}})).json(),n.push("/boulder/".concat(j._id))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{className:"".concat(b.N[parseInt(j.grade)]," ").concat("5"!==j.grade?"text-white":"text-black"),position:"static",children:(0,r.jsxs)(d.Z,{variant:"regular",className:"justify-between",children:[(0,r.jsx)(i.Z,{edge:"start",color:"inherit",onClick:()=>n.push("/"),children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(a.Z,{className:"font-freshman",variant:"h5",color:"inherit",component:"div",children:"".concat(null==j?void 0:j.name)}),g?(0,r.jsx)(i.Z,{edge:"end",color:"inherit",onClick:x,children:(0,r.jsx)(u.Z,{})}):(0,r.jsx)(i.Z,{edge:"end",color:"inherit",onClick:()=>n.push("/boulder/".concat(j._id,"?edit")),children:(0,r.jsx)(h.Z,{})})]})}),(0,r.jsx)(f.Z,{boulder:j,setBoulder:p,editMode:g})]})}function j(e){let{params:{id:t}}=e;return(0,r.jsx)(g,{id:t})}},8371:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437),o=n(5150);function c(e){let{index:t,boulder:n,setBoulder:c,editMode:s}=e;return(0,r.jsx)("div",{className:" ".concat(o.p[n.holds["".concat(t)]]),onClick:()=>{if(s){if((parseInt(n.holds["".concat(t)])+1)%4==0)delete n.holds[t];else{var e;n.holds["".concat(t)]="".concat(parseInt(null!==(e=n.holds[t])&&void 0!==e?e:0)+1)}c({...n})}}})}function s(e){let{boulder:t,setBoulder:n,editMode:o}=e;return(0,r.jsxs)("div",{style:{backgroundSize:"cover",backgroundImage:"url(".concat("/_next/static/media/board_adjusted.68f20502.jpg",")"),height:"".concat(747/689*100,"vw"),width:"100vw"},children:[(0,r.jsx)("div",{className:"grid grid-cols-12 gap-0.5",style:{width:"100vw",height:"".concat(538/756*100,"%")},children:[...Array(144).fill("").map((e,s)=>(0,r.jsx)(c,{index:s.toString(),boulder:t,setBoulder:n,editMode:o},"hold_".concat(s)))]}),(0,r.jsx)("div",{})]})}},5150:function(e,t,n){"use strict";n.d(t,{N:function(){return o},p:function(){return r}});let r={undefined:"",1:"bg-green-500/30 rounded-full border-2 border-solid border-green-500",2:"bg-blue-500/30 rounded-full border-2 border-solid border-blue-500",3:"bg-red-500/30 rounded-full border-2 border-solid border-red-500"},o=["bg-yellow-500","bg-orange-500","bg-blue-500","bg-red-500","bg-black","bg-white"]}},function(e){e.O(0,[88,971,23,744],function(){return e(e.s=9877)}),_N_E=e.O()}]);