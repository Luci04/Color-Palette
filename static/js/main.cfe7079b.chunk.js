(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{174:function(e,a,t){e.exports=t.p+"static/media/bg.feef0001.svg"},199:function(e,a,t){e.exports=t(335)},204:function(e,a,t){},334:function(e,a,t){},335:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=(t(204),t(80)),s=t(20),m=t(21),d=t(11),u=t(26),h=t(25),p=t(28),f=t(397),g=t(395),b=t(13),v=t(168),C=t(41),y=t(18),E=t.n(y),x=t(337),w=t(46),k=t.n(w),j=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},O={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(b.a)(o,j("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(b.a)(o,j("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(b.a)(o,j("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return k()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return k()(e.background).luminance()<=.08?"white":"black"}},seemore:{backgroundColor:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0",color:function(e){return k()(e.background).luminance()>=.7?"rgba(0,0,0,0.7)":"white"},width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:function(e){return k()(e.background).luminance()>=.7?"black":"white"},textTransform:"uppercase",border:"none",textDecoration:"none",opacity:"0"},boxContent:{position:"absolute",padding:"10px",width:"100%",left:"0px",bottom:"0px",color:"black",letterSpacing:"1px",fontSize:"12px",textTransform:"uppercase"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in -out",transform:"scale(0.1)"},showOverlay:{zIndex:"10",opacity:"1",transform:"scale(50)",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(b.a)({fontWeight:"400",textShadow:"1px 2px black",backgroundColor:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",padding:"1rem",marginBottom:"0",textTransform:"uppercase"},j("xs"),{fontSize:"2rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s easy-in-out",transitionDelay:"0.3s"}},S=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.paletteId,n=e.id,l=e.showingFullPalette,c=e.classes,i=this.state.copied;return r.a.createElement(v.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:c.ColorBox},r.a.createElement("div",{style:{background:t},className:E()(c.copyOverlay,Object(b.a)({},c.showOverlay,i))}),r.a.createElement("div",{className:"".concat(c.copyMessage," \n                        ").concat(i&&c.showMessage)},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:c.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:c.boxContent},r.a.createElement("span",{className:c.colorName},a)),r.a.createElement("button",{className:c.copyButton},"Copy")),l&&r.a.createElement(C.b,{to:"/palette/".concat(o,"/").concat(n),onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:c.seemore},"MORE"))))}}]),t}(n.Component),N=Object(x.a)(O)(S),P=(t(212),t(183)),F=t(394),B=t(399),D=t(396),I=t(382),A=t(383),L={Navbar:{display:"flex",alignItems:"center",height:"6vh",justifyContent:"flex-start"},logo:Object(b.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",display:"flex",alignItems:"center",height:"100%","& a":{textDecoration:"none",color:"black"}},j("md"),{display:"none",width:"150px"}),slider:{width:"340px",margin:"0 10px",display:"inline-block","& rc-slider-track":{backgroundColor:"transparent"},"& rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, rc-slider-handle:focus":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}},R=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(d.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"handleFormatChange",value:function(e){var a=this;this.setState({format:e.target.value,open:!0},(function(){a.props.handleChange(a.state.format)}))}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.level,o=e.changeLevel,n=e.showingAllColors,l=this.state.format;return r.a.createElement("header",{className:a.Navbar},r.a.createElement("div",{className:a.logo},r.a.createElement(C.b,{to:"/Color-Palette"},"React Color Picker")),n&&r.a.createElement("div",null,r.a.createElement("span",null,"Level : ",t),r.a.createElement("div",{className:a.slider},r.a.createElement(P.a,{defaultValue:t,step:100,max:900,min:100,onChange:o}))),r.a.createElement("div",{className:a.selectContainer},r.a.createElement(F.a,{onChange:this.handleFormatChange,value:l},r.a.createElement(B.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(B.a,{value:"rgb"},"RGB - RBG(255,255,255)"),r.a.createElement(B.a,{value:"rgba"},"RGBA - RGBA(255,255,255,1.0)"))),r.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed!"),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(I.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(A.a,null))]}))}}]),t}(n.Component),G=Object(x.a)(L)(R);var T,M,z=Object(x.a)({palettefooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.palettefooter},a,r.a.createElement("span",{className:o.emoji},t))})),U={palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(T={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:"1",textAlign:"center",backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(b.a)(T,j("lg"),{width:"25%",height:"33.3333%"}),Object(b.a)(T,j("md"),{width:"50%",height:"20%"}),Object(b.a)(T,j("xs"),{width:"100%",height:"10%"}),T)},H=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(d.a)(o)),o.changeformat=o.changeformat.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeformat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this,a=this.props.palette,t=a.colors,o=a.paletteName,n=a.emoji,l=a.id,c=this.props.classes,i=this.state,s=i.level,m=i.format,d=t[this.state.level].map((function(a){return r.a.createElement(N,{background:a[m],key:a.id,id:a.id,name:a.name,onAfterChange:e.changeLevel,paletteId:l,showingFullPalette:!0})}));return r.a.createElement("div",{className:c.palette},r.a.createElement(G,{level:s,changeLevel:this.changeLevel,handleChange:this.changeformat,showingAllColors:!0}),r.a.createElement("div",{className:c.colors},d),r.a.createElement(z,{paletteName:o,emoji:n}))}}]),t}(n.Component),q=Object(x.a)(U)(H),V=t(98),W=t.n(V),J=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).deletePalette=o.deletePalette.bind(Object(d.a)(o)),o.handleClick=o.handleClick.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.handleDelete(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,key:e.name,style:{backgroundColor:e.color}})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement("div",{className:a.delete},r.a.createElement(W.a,{className:a.deleteIcon,onClick:this.deletePalette})),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t,r.a.createElement("span",{className:a.emoji},o)))}}]),t}(n.PureComponent),Y=Object(x.a)({root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",border:"1px solid black",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"grey",borderRadius:"5px",height:"150px",width:"100%",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",position:"relative",fontSize:"1rem"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",height:"20px",width:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:"10",opacity:"0",transition:"all 0.6s "}})(J),K=t(174),_={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 1000ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#cc5577",backgroundImage:"url(".concat(t.n(K).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:Object(b.a)({width:"50%",dispaly:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},j("xl"),{width:"80%"}),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:(M={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"5%"},Object(b.a)(M,j("md"),{gridTemplateColumns:"repeat(2,50%)"}),Object(b.a)(M,j("xs"),{gridTemplateColumns:"repeat(1,100%)",gridGap:"1.4rem"}),M)},Q=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).gotoPalette=o.gotoPalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"gotoPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=a.deletePalette;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors"),r.a.createElement(C.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(f.a,{className:o.palettes},t.map((function(a){return r.a.createElement(g.a,{key:a.id,className:"fade",timeout:1e3},r.a.createElement(Y,Object.assign({},a,{goToPalette:e.gotoPalette,handleDelete:n,key:a.id,id:a.id})))})))))}}]),t}(n.Component),X=Object(x.a)(_)(Q),$=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeformat=o.changeformat.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeformat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,l=this.props.classes,c=this._shades.map((function(a){return r.a.createElement(N,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return r.a.createElement("div",{className:l.palette},r.a.createElement(G,{handleChange:this.changeformat,showingAllColors:!1}),r.a.createElement("div",{className:l.colors},c,r.a.createElement("div",{className:l.goBack},r.a.createElement(C.b,{to:"/palette/".concat(n)},"Go back"))),r.a.createElement(z,{paletteName:t,emoji:o}))}}]),t}(n.Component),Z=Object(x.a)(U)($);var ee,ae=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},te=t(7),oe=t(400),ne=t(188),re=t(393),le=t(181),ce=t.n(le),ie=t(389),se=t(70),me={root:(ee={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.0px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(b.a)(ee,j("lg"),{width:"25%",height:"20%"}),Object(b.a)(ee,j("md"),{width:"50%",height:"10%"}),Object(b.a)(ee,j("sm"),{width:"100%",height:"5%"}),ee),boxContent:{position:"absolute",padding:"10px",width:"100%",left:"0px",bottom:"0px",color:function(e){return k()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",fontSize:"12px",textTransform:"uppercase",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s "}},de=Object(se.b)((function(e){var a=e.classes,t=e.handleClick;return r.a.createElement("div",{className:e.classes.root,style:{backgroundColor:e.color}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,e.name),r.a.createElement(W.a,{className:a.deleteIcon,onClick:t})))})),ue=Object(x.a)(me)(de),he=Object(se.a)((function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(ue,{index:a,color:e.color,name:e.name,key:e.name,handleClick:function(){return t(e.name)}})})))})),pe=t(384),fe=t(388),ge=t(386),be=t(387),ve=t(385),Ce=t(55),ye=(t(226),t(184)),Ee=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={newPaletteName:"",stage:"form"},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.showemojiPicker=o.showemojiPicker.bind(Object(d.a)(o)),o.savePalette=o.savePalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Ce.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"showemojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"savePalette",value:function(e){this.props.handleSubmit({paletteName:this.state.newPaletteName,emoji:e.native}),this.setState({stage:""})}},{key:"render",value:function(){var e=this,a=this.state,t=a.newPaletteName,o=a.stage,n=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(pe.a,{open:"emoji"===o,onClose:n},r.a.createElement(ve.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(ye.a,{title:"Pick Emoji Palette",onSelect:this.savePalette})),r.a.createElement(pe.a,{open:"form"===o,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(ve.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(Ce.ValidatorForm,{onSubmit:function(){return e.showemojiPicker()}},r.a.createElement(ge.a,null,r.a.createElement(be.a,null,"Please Enter a Name for your Custom Palette make sure it is Unique"),r.a.createElement(Ce.TextValidator,{validators:["required","isPaletteNameUnique"],errorMessages:["Enter a Color Name","Palette Name is Taken"],label:"Palette Name",name:"newPaletteName",fullWidth:!0,margin:"normal",onChange:this.handleChange,value:t})),r.a.createElement(fe.a,null,r.a.createElement(ie.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(ie.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(n.Component),xe=t(390),we=t(391),ke=t(392),je=t(176),Oe=t.n(je),Se=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(b.a)({marginRight:"1rem","& a":{textDecoration:"none"}},j("xs"),{marginRight:"0.5rem"}),button:Object(b.a)({margin:"0 0.5rem"},j("xs"),{margin:"0 0.2",padding:"0.3rem"})}},Ne=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={formSowing:!1},o.showForm=o.showForm.bind(Object(d.a)(o)),o.hideForm=o.hideForm.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleDrawerOpen,l=e.handleSubmit,c=this.state.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(xe.a,null),r.a.createElement(we.a,{position:"fixed",color:"default",className:E()(a.appBar,Object(b.a)({},a.appBarShift,t))},r.a.createElement(ke.a,{disableGutters:!t},r.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:n,className:E()(a.menuButton,t&&a.hide)},r.a.createElement(Oe.a,null)),r.a.createElement(ne.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(C.b,{to:"/Color-Palette",className:a.link},r.a.createElement(ie.a,{className:a.button,variant:"contained",color:"secondary"},"Go Back")),r.a.createElement(ie.a,{className:a.button,variant:"contianed",color:"primary",onClick:this.showForm},"Save"))),c&&r.a.createElement(Ee,{palettes:o,showForm:this.showForm,hideForm:this.hideForm,handleSubmit:l}))}}]),t}(n.Component),Pe=Object(te.a)(Se,{withTheme:!0})(Ne),Fe=t(182),Be=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={currentColor:"teal",newColorName:""},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o.updatecurrentColor=o.updatecurrentColor.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Ce.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Ce.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"updatecurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"render",value:function(){var e=this.props,a=e.paletteFull,t=e.classes,o=this.state,n=o.currentColor,l=o.newColorName;return r.a.createElement("div",null,r.a.createElement(Fe.a,{color:n,onChange:this.updatecurrentColor,className:t.picker}),r.a.createElement(Ce.ValidatorForm,{onSubmit:this.handleSubmit},r.a.createElement(Ce.TextValidator,{placeholder:"Color Name",variant:"filled",className:t.colorNameInput,value:l,margin:"normal",name:"newColorName",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a Color Name","Enter a Unique Name","Color already Selected"],label:"Color Name"}),r.a.createElement(ie.a,{className:t.addColor,variant:"contained",type:"submit",disabled:a,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),t}(n.Component),De=Object(te.a)({picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"350px",padding:"1rem",marginTop:"1rem",fontSize:"2rem",color:"white"},colorNameInput:{width:"100%",height:"70px"}})(Be),Ie=t(129),Ae=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Ie.a)(Object(Ie.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:"0px",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-410},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:-10},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},Le=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Re=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(se.c)(o,a,t)}}))},o.state={open:!0,colors:Le[0].colors},o.addNewColor=o.addNewColor.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o.removeColor=o.removeColor.bind(Object(d.a)(o)),o.clearColors=o.clearColors.bind(Object(d.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(i.a)(this.state.colors),[e])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/Color-Palette")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a=this.props.palettes.map((function(e){return e.colors})).flat(),t=!0;t;){var o=Math.floor(Math.random()*a.length);e=a[o],t=this.state.colors.some((function(a){return a.name===e.name}))}this.setState({colors:[].concat(Object(i.a)(this.state.colors),[e])})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,c=n.colors,i=c.length>=t;return r.a.createElement("div",{className:a.root},"``",r.a.createElement(Pe,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(oe.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(I.a,{onClick:this.handleDrawerClose},r.a.createElement(ce.a,null))),r.a.createElement(re.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(ne.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(ie.a,{className:a.button,variant:"contained",color:"secondary",onClick:this.clearColors},"Clear Palette"),r.a.createElement(ie.a,{className:a.button,disabled:i,variant:"contained",color:"primary",onClick:this.addRandomColor},"Random Color")),r.a.createElement(De,{colors:c,paletteFull:i,addNewColor:this.addNewColor}))),r.a.createElement("main",{className:E()(a.content,Object(b.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(he,{onSortEnd:this.onSortEnd,colors:c,removeColor:this.removeColor,axis:"xy",distance:20})))}}]),t}(n.Component);Re.defaultProps={maxColors:20};var Ge=Object(te.a)(Ae,{withTheme:!0})(Re),Te=t(130),Me=[50,100,200,300,400,500,600,700,800,900];function ze(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(Te.a)(Me);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object(Te.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,k.a.scale(function(e){return[k()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var d in m)t.colors[Me[d]].push({name:"".concat(s.name," ").concat(Me[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:k()(m[d]).css(),rgba:k()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){i.e(u)}finally{i.f()}return t}t(334);var Ue=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;Object(s.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||Le},o.savePalette=o.savePalette.bind(Object(d.a)(o)),o.findPalette=o.findPalette.bind(Object(d.a)(o)),o.deletePalette=o.deletePalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(i.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{render:function(a){var t=a.location;return r.a.createElement(f.a,null,r.a.createElement(g.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(p.c,{location:t},r.a.createElement(p.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(ae,null,r.a.createElement(Ge,Object.assign({palettes:e.state.palettes,savePalette:e.savePalette},a)))}}),r.a.createElement(p.a,{exact:!0,path:"/Color-Palette",render:function(a){return r.a.createElement(ae,null,r.a.createElement(X,Object.assign({palettes:e.state.palettes},a,{deletePalette:e.deletePalette})))}}),r.a.createElement(p.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(ae,null,r.a.createElement(q,{palette:ze(e.findPalette(a.match.params.id))}))}}),r.a.createElement(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(ae,null,r.a.createElement(Z,{colorId:a.match.params.colorId,palette:ze(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(p.a,{render:function(a){return r.a.createElement(ae,null,r.a.createElement(X,Object.assign({palettes:e.state.palettes},a,{deletePalette:e.deletePalette})))}}))))}})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C.a,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[199,1,2]]]);
//# sourceMappingURL=main.cfe7079b.chunk.js.map