!function(){var e=document.querySelector(".button__menu"),n=document.querySelector(".burger"),t=document.querySelectorAll(".logo__button"),o=document.querySelector(".consultation__window"),c=document.querySelector(".consultation__window--knopka"),i=document.querySelectorAll(".header__suppbox-language");e.addEventListener("click",(function(t){n.classList.toggle("burger__open"),document.body.classList.toggle("offScroll"),e.classList.toggle("button__menu--close")})),t.forEach((function(e){e.addEventListener("click",(function(e){o.classList.toggle("consultation__window--open")}))})),c.addEventListener("click",(function(e){o.classList.toggle("consultation__window--open")})),o.addEventListener("click",(function(e){e.target===e.currentTarget&&o.classList.toggle("consultation__window--open")})),i.forEach((function(e,n,t){e.addEventListener("click",(function(e){"LI"===e.target.nodeName&&function(){for(var e=document.querySelectorAll(".header__suppbox-language-li"),n=0;n<e.length;n++)e[n].classList.toggle("header__suppbox-language-li--active")}()}))}));var l=document.querySelector(".projects__menu-images");document.querySelectorAll(".projects__pagination-li").forEach((function(e,n,t){e.addEventListener("click",(function(){t.forEach((function(e){e.classList.remove("projects__pagination-li--current")})),e.classList.add("projects__pagination-li--current"),r(n+1)}))}));function r(e){var n=l.querySelectorAll(".projects__menu-images-li");n.forEach((function(e){e.style.display="none"}));for(var t=4*(e-1),o=t+4,c=t;c<o;c++)n[c]&&(n[c].style.display="block")}r(1),document.querySelectorAll(".footer__nav--item").forEach((function(e){e.addEventListener("click",(function(n){e.classList.toggle("footer__nav--item--open")}))}));var a=document.querySelector(".blog__page-galery-container-ul"),u=document.querySelector(".blog__page-pagination-button-previous"),s=document.querySelector(".blog__page-pagination-button-next"),g=a.querySelectorAll(".blog__page-galery-container-ul-li"),d=g.length,_=document.querySelector(".blog__page-pagination-ul"),p=1,f=5,m=window.innerWidth;function v(e){var n=g;n.forEach((function(e){e.style.display="none"}));for(var t=(e-1)*f,o=t+f,c=t;c<o;c++)n[c]&&(n[c].style.display="block")}function y(){for(var e=Math.ceil(d/f),n=[],t=0;t<e;t++)n.push('<li class="blog__page-pagination-li">'.concat(t+1,"</li>"));_.innerHTML=n.join(""),document.querySelectorAll(".blog__page-pagination-li").forEach((function(e,n,t){e.addEventListener("click",(function(){t.forEach((function(e){e.classList.remove("projects__pagination-li--current")})),e.classList.add("projects__pagination-li--current"),v(n+1),p=n+1}))}))}function L(e){document.querySelectorAll(".blog__page-pagination-li").forEach((function(n,t,o){n.classList.remove("projects__pagination-li--current"),e-1===t&&n.classList.add("projects__pagination-li--current")}))}f=m<767?5:m<1919?6:12,v(1),y(),L(p),window.addEventListener("resize",(function(e){var n=e.currentTarget.innerWidth;n<767?(f=5,v(p),y()):n<1919?(f=6,v(p),y()):(f=12,v(p),y())})),u.addEventListener("click",(function(){p>1&&(v(--p),L(p))})),s.addEventListener("click",(function(){p<Math.ceil(d/f)&&(v(++p),L(p))})),document.querySelectorAll(".blog__page-pagination-li").forEach((function(e,n,t){e.addEventListener("click",(function(){t.forEach((function(e){e.classList.remove("projects__pagination-li--current")})),e.classList.add("projects__pagination-li--current"),v(n+1),p=n+1}))}))}();
//# sourceMappingURL=allCategory.ff3b2582.js.map
