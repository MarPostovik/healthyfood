import"./responsive-e0914dbc.js";const c="modal-active",r=document.querySelector("#form-modal"),d=document.querySelector("#success-modal"),l=document.querySelector("#form"),f=document.querySelector("#open-form-modal-btn");document.querySelector("#launch-btn");const S=document.querySelectorAll(".close-btn");f.addEventListener("click",()=>{r.classList.add(c)});const m=()=>{r.classList.remove(c)},a=()=>{d.classList.remove(c)},u=()=>{d.classList.add(c)};S.forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),m(),a()})});function y(){const e=r.querySelectorAll("input"),o=r.querySelectorAll("textarea");e.forEach(t=>{t.value=""}),o.forEach(t=>{t.value=""})}l.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(l);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(o).toString()}).then(()=>{setTimeout(()=>{m(),setTimeout(u,700),setTimeout(a,300),y()},300)}).catch(t=>console.log("Sending form failed"))});const n=document.querySelector("#myModal2"),s=document.querySelector("#form2"),h=document.querySelector("#contactBtn");document.querySelector("#contact-submit-btn");const p=document.querySelectorAll(".close");h.addEventListener("click",()=>{n.classList.add(c)});const i=()=>{n.classList.remove(c)};p.forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),i(),a()})});function v(){const e=n.querySelectorAll("input"),o=n.querySelectorAll("textarea");e.forEach(t=>{t.value=""}),o.forEach(t=>{t.value=""})}s.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(s);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(o).toString()}).then(()=>{setTimeout(()=>{i(),setTimeout(u,700),setTimeout(a,300),v()},300)}).catch(t=>console.log("Sending form failed"))});
