import{r as a,j as s,D as p,a as x}from"./index-b85c587b.js";function g(){const o=localStorage.getItem("doctorToken"),[n,l]=a.useState(),[m,d]=a.useState(""),[i,r]=a.useState([]);a.useEffect(()=>{async function e(){await x.get("http://localhost:8080/admin/payments",{headers:{Authorization:`Bearer ${o}`}}).then(t=>{l(t.data),r(t.data)})}e()},[o]);const u=a.useCallback(e=>{const t=e.target.value.toLowerCase();d(t);const c=n.filter(f=>f.docData[0].name.toLowerCase().startsWith(t));console.log(c),r(c)},[n]),h=[{name:"Id",selector:e=>e._id},{name:"Patient",selector:e=>e.userData[0].userName},{name:"Doctor",selector:e=>e.docData[0].name},{name:"Amount",selector:e=>e.amount},{name:"Date",selector:e=>e.date}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:"Payments"}),s.jsx("input",{type:"text",value:m,onChange:u,placeholder:"Search...",className:"form-control w-25 mb-2"}),s.jsx(p,{columns:h,title:"Patients",data:i})]})}export{g as default};