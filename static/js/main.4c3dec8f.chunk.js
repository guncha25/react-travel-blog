(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"Carousel_wrapper__3Xhc1",content:"Carousel_content__1tjGa",article:"Carousel_article__2ccaB",control:"Carousel_control__DG5EJ",control_arrow:"Carousel_control_arrow__1aNA5",current:"Carousel_current__2wUAc",article_image:"Carousel_article_image__30vjJ",article_content:"Carousel_article_content__8KYad",article_author:"Carousel_article_author__1t2OI",avatar:"Carousel_avatar__2Wcyv",article_ingress:"Carousel_article_ingress__1tDA_"}},12:function(e,t,a){e.exports={article_list:"ArticleList_article_list__TSOF8",article_media:"ArticleList_article_media__37p_R",article:"ArticleList_article__2YLUN",article_content:"ArticleList_article_content__2F78R",article_author:"ArticleList_article_author__1T-Zm",avatar:"ArticleList_avatar__3C1M6",article_ingress:"ArticleList_article_ingress__pQiI2",footer:"ArticleList_footer__3tmD7",load_more:"ArticleList_load_more__2LXfE"}},13:function(e,t,a){e.exports={header:"Blog_header__3fZZA",part:"Blog_part__1jai1",meta:"Blog_meta__3km3k",date_read:"Blog_date_read__IIBkO",article_image:"Blog_article_image__1bC4P",article_author:"Blog_article_author__2KNf0",avatar:"Blog_avatar__38TSk",main:"Blog_main__3dDJU",more:"Blog_more__1qofy"}},14:function(e,t,a){e.exports={search_overlay:"Subscribe_search_overlay__2Swmj",close_search:"Subscribe_close_search__2cGqe",search_input:"Subscribe_search_input__1Lvc4",form:"Subscribe_form__2zFD5",info:"Subscribe_info__3_xLT",form_control:"Subscribe_form_control__2HFEo",btn:"Subscribe_btn__qFLDO"}},15:function(e,t,a){e.exports={header_title:"Footer_header_title__r1cWw",menu:"Footer_menu__2pwSg",social_menu:"Footer_social_menu__34A1X",footer:"Footer_footer__7dIj9",icon:"Footer_icon__2fpab"}},17:function(e,t,a){e.exports={search_overlay:"Search_search_overlay__3g-Zs",close_search:"Search_close_search__1opfS",search_input:"Search_search_input__3-qVe",search_results:"Search_search_results__O3W_E",search_item:"Search_search_item__3Pk7q"}},28:function(e,t,a){e.exports={container:"Container_container__3eZVY"}},30:function(e,t,a){e.exports={container:"NotFound_container__3FBDc"}},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),r=a(20),l=a.n(r),c=a(3),o=a(4),n=(a(36),a(7)),u=a(28),j=a.n(u),d=a(0),m=function(e){return Object(d.jsx)("div",{className:[j.a.container,e.className].join(" "),children:e.children})},b=a(17),h=a.n(b),g=[{id:"1",title:"Justo Fusce Ridiculus"},{id:"2",title:"Pharetra Dapibus Sollicitudin Elit Amet"},{id:"3",title:"Lorem Pellentesque Malesuada"},{id:"4",title:"Justo Nibh Porta"},{id:"5",title:"Euismod Risus Nibh Quam Sollicitudin"},{id:"6",title:"Cras Ultricies Elit Risus Fusce"},{id:"7",title:"Kas a blanka ko taks kola"},{id:"8",title:"Cool tas nu gan ir kkas you."}];var _=function(e){var t=Object(i.useState)([]),a=Object(n.a)(t,2),s=a[0],r=a[1],l=Object(i.useRef)(),o=function(e){e.preventDefault();var t=""===l.current.value?[]:g.filter((function(e){return e.title.toLowerCase().includes(l.current.value.toLowerCase())}));r(t.slice(0,3))};return Object(d.jsx)("div",{className:h.a.search_overlay,children:Object(d.jsxs)(m,{children:[Object(d.jsx)("span",{className:h.a.close_search,onClick:e.onClick,children:"Close"}),Object(d.jsx)("form",{onSubmit:o,children:Object(d.jsx)("input",{className:h.a.search_input,placeholder:"Type to Search",type:"search",ref:l,onChange:o})}),Object(d.jsx)("div",{className:h.a.search_results,children:s&&s.map((function(t){return Object(d.jsx)("h2",{className:h.a.search_item,children:Object(d.jsx)(c.b,{onClick:e.onClick,to:"/blog/".concat(t.id),children:t.title})},t.id)}))})]})})},O=a(14),x=a.n(O);var v=function(e){var t=Object(i.useRef)();return Object(d.jsx)("div",{className:x.a.search_overlay,children:Object(d.jsx)(m,{children:Object(d.jsxs)("form",{className:x.a.form,onSubmit:function(a){a.preventDefault(),e.onSubmit("".concat(t.current.value," subscribed to mailing list!")),e.onClick()},children:[Object(d.jsx)("span",{className:x.a.close_search,onClick:e.onClick,children:"Close"}),Object(d.jsx)("div",{className:x.a.info,children:"Subscribe to newsletters."}),Object(d.jsxs)("div",{className:x.a.form_control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(d.jsx)("input",{className:x.a.search_input,required:!0,placeholder:"name@mail.com",type:"email",id:"email",ref:t})]}),Object(d.jsx)("div",{className:x.a.form_control,children:Object(d.jsx)("input",{type:"submit",className:x.a.btn,value:"Subscribe"})})]})})})},p=a(6),f=a.n(p),N=a(2);var w=function(e){return Object(d.jsxs)("svg",Object(N.a)(Object(N.a)({},e),{},{xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",children:[Object(d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(d.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}))},D=s.a.createContext({isDark:!1,toggleTheme:function(){}}),k=function(e){var t=e.children,a=function(){var e=Object(i.useState)({isDark:!1,hasThemeLoaded:!1}),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(i.useEffect)((function(){var e="true"===localStorage.getItem("isDark");e&&document.querySelector("body").classList.add("dark"),s(Object(N.a)(Object(N.a)({},a),{},{isDark:e,hasThemeLoaded:!0}))}),[]),{themeState:a,setThemeState:s}}(),s=a.themeState,r=a.setThemeState;if(!s.hasThemeLoaded)return Object(d.jsx)("div",{});return Object(d.jsx)(D.Provider,{value:{isDark:s.isDark,toggleTheme:function(){var e=!s.isDark;localStorage.setItem("isDark",JSON.stringify(e));var t=document.querySelector("body");e?t.classList.add("dark"):t.classList.remove("dark"),r(Object(N.a)(Object(N.a)({},s),{},{isDark:e}))}},children:t})},S=a(26);a(43);var C=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],r=function(){s(!a)},l=Object(i.useState)(!1),o=Object(n.a)(l,2),u=o[0],j=o[1],b=function(){j(!u)},h=Object(i.useState)(!1),g=Object(n.a)(h,2),O=g[0],x=g[1],p=function(){x(!O)},N=function(){var e=Object(i.useContext)(D);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}(),k=N.isDark,C=N.toggleTheme,L=Object(i.useState)(0),y=Object(n.a)(L,2),q=y[0],T=y[1],V=Object(i.useState)(0),J=Object(n.a)(V,2),B=J[0],H=J[1];return Object(d.jsx)("header",{children:Object(d.jsxs)(m,{children:[Object(d.jsxs)("div",{className:[f.a.header,a?f.a.open:null].join(" "),onTouchStart:function(e){T(e.targetTouches[0].clientX)},onTouchMove:function(e){H(e.targetTouches[0].clientX)},onTouchEnd:function(){a&&B-q<-50&&s(!1)},children:[Object(d.jsx)("span",{className:f.a.close_menu,onClick:r,children:"Close"}),Object(d.jsxs)("div",{className:f.a.header_main,children:[Object(d.jsx)("div",{className:f.a.header_title,children:Object(d.jsx)("h1",{children:Object(d.jsx)(c.b,{to:"/",children:"Travel"})})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:f.a.menu,children:[Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/blog/1",children:"Blog"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/404",children:"404"})})]})})]}),Object(d.jsx)("div",{className:"header-secondary",children:Object(d.jsxs)("div",{className:f.a.header_tools,children:[Object(d.jsx)("div",{className:f.a.dark_toggle,onClick:C,children:k?"Light":"Dark"}),Object(d.jsx)("div",{className:"subscribe-toggle",onClick:p,children:"Subscribe"}),Object(d.jsx)(w,{className:f.a.search_icon,onClick:b})]})})]}),Object(d.jsxs)("div",{className:f.a.header_mobile,children:[Object(d.jsxs)("div",{onClick:r,className:f.a.burger,children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsx)("div",{className:f.a.header_title,children:Object(d.jsx)("h1",{children:"Travel"})}),Object(d.jsx)(w,{className:f.a.search_icon,onClick:b})]}),a&&Object(d.jsx)("div",{className:f.a.menu_overlay,onClick:r}),u&&Object(d.jsx)(_,{onClick:b}),O&&Object(d.jsx)(v,{onClick:p,onSubmit:function(e){return Object(S.b)(e)}}),Object(d.jsx)(S.a,{position:"bottom-right"})]})})},L=a(15),y=a.n(L);var q=function(e){return Object(d.jsxs)("svg",Object(N.a)(Object(N.a)({},e),{},{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:[Object(d.jsx)("title",{children:"Mail"}),Object(d.jsx)("g",{children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M257,210c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45C302,230.186,281.814,210,257,210z "})})}),Object(d.jsx)("g",{children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M255,0C114.39,0,0,114.39,0,255s114.39,257,255,257s257-116.39,257-257S395.61,0,255,0z M362,330 c-20.273,0-38.152-10.161-49.017-25.596C299.23,319.971,279.354,330,257,330c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75 c16.948,0,32.426,5.865,45,15.383V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15c0,33.36,0,41.625,0,75 c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30c0-100.391-66.432-150-135-150c-74.443,0-135,60.557-135,135 s60.557,135,135,135c30,0,58.374-9.609,82.061-27.803c15.822-12.078,33.94,11.765,18.281,23.789 C328.353,408.237,293.665,420,257,420c-90.981,0-165-74.019-165-165S166.019,90,257,90c82.897,0,165,61.135,165,180 C422,303.091,395.091,330,362,330z"})})}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{})]}))};var T=function(e){return Object(d.jsxs)("svg",Object(N.a)(Object(N.a)({},e),{},{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Linkedin"}),Object(d.jsx)("path",{d:"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"})]}))};var V=function(e){return Object(d.jsxs)("svg",Object(N.a)(Object(N.a)({},e),{},{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"97.75px",height:"97.75px",viewBox:"0 0 97.75 97.75",children:[Object(d.jsx)("title",{children:"Facebook"}),Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258 h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"})}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{})]}))};var J=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(m,{className:y.a.footer,children:[Object(d.jsx)("div",{className:y.a.header_title,children:Object(d.jsx)(c.b,{to:"/",children:Object(d.jsx)("h1",{children:"Travel"})})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:y.a.menu,children:[Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/blog/1",children:"Blog"})}),Object(d.jsx)("li",{children:Object(d.jsx)(c.b,{to:"/404",children:"404"})})]})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:y.a.social_menu,children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"mailto:guntis.jakovins@gmail.com",children:Object(d.jsx)(q,{className:y.a.icon})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://www.linkedin.com",children:Object(d.jsx)(T,{className:y.a.icon})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://www.facebook.com",children:Object(d.jsx)(V,{className:y.a.icon})})})]})})]})})};var B=function(e){return Object(d.jsxs)(k,{children:[Object(d.jsx)(C,{}),Object(d.jsx)("main",{children:Object(d.jsx)(m,{children:e.children})}),Object(d.jsx)(J,{})]})},H=a(10),F=a.n(H);var z=function(e){return Object(d.jsxs)("svg",Object(N.a)(Object(N.a)({},e),{},{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[Object(d.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(d.jsx)("path",{d:"M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"})]}))};var A=function(e){return Object(d.jsxs)("svg",Object(N.a)(Object(N.a)({},e),{},{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(d.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(d.jsx)("path",{d:"M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"})]}))},E=[{id:"1",title:"Maecenas sed diam eget risus varius blandit sit amet non magna.",author:"John Doe",avatar:"avatar-boy.jpg",ingress:"Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui."},{id:"2",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"3",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"4",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"5",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"6",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"7",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"8",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"9",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"10",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"11",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"12",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"13",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"14",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"15",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"16",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"17",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."},{id:"18",title:"Vestibulum id ligula porta felis euismod semper.",author:"Jane Doe",avatar:"avatar-girl.jpg",ingress:"Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue."}];var M=function(){var e=E.slice(0,3),t=Object(i.useState)(0),a=Object(n.a)(t,2),s=a[0],r=a[1],l=Object(i.useCallback)((function(){r(s+1>e.length-1?0:s+1)}),[s,e]);return Object(i.useEffect)((function(){var e=setTimeout((function(){l()}),5e3);return function(){return clearTimeout(e)}}),[s,l]),Object(d.jsxs)("div",{className:F.a.wrapper,children:[Object(d.jsx)("div",{className:F.a.content,children:e.slice(0,3).map((function(e,t){return Object(d.jsxs)("div",{className:[F.a.article,s===t?F.a.current:null].join(" "),children:[Object(d.jsx)("img",{className:F.a.article_image,src:"".concat("/react-travel-blog","/images/").concat(e.id,".jpg"),alt:e.title}),Object(d.jsxs)("div",{className:F.a.article_content,children:[Object(d.jsx)(c.b,{to:"/blog/".concat(e.id),children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsxs)("div",{className:F.a.article_author,children:[Object(d.jsx)("div",{className:F.a.avatar,children:Object(d.jsx)("img",{width:"30px",height:"30px",src:"".concat("/react-travel-blog","/images/").concat(e.avatar),alt:""})}),Object(d.jsx)("span",{children:e.author})]}),Object(d.jsx)("div",{className:F.a.article_ingress,children:e.ingress})]})]},e.id)}))}),Object(d.jsxs)("div",{className:F.a.control,children:[Object(d.jsx)("span",{onClick:function(){r(s-1<0?e.length-1:s-1)},children:Object(d.jsx)(z,{className:F.a.control_arrow})}),Object(d.jsx)("span",{onClick:l,children:Object(d.jsx)(A,{className:F.a.control_arrow})})]})]})},I=a(12),P=a.n(I);var Z=function(e){var t=Object(i.useState)(parseInt(e.item_count)),a=Object(n.a)(t,2),s=a[0],r=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:P.a.article_list,children:E.slice(0,s).map((function(e){return Object(d.jsxs)("article",{className:P.a.article,children:[Object(d.jsx)(c.b,{to:"/blog/".concat(e.id),children:Object(d.jsx)("div",{className:P.a.article_media,children:Object(d.jsx)("img",{className:P.a.article_image,src:"".concat("/react-travel-blog","/images/").concat(e.id,".jpg"),alt:e.title})})}),Object(d.jsxs)("div",{className:P.a.article_content,children:[Object(d.jsx)(c.b,{to:"/blog/".concat(e.id),children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsxs)("div",{className:P.a.article_author,children:[Object(d.jsx)("div",{className:P.a.avatar,children:Object(d.jsx)("img",{width:"30px",height:"30px",src:"".concat("/react-travel-blog","/images/").concat(e.avatar),alt:""})}),Object(d.jsx)("span",{children:e.author})]}),Object(d.jsx)("div",{className:P.a.article_ingress,children:e.ingress})]})]},e.id)}))}),s<E.length&&Object(d.jsx)("div",{className:P.a.footer,children:Object(d.jsx)("button",{className:P.a.load_more,onClick:function(){r(s+parseInt(e.item_count))},children:"Load more"})})]})};var R=function(){return Object(d.jsxs)(B,{children:[Object(d.jsx)(M,{}),Object(d.jsx)(Z,{item_count:"6"})]})},G=a(31),U=a(13),X=a.n(U);var K=function(){var e=Object(o.g)().id,t=E.find((function(t){return t.id===e}));return t?Object(d.jsxs)(B,{children:[Object(d.jsxs)("div",{className:X.a.header,children:[Object(d.jsx)("div",{className:X.a.part,children:Object(d.jsx)("img",{className:X.a.article_image,src:"".concat("/react-travel-blog","/images/").concat(t.id,".jpg"),alt:t.title})}),Object(d.jsxs)("div",{className:X.a.part,children:[Object(d.jsxs)("div",{className:X.a.meta,children:[Object(d.jsx)("span",{children:"Travel"}),Object(d.jsx)("span",{children:"Summer"})]}),Object(d.jsx)("h1",{children:t.title}),Object(d.jsxs)("div",{className:X.a.date_read,children:[Object(d.jsx)("span",{children:(new Date).toDateString()})," - ",Object(d.jsx)("span",{children:"2 min read"})]}),Object(d.jsxs)("div",{className:X.a.article_author,children:[Object(d.jsx)("div",{className:X.a.avatar,children:Object(d.jsx)("img",{width:"30px",height:"30px",src:"".concat("/react-travel-blog","/images/").concat(t.avatar),alt:""})}),Object(d.jsx)("span",{children:t.author})]})]})]}),Object(d.jsx)("div",{className:X.a.main,children:Object(G.a)(Array(5)).map((function(){return Object(d.jsxs)("p",{children:[t.ingress," ",t.ingress," ",t.ingress]})}))}),Object(d.jsxs)("section",{className:X.a.more,children:[Object(d.jsx)("h2",{children:"Similar posts"}),Object(d.jsx)(Z,{item_count:"3"})]})]}):Object(d.jsx)(o.a,{to:"/404"})};var W=function(){return Object(d.jsx)(B,{children:Object(d.jsx)("h1",{children:"Contact"})})},Y=a(30),Q=a.n(Y);var $=function(){return Object(d.jsx)(B,{children:Object(d.jsxs)("div",{className:Q.a.container,children:[Object(d.jsx)("h1",{children:"404"}),Object(d.jsx)("p",{children:"Page not found"}),Object(d.jsxs)(c.b,{to:"/",children:["Go to homepage ",">>"]})]})})};l.a.render(Object(d.jsx)(c.a,{basename:"/react-travel-blog",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/",component:R}),Object(d.jsx)(o.b,{exact:!0,path:"/blog/:id",component:K}),Object(d.jsx)(o.b,{exact:!0,path:"/contact",component:W}),Object(d.jsx)(o.b,{exact:!0,path:"/404",component:$})]})}),document.getElementById("root"))},6:function(e,t,a){e.exports={header:"Header_header__1v0yI",header_tools:"Header_header_tools__2nXNe",open:"Header_open__2be9H",menu_overlay:"Header_menu_overlay__2ez_G",close_menu:"Header_close_menu__KuUV8",burger:"Header_burger__1HaUn",search_icon:"Header_search_icon__2ZZC-",dark_toggle:"Header_dark_toggle__1TtjN",header_main:"Header_header_main__1qt84",header_mobile:"Header_header_mobile__1qeOo",menu:"Header_menu__Zy7KP",header_title:"Header_header_title__1GB93"}}},[[44,1,2]]]);
//# sourceMappingURL=main.4c3dec8f.chunk.js.map