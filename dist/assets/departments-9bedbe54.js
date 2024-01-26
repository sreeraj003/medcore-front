import{r as t,a as m,j as e,D as L,v as B}from"./index-b85c587b.js";function T(){const[u,h]=t.useState([]),[c,b]=t.useState(""),i=localStorage.getItem("adminToken"),[o,n]=t.useState(""),[g,j]=t.useState([]),[p,N]=t.useState(""),[f,x]=t.useState([]),[D,v]=t.useState(""),d=t.useCallback(async()=>{await m.get("http://localhost:8080/admin/departments",{headers:{Authorization:`Bearer ${i}`}}).then(a=>{h(a.data),x(a.data)})},[i]),y=a=>{const s=a.target.value.toLowerCase();v(s);const l=u.filter(r=>r.name.toLowerCase().startsWith(s));console.log(l),x(l)},w=async a=>{await m.patch("http://localhost:8080/admin/manageDepartment",{status:a.isBlocked,id:a._id},{headers:{Authorization:`Bearer ${i}`}}).then(s=>{s=="error"?setTimeout(()=>{n("")},4e3):h(l=>l.map(r=>r._id===a._id?{...r,isBlocked:!r.isBlocked}:r))})},C=[{name:"ID",selector:a=>a._id},{name:"name",selector:a=>a.name},{name:"Created at",selector:a=>a.timeStamp},{name:"Image",selector:a=>e.jsx("img",{className:"m-2 ms-0",width:"100px",src:a.image,alt:""})},{name:"Action",cell:a=>e.jsx("button",{className:"btn btn-success",onClick:()=>w(a),children:a.isBlocked==!1?"Block":"Unblock"})}],k=a=>{N(URL.createObjectURL(a.target.files[0])),j(a.target.files[0])},S=async()=>{if(B(c)){const s=new FormData;s.append("image",g),s.append("newDep",c),await m.post("http://localhost:8080/admin/createDepartment",s,{headers:{Authorization:`Bearer ${i}`}}).then(l=>{n(l.data),setTimeout(()=>{n("")},4e3),d()})}else n("capLetter"),setTimeout(()=>{n("")},4e3)};return t.useEffect(()=>{d()},[d]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h1",{className:"modal-title fs-5",id:"exampleModalLabel",children:"Create Department"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("label",{htmlFor:"depName ",children:"Department Name"}),e.jsx("p",{style:{opacity:"60%",fontSize:"10px"},children:"Please note that the first letter should be capital"}),e.jsx("input",{type:"text",value:c,onChange:a=>b(a.target.value),className:"form-control",name:"depName"}),p?e.jsx("img",{className:"mt-2",src:p,alt:"img",width:"100px",height:"120px"}):e.jsx("img",{className:"mt-2",width:"100px",height:"120px",src:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",alt:"sf"})," ",e.jsx("br",{}),e.jsx("label",{htmlFor:"image",className:"mt-2",children:" Upload image"}),e.jsx("br",{}),e.jsx("input",{type:"file",onChange:k})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),e.jsx("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:S,children:"Create"})]})]})})}),e.jsx("div",{children:e.jsx("button",{type:"button",className:"btn mb-2 ms-1 btn-success","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Create Department"})}),e.jsxs("div",{className:"ms-1",style:{zIndex:"0"},children:[o=="error"?e.jsx("div",{className:"alert alert-danger",role:"alert",children:"There was an error! cannot create depaprtment."}):o=="success"?e.jsx("div",{className:"alert alert-success",role:"alert",children:"Department created successfully."}):o==="exist"?e.jsx("div",{className:"alert alert-danger",role:"alert",children:"Department already exist."}):o==="capLetter"?e.jsx("div",{className:"alert alert-danger",role:"alert",children:"First letter of department should be capital."}):"",e.jsx("h3",{children:"Departments"}),e.jsx("input",{type:"text",value:D,onChange:y,placeholder:"Search...",className:"form-control w-25 mb-2"}),e.jsx(L,{columns:C,title:"Departments",data:f})]})]})}export{T as default};
