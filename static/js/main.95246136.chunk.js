(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i(1),n=i(10),s=i.n(n),r=i(3),o=i(7),d=i.n(o),u=(i(33),i(2)),l=Object(c.createContext)(null),m=Object(c.createContext)(null);i(34);var j=function(e){var t=Object(c.useState)(0),i=Object(r.a)(t,2),n=i[0],s=i[1],o=Object(c.useContext)(m),d=o.userBasket,u=o.setUserBasket;return Object(c.useEffect)((function(){var t=0;if("food"===e.props.category)t+=e.props.price,e.props.additional.map((function(e){t+=e.price*e.qty}));else{var i=d.find((function(t){return t.title===e.props.title}));t+=i.qty*i.price}s(n+t)}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"mainBasketItem",children:Object(a.jsxs)("div",{className:"mainBasketBoxItem",children:[Object(a.jsx)("div",{className:"mainBasketBoxItemImage",children:Object(a.jsx)("img",{alt:"Product image",src:"".concat("/Ecommerce","/images/").concat(e.props.image)})}),Object(a.jsxs)("div",{className:"mainBasketBoxTitle",children:[Object(a.jsx)("h4",{children:e.props.title}),Object(a.jsx)("span",{children:e.props.ingredients}),Object(a.jsx)("p",{children:function(){if("food"===e.props.category){var t="Adicionais: ";return e.props.additional.map((function(e){t+="".concat(e.product," x").concat(e.qty,"; ")})),t}return null}()})]}),Object(a.jsxs)("div",{className:"mainBasketBoxDelete",children:[Object(a.jsxs)("span",{children:["R$",e.props.price," ","food"===e.props.category?"+ Adicionais = R$".concat(n.toFixed(2)):"x".concat(function(){var t=d.find((function(t){return t.title===e.props.title}));if(t)return t.qty}())]}),Object(a.jsx)("button",{onClick:function(){u(d.filter((function(t){return t.uuid!==e.props.uuid})))},children:"Remover"})]})]})})})};i(35);var p=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),i=t[0],n=t[1],s=Object(c.useContext)(m),o=s.userBasket,d=(s.setUserBasket,function(){document.getElementsByClassName("mainBasket")[0].style.scale="0"});return Object(c.useEffect)((function(){var e=0;o.map((function(t){"food"===t.category?(t.additional.map((function(t){e+=t.price*t.qty})),e+=t.price):e+=t.price*t.qty})),n(e)}),[o]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{onMouseLeave:d,className:"mainBasket",children:[Object(a.jsx)("div",{className:"mainBasketCloseBox",children:Object(a.jsx)("img",{onClick:d,alt:"shooping basket close",src:"".concat("/Ecommerce","/images/basket.svg")})}),Object(a.jsx)("div",{className:"mainBasketBox",children:o.map((function(e){return Object(a.jsx)(j,{props:e},e.uuid)}))}),Object(a.jsxs)("div",{className:"mainBasketTotal",children:[Object(a.jsxs)("p",{children:["Total a pagar: R$",i.toFixed(2)]}),Object(a.jsx)("button",{children:"Finalizar compra"})]})]})})};i(36);var b=function(){var e=Object(c.useContext)(l),t=e.userData,i=e.setUserData,n=Object(c.useContext)(m),s=n.userBasket,o=(n.setUserBasket,Object(c.useState)(0)),d=Object(r.a)(o,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){b(s.length)}),[s]),Object(c.useEffect)((function(){var e=document.getElementsByClassName("mainNavbarList")[0],i=document.getElementsByClassName("mainNavbarBasket")[0];"mainHero"!==t.actualScreen?(i.style.scale="1",i.style.transform="translate(0,0)",e.style.transform="translate(100%,0)"):(e.style.transform="translate(0,0)",i.style.transform="translate(0,-10vh)",i.style.scale="0")}),[t.actualScreen]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mainNavbar",children:[Object(a.jsxs)("div",{onClick:function(){i(Object(u.a)(Object(u.a)({},t),{},{actualScreen:"mainHero",lastScreen:t.actualScreen}))},className:"mainNavbarH1",children:[Object(a.jsx)("div",{className:"mainNavbarH1other"}),Object(a.jsx)("h1",{children:"LaPizzaria"})]}),Object(a.jsxs)("ul",{className:"mainNavbarList",children:[Object(a.jsx)("li",{children:"Produtos"}),Object(a.jsx)("li",{children:"Contato"}),Object(a.jsx)("li",{children:"Sobre"})]}),Object(a.jsxs)("div",{className:"mainNavbarBasket",children:[Object(a.jsx)("img",{onClick:function(){document.getElementsByClassName("mainBasket")[0].style.scale="1"},id:"mainNavbarBasket",alt:"shooping basket",src:"".concat("/Ecommerce","/images/basket.svg")}),Object(a.jsx)("div",{className:"mainNavbarBasketCountBox",children:j}),Object(a.jsx)(p,{})]})]})})};i(37);var g=function(){var e=Object(c.useContext)(l),t=e.userData,i=e.setUserData;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mainHero screen",children:[Object(a.jsx)("div",{className:"mainHeroCircle"}),Object(a.jsx)("img",{alt:"Pizza logo",className:"mainPizza",src:"".concat("/Ecommerce","/images/pizza.svg")}),Object(a.jsxs)("div",{className:"mainHeroContents",children:[Object(a.jsxs)("div",{className:"mainHeroContent",children:[Object(a.jsx)("h1",{children:"LaPizzaria"}),Object(a.jsx)("p",{children:"A melhor pizza da cidade agora no conforto da sua casa! Quem disse que \xe9 preciso sair para comer bem? Fa\xe7a agora o seu pedido que chegamos a\xed com o que h\xe1 de melhor! "})]}),Object(a.jsx)("div",{className:"mainHeroBtns",children:Object(a.jsx)("button",{onClick:function(){i(Object(u.a)(Object(u.a)({},t),{},{actualScreen:"mainMenu",lastScreen:"mainHero"}))},className:"mainHeroMakeOrder",children:"Fa\xe7a Seu Pedido!"})})]}),Object(a.jsxs)("div",{className:"mainHeroFooter",children:[Object(a.jsx)("img",{alt:"Facebook logo",className:"",src:"".concat("/Ecommerce","/images/facebook.svg")}),Object(a.jsxs)("div",{className:"mainHeroFooterNames",children:[Object(a.jsx)("div",{className:"mainHeroFooterNamesBorder"}),Object(a.jsx)("span",{children:"Facebook"})]}),Object(a.jsx)("img",{alt:"Intagram logo",className:"",src:"".concat("/Ecommerce","/images/instagram.svg")}),Object(a.jsxs)("div",{className:"mainHeroFooterNames",children:[Object(a.jsx)("div",{className:"mainHeroFooterNamesBorder"}),Object(a.jsx)("span",{children:"Intagram"})]}),Object(a.jsx)("img",{alt:"Twitter logo",className:"",src:"".concat("/Ecommerce","/images/twitter.svg")}),Object(a.jsxs)("div",{className:"mainHeroFooterNames",children:[Object(a.jsx)("div",{className:"mainHeroFooterNamesBorder"}),Object(a.jsx)("span",{children:"Twitter"})]}),Object(a.jsx)("img",{alt:"Telegram logo",className:"",src:"".concat("/Ecommerce","/images/telegram.svg")}),Object(a.jsxs)("div",{className:"mainHeroFooterNames",children:[Object(a.jsx)("div",{className:"mainHeroFooterNamesBorder"}),Object(a.jsx)("span",{children:"Telegram"})]})]})]})})};var O=[{_id:0,category:"food",image:"pizzaMenu.jpg",title:"Calabresa",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:49.9},{_id:1,category:"food",image:"pizzaMenu.jpg",title:"4 Queijos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:59.9},{_id:2,category:"food",image:"pizzaMenu.jpg",title:"Lombinho com Catupiry",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:69.9},{_id:3,category:"food",image:"pizzaMenu.jpg",title:"Portuguesa",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:49.9},{_id:4,category:"food",image:"pizzaMenu.jpg",title:"Lombo",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:59.9},{_id:5,category:"food",image:"pizzaMenu.jpg",title:"Frango Desfiado",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:69.9},{_id:6,category:"food",image:"pizzaMenu.jpg",title:"Brocolis Refogado",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:49.9},{_id:7,category:"food",image:"pizzaMenu.jpg",title:"Estrogonofe de Frango",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:59.9},{_id:8,category:"food",image:"pizzaMenu.jpg",title:"Molho de Tomate com Cebola",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida.",price:69.9},{_id:9,category:"drink",image:"pizzaMenu.jpg",title:"Agua Mineral 250ml",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",price:5.9},{_id:10,category:"drink",image:"pizzaMenu.jpg",title:"Cerveja Brahma lata, 300ml",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",price:6.9},{_id:11,category:"drink",image:"pizzaMenu.jpg",title:"Coca-Cola 2L",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta.",price:9.9}],v=i(5),x=i(43);i(38);var h=function(e){var t=Object(c.useState)(e.props),i=Object(r.a)(t,2),n=i[0],s=(i[1],Object(c.useContext)(m)),o=s.userBasket,d=s.setUserBasket;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{onClick:function(){"food"===n.category&&e.function(n)},className:"menuItemMain",id:"hover",children:Object(a.jsxs)("div",{className:"menuItemContents",children:[Object(a.jsx)("div",{className:"menuItemImage",children:Object(a.jsx)("img",{alt:"Product image",src:"".concat("/Ecommerce","/images/").concat(n.image)})}),Object(a.jsxs)("div",{className:"menuItemDescContents",children:[Object(a.jsx)("h2",{children:n.title}),Object(a.jsx)("p",{children:n.description}),Object(a.jsx)("span",{children:n.ingredients})]}),Object(a.jsx)("div",{className:"menuItemPrice",children:Object(a.jsxs)("strong",{children:["R$",n.price]})}),"drink"===n.category?Object(a.jsxs)("div",{className:"menuItemBtns",children:[Object(a.jsx)("button",{onClick:function(){var e=o.find((function(e){return n.title===e.title}));d(e?o.map((function(t){return t.title===n.title?Object(u.a)(Object(u.a)({},e),{},{qty:e.qty+1}):t})):[].concat(Object(v.a)(o),[Object(u.a)(Object(u.a)({},n),{},{qty:1,uuid:Object(x.a)()})]))},children:"Adicionar"}),Object(a.jsx)("button",{children:"Remover"})]}):null]})})})};var f=[{product:"Batata-Palha",price:2.9},{product:"Batata Frita",price:12.9},{product:"Tomate",price:1.2},{product:"Alface",price:1},{product:"Bacon",price:6.9},{product:"Cora\xe7\xe3o",price:7.9},{product:"Cheddar",price:4.9}];i(39);var N=function(e){var t=Object(c.useState)(e.state),i=Object(r.a)(t,1)[0],n=Object(c.useState)([]),s=Object(r.a)(n,2),d=s[0],l=s[1],j=Object(c.useContext)(m),p=j.userBasket,b=j.setUserBasket,g=function(){var t=Object(u.a)(Object(u.a)({},i),{},{additional:d});b([].concat(Object(v.a)(p),[Object(u.a)(Object(u.a)({},t),{},{uuid:Object(x.a)()})])),function(e){o.store.addNotification({title:e.title||" ",message:e.message||" ",type:e.type||"default",insert:"top",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:1e3,onScreen:!0}})}({title:"Item adicionado ao carrinho!",type:"success"}),e.function(void 0)},O=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mainAdItem",children:[Object(a.jsx)("div",{className:"mainAdItemImage",children:Object(a.jsx)("img",{alt:"Product image",src:"".concat("/Ecommerce","/images/").concat(i.image)})}),Object(a.jsxs)("div",{className:"mainAdItemDetails",children:[Object(a.jsx)("p",{children:e.props.product}),Object(a.jsxs)("span",{children:["R$",e.props.price," unidade"]})]}),function(){var t=d.find((function(t){return t.product===e.props.product}));return t?t.qty:0}(),Object(a.jsxs)("div",{className:"mainAdItemBtns",children:[Object(a.jsx)("span",{onClick:function(){var t=d.find((function(t){return t.product===e.props.product}));l(t?d.map((function(i){return i.product===e.props.product?Object(u.a)(Object(u.a)({},t),{},{qty:t.qty+1}):i})):[].concat(Object(v.a)(d),[Object(u.a)(Object(u.a)({},e.props),{},{qty:1})]))},children:"+"}),Object(a.jsx)("span",{onClick:function(){var t=d.find((function(t){return t.product===e.props.product}));void 0!==t&&(1===t.qty?l(d.filter((function(t){return t.product!==e.props.product}))):l(d.map((function(i){return i.product===e.props.product?Object(u.a)(Object(u.a)({},t),{},{qty:t.qty-1}):i}))))},children:"-"})]})]})})};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mainMenuItemEditor",children:[Object(a.jsx)("h2",{children:"Produto:"}),Object(a.jsx)("div",{className:"menuItemMain",children:Object(a.jsxs)("div",{className:"menuItemContents",children:[Object(a.jsx)("div",{className:"menuItemImage",onClick:function(){e.function(void 0)},children:Object(a.jsx)("img",{alt:"Product image",src:"".concat("/Ecommerce","/images/").concat(i.image)})}),Object(a.jsxs)("div",{className:"menuItemDescContents",children:[Object(a.jsx)("h2",{children:i.title}),Object(a.jsx)("p",{children:i.description}),Object(a.jsx)("span",{children:i.ingredients})]}),Object(a.jsx)("div",{className:"menuItemPrice",children:Object(a.jsxs)("strong",{children:["R$",i.price]})})]})}),Object(a.jsx)("h2",{children:"Adicionais:"}),Object(a.jsx)("div",{className:"menuItemEditorConfig gridItemEditor",children:f.map((function(e){return Object(a.jsx)(O,{props:e},e.product)}))}),Object(a.jsx)("h2",{children:"Observa\xe7\xf5es:"}),Object(a.jsx)("div",{className:"menuItemEditorConfig",children:Object(a.jsx)("textarea",{spellCheck:"false",placeholder:"Escreva aqui suas necessidades!"})}),Object(a.jsxs)("div",{className:"menuItemEditorBttns",children:[Object(a.jsx)("button",{onClick:function(){e.function(void 0)},children:"Card\xe1pio"}),Object(a.jsx)("button",{onClick:function(){g()},children:"Adicionar"})]})]})})};i(40);var k=function(){var e=Object(c.useContext)(l),t=e.userData,i=e.setUserData,n=Object(c.useContext)(m).userBasket,s=Object(c.useState)(void 0),o=Object(r.a)(s,2),d=o[0],j=o[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mainMenu screen",children:[Object(a.jsx)("div",{className:"mainMenuCircle"}),Object(a.jsxs)("div",{className:"mainMenuContents",children:[Object(a.jsx)("div",{className:"mainMenuContentsItems",children:d?Object(a.jsx)(N,{function:j,state:d}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Pizzas:"}),O.map((function(e){if("food"===e.category)return Object(a.jsx)(h,{function:j,state:d,props:e},e._id)})),Object(a.jsx)("h2",{children:"Bebidas:"}),O.map((function(e){if("drink"===e.category)return Object(a.jsx)(h,{function:j,state:d,props:e},e._id)}))]})}),Object(a.jsxs)("div",{className:"mainMenuBtns",children:[Object(a.jsxs)("div",{onClick:function(){i(Object(u.a)(Object(u.a)({},t),{},{actualScreen:"mainHero",lastScreen:t.actualScreen}))},className:"mainMenuLeftArrow",children:[Object(a.jsx)("img",{alt:"Return button",src:"".concat("/Ecommerce","/images/leftArrow.svg")}),Object(a.jsx)("span",{children:"Voltar"})]}),0!==n.length?Object(a.jsxs)("div",{onClick:function(){i(Object(u.a)(Object(u.a)({},t),{},{actualScreen:"mainHero",lastScreen:t.actualScreen}))},className:"mainMenuRightArrow",children:[Object(a.jsx)("span",{children:"Finalizar"}),Object(a.jsx)("img",{alt:"Return button",src:"".concat("/Ecommerce","/images/rightArrow.svg")})]}):null]})]})]})})};var y=function(){var e=Object(c.useState)({actualScreen:"mainHero",lastScreen:"mainHero",mainHero:0,mainMenu:1}),t=Object(r.a)(e,2),i=t[0],n=t[1],s=Object(c.useState)([]),o=Object(r.a)(s,2),u=o[0],j=o[1];return Object(c.useEffect)((function(){var e=[].slice.call(document.getElementsByClassName("screen")),t=i.actualScreen>i.lastScreen?"translate(-100vw,0)":"translate(100vw,0)";e.forEach((function(e){var a=e.className.split(" ")[0];a===i.actualScreen?e.style.transform="translate(0,0)":a===i.lastScreen&&(e.style.transform=t)}))}),[i]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.Provider,{value:{userData:i,setUserData:n},children:Object(a.jsxs)(m.Provider,{value:{userBasket:u,setUserBasket:j},children:[Object(a.jsx)(d.a,{}),Object(a.jsx)(b,{}),Object(a.jsx)(g,{}),Object(a.jsx)(k,{})]})})})};i(41);s.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.95246136.chunk.js.map