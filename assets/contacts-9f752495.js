import"./responsive-9893417d.js";const t="modal-active",s=document.querySelector("#form-modal"),l=document.querySelector("#success-modal"),n=document.querySelector("#form"),u=document.querySelector("#open-form-modal-btn");document.querySelector("#launch-btn");const f=document.querySelectorAll(".close-btn");u.addEventListener("click",()=>{s.classList.add(t)});const a=()=>{s.classList.remove(t)},c=()=>{l.classList.remove(t)},d=()=>{l.classList.add(t)};f.forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation(),a(),c()})});function S(){s.querySelectorAll("input").forEach(e=>{e.value=""})}n.addEventListener("submit",o=>{o.preventDefault();const e=new FormData(n);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(e).toString()}).then(()=>{setTimeout(()=>{a(),setTimeout(d,700),setTimeout(c,300),S()},300)}).catch(i=>console.log("Sending form failed"))});const r=document.querySelector("#myModal2"),y=document.querySelector("#form2"),p=document.querySelector("#contactBtn");document.querySelector("#contact-submit-btn");const h=document.querySelectorAll(".close");p.addEventListener("click",()=>{r.classList.add(t)});const m=()=>{r.classList.remove(t)};h.forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation(),m(),c()})});function L(){r.querySelectorAll("input").forEach(e=>{e.value=""})}y.addEventListener("submit",o=>{o.preventDefault();const e=new FormData(n);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(e).toString()}).then(()=>{setTimeout(()=>{m(),setTimeout(d,700),setTimeout(c,300),L()},300)}).catch(i=>console.log("Sending form failed"))});
