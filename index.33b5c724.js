!function(){var t=document.querySelector(".button__menu"),e=document.querySelector(".burger"),n=document.querySelectorAll(".logo__button"),o=document.querySelector(".consultation__window"),c=document.querySelector(".consultation__window--knopka");t.addEventListener("click",(function(n){e.classList.toggle("burger__open"),document.body.classList.toggle("offScroll"),t.classList.toggle("button__menu--close")})),n.forEach((function(t){t.addEventListener("click",(function(t){o.classList.toggle("consultation__window--open")}))})),c.addEventListener("click",(function(t){o.classList.toggle("consultation__window--open")})),o.addEventListener("click",(function(t){t.target===t.currentTarget&&o.classList.toggle("consultation__window--open")}));var l=document.querySelector(".projects__menu-images");document.querySelectorAll(".projects__pagination-li").forEach((function(t,e,n){t.addEventListener("click",(function(){n.forEach((function(t){t.classList.remove("projects__pagination-li--current")})),t.classList.add("projects__pagination-li--current"),i(e+1)}))}));function i(t){var e=l.querySelectorAll(".projects__menu-images-li");e.forEach((function(t){t.style.display="none"}));for(var n=4*(t-1),o=n+4,c=n;c<o;c++)e[c]&&(e[c].style.display="block")}i(1);var r=document.querySelector(".owners__wrapper--list"),s=document.querySelectorAll(".owners__pagination--button"),a=null,u=30,d=0;r.addEventListener("touchstart",(function(t){return a=t.targetTouches[0].clientX})),r.addEventListener("touchend",(function(t){a&&a-t.changedTouches[0].clientX>150&&((u-=320)<-1*(t.currentTarget.scrollWidth-320)&&(u=-1*(t.currentTarget.scrollWidth-320)),r.style.cssText="left: ".concat(u,"px;"),d++),a&&a-t.changedTouches[0].clientX<-150&&((u+=320)>0&&(u=30),r.style.cssText="left: ".concat(u,"px;"),d--),s.forEach((function(t,e){e===d?t.classList.add("owners__pagination--button-active"):t.classList.add("owners__pagination--button")}))})),document.querySelectorAll(".faq__list-li").forEach((function(t){t.addEventListener("click",(function(e){console.log(e),t.classList.toggle("faq__list-li--open")}))}))}();
//# sourceMappingURL=index.33b5c724.js.map
