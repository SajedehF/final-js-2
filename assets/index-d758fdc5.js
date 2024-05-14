(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();async function o(){let a="";try{a=(await(await fetch("https://sajedehf.github.io/jsone-1/db.json")).json()).menu.map(t=>`<li class="nav-item">
        <a class="nav-link text-white capitalize" href=${t.link}>${t.name}</a>
      </li>`),document.querySelector(".navbar-nav").insertAdjacentHTML("afterbegin",a.join(""))}catch(r){console.log(r.message)}}async function c(){let a="";try{a=(await(await fetch("https://6640683da7500fcf1a9db339.mockapi.io/prouducts")).json()).map(t=>`  <div class="w-full">
        <h3>title:${t.title}</h3>
        <p class="text-">description:${t.description}</p>
        <img src=${t.image} class=" w-2/3" alt="">
        <div class="flex justify-between">
          <p>price:${t.price}</p>
          <p>rate:${t.rate}</p>

        </div>
      </div>`),document.querySelector(".products").insertAdjacentHTML("afterbegin",a.join(""))}catch(r){console.log(r.message)}}async function l(){let a="";try{a=(await(await fetch("https://sajedehf.github.io/jsone-1/db.json")).json()).slider.map(t=>`<div class="swiper-slide">
     <img src=${t.image} alt=${t.alt}>
    </div>`),document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",a.join(""))}catch(r){console.log(r.message)}}function d(){new Swiper(".mySwiper",{spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}})}async function u(){await o(),await l(),await c(),d()}u();
