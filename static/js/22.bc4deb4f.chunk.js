(this.webpackJsonpstandard=this.webpackJsonpstandard||[]).push([[22],{158:function(e,n,t){"use strict";var a=t(165),o=t.n(a),r=t(49),c=o.a.create({baseURL:r.a});c.interceptors.request.use((function(e){var n=localStorage.getItem("user");if(n){var t=JSON.parse(n).accessToken;e.headers.common.Authorization="Bearer ".concat(t)}return e})),n.a=c},178:function(e,n,t){"use strict";var a=t(158),o={getThongTinHeThongRap:function(){return a.a.get("/QuanLyRap/LayThongTinHeThongRap")},getThongTinLichChieuHeThongRap:function(){return a.a.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09")},getThongTinLichChieuPhim:function(e){var n="/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=".concat(e);return a.a.get(n)},getListCumRapTheoHeThong:function(e){var n="/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=".concat(e);return a.a.get(n)}};n.a=o},210:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return h})),t.d(n,"b",(function(){return d})),t.d(n,"h",(function(){return g})),t.d(n,"g",(function(){return p})),t.d(n,"a",(function(){return j})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return m}));var a=t(171),o=t.n(a),r=t(172),c=t(158),i={getDanhSachPhim:function(){return c.a.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")},getThongTinPhim:function(e){var n="/QuanLyPhim/LayThongTinPhim?MaPhim=".concat(e);return c.a.get(n)},getDanhSachPhimTheoNgay:function(e,n,t){return c.a.get("/QuanLyPhim/LayDanhSachPhimTheoNgay",{maNhom:e,tuNgay:n,denNgay:t})},getDanhSachPhimPhanTrang:function(e){return c.a.get("/QuanLyPhim/LayDanhSachPhimPhanTrang",{param:e})},postThemPhimUpload:function(e){var n=new FormData;for(var t in e)n.append(t,e[t]);return c.a.post("/QuanLyPhim/ThemPhimUploadHinh",n)},postCapNhatPhimUpload:function(e){var n=new FormData;for(var t in e)n.append(t,e[t]);return c.a.post("/QuanLyPhim/CapNhatPhimUpload",n)},postCapNhatPhim:function(e){return c.a.post("/QuanLyPhim/CapNhatPhim",e)},deleteMovie:function(e){var n="/QuanLyPhim/XoaPhim?MaPhim=".concat(e);return c.a.delete(n)}},s=t(10),l=function(){return function(){var e=Object(r.a)(o.a.mark((function e(n){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:s.i}),e.prev=1,e.next=4,i.getDanhSachPhim();case 4:t=e.sent,n({type:s.k,payload:{data:t.data}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:s.g,payload:{errorMovieList:(null===(a=e.t0.response)||void 0===a?void 0:a.data)?e.t0.response.data:e.t0.message}});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},h=function(){return function(e){e({type:s.j}),i.getDanhSachPhim().then((function(n){e({type:s.l,payload:{data:n.data}})})).catch((function(n){var t;e({type:s.h,payload:{errorMovieList:(null===(t=n.response)||void 0===t?void 0:t.data)?n.response.data:n.message}})}))}},d=function(e){return function(n){n({type:s.e}),i.deleteMovie(e).then((function(e){n({type:s.f,payload:{data:e.data}})})).catch((function(e){var t,a=(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)?e.response.data:"X\xf3a th\xe0nh c\xf4ng nh\u01b0ng backend return error";n({type:s.d,payload:{error:a}})}))}},g=function(e){return function(n){n({type:s.n}),i.postCapNhatPhimUpload(e).then((function(e){n({type:s.o,payload:{data:e.data}})})).catch((function(e){var t;n({type:s.m,payload:{error:(null===(t=e.response)||void 0===t?void 0:t.data)?e.response.data:e.message}})}))}},p=function(e){return function(n){n({type:s.s}),i.postCapNhatPhim(e).then((function(e){n({type:s.t,payload:{data:e.data}})})).catch((function(e){var t;n({type:s.r,payload:{error:(null===(t=e.response)||void 0===t?void 0:t.data)?e.response.data:e.message}})}))}},j=function(e){return function(n){n({type:s.b}),i.postThemPhimUpload(e).then((function(e){n({type:s.c,payload:{data:e.data}})})).catch((function(e){var t;n({type:s.a,payload:{error:(null===(t=e.response)||void 0===t?void 0:t.data)?e.response.data:e.message}})}))}},u=function(){return function(e){e({type:s.p})}},m=function(e){return function(n){n({type:s.q,payload:{event:e}})}}},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c}));var a=t(178),o=t(35),r=function(){return function(e){e({type:o.c}),a.a.getThongTinLichChieuHeThongRap().then((function(n){e({type:o.e,payload:{data:n.data}})})).catch((function(n){var t;e({type:o.a,payload:{errorTheaterList:(null===(t=n.response)||void 0===t?void 0:t.data)?n.response.data:n.message}})}))}},c=function(){return function(e){e({type:o.d}),a.a.getThongTinLichChieuHeThongRap().then((function(n){e({type:o.f,payload:{data:n.data}})})).catch((function(n){var t;e({type:o.b,payload:{errorTheaterList2:(null===(t=n.response)||void 0===t?void 0:t.data)?n.response.data:n.message}})}))}}},598:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var a=t(40),o=t(0),r=t(483),c=t.n(r),i=t(130),s=t(46),l=t(6),h=t(571),d=t(316),g=t(317),p=t(502),j=t(150),u=t(463),m=t.n(u),b=t(505),f=t.n(b),x=t(503),v=t(570),O=t(462),w=t(68),y=t(151),k=t(18),N=t(504),T=t.n(N),_=t(318),C=t(8),L=t(604),P=t(308),I=t(27),S=t(1),R=240,D=Object(i.a)((function(e){var n;return{root:{display:"flex"},appBar:{backgroundColor:"rgba(255,255,255,.95)",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(R,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:R},spaceBetween:{justifyContent:"space-between"},logo:{cursor:"pointer"},linkTobody:(n={display:function(e){return e.isDesktop?"block":"none"},position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},Object(a.a)(n,e.breakpoints.down(899),{left:"42%"}),Object(a.a)(n,e.breakpoints.down(773),{left:"39%"}),n),link:{cursor:"pointer",textDecoration:"none",color:"#000",paddingLeft:10,paddingRight:10,width:"auto","&:hover":{textDecoration:"none",backgroundColor:"transparent",color:"#fb4226",transition:"all .2s"}},user:{display:function(e){return e.isDesktop?"block":"none"}},auth:{display:"flex",color:function(e){return e.isDesktop?"#9b9b9b":"#000"}},itemAuth:{paddingLeft:10,paddingRight:10,minWidth:"fit-content","&:hover":{backgroundColor:"transparent","& .MuiTypography-root":{color:"#fb4226"},"& .MuiListItemIcon-root":{color:"#fb4226"}},"& .MuiTypography-root":{transition:"all .2s"},"& .MuiListItemIcon-root":{transition:"all .2s"}},hover:{"&:hover":{color:"#fb4226",backgroundColor:"rgba(0, 0, 0, 0.04)"}},divide:{fontWeight:500,"&::after":{content:"''",position:"absolute",right:"0",height:"30px",top:"50%",transform:"translateY(-50%)",borderRight:function(e){return e.isDesktop?"1px solid #e9e9e9":"none"}}},icon:{minWidth:41,color:"#9b9b9b"},avatar:{width:e.spacing(4),height:e.spacing(4)},listItem:{"&:hover > a":{color:"#fb4226"},"&:hover > div":{color:"#fb4226"},"&:hover > span":{color:"#fb4226"}},menuIcon:{display:function(e){return e.isDesktop||e.openDrawer?"none":"block"}},drawer:{width:R,flexShrink:0},drawerPaper:{width:R},drawerHeader:Object(S.a)(Object(S.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),itemMenu:{display:"block",padding:20,fontWeight:500,width:"100%",cursor:"pointer",fontSize:18,"&:hover":{color:"#fb4226",backgroundColor:"rgba(0, 0, 0, 0.04)"}},username:{"& > span":{fontWeight:500}}}})),H=t(49),M=t(31),A=t(210),Q=t(247),B=t(3),z=[{nameLink:"L\u1ecbch chi\u1ebfu",id:"lichchieu"},{nameLink:"C\u1ee5m r\u1ea1p",id:"cumrap"},{nameLink:"Tin t\u1ee9c",id:"tintuc"},{nameLink:"\u1ee8ng d\u1ee5ng",id:"ungdung"}];function U(){var e=Object(k.c)((function(e){return e.authReducer})).currentUser,n=Object(k.c)((function(e){return e.lazyReducer})).isLoadingBackToHome,t=Object(k.b)(),r=Object(C.h)(),c=Object(C.g)(),i=Object(w.a)(),u=Object(y.a)(i.breakpoints.up("md")),b=Object(o.useState)(!1),N=Object(s.a)(b,2),S=N[0],R=N[1],U=D({isDesktop:u,openDrawer:S});Object(o.useEffect)((function(){u&&S&&R(!1)}),[u]),Object(o.useEffect)((function(){n||setTimeout((function(){P.scroller.scrollTo(r.state,{duration:800,smooth:"easeInOutQuart"})}),200)}),[n]);var W=function(){R(!1),t({type:I.d})},G=function(){c.push("/dangnhap",r.pathname)},X=function(){c.push("/dangky",r.pathname)},E=function(e){R(!1),"/"===r.pathname?P.scroller.scrollTo(e,{duration:800,smooth:"easeInOutQuart"}):(t({type:M.a}),setTimeout((function(){c.push("/",e)}),50))},F=function(){c.push("/taikhoan"),R(!1)},K=function(){R(!1)};return Object(B.jsxs)("div",{className:U.root,children:[Object(B.jsx)(d.a,{position:"fixed",classes:{root:Object(l.a)(U.appBar,Object(a.a)({},U.appBarShift,S))},color:"default",children:Object(B.jsxs)(g.a,{className:U.spaceBetween,children:[Object(B.jsx)("div",{className:U.logo,onClick:function(){if("/"===r.pathname)return t(Object(A.c)()),void t(Object(Q.a)());t({type:M.a}),setTimeout((function(){c.push("/","")}),50)},children:Object(B.jsx)("img",{src:"/img/headTixLogo.png",alt:"logo",style:{height:50}})}),Object(B.jsx)("div",{className:U.linkTobody,children:Object(B.jsx)(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:z.map((function(e){return Object(B.jsx)("span",{className:U.link,onClick:function(){return E(e.id)},children:e.nameLink},e.id)}))})}),Object(B.jsx)("div",{className:U.user,children:e?Object(B.jsxs)(p.a,{disablePadding:!0,className:U.auth,children:[Object(B.jsxs)(x.a,{button:!0,classes:{root:Object(l.a)(U.itemAuth,U.divide)},onClick:F,children:[Object(B.jsx)(_.a,{classes:{root:U.icon},children:Object(B.jsx)(L.a,{alt:"avatar",className:U.avatar,src:H.h})}),Object(B.jsx)(v.a,{primary:null===e||void 0===e?void 0:e.hoTen})]}),Object(B.jsx)(x.a,{button:!0,classes:{root:U.itemAuth},onClick:W,children:Object(B.jsx)(v.a,{primary:"\u0110\u0103ng Xu\u1ea5t"})})]}):Object(B.jsxs)(p.a,{disablePadding:!0,className:U.auth,children:[Object(B.jsxs)(x.a,{button:!0,classes:{root:Object(l.a)(U.itemAuth,U.divide)},onClick:G,children:[Object(B.jsx)(_.a,{classes:{root:U.icon},children:Object(B.jsx)(T.a,{fontSize:"large"})}),Object(B.jsx)(v.a,{primary:"\u0110\u0103ng Nh\u1eadp"})]}),Object(B.jsx)(x.a,{button:!0,classes:{root:U.itemAuth},onClick:X,children:Object(B.jsx)(v.a,{primary:"\u0110\u0103ng K\xfd"})})]})}),Object(B.jsx)("div",{className:U.menuIcon,children:Object(B.jsx)(j.a,{color:"inherit",edge:"end",onClick:function(){R(!0)},classes:{root:U.listItem},children:Object(B.jsx)(m.a,{})})})]})}),Object(B.jsxs)(h.a,{className:U.drawer,anchor:"right",onClose:K,open:S,classes:{paper:U.drawerPaper},transitionDuration:300,children:[Object(B.jsxs)("div",{className:U.drawerHeader,children:[e?Object(B.jsxs)(x.a,{button:!0,classes:{root:Object(l.a)(U.itemAuth,U.divide,U.hover)},onClick:F,children:[Object(B.jsx)(_.a,{classes:{root:U.icon},children:Object(B.jsx)(L.a,{alt:"avatar",className:U.avatar,src:H.h})}),Object(B.jsx)(v.a,{className:U.username,primary:null===e||void 0===e?void 0:e.hoTen})]}):Object(B.jsxs)(x.a,{button:!0,classes:{root:U.listItem},onClick:G,children:[Object(B.jsx)(_.a,{classes:{root:U.icon},children:Object(B.jsx)(T.a,{fontSize:"large"})}),Object(B.jsx)("span",{className:U.link,style:{fontWeight:500},children:"\u0110\u0103ng Nh\u1eadp"})]}),Object(B.jsx)(j.a,{classes:{root:U.listItem},onClick:K,children:Object(B.jsx)(f.a,{})})]}),Object(B.jsxs)(p.a,{children:[z.map((function(e){return Object(B.jsx)("span",{className:U.itemMenu,onClick:function(){return E(e.id)},children:e.nameLink},e.id)})),e?Object(B.jsx)("span",{className:U.itemMenu,onClick:W,children:"\u0110\u0103ng Xu\u1ea5t"}):Object(B.jsx)("span",{className:U.itemMenu,onClick:X,children:"\u0110\u0103ng K\xfd"})]})]})]})}var W=Object(i.a)((function(e){return{logo:{width:"30px",height:"30px",borderRadius:"50%"},footer:{backgroundColor:"#222",color:"white",fontSize:"12px",padding:"20px 0","& a":{color:"#949494",display:"block"}},footer__up:{maxWidth:"940px",margin:"auto",paddingBottom:20},tix__text:{display:"flex",justifyContent:"space-between"},company__logo:{display:"flex",alignItems:"center",marginBottom:"15px",width:"75%",justifyContent:"space-between","& img":{backgroundColor:"white",borderRadius:"50%"}},social__width:{width:"50%"},footer__social:{display:"flex",justifyContent:"space-around",textAlign:"center"},footer__down:{maxWidth:"940px",margin:"auto"},logoCompany:Object(a.a)({width:80,borderRadius:8},e.breakpoints.up("lg"),{width:"100%"}),gvm:Object(a.a)({width:130},e.breakpoints.up("lg"),{width:"100%"})}}));function G(){var e=W();return Object(B.jsxs)("div",{className:e.footer,children:[Object(B.jsxs)("div",{className:"".concat(e.footer__up," row"),children:[Object(B.jsx)("div",{className:"col-6 col-md-4",children:Object(B.jsxs)("div",{className:e.tix__text,children:[Object(B.jsxs)("div",{className:"d-none d-lg-block d-xl-block",children:[Object(B.jsx)("p",{children:"TIX"}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:"FAQ"}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:"Brand Guidelines"})]}),Object(B.jsxs)("div",{className:"row",children:[Object(B.jsx)("a",{className:"col-6 col-lg-12",target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:"Th\u1ecfa thu\u1eadn s\u1eed d\u1ee5ng"}),Object(B.jsx)("a",{className:"col-6 col-lg-12",target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:"Ch\xednh s\xe1ch b\u1ea3o m\u1eadt"})]})]})}),Object(B.jsxs)("div",{className:"col-6 col-md-4 footer__company d-none d-lg-block d-xl-block",children:[Object(B.jsx)("p",{children:"\u0110\u1ed1i t\xe1c"}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{className:e.company__logo,children:[Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/cgv.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/bhd.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/galaxycine.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/cinestar.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/lotte.png",alt:"",className:e.logo})})]}),Object(B.jsxs)("div",{className:e.company__logo,children:[Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/megags.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/bt.jpg",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/dongdacinema.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/TOUCH.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/cnx.jpg",alt:"",className:e.logo})})]}),Object(B.jsxs)("div",{className:e.company__logo,children:[Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/STARLIGHT.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/dcine.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/zalopay_icon.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/payoo.jpg",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/vcb.png",alt:"",className:e.logo})})]}),Object(B.jsxs)("div",{className:e.company__logo,children:[Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/AGRIBANK.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/VIETTINBANK.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/IVB.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/123go.png",alt:"",className:e.logo})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{src:"/img/logo-connect/laban.png",alt:"",className:e.logo})})]})]})]}),Object(B.jsxs)("div",{className:"col-6 col-md-4 d-flex text-center",children:[Object(B.jsxs)("div",{className:"".concat(e.social__width," d-none d-lg-block d-xl-block"),children:[Object(B.jsx)("p",{className:"pb-2",children:"MOBIL APP"}),Object(B.jsxs)("div",{className:"footer__mobile d-flex justify-content-around",children:[Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{className:e.logo,src:"/img/mobile-system/apple-logo.png",alt:""})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{className:e.logo,src:"/img/mobile-system/android-logo.png",alt:""})})]})]}),Object(B.jsxs)("div",{className:e.social__width,children:[Object(B.jsx)("p",{className:"d-none d-lg-block d-xl-block pb-2",children:"SOCIAL APP"}),Object(B.jsxs)("div",{className:e.footer__social,children:[Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{className:e.logo,src:"/img/media/facebook-logo.png",alt:""})}),Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cgv.vn/",children:Object(B.jsx)("img",{className:e.logo,src:"/img/media/zalo-logo.png",alt:""})})]})]})]})]}),Object(B.jsx)("div",{className:"".concat(e.footer__down," container"),children:Object(B.jsxs)("div",{className:"row",children:[Object(B.jsx)("div",{className:"col-12 col-md-1 p-1 text-center",children:Object(B.jsx)("img",{src:"/img/logo-connect/zion-logo.jpg",alt:"company",className:e.logoCompany})}),Object(B.jsxs)("div",{className:"col-12 col-md-9 p-1 text-center text-lg-left",children:[Object(B.jsx)("span",{children:"TIX - S\u1ea2N PH\u1ea8M C\u1ee6A C\xd4NG TY C\u1ed4 PH\u1ea6N ZION"}),Object(B.jsx)("span",{children:"\u0110\u1ecba ch\u1ec9: Z06 \u0110\u01b0\u1eddng s\u1ed1 13, Ph\u01b0\u1eddng T\xe2n Thu\u1eadn \u0110\xf4ng, Qu\u1eadn 7, Tp. H\u1ed3 Ch\xed Minh, Vi\u1ec7t Nam."}),Object(B.jsx)("span",{children:"Gi\u1ea5y ch\u1ee9ng nh\u1eadn \u0111\u0103ng k\xfd kinh doanh s\u1ed1: 0101659783,"}),Object(B.jsx)("span",{children:"\u0111\u0103ng k\xfd thay \u0111\u1ed5i l\u1ea7n th\u1ee9 30, ng\xe0y 22 th\xe1ng 01 n\u0103m 2020 do S\u1edf k\u1ebf ho\u1ea1ch v\xe0 \u0111\u1ea7u t\u01b0 Th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh c\u1ea5p."}),Object(B.jsx)("span",{children:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i (Hotline): 1900 545 436"}),Object(B.jsxs)("p",{children:["Email: ",Object(B.jsx)("span",{className:"d-inline",children:"support@tix.vn"})]})]}),Object(B.jsx)("div",{className:"col-12 col-md-2 p-1 text-center",style:{position:"static"},children:Object(B.jsx)("img",{src:"/img/media/certificate.png",alt:"gvm",className:e.gvm})})]})})]})}var X=Object(i.a)((function(e){return{top:Object(a.a)({marginTop:64},e.breakpoints.down("xs"),{marginTop:56}),styleScrollToTop:{position:"fixed",bottom:30,right:10,transitionTimingFunction:"linear",width:50,transform:"rotate(180deg)",zIndex:5e3}}}));function E(e){var n=X();return Object(B.jsxs)("div",{children:[Object(B.jsx)(U,{}),Object(B.jsx)("div",{className:n.top}),e.children,Object(B.jsx)(G,{}),Object(B.jsx)(c.a,{showUnder:160,children:Object(B.jsx)("img",{src:"/img/logoTixLoading.png",alt:"totop",className:n.styleScrollToTop})})]})}}}]);
//# sourceMappingURL=22.bc4deb4f.chunk.js.map