(this.webpackJsonpstandard=this.webpackJsonpstandard||[]).push([[21],{158:function(e,t,n){"use strict";var a=n(165),c=n.n(a),i=n(49),o=c.a.create({baseURL:i.a});o.interceptors.request.use((function(e){var t=localStorage.getItem("user");if(t){var n=JSON.parse(t).accessToken;e.headers.common.Authorization="Bearer ".concat(n)}return e})),t.a=o},178:function(e,t,n){"use strict";var a=n(158),c={getThongTinHeThongRap:function(){return a.a.get("/QuanLyRap/LayThongTinHeThongRap")},getThongTinLichChieuHeThongRap:function(){return a.a.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09")},getThongTinLichChieuPhim:function(e){var t="/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=".concat(e);return a.a.get(t)},getListCumRapTheoHeThong:function(e){var t="/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=".concat(e);return a.a.get(t)}};t.a=c},278:function(e,t,n){"use strict";var a=n(158),c={postDangKy:function(e){return a.a.post("/QuanLyNguoiDung/DangKy",e)},postDangNhap:function(e){return a.a.post("/QuanLyNguoiDung/DangNhap",e)},getDanhSachNguoiDung:function(){return a.a.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09")},getDanhSachNguoiDungPhanTrang:function(e,t){return a.a.get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09",{soTrang:e,soPhanTuTrenTrang:t})},postThemNguoiDung:function(e){return a.a.post("/QuanLyNguoiDung/ThemNguoiDung",e)},deleteUser:function(e){var t="/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=".concat(e);return a.a.delete(t)},editTaiKhoan:function(e){return a.a.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung",e)},getThongTinTaiKhoan:function(e){return a.a.post("/QuanLyNguoiDung/ThongTinTaiKhoan",e)}};t.a=c},298:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return d}));var a=n(165),c=n.n(a).a.create({baseURL:"https://6092b87185ff5100172137f4.mockapi.io/"}),i={getComment:function(){return c.get("/commentMovie")},postComment:function(e){return c.post("/commentMovie",e)},likeComment:function(e,t){var n="/commentMovie/".concat(e);return c.put(n,t)}},o=n(178),s=n(19),r=function(e){return function(t){t({type:s.e}),o.a.getThongTinLichChieuPhim(e).then((function(e){t({type:s.f,payload:{data:e.data}})})).catch((function(e){var n;t({type:s.d,payload:{error:(null===(n=e.response)||void 0===n?void 0:n.data)?e.response.data:e.message}})}))}},l=function(){return function(e){e({type:s.b}),i.getComment().then((function(t){e({type:s.c,payload:{data:t.data}})})).catch((function(t){var n;e({type:s.a,payload:{error:(null===(n=t.response)||void 0===n?void 0:n.data)?t.response.data:t.message}})}))}},u=function(e){return function(t){t({type:s.k}),i.postComment(e).then((function(e){t({type:s.l,payload:{data:e.data}})})).catch((function(e){var n;t({type:s.j,payload:{error:(null===(n=e.response)||void 0===n?void 0:n.data)?e.response.data:e.message}})}))}},d=function(e,t){return function(n){n({type:s.h}),i.likeComment(e,t).then((function(e){n({type:s.i,payload:{data:e.data}})})).catch((function(e){var t;n({type:s.g,payload:{error:(null===(t=e.response)||void 0===t?void 0:t.data)?e.response.data:e.message}})}))}}},434:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(278),c=n(13),i=function(){return function(e){e({type:c.k}),a.a.getDanhSachNguoiDung().then((function(t){e({type:c.l,payload:{data:t.data}})})).catch((function(t){var n;e({type:c.j,payload:{error:(null===(n=t.response)||void 0===n?void 0:n.data)?t.response.data:t.message}})}))}},o=function(e){return function(t){t({type:c.e}),a.a.deleteUser(e).then((function(e){t({type:c.f,payload:{data:e.data}})})).catch((function(e){var n;t({type:c.d,payload:{error:(null===(n=e.response)||void 0===n?void 0:n.data)?e.response.data:e.message}})}))}},s=function(){return function(e){e({type:c.m})}},r=function(e){return function(t){t({type:c.p}),a.a.editTaiKhoan(e).then((function(e){t({type:c.q,payload:{data:e.data}})})).catch((function(e){var n;t({type:c.o,payload:{error:(null===(n=e.response)||void 0===n?void 0:n.data)?e.response.data:e.message}})}))}},l=function(e){return function(t){t({type:c.b}),a.a.postThemNguoiDung(e).then((function(e){t({type:c.c,payload:{data:e.data}})})).catch((function(e){var n;t({type:c.a,payload:{error:(null===(n=e.response)||void 0===n?void 0:n.data)?e.response.data:e.message}})}))}},u=function(e){return function(t){t({type:c.n,payload:{isExistUserModified:e}})}},d=function(e){return function(t){t({type:c.h}),a.a.getThongTinTaiKhoan(e).then((function(e){t({type:c.i,payload:{data:e.data}})})).catch((function(e){var n;t({type:c.g,payload:{error:(null===(n=e.response)||void 0===n?void 0:n.data)?e.response.data:e.message}})}))}}},583:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(160),c=n(46),i=n(1),o=n(168),s=n(0),r=n.n(s),l=n(18),u=n(130),d=n(287),h=n(286),j=n(316),p=n(439),g=n(323),b=n(438),m=n(249),f=n.n(m),x=n(297),O=n(151),v=n(68),y=n(538),N=n.n(y),T=n(584),D=n(8),k=n(49),L=n(434),C=n(298),S=n(3),R=Object(u.a)((function(e){return{appBar:{backgroundColor:"transparent",color:"black",boxShadow:"none","& .MuiTabs-indicator":{height:0}},field:{maxWidth:500,paddingRight:16,paddingLeft:16},password:{position:"relative"},eye:{position:"absolute",top:31,right:9,cursor:"pointer"},tabButton:{opacity:1,color:"#000",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',"& > span":{transition:"all 0.2s","&:hover":{fontSize:"15px"}}},tabSelected:{color:"#fa5238"},td:{"& td":{whiteSpace:"nowrap"}},extendedIcon:{marginRight:e.spacing(1)}}}));function K(e){var t=e.children,n=e.value,a=e.index,c=e.isDesktop,s=Object(o.a)(e,["children","value","index","isDesktop"]);return Object(S.jsx)("div",Object(i.a)(Object(i.a)({hidden:n!==a},s),{},{children:n===a&&Object(S.jsx)(b.a,{style:{padding:c?"24px":"24px 0px 0px"},children:t})}))}function w(){var e,t,n,o,u,b=Object(D.g)(),m=Object(v.a)(),y=Object(O.a)(m.breakpoints.up("md")),w=R(),P=Object(l.b)(),U=Object(l.c)((function(e){return e.usersManagementReducer})),M=U.successInfoUser,Q=U.loadingInfoUser,H=Object(l.c)((function(e){return e.authReducer})).currentUser,G=Object(l.c)((function(e){return e.movieDetailReducer})).commentList,I=Object(s.useState)({ticket:0,posts:0,likePosts:0,total:0}),B=Object(c.a)(I,2),V=B[0],q=B[1],E=Object(l.c)((function(e){return e.usersManagementReducer})),z=E.successUpdateUser,F=E.errorUpdateUser,J=E.loadingUpdateUser,A=r.a.useState(0),$=Object(c.a)(A,2),W=$[0],X=$[1],Y=Object(s.useState)("password"),Z=Object(c.a)(Y,2),_=Z[0],ee=Z[1];Object(s.useEffect)((function(){return P(Object(L.b)({taiKhoan:null===H||void 0===H?void 0:H.taiKhoan})),P(Object(C.a)()),function(){return P(Object(L.f)())}}),[]),Object(s.useEffect)((function(){if(G){var e=G.reduce((function(e,t){var n=e.posts,a=e.likePosts;return t.avtId===H.taiKhoan&&(n++,a+=t.userLikeThisComment.length),Object(i.a)(Object(i.a)({},e),{},{posts:n,likePosts:a})}),{posts:0,likePosts:0}),t=e.posts,n=e.likePosts;q((function(e){return Object(i.a)(Object(i.a)({},e),{},{posts:t,likePosts:n})}))}if(M){var a=M.thongTinDatVe.length,c=M.thongTinDatVe.reduce((function(e,t){return e+t.danhSachGhe.length*t.giaVe}),0);q((function(e){return Object(i.a)(Object(i.a)({},e),{},{ticket:a,total:c})}))}}),[G,M]),Object(s.useEffect)((function(){z&&f.a.fire({position:"center",icon:"success",title:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",showConfirmButton:!1,timer:1500})}),[z]);var te=d.b().shape({taiKhoan:d.c().required("*T\xe0i kho\u1ea3n kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng !"),matKhau:d.c().required("*M\u1eadt kh\u1ea9u kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng !"),email:d.c().required("*Email kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng !").email("* Email kh\xf4ng h\u1ee3p l\u1ec7 "),soDt:d.c().required("*S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng !").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng h\u1ee3p l\u1ec7!"),hoTen:d.c().required("*T\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng !")}),ne=function(){ee("password"===_?"text":"password")};return Object(S.jsxs)("div",{className:"bootstrap snippet mb-4",children:[Object(S.jsx)("br",{}),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col-sm-3",children:[Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)("img",{src:k.h,className:"avatar rounded-circle img-thumbnail ".concat(y?"w-100":"w-50"),alt:"avatar"}),Object(S.jsx)("h1",{className:"my-2",children:null===M||void 0===M?void 0:M.taiKhoan})]}),"QuanTri"===H.maLoaiNguoiDung&&Object(S.jsx)("div",{className:"text-center mb-2",children:Object(S.jsxs)(T.a,{variant:"extended",color:"primary",onClick:function(){return b.push("/admin/users")},children:[Object(S.jsx)(N.a,{className:w.extendedIcon}),"T\u1edbi trang qu\u1ea3n tr\u1ecb"]})}),Object(S.jsxs)("ul",{className:"list-group",children:[Object(S.jsx)("li",{className:"list-group-item text-muted",children:"Ho\u1ea1t \u0111\u1ed9ng"}),Object(S.jsxs)("li",{className:"list-group-item text-right",children:[Object(S.jsx)("span",{className:"float-left",children:Object(S.jsx)("strong",{children:"B\xecnh lu\u1eadn"})}),V.posts]}),Object(S.jsxs)("li",{className:"list-group-item text-right",children:[Object(S.jsx)("span",{className:"float-left",children:Object(S.jsx)("strong",{children:"B\xecnh lu\u1eadn \u0111\u01b0\u1ee3c th\xedch "})}),V.likePosts]}),Object(S.jsxs)("li",{className:"list-group-item text-right",children:[Object(S.jsx)("span",{className:"float-left",children:Object(S.jsx)("strong",{children:"S\u1ed1 l\u1ea7n thanh to\xe1n"})}),V.ticket]}),Object(S.jsxs)("li",{className:"list-group-item text-right",children:[Object(S.jsx)("span",{className:"float-left",children:Object(S.jsx)("strong",{children:"T\u1ed5ng ti\u1ec1n $"})}),V.total]})]})]}),Object(S.jsxs)("div",{className:"col-sm-9 py-3 px-0",children:[Object(S.jsx)(j.a,{className:w.appBar,position:"static",children:Object(S.jsxs)(p.a,{value:W,onChange:function(e,t){X(t)},centered:!y,children:[Object(S.jsx)(g.a,{disableRipple:!0,classes:{root:w.tabButton,selected:w.tabSelected},label:"Th\xf4ng tin t\xe0i kho\u1ea3n"}),Object(S.jsx)(g.a,{disableRipple:!0,classes:{root:w.tabButton,selected:w.tabSelected},label:"L\u1ecbch s\u1eed \u0111\u1eb7t v\xe9"})]})}),Object(S.jsx)(K,{value:W,index:0,children:Object(S.jsx)(h.d,{initialValues:{taiKhoan:null!==(e=null===M||void 0===M?void 0:M.taiKhoan)&&void 0!==e?e:"",matKhau:null!==(t=null===M||void 0===M?void 0:M.matKhau)&&void 0!==t?t:"",email:null!==(n=null===M||void 0===M?void 0:M.email)&&void 0!==n?n:"",soDt:null!==(o=null===M||void 0===M?void 0:M.soDT)&&void 0!==o?o:"",maNhom:"GP09",maLoaiNguoiDung:"KhachHang",hoTen:null!==(u=null===M||void 0===M?void 0:M.hoTen)&&void 0!==u?u:""},enableReinitialize:!0,validationSchema:te,onSubmit:function(e){J||P(Object(L.e)(e))},children:function(e){return Object(S.jsxs)(h.c,{className:"".concat(w.field),children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"T\xe0i kho\u1ea3n\xa0"}),Object(S.jsx)(h.a,{name:"taiKhoan",render:function(e){return Object(S.jsx)("span",{className:"text-danger",children:e})}}),Object(S.jsx)(h.b,{disabled:!0,name:"taiKhoan",type:"text",className:"form-control",onChange:e.handleChange})]}),Object(S.jsxs)("div",{className:"form-group ".concat(w.password),children:[Object(S.jsx)("label",{children:"M\u1eadt kh\u1ea9u\xa0"}),Object(S.jsx)(h.a,{name:"matKhau",render:function(e){return Object(S.jsx)("span",{className:"text-danger",children:e})}}),Object(S.jsx)(h.b,{name:"matKhau",type:_,className:"form-control",onChange:e.handleChange}),Object(S.jsx)("div",{className:w.eye,onClick:ne,children:"password"!==_?Object(S.jsx)("i",{className:"fa fa-eye-slash"}):Object(S.jsx)("i",{className:"fa fa-eye"})})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"H\u1ecd v\xe0 t\xean\xa0"}),Object(S.jsx)(h.a,{name:"hoTen",render:function(e){return Object(S.jsx)("span",{className:"text-danger",children:e})}}),Object(S.jsx)(h.b,{name:"hoTen",type:"text",className:"form-control",onChange:e.handleChange})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Email\xa0"}),Object(S.jsx)(h.a,{name:"email",render:function(e){return Object(S.jsx)("span",{className:"text-danger",children:e})}}),Object(S.jsx)(h.b,{name:"email",type:"email",className:"form-control",onChange:e.handleChange})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i\xa0"}),Object(S.jsx)(h.a,{name:"soDt",render:function(e){return Object(S.jsx)("span",{className:"text-danger",children:e})}}),Object(S.jsx)(h.b,{name:"soDt",type:"text",className:"form-control",onChange:e.handleChange})]}),Object(S.jsxs)("div",{className:"text-left",children:[Object(S.jsx)("button",{type:"submit",className:"btn btn-success",disable:J.toString(),children:"C\u1eadp nh\u1eadt"}),F&&Object(S.jsx)("div",{className:"alert alert-danger",children:Object(S.jsx)("span",{children:F})})]})]})}})}),Object(S.jsx)(K,{value:W,index:1,style:{padding:y?"0px 0px":"0px 16px"},isDesktop:y,children:Object(S.jsx)("div",{className:"table-responsive",children:Object(S.jsxs)("table",{className:"table table-striped table-hover table-bordered",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",children:"Stt"}),Object(S.jsx)("th",{scope:"col",children:"T\xean phim"}),Object(S.jsx)("th",{scope:"col",children:"Th\u1eddi l\u01b0\u1ee3ng phim"}),Object(S.jsx)("th",{scope:"col",children:"Ng\xe0y \u0111\u1eb7t"}),Object(S.jsx)("th",{scope:"col",children:"T\xean R\u1ea1p"}),Object(S.jsx)("th",{scope:"col",children:"M\xe3 v\xe9"}),Object(S.jsx)("th",{scope:"col",children:"T\xean gh\u1ebf"}),Object(S.jsx)("th",{scope:"col",children:"Gi\xe1 v\xe9(vn\u0111)"}),Object(S.jsx)("th",{scope:"col",children:"T\u1ed5ng ti\u1ec1n(vn\u0111)"})]})}),Object(S.jsx)("tbody",{children:null===M||void 0===M?void 0:M.thongTinDatVe.map((function(e,t){return Object(S.jsxs)("tr",{className:w.td,children:[Object(S.jsx)("th",{scope:"row",children:t+1}),Object(S.jsx)("td",{children:e.tenPhim}),Object(S.jsx)("td",{children:e.thoiLuongPhim}),Object(S.jsxs)("td",{children:[new Date(e.ngayDat).toLocaleDateString(),","," ",new Date(e.ngayDat).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})]}),Object(S.jsxs)("td",{children:[e.danhSachGhe[0].tenHeThongRap,","," ",e.danhSachGhe[0].tenRap]}),Object(S.jsx)("td",{children:e.maVe}),Object(S.jsx)("td",{children:(n=e.danhSachGhe,n.reduce((function(e,t){return[].concat(Object(a.a)(e),[t.tenGhe])}),[]).join(", "))}),Object(S.jsx)("td",{children:new Intl.NumberFormat("it-IT",{style:"decimal"}).format(e.giaVe)}),Object(S.jsx)("td",{children:new Intl.NumberFormat("it-IT",{style:"decimal"}).format(e.giaVe*e.danhSachGhe.length)})]},e.maVe);var n})).reverse()})]})})})]})]}),Q&&Object(S.jsx)("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",backgroundColor:"rgb(255 255 255 / 67%)",zIndex:1e3},children:Object(S.jsx)(x.a,{style:{margin:"auto"}})})]})}}}]);
//# sourceMappingURL=21.8b63a1e3.chunk.js.map