webpackJsonp([1],{0:function(t,e){},"0JLP":function(t,e){},"1/oy":function(t,e){},"4KY9":function(t,e,s){"use strict";var r={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:s("BvKS")}}),t._v("\r\n\t\tKAR"),r("span",[t._v("PÖÖL")]),t._v(" "),r("p",{staticStyle:{"font-size":"20px"}},[t._v(" wesh poto ")]),t._v(" "),r("b-btn",{attrs:{variant:"primary",href:"#/main"}},[t._v("ENTER")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-frame"},[e("div",{staticClass:"loader1",attrs:{id:"loader1"}}),this._v(" "),e("div",{staticClass:"loader12",attrs:{id:"loader12"}})])}]};e.a=r},"9M+g":function(t,e){},A4mu:function(t,e){},BvKS:function(t,e,s){t.exports=s.p+"static/img/logo.c0e449a.png"},FhoZ:function(t,e,s){"use strict";(function(e){const r=s("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8087,autoOpenBrowser:!0,errorOverlay:!0,notifyOnErrors:!0,backendHost:"eventregistration-backend-123.herokuapp.com/",backendPort:80,poll:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{index:r.resolve(e,"../dist/index.html"),assetsRoot:r.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(e,"/")},GPHQ:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},KgXo:function(t,e,s){"use strict";var r=s("0JLP"),i=s.n(r),n=s("4KY9");var a=function(t){s("Smry")},o=s("VU/8")(i.a,n.a,!1,a,"data-v-aa5432f8",null);e.default=o.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar",[e("router-link",{attrs:{to:"/main"}},[this._v("Main")]),this._v(" "),e("router-link",{attrs:{to:"/UserRanking"}},[this._v("Ranking")]),this._v(" "),e("router-link",{attrs:{to:"/ActiveParticipants"}},[this._v("Active")])],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("GPHQ")},null,null).exports,a=s("/ocq"),o=s("mtWM"),c=s.n(o),l=(s("FhoZ"),c.a.create({baseURL:"https://karpool-spring-14.herokuapp.com/",headers:{"Access-Control-Allow-Origin":"localhost:8087/"}})),v={data:function(){return{search:"",search2:"",passengersearch:"",activeTrips:[],activeDrivers:[],activePassengers:[],response:[]}},methods:{getDrivers:function(){var t=this;l.get("/drivers/active/all").then(function(e){t.activeDrivers.length>0&&(t.activeDrivers=[]);for(var s=0;s<e.data.length;s++)t.activeDrivers.push(e.data[s])}).catch(function(e){t.errorParticipant=e})},getPassengers:function(){var t=this;l.get("/passengers/active/all").then(function(e){t.activePassengers.length>0&&(t.activePassengers=[]);for(var s=0;s<e.data.length;s++)t.activePassengers.push(e.data[s])}).catch(function(e){t.errorParticipant=e})},getOpenTrips:function(){var t=this;t.activeTrips.length>0&&(t.activeTrips=[]),l.get("/trips/open/all").then(function(e){for(var s=0;s<e.data.length;s++)t.activeTrips.push(e.data[s])}).catch(function(e){t.errorParticipant=e})}},computed:{filteredCustomers:function(){var t=this;return this.activeDrivers.filter(function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>=0})},filteredPassengers:function(){var t=this;return this.activePassengers.filter(function(e){return e.name.toLowerCase().indexOf(t.passengersearch.toLowerCase())>=0})},filteredTrips:function(){var t=this;return this.activeTrips.filter(function(e){return e.destination.toLowerCase().indexOf(t.search2.toLowerCase())>=0})}},beforeMount:function(){this.getDrivers(),this.getPassengers(),this.getOpenTrips()}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[t._v("\r\n\r\n\r\n\tFilter: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passengersearch,expression:"passengersearch"}],attrs:{type:"text",id:"filter3",placeholder:"Search Passengers"},domProps:{value:t.passengersearch},on:{input:function(e){e.target.composing||(t.passengersearch=e.target.value)}}}),t._v("     \r\n\t\r\n\tFilter: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search2,expression:"search2"}],attrs:{type:"text",id:"filter2",placeholder:"Search Trips"},domProps:{value:t.search2},on:{input:function(e){e.target.composing||(t.search2=e.target.value)}}}),t._v("\r\n\r\n\tFilter: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",id:"filter",placeholder:"Search Drivers"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("div",{staticClass:"drivers"},[s("table",{attrs:{id:"customers"}},[t._m(0),t._v(" "),t._l(t.filteredCustomers,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.phoneNumber))]),t._v(" "),s("td",[t._v(t._s(e.trips))])])})],2)]),t._v(" "),s("div",{staticClass:"passengers"},[s("table",{attrs:{id:"customers"}},[t._m(1),t._v(" "),t._l(t.filteredPassengers,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.phoneNumber))])])})],2)]),t._v(" "),s("div",{staticClass:"trips"},[s("table",{attrs:{id:"customers"}},[s("caption",[t._v("ACTIVE TRIPS")]),t._v(" "),t._m(2),t._v(" "),t._l(t.filteredTrips,function(e){return s("tr",[s("td",[t._v(t._s(e.tripId))]),t._v(" "),s("td",[t._v(t._s(e.departureLocation))]),t._v(" "),s("td",[t._v(t._s(e.destination))]),t._v(" "),s("td",[t._v(t._s(e.departureDate)+"\r\n\t\t")]),s("td",[t._v(t._s(e.departureTime))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Email")]),this._v(" "),e("th",[this._v("Phone")]),this._v(" "),e("th",[this._v("Trips")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Email")]),this._v(" "),e("th",[this._v("Phone")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("Trip ID")]),t._v(" "),s("th",[t._v("Location")]),t._v(" "),s("th",[t._v("Destination")]),t._v(" "),s("th",[t._v("Depart Date")]),t._v(" "),s("th",[t._v("Depart Time")])])}]};var h=s("VU/8")(v,u,!1,function(t){s("A4mu")},null,null).exports,d=(s("FhoZ"),c.a.create({baseURL:"https://karpool-spring-14.herokuapp.com/",headers:{"Access-Control-Allow-Origin":"localhost:8087/"}})),p={data:function(){return{search:"",activeTrips:["Active Trips: "],activeTripsPrice:["Price: "],activeDrivers:[],tripDestination:[],activePassengers:[],response:[],customers:[]}},methods:{getTopDrivers:function(){var t=this;d.get("/drivers/top3").then(function(e){t.activeDrivers.length>0&&(t.activeDrivers=[]);for(var s=0;s<e.data.length;s++)t.activeDrivers.push(e.data[s]),console.log(e.data[s])}).catch(function(e){t.errorParticipant=e})},getTopPassengers:function(){var t=this;d.get("/passengers/top3").then(function(e){t.activePassengers.length>0&&(t.activePassengers=[]);for(var s=0;s<e.data.length;s++)t.activePassengers.push(e.data[s])}).catch(function(e){t.errorParticipant=e})},getTopDestinations:function(){var t=this;d.get("trips/destinations/top3").then(function(e){t.activePassengers.length>0&&(t.activePassengers=[]);for(var s=0;s<e.data.length;s++)t.activePassengers.push(e.data[s])}).catch(function(e){t.errorParticipant=e})},filteredPassenger:function(){return activePassengers.filter(function(t){return t.name.toLowerCase().indexOf(self.search.toLowerCase())>=0})},filteredDriver:function(){return customers.filter(function(t){return t.name.toLowerCase().indexOf(self.search.toLowerCase())>=0})},filteredCustomers:function(){return customers.filter(function(t){return t.name.toLowerCase().indexOf(self.search.toLowerCase())>=0})},check:function(){document.getElementById("male").checked=!0},uncheck:function(){document.getElementById("female").checked=!1}},beforeMount:function(){this.getTopPassengers(),this.getTopDrivers()}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("h1",[t._v("Rankings")]),t._v(" "),s("div",{staticClass:"DriverTable"},[s("table",{attrs:{id:"customers"}},[s("caption",[t._v("TOP RANKED DRIVERS")]),t._v(" "),t._m(0),t._v(" "),t._l(t.activeDrivers,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.phoneNumber))])])}),t._v(" "),s("br")],2)]),t._v(" "),s("div",{staticClass:"PassengerTable"},[s("table",{staticStyle:{"margin-top":"75%"},attrs:{id:"customers"}},[s("caption",[t._v("TOP RANKED PASSENGERS")]),t._v(" "),t._m(1),t._v(" "),t._l(t.activePassengers,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.phoneNumber))])])})],2)]),t._v(" "),s("div",{staticClass:"RouteTable"},[s("table",{staticStyle:{"margin-left":"150%"},attrs:{id:"customers"}},[s("caption",[t._v("TOP RANKED ROUTES")]),t._v(" "),t._m(2),t._v(" "),t._l(t.activePassengers,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))])])})],2),t._v(" "),s("br")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Driver")]),this._v(" "),e("th",[this._v("Email")]),this._v(" "),e("th",[this._v("Phone")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Passenger")]),this._v(" "),e("th",[this._v("Email")]),this._v(" "),e("th",[this._v("Phone")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Destination")]),this._v(" "),e("th",[this._v("Frequency")])])}]};var m=s("VU/8")(p,_,!1,function(t){s("hRwY")},null,null).exports,f=s("KgXo"),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("h3",{staticStyle:{"text-align":"center"}},[this._v("Welcome to Karpool, the best ride sharing service")]),this._v(" "),e("img",{attrs:{src:s("kBAB"),width:"100%",height:"50%","margin-left":"auto","margin-right":"auto"}})])}]},P=s("VU/8")(null,g,!1,null,null,null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[s("h1",[t._v("Hello world!")])]),t._v(" "),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),s("b-carousel-slide",[s("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})]),t._v(" "),s("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[s("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n        ut lacus vel interdum.\n      ")])])],1),t._v(" "),s("p",{staticClass:"mt-4"},[t._v("\n    Slide #: "+t._s(t.slide)),s("br"),t._v("\n    Sliding: "+t._s(t.sliding)+"\n  ")])],1)},staticRenderFns:[]},E=s("VU/8")({data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},b,!1,null,null,null).exports;r.a.use(a.a);var D=new a.a({routes:[{path:"/ActiveParticipants",name:"ActiveParticipants",component:h},{path:"/UserRanking",name:"UserRanking",component:m},{path:"/loading",name:"loading",component:f.default},{path:"/",name:"loading",component:f.default},{path:"/main",name:"main",component:P},{path:"/carou",name:"carou",component:E}]}),T=(s("Rf8U"),s("8+8L")),x=s("e6fC");s("Jmt5"),s("9M+g");r.a.use(x.a),r.a.use(T.a),r.a.use(D),r.a.config.productionTip=!1,new r.a({el:"#app",data:{},router:D,components:{App:n},template:"<App/>"})},Smry:function(t,e){},hRwY:function(t,e){},kBAB:function(t,e,s){t.exports=s.p+"static/img/NAmap.35c4290.png"},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.22ab38210017ab418689.js.map