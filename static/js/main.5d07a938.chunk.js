(this["webpackJsonplicense-project"]=this["webpackJsonplicense-project"]||[]).push([[0],{15:function(e,t,c){e.exports={titleTablelicense:"Panel_titleTablelicense__XzsBj",buttonFile:"Panel_buttonFile__VkGaO",containerButtonCSV:"Panel_containerButtonCSV__2pj19",csvButton:"Panel_csvButton__ZzE-C","circle-handle-back-login":"Panel_circle-handle-back-login__1AZlZ","angle-bracket-1":"Panel_angle-bracket-1__15zSO","circle-handle-table-refused":"Panel_circle-handle-table-refused__r1SRa",lineLeft:"Panel_lineLeft__2cDd2",lineRight:"Panel_lineRight__1ClTQ",modalLicenseRefused:"Panel_modalLicenseRefused__1yQtp",modalAlert:"Panel_modalAlert__1RnMf",open:"Panel_open__2ow_F",closed:"Panel_closed__1Tmu8",closedModalAlert:"Panel_closedModalAlert__3KTlQ"}},33:function(e,t,c){e.exports={backdrop:"Modal_backdrop__2FEZ0",modal:"Modal_modal__3Y7kB","modal-alert":"Modal_modal-alert__3VSNe",buttonModal:"Modal_buttonModal__3scAH"}},36:function(e,t,c){e.exports={containerDropdown:"Dropdownlist_containerDropdown__2F2Up",dropDownStyle:"Dropdownlist_dropDownStyle__2CImg",styleButtonDropDownlist:"Dropdownlist_styleButtonDropDownlist__3Lwh5"}},48:function(e,t,c){e.exports={containerCard:"CardLogin_containerCard__e5YSA",containerInput:"CardLogin_containerInput__QDIjv"}},50:function(e,t,c){e.exports={tableContainer:"TableLicense_tableContainer__2o55y",tableStyle:"TableLicense_tableStyle__2a4Z1",titleTable:"TableLicense_titleTable__NgTB3"}},51:function(e,t,c){e.exports={tableContainer:"Tabledevices_tableContainer__xA--Y",tableStyle:"Tabledevices_tableStyle__3MupK",titleTable:"Tabledevices_titleTable__3o3Ri",emptyContent:"Tabledevices_emptyContent__NulVm"}},55:function(e,t,c){e.exports={containerWelcome:"Welcome_containerWelcome__3yptG"}},56:function(e,t,c){e.exports={container:"ContainerPanel_container__3-E6A"}},58:function(e,t,c){e.exports={tableContainer:"TableLicensesRefused_tableContainer__MVCZa",tableStyle:"TableLicensesRefused_tableStyle__YgKmx",titleTable:"TableLicensesRefused_titleTable__1wcy5",emptyContent:"TableLicensesRefused_emptyContent__2qiNT"}},68:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(25),a=c.n(s),l=(c(68),c(59)),r=c(12),d=c(29),o={},b=[],j={},u=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(n.useState)(o)[1],c=function(e,t){var c=j[e](o,t);o=Object(d.a)(Object(d.a)({},o),c);var n,i=Object(r.a)(b);try{for(i.s();!(n=i.n()).done;){(0,n.value)(o)}}catch(s){i.e(s)}finally{i.f()}};return Object(n.useEffect)((function(){return e&&b.push(t),function(){e&&(b=b.filter((function(e){return e!==t})))}}),[t,e]),[o,c]},v=function(){var e,t;e={SET_USERNAME:function(e,t){return{username:t}}},(t={username:""})&&(o=Object(d.a)(Object(d.a)({},o),t)),j=Object(d.a)(Object(d.a)({},j),e)},O=c(7),p=c(9),x="No data!",h="Historical Licenses Refused",f="Alert!",m=c(48),_=c.n(m),g=c(2),D=function(e){var t=u()[1],c=Object(n.useState)(),i=Object(O.a)(c,2),s=i[0],a=i[1],l=Object(p.g)();return Object(g.jsxs)("div",{className:_.a.containerCard,children:[Object(g.jsx)("h1",{children:"Welcome to the Licenses' Panel"}),Object(g.jsxs)("div",{className:_.a.containerInput,children:[Object(g.jsx)("label",{children:"Username:"}),Object(g.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;a(t)}})]}),Object(g.jsx)("button",{onClick:function(){l.push("/panel"),e.getUsername(s),t("SET_USERNAME",s)},children:"Enter"})]})},S=c(55),y=c.n(S),N=function(e){return Object(g.jsx)("div",{className:y.a.containerWelcome,children:Object(g.jsx)(D,{getUsername:e.getUsername})})},C=c(21),P=c.n(C),L=c(56),T=c.n(L),k=function(e){return Object(g.jsx)("div",{className:T.a.container,children:e.children})},M=c(57),w=c(16),A=c(43),I={apiKey:"AIzaSyDZO6G6c4uBD5flXZ6vu8lkEDgs35ge-6k",authDomain:"licenses-project.firebaseapp.com",databaseURL:"https://licenses-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"licenses-project",storageBucket:"licenses-project.appspot.com",messagingSenderId:"425639397392",appId:"1:425639397392:web:408b0df0e69f9bbe31e295",measurementId:"G-MVLYTDNPDF"},E=c(13),V=function(e){var t=Object(A.a)(I),c=Object(E.a)(t),n=Object(E.c)(c,"licenses/");return Object(E.b)(n,(function(t){var c=P.a.orderBy(t.val(),"license.os","asc");e(c),console.log("licenses retrieved from Db.")})),null},R=function(e){var t=Object(E.a)(),c=Object(E.c)(t,"devices/");try{Object(E.b)(c,(function(t){var c=t.val();e(c),console.log("Devices retrieved from Db.")}))}catch(n){console.error(n)}},B={0:{device:{idDevice:"device0",osDevice:"windows",osVersion:"10",status:"pending",licensePaired:"N/D",licenseSelected:"N/D"}},1:{device:{idDevice:"device1",osDevice:"android",osVersion:"9",status:"pending",licensePaired:"N/D",licenseSelected:"N/D"}},2:{device:{idDevice:"device2",osDevice:"ios",osVersion:"8",status:"pending",licensePaired:"N/D",licenseSelected:"N/D"}},3:{device:{idDevice:"device3",osDevice:"android",osVersion:"11",status:"pending",licensePaired:"N/D",licenseSelected:"N/D"}},4:{device:{idDevice:"device4",osDevice:"android",osVersion:"11",status:"pending",licensePaired:"N/D",licenseSelected:"N/D"}},5:{device:{idDevice:"device5",osDevice:"android",osVersion:"11",status:"pending",licensePaired:"N/D",licenseSelected:"N/D"}}},F=function(e){var t=e.target,c=t.files[0],n=new FileReader,i={};void 0!==c&&n.readAsText(t&&c),n.onload=function(e){var t=e.target.result.split("\r\n").map((function(e){return e.split(";")})),c=Object(w.a)(t),n=Object(M.a)(c);n[0];n.slice(1).forEach((function(e,t,c){var n={license:{licenseId:"",expireDate:"",os:"",index:t,disable:!1}};i["".concat(t)]=n,e.forEach((function(e,t,c){n.license.licenseId=c[0],n.license.expireDate=U(c[1]),n.license.os=c[2]}))})),setTimeout((function(){return function(e){var t=Object(A.a)(I),c=Object(E.a)(t);Object(E.d)(Object(E.c)(c,"licenses/"),e)}(i)}),3e3),setTimeout((function(){return function(e){var t=Object(A.a)(I),c=Object(E.a)(t);Object(E.d)(Object(E.c)(c,"devices/"),e),console.log("New liscense setted up to Db!")}(B)}),2e3)}},U=function(e){var t=e.substring(0,4),c=e.substring(4,6),n=e.substring(6,8),i=e.substring(8,12);return n+"/"+c+"/"+t+", "+i.substring(0,2)+":"+i.substring(2,4)},Z=c(36),K=c.n(Z),W=function(e){var t=e.licenseId,c=e.expireDate,i=e.index,s=e.devices,a=e.osLicense,l=Object(n.useRef)(null),r=Object(n.useState)(),d=Object(O.a)(r,2),o=d[0],b=d[1],j=Object(n.useState)(),u=Object(O.a)(j,2),v=u[0],p=u[1],x=s&&s.filter((function(e){return e.device.idDevice===v&&e.device}));return Object(g.jsxs)("div",{className:K.a.containerDropdown,children:[Object(g.jsxs)("select",{className:K.a.dropDownStyle,ref:l,"data-index":i,"data-licenseid":t,"data-expiredate":c,disabled:e.disable,onChange:function(e){return p(e.target.value)},children:[Object(g.jsx)("option",{children:"select"}),s&&s.map((function(e,t){return Object(g.jsx)("option",{children:e.device.idDevice},t)}))]}),Object(g.jsx)("select",{className:K.a.dropDownStyle,disabled:e.disable,onChange:function(e){return b(e.target.value)},children:["select","pair","eject"].map((function(e,t){return Object(g.jsx)("option",{children:e},t)}))}),Object(g.jsx)("button",{className:K.a.styleButtonDropDownlist,disabled:e.disable,onClick:function(){if("select"!==v&&"select"!==o&&void 0!==v&&void 0!==o&&a===x[0].device.osDevice){var t=!0!==P.a.isEmpty(x)&&x[0].device.status,c=l.current.getAttribute("data-index"),n=l.current.getAttribute("data-licenseid"),i=l.current.getAttribute("data-expiredate");if("pending"===t)!function(e){var t="",c="",n=Object(E.a)();"device0"===e.device?(t=0,c="device0"):"device1"===e.device?(t=1,c="device1"):"device2"===e.device?(t=2,c="device2"):"device3"===e.device?(t=3,c="device3"):"device4"===e.device?(t=4,c="device4"):"device5"===e.device&&(t=5,c="device5");var i={},s={},a={},l={};try{("select"!==e.pairSelect&&void 0!==e.pairSelect||"select"!==e.device&&void 0!==e.device)&&(i["/devices/".concat(t,"/device/status")]=e.pairSelect,s["/licenses/".concat(e.index,"/license/disable")]=!0,a["/devices/".concat(t,"/device/licenseSelected")]=e.licenseId,l["/devices/".concat(t,"/device/licensePaired")]=e.expiredate+", "+c,Object(E.e)(Object(E.c)(n),i),Object(E.e)(Object(E.c)(n),s),Object(E.e)(Object(E.c)(n),a),Object(E.e)(Object(E.c)(n),l))}catch(r){console.error(r)}}({device:v,pairSelect:o,index:c,licenseId:n,expiredate:i});else{var s={key1:"selected",textSelected:"sorry this device cannot register a license at this time!",title:f};e.handlerModalAlert(s)}}else{var r={key2:"no-selection",textCombine:"Actions no permited : select devices with different license OS, choose only one selection of available options or No selection.",title:f};e.handlerModalAlert(r)}},children:"Submit"})]})},Y=function(e){var t=e.disable,c=e.expireDate,n=e.licenseId,i=e.operativeSystem,s=e.index,a=e.devices;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:n}),Object(g.jsx)("td",{children:c}),Object(g.jsx)("td",{children:i}),Object(g.jsxs)("td",{children:[" ",Object(g.jsx)(W,{expireDate:c,licenseId:n,index:s,disable:t,devices:a,handlerModalAlert:e.handlerModalAlert,osLicense:i})]})]})},z=function(e){var t=e.th,c=e.td,n=e.title,i=e.styles;return Object(g.jsxs)("div",{className:i.tableContainer,children:[Object(g.jsx)("h1",{className:i.titleTable,children:n}),Object(g.jsxs)("table",{className:i.tableStyle,children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:t},"tr-table-data")},"thead-table-data"),Object(g.jsx)("tbody",{children:c},"tbody-key")]},"table-data")]})},G=c(50),Q=c.n(G),H=function(e){var t=e.licenses,c=e.devices;return Object(g.jsx)(g.Fragment,{children:t?Object(g.jsx)(z,{styles:Q.a,title:"Licenses",th:["License Id","Expire Date","Operative System","Pair Device"].map((function(e,t){return Object(g.jsx)("th",{children:e},t)})),td:t.map((function(t,n){return Object(g.jsx)(Y,{devices:c,index:t.license.index,disable:t.license.disable,expireDate:t.license.expireDate,licenseId:t.license.licenseId,operativeSystem:t.license.os,handlerModalAlert:e.handlerModalAlert},n.toString())}))}):Object(g.jsx)("div",{className:Q.a.emptyContent,children:Object(g.jsx)("label",{children:x})})})},J=function(e){var t=e.idDevice,c=e.osDevice,n=e.osVersion,i=e.status,s=e.licensePaired,a=e.licenseSelected;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t}),Object(g.jsx)("td",{children:c}),Object(g.jsx)("td",{children:n}),Object(g.jsx)("td",{children:i}),Object(g.jsx)("td",{children:s}),Object(g.jsx)("td",{children:a})]})},X=c(51),q=c.n(X),$=function(e){var t=e.devices,c=t&&t.map((function(e){return e.device}));return Object(g.jsx)(g.Fragment,{children:c?Object(g.jsx)(z,{styles:q.a,title:"Devices",th:["Id Device","OS Device","OS Version","Status","License Paired","License Selected"].map((function(e,t){return Object(g.jsx)("th",{children:e},t)})),td:c.map((function(e,t){return Object(g.jsx)(J,{indexKey:e.idDevice,idDevice:e.idDevice,osDevice:e.osDevice,osVersion:e.osVersion,status:e.status,licensePaired:e.licensePaired,licenseSelected:e.licenseSelected},t.toString())}))}):Object(g.jsx)("div",{className:q.a.emptyContent,children:Object(g.jsx)("label",{children:x})})})},ee=c(97),te=c(33),ce=c.n(te),ne=function(e){return Object(g.jsx)("div",{onClick:e.handlerModal,className:ce.a.backdrop})},ie=function(e){var t=e.keyContent,c=e.tag;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:e.styles.join(" "),children:[Object(g.jsx)(ne,{handlerModal:e.handlerModal}),c&&Object(g.jsxs)("div",{className:"no-selection"===t||void 0===t?ce.a["modal-alert"]:ce.a.modal,children:[("no-selection"===t||void 0===t)&&Object(g.jsx)("h1",{children:e.title}),Object(g.jsx)("div",{style:{textAlign:"center"},children:e.content}),Object(g.jsx)("button",{className:ce.a.buttonModal,onClick:e.handlerModal,children:"Close"})]})]})})},se=c(58),ae=c.n(se),le=function(e){var t=e.devices,c=t&&t.filter((function(e){return"eject"===e.device.status}));return Object(g.jsx)(g.Fragment,{children:P.a.isEmpty(c)?Object(g.jsx)("div",{children:"No liceses Found."}):Object(g.jsx)(z,{th:["Id Device","OS Device","OS Version","Status","License Paired","License Selected"].map((function(e,t){return Object(g.jsx)("th",{children:e},t)})),td:c.map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.device.idDevice}),Object(g.jsx)("td",{children:e.device.osDevice}),Object(g.jsx)("td",{children:e.device.osVersion}),Object(g.jsx)("td",{children:e.device.status}),Object(g.jsx)("td",{children:e.device.licensePaired}),Object(g.jsx)("td",{children:e.device.licenseSelected})]},t)})),title:h,styles:ae.a})})},re=c(15),de=c.n(re),oe=function(e){var t=Object(p.g)(),c=u()[0],i=Object(n.useState)(),s=Object(O.a)(i,2),a=s[0],l=s[1],r=Object(n.useState)(),d=Object(O.a)(r,2),o=d[0],b=d[1],j=Object(n.useState)(),v=Object(O.a)(j,2),x=v[0],f=v[1],m=Object(n.useState)(),_=Object(O.a)(m,2),D=_[0],S=_[1],y=Object(n.useState)(),N=Object(O.a)(y,2),C=N[0],L=N[1],T=Object(n.useState)(),M=Object(O.a)(T,2),w=M[0],A=M[1],I=a?[de.a.modalLicenseRefused,de.a.open]:[de.a.modalLicenseRefused,de.a.closed],E=D?[de.a.modalAlert,de.a.open]:[de.a.modalAlert,de.a.closedModalAlert],B=function(e){L(e),S((function(e){return!e}))},U=function(){return l((function(e){return!e}))};return Object(n.useEffect)((function(){void 0===o&&V(b),void 0===o&&R(f),P.a.isEmpty(c.username)||sessionStorage.setItem("uid",c.username),A(sessionStorage.getItem("uid"))}),[o,c.username]),Object(n.useEffect)((function(){return function(){sessionStorage.clear(),console.log("Component Panel Unmounted!")}}),[]),Object(g.jsxs)(k,{children:[Object(g.jsxs)("h1",{children:[" ","Licenses' Panel of "," ",null===w?"(No User.)":w," "]}),Object(g.jsx)($,{devices:x}),o&&!0!==P.a.isEmpty(o)?Object(g.jsx)(H,{devices:x,licenses:o,handlerModalAlert:B}):Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:de.a.titleTablelicense,children:"  Load a CSV file for displaying and assign the license to the devices."})}),Object(g.jsx)("div",{className:de.a.containerButtonCSV,children:Object(g.jsxs)("label",{className:de.a.csvButton,children:["Load CSV",Object(g.jsx)("input",{className:de.a.buttonFile,type:"file",name:"Load CSV",onChange:function(e){F(e),setTimeout((function(){V(b),R(f)}),1e3)}})]})}),!P.a.isEmpty(o)&&Object(g.jsx)(ee.a,{title:"Show liceses table ejected",onClick:U,children:Object(g.jsxs)("div",{className:de.a["circle-handle-table-refused"],children:[Object(g.jsx)("span",{className:de.a.lineLeft}),Object(g.jsx)("span",{className:de.a.lineRight})]})}),!P.a.isEmpty(o)&&Object(g.jsx)(ee.a,{title:"Back to Page Login",onClick:function(){return t.push("/licensepanel-welcome")},children:Object(g.jsxs)("div",{className:de.a["circle-handle-back-login"],children:[Object(g.jsx)("span",{className:de.a["angle-bracket-1"]}),Object(g.jsx)("span",{className:"angle-bracket-2"})]})}),Object(g.jsx)(ie,{tag:a,styles:I,content:Object(g.jsx)(le,{devices:x,title:h}),handlerModal:U,keyContent:"table"}),Object(g.jsx)(ie,{tag:D,styles:E,content:D&&("no-selection"===C.key2?C.textCombine:C.textSelected),handlerModal:B,keyContent:D&&C.key2,title:D&&C.title})]})},be=function(){return Object(g.jsx)(g.Fragment,{})},je=function(){var e=Object(n.useState)(),t=Object(O.a)(e,2),c=t[0],i=t[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(p.d,{children:[Object(g.jsx)(p.b,{path:"/",exact:!0,children:Object(g.jsx)(p.a,{to:"/licensepanel-welcome"})}),Object(g.jsx)(p.b,{path:"/licensepanel-welcome",children:Object(g.jsx)(N,{getUsername:function(e){return i(e)}})}),Object(g.jsx)(p.b,{path:"/panel",children:Object(g.jsx)(oe,{userPanel:c})}),Object(g.jsx)(p.b,{path:"/sampl",children:Object(g.jsx)(be,{})})]})})};v(),a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(l.a,{children:Object(g.jsx)(je,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.5d07a938.chunk.js.map