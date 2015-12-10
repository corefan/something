/*!CK:3584840559!*//*1449710266,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["u1CE3"]); }

__d('EmbeddedVideoPlaybackTimer.react',['React','cx','joinClasses','shallowCompare'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m,n=h.PropTypes;l=babelHelpers.inherits(o,h.Component);m=l&&l.prototype;function o(p){'use strict';m.constructor.call(this,p);this.state={displayRemainingTime:true};}o.prototype.shouldComponentUpdate=function(p,q){'use strict';return k(this,p,q);};o.prototype.getClock=function(p){'use strict';var q='';if(isNaN(p)){p=0;}else if(p<0){p*=-1;q='-';}var r=Math.floor(p/60),s=p%60;if(q==='-'){s=Math.ceil(s);}else s=Math.floor(s);var t=('0'+r).slice(-2),u=('0'+s).slice(-2);return q+t+':'+u;};o.prototype.onButtonClick=function(){'use strict';this.setState({displayRemainingTime:!this.state.displayRemainingTime});};o.prototype.render=function(){'use strict';var p=this.state.displayRemainingTime?this.props.remainingTimestamp:this.props.playbackPosTimestamp,q="_4irg";if(this.props.isInScrubberPreview)q="_5lde";return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,q),onClick:this.onButtonClick.bind(this)}),this.getClock(p)));};o.propTypes={isInScrubberPreview:n.bool,playbackPosTimestamp:n.number,remainingTimestamp:n.number};o.defaultProps={isInScrubberPreview:false,playbackPosTimestamp:0,remainingTimestamp:0};f.exports=o;},null);
__d('EmbeddedVideoClickToUnmuteOverlay',['CSS','DOM','cx','csx','React','ReactDOM','EventListener','throttle','SubscriptionsHandler','EmbeddedVideoPlaybackTimer.react','requestAnimationFrame','cancelAnimationFrame'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();function t(u,v){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay1=u;this.$EmbeddedVideoClickToUnmuteOverlay2=v;this.$EmbeddedVideoClickToUnmuteOverlay3=0;this.$EmbeddedVideoClickToUnmuteOverlay4=0;this.$EmbeddedVideoClickToUnmuteOverlay5=0;this.$EmbeddedVideoClickToUnmuteOverlay6=false;this.$EmbeddedVideoClickToUnmuteOverlay7=i.create('div');i.appendContent(this.$EmbeddedVideoClickToUnmuteOverlay2,this.$EmbeddedVideoClickToUnmuteOverlay7);this.$EmbeddedVideoClickToUnmuteOverlay8=new p();if(this.$EmbeddedVideoClickToUnmuteOverlay1.isState('playing'))this.$EmbeddedVideoClickToUnmuteOverlay9();this.$EmbeddedVideoClickToUnmuteOverlay8.addSubscriptions(this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('optionsChange',this.$EmbeddedVideoClickToUnmuteOverlay10.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('beginPlayback',this.$EmbeddedVideoClickToUnmuteOverlay9.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('pausePlayback',this.$EmbeddedVideoClickToUnmuteOverlay11.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('finishPlayback',this.$EmbeddedVideoClickToUnmuteOverlay12.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('unmuteVideo',this.$EmbeddedVideoClickToUnmuteOverlay13.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('turnOffAutoplay',this.$EmbeddedVideoClickToUnmuteOverlay14.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('stateChange',this.$EmbeddedVideoClickToUnmuteOverlay15.bind(this)),this.$EmbeddedVideoClickToUnmuteOverlay1.addListener('updateStatus',this.$EmbeddedVideoClickToUnmuteOverlay16.bind(this)),n.listen(this.$EmbeddedVideoClickToUnmuteOverlay1.getRootNode(),'mousemove',o(this.$EmbeddedVideoClickToUnmuteOverlay17.bind(this),200)),n.listen(this.$EmbeddedVideoClickToUnmuteOverlay1.getRootNode(),'mouseenter',this.$EmbeddedVideoClickToUnmuteOverlay18.bind(this)),n.listen(this.$EmbeddedVideoClickToUnmuteOverlay1.getRootNode(),'mouseleave',this.$EmbeddedVideoClickToUnmuteOverlay19.bind(this)));this.$EmbeddedVideoClickToUnmuteOverlay20=i.find(this.$EmbeddedVideoClickToUnmuteOverlay2,"._5kji");this.$EmbeddedVideoClickToUnmuteOverlay8.addSubscriptions(n.listen(this.$EmbeddedVideoClickToUnmuteOverlay2,'click',(function(){return this.$EmbeddedVideoClickToUnmuteOverlay21();}).bind(this)),n.listen(this.$EmbeddedVideoClickToUnmuteOverlay20,'focus',this.$EmbeddedVideoClickToUnmuteOverlay22.bind(this)),n.listen(this.$EmbeddedVideoClickToUnmuteOverlay20,'blur',this.$EmbeddedVideoClickToUnmuteOverlay23.bind(this)));if(this.$EmbeddedVideoClickToUnmuteOverlay1.isPlayerVersion('silvercity'))this.$EmbeddedVideoClickToUnmuteOverlay24();}t.prototype.$EmbeddedVideoClickToUnmuteOverlay16=function(u){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay4=u.position;if(this.$EmbeddedVideoClickToUnmuteOverlay3===0){var v=this.$EmbeddedVideoClickToUnmuteOverlay1.getVideoInfo();if(v===null)return;this.$EmbeddedVideoClickToUnmuteOverlay3=v.playbackDuration;}this.$EmbeddedVideoClickToUnmuteOverlay5=Math.round(this.$EmbeddedVideoClickToUnmuteOverlay4-this.$EmbeddedVideoClickToUnmuteOverlay3);this.scheduleRenderReactTimerComponent();};t.prototype.renderReactTimerComponent=function(){'use strict';m.render(l.createElement(q,{className:"_5urs",remainingTimestamp:this.$EmbeddedVideoClickToUnmuteOverlay5,playbackPosTimestamp:this.$EmbeddedVideoClickToUnmuteOverlay4}),this.$EmbeddedVideoClickToUnmuteOverlay7);};t.prototype.scheduleRenderReactTimerComponent=function(){'use strict';s(this.$EmbeddedVideoClickToUnmuteOverlay25);this.$EmbeddedVideoClickToUnmuteOverlay25=r(this.renderReactTimerComponent.bind(this));};t.prototype.$EmbeddedVideoClickToUnmuteOverlay18=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay26=true;};t.prototype.$EmbeddedVideoClickToUnmuteOverlay19=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay26=false;this.$EmbeddedVideoClickToUnmuteOverlay27(false);};t.prototype.$EmbeddedVideoClickToUnmuteOverlay28=function(){'use strict';return this.$EmbeddedVideoClickToUnmuteOverlay1.isState('playing')&&this.$EmbeddedVideoClickToUnmuteOverlay1.getOption('FeedAutoplay','isAutoplaying');};t.prototype.$EmbeddedVideoClickToUnmuteOverlay15=function(){'use strict';if(this.$EmbeddedVideoClickToUnmuteOverlay1.isState('ready')&&this.$EmbeddedVideoClickToUnmuteOverlay1.isPlayerVersion('silvercity'))this.$EmbeddedVideoClickToUnmuteOverlay24();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay21=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay1.clickVideo();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay13=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay29();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay14=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay29();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay10=function(){'use strict';if(this.$EmbeddedVideoClickToUnmuteOverlay28()){this.$EmbeddedVideoClickToUnmuteOverlay30();}else this.$EmbeddedVideoClickToUnmuteOverlay29();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay9=function(){'use strict';if(this.$EmbeddedVideoClickToUnmuteOverlay28())this.$EmbeddedVideoClickToUnmuteOverlay30();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay11=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay29();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay12=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay29();};t.prototype.$EmbeddedVideoClickToUnmuteOverlay22=function(){'use strict';if(this.$EmbeddedVideoClickToUnmuteOverlay28()){this.$EmbeddedVideoClickToUnmuteOverlay27(true);this.$EmbeddedVideoClickToUnmuteOverlay31=true;}};t.prototype.$EmbeddedVideoClickToUnmuteOverlay23=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay27(false);this.$EmbeddedVideoClickToUnmuteOverlay31=false;};t.prototype.$EmbeddedVideoClickToUnmuteOverlay17=function(){'use strict';if(this.$EmbeddedVideoClickToUnmuteOverlay28()&&this.$EmbeddedVideoClickToUnmuteOverlay26)this.$EmbeddedVideoClickToUnmuteOverlay27(true);};t.prototype.$EmbeddedVideoClickToUnmuteOverlay30=function(){'use strict';if(!this.$EmbeddedVideoClickToUnmuteOverlay6){h.removeClass(this.$EmbeddedVideoClickToUnmuteOverlay2,"_8r3");this.$EmbeddedVideoClickToUnmuteOverlay32=this.$EmbeddedVideoClickToUnmuteOverlay1.getOption('VideoControls','acquireForceHideLock');this.$EmbeddedVideoClickToUnmuteOverlay6=true;}};t.prototype.$EmbeddedVideoClickToUnmuteOverlay29=function(){'use strict';if(this.$EmbeddedVideoClickToUnmuteOverlay6){h.addClass(this.$EmbeddedVideoClickToUnmuteOverlay2,"_8r3");this.$EmbeddedVideoClickToUnmuteOverlay27(false);if(this.$EmbeddedVideoClickToUnmuteOverlay32){this.$EmbeddedVideoClickToUnmuteOverlay32.release();this.$EmbeddedVideoClickToUnmuteOverlay32=null;}this.$EmbeddedVideoClickToUnmuteOverlay6=false;}};t.prototype.$EmbeddedVideoClickToUnmuteOverlay24=function(){'use strict';this.$EmbeddedVideoClickToUnmuteOverlay29();this.$EmbeddedVideoClickToUnmuteOverlay8.release();this.$EmbeddedVideoClickToUnmuteOverlay2.parentNode.removeChild(this.$EmbeddedVideoClickToUnmuteOverlay2);};t.prototype.$EmbeddedVideoClickToUnmuteOverlay27=function(u){'use strict';h.conditionClass(this.$EmbeddedVideoClickToUnmuteOverlay2,"_4ts_",!u);};f.exports=t;},null);