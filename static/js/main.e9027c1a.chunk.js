(this["webpackJsonppizza-hut"]=this["webpackJsonppizza-hut"]||[]).push([[0],Array(54).concat([function(e,t,a){e.exports=a(122)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),i=a.n(c),l=a(19),s=a(24),o=(a(63),a(7)),u=a(8),m=a(10),p=a(9),d=a(11),h=(a(64),a(0)),f=a(3),E=(a(65),a(25)),v=(a(66),function(e){var t=e.children,a=e.click,n=e.primary,c=Object(E.a)(e,["children","click","primary"]);return r.a.createElement("button",Object.assign({className:"normalBtn ".concat(n&&"primaryBtn"),onClick:a},c),t)}),g=a(14),b=a.n(g),y=a(22),N=a(23),k=(a(68),a(69),Object(n.forwardRef)((function(e,t){var a=e.label,n=e.name,c=e.change,i=Object(E.a)(e,["label","name","change"]);return r.a.createElement("div",{className:"input"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({id:n,name:n,onChange:c,ref:t},i)))}))),w=(a(70),function(e){var t=e.close;return r.a.createElement("div",{className:"backdrop",onClick:t})}),O=(a(71),function(e){var t=e.children,a=e.type,n=Object(E.a)(e,["children","type"]);return r.a.createElement("button",Object.assign({className:"authButton",type:a},n),t)}),j=(a(72),function(e){var t=e.children;return r.a.createElement("p",{className:"textError"},t)}),C=a(40),S=a.n(C);a(82);S.a.initializeApp({apiKey:"AIzaSyDxhoWXkzIkM2XpVWl57u64w4cuWZy86hg",authDomain:"pizza-hut-5cf53.firebaseapp.com",databaseURL:"https://pizza-hut-5cf53.firebaseio.com",projectId:"pizza-hut-5cf53",storageBucket:"pizza-hut-5cf53.appspot.com",messagingSenderId:"383511005593",appId:"1:383511005593:web:d1ff76fda328ef9463ab08",measurementId:"G-DH46DD60H7"});var I=S.a.auth(),x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleSubmit=function(){var e=Object(y.a)(b.a.mark((function e(t){var a,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.email,c=a.password,i=a.confirmPassword,""!==r){e.next=5;break}return n.setState({error:"enter your email"}),e.abrupt("return");case 5:if(""!==c){e.next=8;break}return n.setState({error:"create a password"}),e.abrupt("return");case 8:if(""!==i){e.next=11;break}return n.setState({error:"re-enter password"}),e.abrupt("return");case 11:if(c===i){e.next=14;break}return n.setState({error:"password not match"}),e.abrupt("return");case 14:if(""===r.trim()||""===c.trim()||""===i.trim()){e.next=26;break}return e.prev=15,n.setState({loading:!0}),e.next=19,I.createUserWithEmailAndPassword(r,c);case 19:n.props.close(),n.setState({loading:!1}),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(15),n.setState({signinError:!0,loading:!1});case 26:case"end":return e.stop()}}),e,null,[[15,23]])})));return function(t){return e.apply(this,arguments)}}(),n.inputRef=r.a.createRef(),n.state={email:"",password:"",confirmPassword:"",error:"",loading:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.close,n=e.showSignin,c=this.state,i=c.loading,l=c.error;return r.a.createElement("div",null,t&&r.a.createElement(w,{close:a}),r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("div",null,r.a.createElement("h3",null,"Signup to Pizza hut"),r.a.createElement("p",null,"create an account to place order")),r.a.createElement(h.b.Provider,{value:{className:"iconClose"}},r.a.createElement(f.k,{onClick:a}))),r.a.createElement("div",{className:"signupContainer"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(k,{name:"email",id:"email",type:"email",label:"Email",change:this.handleChange,ref:this.inputRef}),r.a.createElement(k,{name:"password",id:"password",type:"password",label:"Create Password",change:this.handleChange}),r.a.createElement(k,{name:"confirmPassword",id:"confirmPassword",type:"password",label:"Confirm Password",change:this.handleChange}),l&&r.a.createElement(j,null,l),i?r.a.createElement(O,{disabled:!0},"creating account"):r.a.createElement(O,{type:"submit"},"create account"),r.a.createElement("p",{className:"termsCondition"},"By signing in you accept our ",r.a.createElement("span",{className:"terms"},"Terms and Conditions")))),r.a.createElement("p",{style:{textAlign:"center",color:"grey"}},"or"),r.a.createElement("p",{style:{textAlign:"center",fontSize:"0.9em",paddingTop:"12px"}},"Already have account? ",r.a.createElement("span",{onClick:n,className:"terms"},"Login"))))}}]),a}(n.Component),_=(a(83),a(84),function(e){var t=e.show,a=e.children;return t&&r.a.createElement("div",{className:"popup"},a)}),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleSubmit=function(){var e=Object(y.a)(b.a.mark((function e(t){var a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.email,c=a.password,""!==r.trim()){e.next=5;break}return n.setState({emailError:"enter your email"}),e.abrupt("return");case 5:if(c.trim()){e.next=8;break}return n.setState({emailError:"",error:"enter password"}),e.abrupt("return");case 8:if(""===r.trim()||""===c.trim()){e.next=20;break}return e.prev=9,n.setState({loading:!0}),e.next=13,I.signInWithEmailAndPassword(r,c);case 13:n.props.close(),n.setState({loading:!1}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),n.setState({error:"something went wrong",emailError:null,loading:!1});case 20:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(t){return e.apply(this,arguments)}}(),n.inputRef=r.a.createRef(),n.state={email:"",password:"",emailError:null,error:null,loading:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.close,n=e.showSignup,c=this.state,i=c.emailError,l=c.error,s=c.loading;return r.a.createElement("div",{className:"signinContainer"},t&&r.a.createElement(w,null),r.a.createElement(_,{show:t},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Signup to Pizza hut"),r.a.createElement(h.b.Provider,{value:{className:"iconClose"}},r.a.createElement(f.k,{onClick:a}))),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(k,{id:"email",name:"email",label:"Email",type:"email",ref:this.inputRef,change:this.handleChange}),i&&r.a.createElement(j,null,i),r.a.createElement(k,{id:"password",name:"password",label:"Password",type:"password",change:this.handleChange}),l&&r.a.createElement(j,null,l),s?r.a.createElement(O,{disabled:!0},"loggin in"):r.a.createElement(O,{type:"submit"},"login"))),r.a.createElement("p",{className:"link"},"New to Pizza hut? ",r.a.createElement("span",{onClick:n,className:"create"},"Create account"))))}}]),a}(n.Component),P=Object(n.createContext)(),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.onAuthStateChanged((function(e){if(e){var a=e.email,n=e.uid;t.setState({currentUser:{email:a,uid:n}})}else t.setState({currentUser:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.currentUser;return r.a.createElement(P.Provider,{value:{currentUser:e}},this.props.children)}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showSignup:!1,showSignin:!1},e.toggleSignup=function(){e.setState((function(e){return{showSignup:!e.showSignup,showSignin:!1}}))},e.toggleSignin=function(){e.setState((function(e){return{showSignin:!e.showSignin,showSignup:!1}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.history,t=this.state,a=t.showSignup,n=t.showSignin,c=this.context.currentUser;return r.a.createElement("header",null,r.a.createElement("div",{className:"logoTitle"},r.a.createElement("h3",null,"pizza hut")),r.a.createElement("nav",null,r.a.createElement("div",{className:"navLinks"},r.a.createElement(l.b,{to:"/",exact:!0,title:"go back to home page"},"Home"),r.a.createElement(l.b,{to:"/cart",className:"cart",title:"check your wishlist"},"My Wishlist"),r.a.createElement(l.b,{to:"/likes",title:"check your favourites"},"Favourites"),c?r.a.createElement(v,{title:"logout",click:function(){return I.signOut()}},"logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"login to order",click:this.toggleSignin},"login"),r.a.createElement(v,{primary:!0,title:"instant order",click:this.toggleSignup},"join now"))),r.a.createElement(h.b.Provider,{value:{className:"searchIcon"}},r.a.createElement(f.l,{onClick:function(){return e.push("/search")}})),a&&r.a.createElement(x,{show:a,showSignin:this.toggleSignin,close:this.toggleSignup}),n&&r.a.createElement(z,{show:n,showSignup:this.toggleSignup,close:this.toggleSignin})))}}]),a}(n.Component);T.contextType=P;var A=Object(d.g)(T),D=(a(86),a(87),Object(d.g)((function(e){var t=e.history;return r.a.createElement("div",{className:"category"},r.a.createElement("div",{className:"categoryTitle"},r.a.createElement("h3",null,"collections"),r.a.createElement("p",null,"Explore all the dishes in pizza's and pasta's")),r.a.createElement("div",{className:"special"},r.a.createElement("div",{className:"pizza",onClick:function(){return t.push("/recipe/pizza")}},r.a.createElement("img",{src:"".concat("https://www.snopes.com/tachyon/2018/01/pizza_fb.jpg?resize=865,452&quality=65"),alt:"category"}),r.a.createElement("div",{className:"details"}),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"infoTitle"},"pizza"),r.a.createElement("p",{className:"viewAll"},"view all ",r.a.createElement("span",{className:"arrowIcon"},"\u25ba")))),r.a.createElement("div",{className:"pasta",onClick:function(){return t.push("/recipe/pasta")}},r.a.createElement("img",{src:"".concat("https://wallpapercave.com/wp/wp4325872.jpg"),alt:"category"}),r.a.createElement("div",{className:"details"}),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"infoTitle"},"pasta"),r.a.createElement("p",{className:"viewAll"},r.a.createElement("span",null,"view all"),r.a.createElement("span",{className:"arrowIcon"},"\u25ba"))))))}))),M=(a(88),function(){return r.a.createElement("div",{className:"services"},r.a.createElement(h.b.Provider,{value:{className:"iconStyle"}},r.a.createElement("div",{className:"service"},r.a.createElement(f.c,null),r.a.createElement("h2",{className:"serviceTitle"},"No Minimum Order"),r.a.createElement("p",{className:"serviceSubtitle"},"Order in for yourself or for the group, with no restrictions on order value")),r.a.createElement("div",{className:"service"},r.a.createElement(f.m,null),r.a.createElement("h2",{className:"serviceTitle"},"Live Order Tracking"),r.a.createElement("p",{className:"serviceSubtitle"},"Know where your order is at all times, from the restaurant to your doorstep")),r.a.createElement("div",{className:"service"},r.a.createElement(f.a,null),r.a.createElement("h2",{className:"serviceTitle"},"Lightning-Fast Delivery"),r.a.createElement("p",{className:"serviceSubtitle"},"Experience Swiggy's superfast delivery for food delivered fresh & on time"))))}),U=(a(89),function(){return r.a.createElement("div",{className:"offers"},r.a.createElement("span",null,"Today's special offer 10% - 20% discount for each orders HURRY!"))}),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"cover",style:{backgroundImage:"url(".concat("https://www.fox21news.com/wp-content/uploads/sites/37/2017/03/pizzagraphic2_27861447_ver1.0.jpeg?w=876&h=493&crop=1",")")}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"mainTitle"},"pizza hut's online ordering"),r.a.createElement("span",{className:"subTitle"},"Yummy pizza delivered fast & fresh")))),r.a.createElement(D,null),r.a.createElement(U,null),r.a.createElement(M,null))}}]),a}(n.Component),q=a(36),B=a.n(q),Q=(a(106),a(107),function(e){var t=0;return e&&(t=parseInt(e.slice(0,2))),t<30&&(t=25),isNaN(t)&&(t=30),t}),Y=Object(d.g)((function(e){var t=e.match,a=e.recipe,n=t.url;return r.a.createElement("div",{className:"recipeContainer"},r.a.createElement("div",{className:"recipe"},r.a.createElement("div",{className:"imageContainer",style:{backgroundImage:"url(".concat(a.image_url,")")}}),r.a.createElement("div",{className:"recipeDetail"},r.a.createElement("h5",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:17;if(e.length>t){var a=[];return e.split(" ").reduce((function(e,n){return e+n.length<t&&a.push(n),e+n.length}),0),"".concat(a.join(" "),"...")}return e}(a.title)),r.a.createElement("span",{className:"publisher"},a.publisher),r.a.createElement("span",{className:"rating"},function(){var e=["3.5","3.8","4.3","4.5","4.7","4.8","5.0"];return e[Math.floor(Math.random()*e.length)]}()),r.a.createElement("span",{className:"price"},"$ ",Q(a.recipe_id)),r.a.createElement(l.b,{to:"".concat(n,"/").concat(a.recipe_id),className:"view",title:"view full details of this recipe"},"details"))))})),H=(a(108),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loader"}),r.a.createElement("span",{className:"loadtext"},"Loading..."))}),J=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipes:[],numberOfResults:0,resultPerPage:12,page:0,start:0,end:12,noRecipe:!1},e.previousResults=function(){e.setState((function(e){return{page:e.page-1,start:e.start-e.resultPerPage,end:e.end-e.resultPerPage}}))},e.nextResults=function(){e.setState((function(e){return{page:e.page+1,start:(e.page+1)*e.resultPerPage,end:e.resultPerPage*(e.page+2)}}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("pizza"!==(t=this.props.match.params.category).trim()&&"pasta"!==t.trim()){e.next=9;break}return e.next=4,B.a.get("https://forkify-api.herokuapp.com/api/search?&q=".concat(t));case 4:a=e.sent,n=a.data,this.setState({recipes:n.recipes,numberOfResults:n.recipes.length,noRecipe:!1}),e.next=10;break;case 9:this.setState({noRecipe:!0});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.recipes,a=e.noRecipe,n=e.start,c=e.end,i=e.numberOfResults,l=this.props.match.params.category,s=0!==n,o=c<=i;return r.a.createElement("div",{className:"recipes",id:"gotoTop"},a?r.a.createElement("p",{className:"noRecipe"},"recipe not found"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"recipeTitle"},r.a.createElement("h3",null,l),r.a.createElement("p",null,"Explore all new and delicious ",l)),r.a.createElement("div",null,t.length>0?r.a.createElement("div",{className:"recipeList"},t.slice(n,c).map((function(e){return r.a.createElement(Y,{key:e.recipe_id,recipe:e})})),r.a.createElement("div",{className:"pageButtons"},s&&r.a.createElement(v,{primary:!0,click:this.previousResults},"\u276e Prev"),o&&r.a.createElement(v,{primary:!0,click:this.nextResults},"Next \u276f"))):r.a.createElement(H,null))))}}]),a}(n.Component),K=(a(109),a(32)),W=a(21),F=(a(110),a(111),function(e){var t=e.children,a=e.click,n=Object(E.a)(e,["children","click"]);return r.a.createElement("p",Object.assign({onClick:a,className:"iconButton"},n),t)}),$=(a(112),function(e){var t=e.ingredients;return r.a.createElement("div",{className:"ingredients"},r.a.createElement("div",{className:"ingTitle"},r.a.createElement("h3",null,"ingredients"),r.a.createElement("p",null,"ingredients in recipe")),r.a.createElement("div",{className:"ingList"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"ing"},r.a.createElement("span",{className:"ingIcon"},"\u27a4"),r.a.createElement("span",null,e))}))))}),V=(a(113),Object(d.g)((function(e){var t=e.sourceUrl,a=e.recipeName;return r.a.createElement("div",{className:"howToCook"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",null,"how to cook"),r.a.createElement("p",null,"make recipe from home")),r.a.createElement("div",{className:"direction"},r.a.createElement("p",{className:"hint"},"Checkout the link below. Here is the direction, which help you to prepare ",r.a.createElement("span",{className:"recipeName"},a)," in home"),r.a.createElement("a",{href:"".concat(t),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v,{primary:!0},"direction"))))}))),X=(a(114),function(e){var t=e.text;return r.a.createElement("div",{className:"snackbar"},r.a.createElement("span",{className:"text"},t),r.a.createElement("span",null,r.a.createElement(h.b.Provider,{value:{className:"checkIcon"}},r.a.createElement(f.b,null))))}),G=Object(W.a)([function(e){return e.cart}],(function(e){return e.recipes})),Z=Object(W.a)([G],(function(e){return e.reduce((function(e,t){return e+Q(t.recipe_id)*t.quantity}),0)})),ee=Object(W.a)([function(e){return e.likes}],(function(e){return e.list})),te=function(e){return{type:"REMOVE_RECIPE",payload:e}},ae=function(e){return{type:"UNLIKE_RECIPE",payload:e}},ne=a(6),re=function(e){window.localStorage.setItem("recipes",JSON.stringify(e))},ce=function(e,t){var a=[];return e.find((function(e){return e.recipe_id===t.recipe_id}))?(re(a=e),a):(a=e.concat(Object(ne.a)(Object(ne.a)({},t),{},{quantity:1})),re(a),a)},ie=function(e,t){var a=[];return e.find((function(e){return e.recipe_id===t.recipe_id}))?(a=e.filter((function(e){return e.recipe_id!==t.recipe_id})),re(a),a):(re(a=e),a)},le=function(e,t){var a=[];return e.find((function(e){return e.recipe_id===t.recipe_id}))?(a=e.map((function(e){return e.recipe_id===t.recipe_id?Object(ne.a)(Object(ne.a)({},e),{},{quantity:e.quantity+1}):e})),re(a),a):(a=e.concat(Object(ne.a)(Object(ne.a)({},t),{},{quantity:1})),re(a),a)},se=function(e,t){var a=[];return e.find((function(e){return e.recipe_id===t.recipe_id})).quantity>1?(a=e.map((function(e){return e.recipe_id===t.recipe_id?Object(ne.a)(Object(ne.a)({},e),{},{quantity:e.quantity-1}):e})),re(a),a):(re(a=e),a)},oe=function(e){window.localStorage.setItem("likes",JSON.stringify(e))},ue=function(e,t){var a=[];return e.find((function(e){return e.recipe_id===t.recipe_id}))?(oe(a=e),a):(a=e.concat(t),oe(a),a)},me=function(e,t){var a=[];return e.find((function(e){return e.recipe_id===t.recipe_id}))?(a=e.filter((function(e){return e.recipe_id!==t.recipe_id})),oe(a),a):(oe(a=e),a)},pe=Object(W.b)({cartItems:G,favourites:ee}),de=Object(s.b)(pe,(function(e){return{addRecipe:function(t){return e(function(e){return{type:"ADD_RECIPE",payload:e}}(t))},removeRecipe:function(t){return e(te(t))},like:function(t){return e(function(e){return{type:"LIKE_RECIPE",payload:e}}(t))},unlike:function(t){return e(ae(t))}}}))((function(e){var t=e.info,a=e.cartItems,c=e.favourites,i=e.addRecipe,l=e.removeRecipe,s=e.like,o=e.unlike,u=Object(n.useState)(!1),m=Object(K.a)(u,2),p=m[0],d=m[1],E=Object(n.useState)(""),g=Object(K.a)(E,2),b=g[0],y=g[1];return r.a.createElement("div",null,p&&r.a.createElement(X,{text:"recipe ".concat(b," wishlist")}),t?r.a.createElement("div",{className:"recipeDetails"},r.a.createElement("div",{className:"infoTitle"},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,"Publisher: ",t.publisher)),r.a.createElement("div",{className:"imageBg",style:{backgroundImage:"url(".concat(t.image_url,")")}}),r.a.createElement("div",{className:"btnContainer"},r.a.createElement("div",{className:"price"},r.a.createElement("p",null,"Cost: $ ",Q(t.recipe_id))),r.a.createElement("div",{className:"buttons"},r.a.createElement(h.b.Provider,{value:{className:"iconHeart"}},r.a.createElement("span",null,function(e,t){return-1!==e.findIndex((function(e){return e.recipe_id===t.recipe_id}))}(c,t)?r.a.createElement(F,{title:"remove from favourite",click:function(){return o(t)}},r.a.createElement(f.e,null)):r.a.createElement(F,{title:"add to favourite",click:function(){return s(t)}},r.a.createElement(f.j,{color:"#1C1C1C"})))),r.a.createElement("span",null,function(e,t){return-1!==e.findIndex((function(e){return e.recipe_id===t.recipe_id}))}(a,t)?r.a.createElement(v,{title:"remove from wishlist",primary:!0,click:function(){return function(e){d(!0),l(e),y("removed from"),setTimeout((function(){d(!1)}),2e3)}(t)}},"remove from cart"):r.a.createElement(v,{title:"add to wishlist",primary:!0,click:function(){return function(e){d(!0),i(e),y("added to"),setTimeout((function(){d(!1)}),2e3)}(t)}},"add to cart")))),r.a.createElement($,{ingredients:t.ingredients}),r.a.createElement(V,{sourceUrl:t.source_url,recipeName:t.title})):r.a.createElement(H,null))})),he=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipeInfo:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.recipeId,e.next=3,B.a.get("https://forkify-api.herokuapp.com/api/get?rId=".concat(t));case 3:a=e.sent,this.setState({recipeInfo:a.data.recipe});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.recipeInfo;return r.a.createElement("div",{className:"recipeInfo"},r.a.createElement(de,{info:e}))}}]),a}(n.Component),fe=(a(115),a(116),a(117),function(e){var t=e.title,a=e.content,n=e.yes,c=e.no;return r.a.createElement("div",{className:"confirmation"},r.a.createElement("h3",{className:"title"},t),r.a.createElement("p",{className:"content"},a),r.a.createElement("div",{className:"buttons"},r.a.createElement(v,{click:c},"no"),r.a.createElement(v,{click:n,primary:!0},"yes")))}),Ee=Object(d.g)((function(e){var t=e.recipe,a=e.history,c=e.click,i=e.wishlist,l=e.increase,s=e.decrease,o=Object(n.useState)(!1),u=Object(K.a)(o,2),m=u[0],p=u[1],d=function(){p(!m)};return r.a.createElement("div",null,m&&r.a.createElement(w,{close:d}),m&&r.a.createElement(_,{show:d},r.a.createElement(fe,{title:"Confirm",content:"Are you sure, you want to delete this recipe?",yes:c,no:d})),r.a.createElement("div",{className:"cartItem"},r.a.createElement("div",{className:"recipe"},r.a.createElement("div",{className:"imageContainer",onClick:function(){return t.title.toLowerCase().includes("pizza")?void a.push("/recipe/pizza/".concat(t.recipe_id)):void a.push("/recipe/pasta/".concat(t.recipe_id))},title:"view full details"},r.a.createElement("img",{src:t.image_url,alt:"recipe"})),r.a.createElement("div",{className:"details"},r.a.createElement("h5",null,t.title),r.a.createElement("p",{className:"publisher"},"Publisher: ",t.publisher),r.a.createElement("span",{className:"price"},"Price: $ ",Q(t.recipe_id)),i&&r.a.createElement(h.b.Provider,{value:{className:"iconAddRemove"}},r.a.createElement("span",{className:"quantity"},"Quantity: ",r.a.createElement(f.g,{onClick:s})," ",t.quantity," ",r.a.createElement(f.i,{onClick:l}))))),r.a.createElement("div",{className:"remove"},r.a.createElement(h.b.Provider,{value:{className:"iconRemove"}},r.a.createElement(f.o,{title:"remove recipe from list",onClick:d})))))})),ve=(a(118),function(e){var t=e.close;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Pizza hut checkout"),r.a.createElement(h.b.Provider,{value:{className:"iconClose"}},r.a.createElement(f.k,{onClick:t}))),r.a.createElement("div",{className:"form"},r.a.createElement(k,{type:"email",placeholder:"email address*"}),r.a.createElement(k,{type:"number",placeholder:"card number*"}),r.a.createElement("div",{className:"valid"},r.a.createElement(k,{type:"number",placeholder:"MM/YY"}),r.a.createElement(k,{type:"number",placeholder:"cvc"})),r.a.createElement(O,null,"pay now")))}),ge=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showCheckout:!1},e.toggleCheckout=function(){e.setState((function(e){return{showCheckout:!e.showCheckout}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cartItems,a=e.price,n=e.remove,c=e.incQuantity,i=e.decQuantity,l=this.state.showCheckout,s=this.context.currentUser;return r.a.createElement("div",null,l&&r.a.createElement(w,{close:this.toggleCheckout}),l&&r.a.createElement(_,{show:l},r.a.createElement(ve,{show:l,close:this.toggleCheckout})),r.a.createElement("div",{className:"wishList"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",null,"wishlist"),r.a.createElement("p",null,"recipes added to your wishlist")),t.length>0?t.map((function(e){return r.a.createElement(Ee,{key:e.recipe_id,wishlist:!0,recipe:e,click:function(){return n(e)},increase:function(){return c(e)},decrease:function(){return i(e)}})})):r.a.createElement("p",{className:"emptyMsg"},"your wishlist is empty"),r.a.createElement("div",{className:"checkout"},r.a.createElement("span",{className:"totalPrice"},"total price: $ ",a),s?r.a.createElement(v,{primary:!0,click:this.toggleCheckout},"checkout"):r.a.createElement(v,null,"signin to order"))))}}]),a}(n.Component);ge.contextType=P;var be=Object(W.b)({cartItems:G,price:Z}),ye=Object(s.b)(be,(function(e){return{remove:function(t){return e(te(t))},incQuantity:function(t){return e(function(e){return{type:"INCREMENT_QUANTITY",payload:e}}(t))},decQuantity:function(t){return e(function(e){return{type:"DECREMENT_QUANTITY",payload:e}}(t))}}}))(ge),Ne=(a(119),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.likes,a=e.unlike;return r.a.createElement("div",{className:"favourites"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",null,"Favourites"),r.a.createElement("p",null,"recipe added to your favourites")),r.a.createElement("div",null,t.length>0?t.map((function(e){return r.a.createElement(Ee,{key:e.recipe_id,recipe:e,click:function(){return a(e)}})})):r.a.createElement("p",{className:"emptyMsg"},"favourites empty")))}}]),a}(n.Component)),ke=Object(W.b)({likes:ee}),we=Object(s.b)(ke,(function(e){return{unlike:function(t){return e(ae(t))}}}))(Ne),Oe=(a(120),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(N.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.history.push("/recipe/".concat(e.state.search)),e.setState({search:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.search;return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"field",type:"text",id:"search",name:"search",placeholder:"search for pizza and pasta",onChange:this.handleChange,value:t}),r.a.createElement("button",{type:"submit",className:"searchBtn"},"search"),r.a.createElement("span",null,r.a.createElement(h.b.Provider,{value:{className:"closeIcon"}},r.a.createElement(f.k,{onClick:function(){return e.props.history.goBack()}})))))}}]),a}(n.Component)),je=(a(121),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"top"},r.a.createElement("h4",null,"Branches"),r.a.createElement("p",null,"bangalore"),r.a.createElement("p",null,"chennai"),r.a.createElement("p",null,"trichy"),r.a.createElement("p",null,"coimbatore")),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"titleLogo"},r.a.createElement(h.b.Provider,{value:{className:"logoIcon"}},r.a.createElement(f.h,null)),r.a.createElement("h4",null,"pizza hut")),r.a.createElement("div",{className:"socialMedia"},r.a.createElement(h.b.Provider,{value:{className:"mediaIcon"}},r.a.createElement("span",null,r.a.createElement(f.d,null)),r.a.createElement("span",null,r.a.createElement(f.p,null)),r.a.createElement("span",null,r.a.createElement(f.f,null)),r.a.createElement("span",null,r.a.createElement(f.n,null))))))}),Ce=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement("div",{className:"app"},r.a.createElement(A,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:L}),r.a.createElement(d.b,{path:"/cart",exact:!0,component:ye}),r.a.createElement(d.b,{path:"/likes",exact:!0,component:we}),r.a.createElement(d.b,{path:"/search",exact:!0,component:Oe}),r.a.createElement(d.b,{path:"/recipe/:category",exact:!0,component:J}),r.a.createElement(d.b,{path:"/recipe/:category/:recipeId",exact:!0,component:he}),r.a.createElement(d.a,{to:"/"})),r.a.createElement(je,null)))}}]),a}(n.Component),Se=a(29),Ie={recipes:JSON.parse(window.localStorage.getItem("recipes"))||[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RECIPE":return Object(ne.a)(Object(ne.a)({},e),{},{recipes:ce(e.recipes,t.payload)});case"REMOVE_RECIPE":return Object(ne.a)(Object(ne.a)({},e),{},{recipes:ie(e.recipes,t.payload)});case"INCREMENT_QUANTITY":return Object(ne.a)(Object(ne.a)({},e),{},{recipes:le(e.recipes,t.payload)});case"DECREMENT_QUANTITY":return Object(ne.a)(Object(ne.a)({},e),{},{recipes:se(e.recipes,t.payload)});default:return e}},_e={list:JSON.parse(window.localStorage.getItem("likes"))||[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIKE_RECIPE":return Object(ne.a)(Object(ne.a)({},e),{},{list:ue(e.list,t.payload)});case"UNLIKE_RECIPE":return Object(ne.a)(Object(ne.a)({},e),{},{list:me(e.list,t.payload)});default:return e}},Pe=Object(Se.b)({likes:ze,cart:xe}),Re=Object(Se.c)(Pe),Te=r.a.createElement(s.a,{store:Re},r.a.createElement(l.a,null,r.a.createElement(Ce,null)));i.a.render(Te,document.getElementById("root"))}]),[[54,1,2]]]);
//# sourceMappingURL=main.e9027c1a.chunk.js.map