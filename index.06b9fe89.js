!function(){function t(t){return fetch("https://books-backend.p.goit.global/books/category?category=".concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}fetch("https://books-backend.p.goit.global/books/category-list ").then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(t){return function(t){var o=t.map((function(t){var n=t.list_name;return'<li class="category_list" name="'.concat(n,'">').concat(n,"</li>")})).join(" ");n.insertAdjacentHTML("beforeend",o)}(t)})).catch((function(t){return console.error("Error fetching categories:",t)}));var n=document.querySelector(".category__list"),o=document.querySelector(".category_title"),e=null;function r(t){e&&(e.style.textTransform="none",e.classList.remove("active")),t.style.textTransform="uppercase",t.classList.add("active"),e=t}n.addEventListener("click",(function(t){var n=t.target;n.classList.contains("category_list")&&r(n)})),o.addEventListener("click",(function(){r(o)}));var c=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"/img/save_2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"/img/hope_2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"/img/united_2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"/img/medical_2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"src/images/charity/medecins_2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"/img/razom_2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"/img/action_2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"/img/vision_2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"/img/prytula_2x.png"}],i=document.querySelector(".container-wrapper"),a=document.getElementById("scroll-down"),s=0;function l(t){i.innerHTML="";for(var n=t;n<t+6;n++){var o=n%c.length,e=c[o],r=e.title,a=e.url,s=e.img,l=document.createElement("div");l.classList.add("content"),l.innerHTML='\n              <div class="number">'.concat((o+1).toString().padStart(2,"0"),'</div>\n              <li class="list-charity">\n                  <a href="').concat(a,'" target="_blank">\n                      <img class="images-charity" src="').concat(s,'" alt="').concat(r,'" height="32px">\n                  </a>\n              </li>\n          '),i.appendChild(l)}}a.addEventListener("click",(function(){l(s+=6)})),l(s);var u={categoriesContEl:document.querySelector(".categories"),bookEl:document.querySelector(".book_cards")};fetch("https://books-backend.p.goit.global/books/top-books").then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(t){return function(t){t.map((function(t){return n=t.list_name,o=t.books,e='<h2 class="js-name-category">'.concat(n,"</h2>"),r=o.map((function(t){return'<li class="js-item-book">\n            <img class="img-book" src="'.concat(t.book_image,'" alt="">\n            <div class="js-title-book">\n            <h3 class="js-name-book">').concat(t.title,'</h3>\n            <p class="js-contributor-book">').concat(t.contributor,"</p>\n            </div>\n        </li>")})).join(""),void u.bookEl.insertAdjacentHTML("beforeend",'<div class="js-container-categories">'.concat(e,'\n        <ul class="js-list-books-category">').concat(r,'</ul>\n        <button type="button" class="js-btn-category">SEE MORE</button></div>'));var n,o,e,r}))}(t)}));var g={categoriesContEl:document.querySelector(".category__list"),bookEl:document.querySelector(".book_cards")};g.categoriesContEl.addEventListener("click",(function(n){var o=n.target.textContent;t(o).then((function(t){return function(t,n){var o='<h2 class="js-category-title">'.concat(n,"</h2>");console.log(o);var e=t.map((function(t){var n=t.book_image,o=t.title,e=t.contributor,r=t._id;return'<li class = "book-by-genre" id='.concat(r,'>\n            <img class ="img_book" src="').concat(n,'" alt="">\n            <h3 class ="book-name">').concat(o,'</h3>\n            <p class ="contributor">').concat(e,"</p>\n        </li>")})).join(" "),r='<ul class="js-cont-for-books">'.concat(e,"</ul>");g.bookEl.innerHTML=o+r}(t,o)}))}))}();
//# sourceMappingURL=index.06b9fe89.js.map
