(function(c,h){"function"===typeof define&&define.amd?define(["jquery"],function(k){return h(k,c,c.document,c.Math)}):"undefined"!==typeof exports?module.exports=h(require("jquery"),c,c.document,c.Math):h(jQuery,c,c.document,c.Math)})("undefined"!==typeof window?window:this,function(c,h,k,m,I){var l=c(h),r=c(k);c.fn.fullpage=function(d){function Ha(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=d.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color",
"transparent transparent transparent "+d.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+d.controlArrowColor+" transparent transparent"));d.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function Ia(){q.append('<div id="fp-nav"><ul></ul></div>');y=c("#fp-nav");y.addClass(function(){return d.showActiveTooltip?"fp-show-active "+d.navigationPosition:d.navigationPosition});for(var a=0;a<c(".fp-section").length;a++){var b="";d.anchors.length&&(b=d.anchors[a]);
var b='<li><a href="#'+b+'"><span></span></a>',g=d.navigationTooltips[a];"undefined"!==typeof g&&""!==g&&(b+='<div class="fp-tooltip '+d.navigationPosition+'">'+g+"</div>");b+="</li>";y.find("ul").append(b)}}function da(){c(".fp-section").each(function(){var a=c(this).find(".fp-slide");a.length?a.each(function(){J(c(this))}):J(c(this))});ea()}function ea(){var a=c(".fp-section.active");a.find(".fp-scrollable").mouseover();c.isFunction(d.afterLoad)&&d.afterLoad.call(a,a.data("anchor"),a.index(".fp-section")+
1);c.isFunction(d.afterRender)&&d.afterRender.call(this)}function fa(){var a;if(!d.autoScrolling||d.scrollBar){for(var b=l.scrollTop(),g=0,n=m.abs(b-k.querySelectorAll(".fp-section")[0].offsetTop),e=k.querySelectorAll(".fp-section"),f=0;f<e.length;++f){var h=m.abs(b-e[f].offsetTop);h<n&&(g=f,n=h)}a=c(e).eq(g)}if(!d.autoScrolling||d.scrollBar){if(!a.hasClass("active")){U=!0;b=c(".fp-section.active");g=b.index(".fp-section")+1;n=V(a);e=a.data("anchor");f=a.index(".fp-section")+1;h=a.find(".fp-slide.active");
if(h.length)var p=h.data("anchor"),q=h.index();t&&(a.addClass("active").siblings().removeClass("active"),c.isFunction(d.onLeave)&&d.onLeave.call(b,g,f,n),c.isFunction(d.afterLoad)&&d.afterLoad.call(a,e,f),K(e,f-1),d.anchors.length&&(z=e,W(q,p,e,f)));clearTimeout(ga);ga=setTimeout(function(){U=!1},100)}d.fitToSection&&(clearTimeout(ha),ha=setTimeout(function(){t&&(c(".fp-section.active").is(a)&&(w=!0),A(a),w=!1)},1E3))}}function ia(a){return a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):
a.find(".fp-scrollable")}function L(a,b){if(p[a]){var d,c;"down"==a?(d="bottom",c=e.moveSectionDown):(d="top",c=e.moveSectionUp);if(0<b.length)if(d="top"===d?!b.scrollTop():"bottom"===d?b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0,d)c();else return!0;else c()}}function Ja(a){var b=a.originalEvent;if(!ja(a.target)&&X(b)){d.autoScrolling&&a.preventDefault();a=c(".fp-section.active");var g=ia(a);t&&!B&&(b=ka(b),E=b.y,M=b.x,a.find(".fp-slides").length&&m.abs(N-M)>m.abs(F-E)?m.abs(N-M)>l.width()/
100*d.touchSensitivity&&(N>M?p.right&&e.moveSlideRight():p.left&&e.moveSlideLeft()):d.autoScrolling&&m.abs(F-E)>l.height()/100*d.touchSensitivity&&(F>E?L("down",g):E>F&&L("up",g)))}}function ja(a,b){b=b||0;var g=c(a).parent();return b<d.normalScrollElementTouchThreshold&&g.is(d.normalScrollElements)?!0:b==d.normalScrollElementTouchThreshold?!1:ja(g,++b)}function X(a){return"undefined"===typeof a.pointerType||"mouse"!=a.pointerType}function Ka(a){a=a.originalEvent;d.fitToSection&&v.stop();X(a)&&(a=
ka(a),F=a.y,N=a.x)}function la(a,b){for(var d=0,c=a.slice(m.max(a.length-b,1)),e=0;e<c.length;e++)d+=c[e];return m.ceil(d/b)}function C(a){var b=(new Date).getTime();if(d.autoScrolling&&!Y){a=h.event||a;var g=a.wheelDelta||-a.deltaY||-a.detail,n=m.max(-1,m.min(1,g));149<D.length&&D.shift();D.push(m.abs(g));d.scrollBar&&(a.preventDefault?a.preventDefault():a.returnValue=!1);a=c(".fp-section.active");a=ia(a);g=b-ma;ma=b;200<g&&(D=[]);t&&(b=la(D,10),g=la(D,70),b>=g&&(0>n?L("down",a):L("up",a)));return!1}d.fitToSection&&
v.stop()}function na(a){var b=c(".fp-section.active").find(".fp-slides");if(b.length&&!B){var g=b.find(".fp-slide.active"),n=null,n="prev"===a?g.prev(".fp-slide"):g.next(".fp-slide");if(!n.length){if(!d.loopHorizontal)return;n="prev"===a?g.siblings(":last"):g.siblings(":first")}B=!0;G(b,n)}}function oa(){c(".fp-slide.active").each(function(){O(c(this),"internal")})}function A(a,b,g){var n=a.position();if("undefined"!==typeof n&&(b={element:a,callback:b,isMovementUp:g,dest:n,dtop:n.top,yMovement:V(a),
anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:c(".fp-section.active"),leavingSection:c(".fp-section.active").index(".fp-section")+1,localIsResizing:w},!(b.activeSection.is(a)&&!w||d.scrollBar&&l.scrollTop()===b.dtop))){if(b.activeSlide.length)var e=b.activeSlide.data("anchor"),f=b.activeSlide.index();d.autoScrolling&&d.continuousVertical&&"undefined"!==typeof b.isMovementUp&&(!b.isMovementUp&&"up"==b.yMovement||b.isMovementUp&&
"down"==b.yMovement)&&(b.isMovementUp?c(".fp-section.active").before(b.activeSection.nextAll(".fp-section")):c(".fp-section.active").after(b.activeSection.prevAll(".fp-section").get().reverse()),x(c(".fp-section.active").position().top),oa(),b.wrapAroundElements=b.activeSection,b.dest=b.element.position(),b.dtop=b.dest.top,b.yMovement=V(b.element));a.addClass("active").siblings().removeClass("active");t=!1;W(f,e,b.anchorLink,b.sectionIndex);c.isFunction(d.onLeave)&&!b.localIsResizing&&d.onLeave.call(b.activeSection,
b.leavingSection,b.sectionIndex+1,b.yMovement);La(b);z=b.anchorLink;K(b.anchorLink,b.sectionIndex)}}function La(a){if(d.css3&&d.autoScrolling&&!d.scrollBar)pa("translate3d(0px, -"+a.dtop+"px, 0px)",!0),setTimeout(function(){qa(a)},d.scrollingSpeed);else{var b=Ma(a);c(b.element).animate(b.options,d.scrollingSpeed,d.easing).promise().done(function(){qa(a)})}}function Ma(a){var b={};d.autoScrolling&&!d.scrollBar?(b.options={top:-a.dtop},b.element=".fullpage-wrapper"):(b.options={scrollTop:a.dtop},b.element=
"html, body");return b}function qa(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?c(".fp-section:first").before(a.wrapAroundElements):c(".fp-section:last").after(a.wrapAroundElements),x(c(".fp-section.active").position().top),oa());a.element.find(".fp-scrollable").mouseover();c.isFunction(d.afterLoad)&&!a.localIsResizing&&d.afterLoad.call(a.element,a.anchorLink,a.sectionIndex+1);t=!0;c.isFunction(a.callback)&&a.callback.call(this)}function ra(){if(!U){var a=h.location.hash.replace("#",
"").split("/"),b=a[0],a=a[1];if(b.length){var d="undefined"===typeof z,c="undefined"===typeof z&&"undefined"===typeof a&&!B;(b&&b!==z&&!d||c||!B&&Z!=a)&&aa(b,a)}}}function Na(a){t&&(a.pageY<P?e.moveSectionUp():a.pageY>P&&e.moveSectionDown());P=a.pageY}function G(a,b){var g=b.position(),e=b.index(),f=a.closest(".fp-section"),h=f.index(".fp-section"),k=f.data("anchor"),l=f.find(".fp-slidesNav"),p=sa(b),q=w;if(d.onSlideLeave){var u=f.find(".fp-slide.active"),r=u.index(),t;t=r==e?"none":r>e?"left":"right";
q||"none"===t||c.isFunction(d.onSlideLeave)&&d.onSlideLeave.call(u,k,h+1,r,t)}b.addClass("active").siblings().removeClass("active");!d.loopHorizontal&&d.controlArrows&&(f.find(".fp-controlArrow.fp-prev").toggle(0!==e),f.find(".fp-controlArrow.fp-next").toggle(!b.is(":last-child")));f.hasClass("active")&&W(e,p,k,h);var v=function(){q||c.isFunction(d.afterSlideLoad)&&d.afterSlideLoad.call(b,k,h+1,p,e);B=!1};d.css3?(g="translate3d(-"+m.round(g.left)+"px, 0px, 0px)",ta(a.find(".fp-slidesContainer"),0<
d.scrollingSpeed).css(ua(g)),setTimeout(function(){v()},d.scrollingSpeed,d.easing)):a.animate({scrollLeft:m.round(g.left)},d.scrollingSpeed,d.easing,function(){v()});l.find(".active").removeClass("active");l.find("li").eq(e).find("a").addClass("active")}function va(){wa();if(Q){var a=c(k.activeElement);a.is("textarea")||a.is("input")||a.is("select")||(a=l.height(),m.abs(a-ba)>20*m.max(ba,a)/100&&(e.reBuild(!0),ba=a))}else clearTimeout(xa),xa=setTimeout(function(){e.reBuild(!0)},350)}function wa(){if(d.responsive){var a=
f.hasClass("fp-responsive");l.width()<d.responsive?a||(e.setAutoScrolling(!1,"internal"),e.setFitToSection(!1,"internal"),c("#fp-nav").hide(),f.addClass("fp-responsive")):a&&(e.setAutoScrolling(H.autoScrolling,"internal"),e.setFitToSection(H.autoScrolling,"internal"),c("#fp-nav").show(),f.removeClass("fp-responsive"))}}function ta(a){var b="all "+d.scrollingSpeed+"ms "+d.easingcss3;a.removeClass("fp-notransition");return a.css({"-webkit-transition":b,transition:b})}function Oa(a,b){if(825>a||900>
b){var d=m.min(100*a/825,100*b/900).toFixed(2);q.css("font-size",d+"%")}else q.css("font-size","100%")}function K(a,b){d.menu&&(c(d.menu).find(".active").removeClass("active"),c(d.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));d.navigation&&(c("#fp-nav").find(".active").removeClass("active"),a?c("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):c("#fp-nav").find("li").eq(b).find("a").addClass("active"))}function V(a){var b=c(".fp-section.active").index(".fp-section");a=a.index(".fp-section");
return b==a?"none":b>a?"up":"down"}function J(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),c=a.find(".fp-scrollable"),e;c.length?e=c.get(0).scrollHeight:(e=a.get(0).scrollHeight,d.verticalCentered&&(e=a.find(".fp-tableCell").get(0).scrollHeight));b=u-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));e>b?c.length?c.css("height",b+"px").parent().css("height",b+"px"):(d.verticalCentered?a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):a.wrapInner('<div class="fp-scrollable" />'),
a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):ya(a);a.css("overflow","")}function ya(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}function za(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+Aa(a)+'px;" />')}function Aa(a){var b=u;if(d.paddingTop||d.paddingBottom)b=a,b.hasClass("fp-section")||(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+
parseInt(b.css("padding-bottom")),b=u-a;return b}function pa(a,b){b?ta(f):f.addClass("fp-notransition");f.css(ua(a));setTimeout(function(){f.removeClass("fp-notransition")},10)}function ca(a){var b=c('.fp-section[data-anchor="'+a+'"]');b.length||(b=c(".fp-section").eq(a-1));return b}function Ba(a,b){var d=b.find(".fp-slides"),c=d.find('.fp-slide[data-anchor="'+a+'"]');c.length||(c=d.find(".fp-slide").eq(a));return c}function aa(a,b){var d=ca(a);"undefined"===typeof b&&(b=0);a===z||d.hasClass("active")?
Ca(d,b):A(d,function(){Ca(d,b)})}function Ca(a,b){if("undefined"!==typeof b){var d=a.find(".fp-slides"),c=Ba(b,a);c.length&&G(d,c)}}function Pa(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var c=a.find(".fp-slidesNav");c.addClass(d.slidesNavPosition);for(var e=0;e<b;e++)c.find("ul").append('<li><a href="#"><span></span></a></li>');c.css("margin-left","-"+c.width()/2+"px");c.find("li").first().find("a").addClass("active")}function W(a,b,c,e){e="";d.anchors.length&&(a?("undefined"!==typeof c&&
(e=c),"undefined"===typeof b&&(b=a),Z=b,Da(e+"/"+b)):("undefined"!==typeof a&&(Z=b),Da(c)));Ea()}function Da(a){if(d.recordHistory)location.hash=a;else if(Q||R)history.replaceState(I,I,"#"+a);else{var b=h.location.href.split("#")[0];h.location.replace(b+"#"+a)}}function sa(a){var b=a.data("anchor");a=a.index();"undefined"===typeof b&&(b=a);return b}function Ea(){var a=c(".fp-section.active"),b=a.find(".fp-slide.active"),e=a.data("anchor"),f=sa(b),a=a.index(".fp-section"),a=String(a);d.anchors.length&&
(a=e);b.length&&(a=a+"-"+f);a=a.replace("/","-").replace("#","");q[0].className=q[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),"");q.addClass("fp-viewing-"+a)}function Qa(){var a=k.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};k.body.insertBefore(a,null);for(var d in c)a.style[d]!==I&&(a.style[d]="translate3d(1px,1px,1px)",b=h.getComputedStyle(a).getPropertyValue(c[d]));
k.body.removeChild(a);return b!==I&&0<b.length&&"none"!==b}function Ra(){if(Q||R){var a=Fa();c(".fullpage-wrapper").off("touchstart "+a.down).on("touchstart "+a.down,Ka);c(".fullpage-wrapper").off("touchmove "+a.move).on("touchmove "+a.move,Ja)}}function Sa(){if(Q||R){var a=Fa();c(".fullpage-wrapper").off("touchstart "+a.down);c(".fullpage-wrapper").off("touchmove "+a.move)}}function Fa(){return h.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ka(a){var b=
[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;R&&X(a)&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX);return b}function O(a,b){e.setScrollingSpeed(0,"internal");"undefined"!==typeof b&&(w=!0);G(a.closest(".fp-slides"),a);"undefined"!==typeof b&&(w=!1);e.setScrollingSpeed(H.scrollingSpeed,"internal")}function x(a){d.scrollBar?f.scrollTop(a):d.css3?pa("translate3d(0px, -"+a+"px, 0px)",
!1):f.css("top",-a)}function ua(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Ta(){x(0);c("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();c(".fp-section").css({height:"","background-color":"",padding:""});c(".fp-slide").css({width:""});f.css({height:"",position:"","-ms-touch-action":"","touch-action":""});c(".fp-section, .fp-slide").each(function(){ya(c(this));c(this).removeClass("fp-table active")});f.addClass("fp-notransition");f.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){c(this).replaceWith(this.childNodes)});
v.scrollTop(0)}function S(a,b,c){d[a]=b;"internal"!==c&&(H[a]=b)}function T(a,b){console&&console[a]&&console[a]("fullPage: "+b)}var v=c("html, body"),q=c("body"),e=c.fn.fullpage;d=c.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,
normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},d);(function(){d.continuousVertical&&
(d.loopTop||d.loopBottom)&&(d.continuousVertical=!1,T("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));d.continuousVertical&&d.scrollBar&&(d.continuousVertical=!1,T("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.each(d.anchors,function(a,b){(c("#"+b).length||c('[name="'+b+'"]').length)&&T("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();
c.extend(c.easing,{easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}});c.extend(c.easing,{easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c}});e.setAutoScrolling=function(a,b){S("autoScrolling",a,b);var g=c(".fp-section.active");d.autoScrolling&&!d.scrollBar?(v.css({overflow:"hidden",height:"100%"}),e.setRecordHistory(d.recordHistory,"internal"),f.css({"-ms-touch-action":"none","touch-action":"none"}),g.length&&x(g.position().top)):(v.css({overflow:"visible",
height:"initial"}),e.setRecordHistory(!1,"internal"),f.css({"-ms-touch-action":"","touch-action":""}),x(0),g.length&&v.scrollTop(g.position().top))};e.setRecordHistory=function(a,b){S("recordHistory",a,b)};e.setScrollingSpeed=function(a,b){S("scrollingSpeed",a,b)};e.setFitToSection=function(a,b){S("fitToSection",a,b)};e.setMouseWheelScrolling=function(a){a?k.addEventListener?(k.addEventListener("mousewheel",C,!1),k.addEventListener("wheel",C,!1)):k.attachEvent("onmousewheel",C):k.addEventListener?
(k.removeEventListener("mousewheel",C,!1),k.removeEventListener("wheel",C,!1)):k.detachEvent("onmousewheel",C)};e.setAllowScrolling=function(a,b){"undefined"!=typeof b?(b=b.replace(/ /g,"").split(","),c.each(b,function(b,c){switch(c){case "up":p.up=a;break;case "down":p.down=a;break;case "left":p.left=a;break;case "right":p.right=a;break;case "all":e.setAllowScrolling(a)}})):a?(e.setMouseWheelScrolling(!0),Ra()):(e.setMouseWheelScrolling(!1),Sa())};e.setKeyboardScrolling=function(a){d.keyboardScrolling=
a};e.moveSectionUp=function(){var a=c(".fp-section.active").prev(".fp-section");a.length||!d.loopTop&&!d.continuousVertical||(a=c(".fp-section").last());a.length&&A(a,null,!0)};e.moveSectionDown=function(){var a=c(".fp-section.active").next(".fp-section");a.length||!d.loopBottom&&!d.continuousVertical||(a=c(".fp-section").first());a.length&&A(a,null,!1)};e.silentMoveTo=function(a,b){e.setScrollingSpeed(0,"internal");e.moveTo(a);e.setScrollingSpeed(H.scrollingSpeed,"internal");if("undefined"!==typeof b){var c=
ca(a),c=Ba(b,c);O(c)}};e.moveTo=function(a,b){var c=ca(a);"undefined"!==typeof b?aa(a,b):0<c.length&&A(c)};e.moveSlideRight=function(){na("next")};e.moveSlideLeft=function(){na("prev")};e.reBuild=function(a){if(!f.hasClass("fp-destroyed")){w=!0;var b=l.width();u=l.height();d.resize&&Oa(u,b);c(".fp-section").each(function(){var a=c(this).find(".fp-slides"),b=c(this).find(".fp-slide");d.verticalCentered&&c(this).find(".fp-tableCell").css("height",Aa(c(this))+"px");c(this).css("height",u+"px");d.scrollOverflow&&
(b.length?b.each(function(){J(c(this))}):J(c(this)));1<b.length&&G(a,a.find(".fp-slide.active"))});(b=c(".fp-section.active").index(".fp-section"))&&e.silentMoveTo(b+1);w=!1;c.isFunction(d.afterResize)&&a&&d.afterResize.call(f);c.isFunction(d.afterReBuild)&&!a&&d.afterReBuild.call(f)}};var B=!1,Q=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),R="ontouchstart"in h||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,
f=c(this),u=l.height(),w=!1,z,Z,t=!0,D=[],y,Y,p={up:!0,down:!0,left:!0,right:!0},H=c.extend(!0,{},d);c(this).length?(f.css({height:"100%",position:"relative"}),f.addClass("fullpage-wrapper"),c("html").addClass("fp-enabled")):T("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");d.css3&&(d.css3=Qa());e.setAllowScrolling(!0);f.removeClass("fp-destroyed");c(d.sectionSelector).each(function(){c(this).addClass("fp-section")});c(d.slideSelector).each(function(){c(this).addClass("fp-slide")});
d.navigation&&Ia();c(".fp-section").each(function(a){var b=c(this),e=c(this).find(".fp-slide"),f=e.length;a||0!==c(".fp-section.active").length||c(this).addClass("active");c(this).css("height",u+"px");d.paddingTop&&c(this).css("padding-top",d.paddingTop);d.paddingBottom&&c(this).css("padding-bottom",d.paddingBottom);"undefined"!==typeof d.sectionsColor[a]&&c(this).css("background-color",d.sectionsColor[a]);"undefined"!==typeof d.anchors[a]&&(c(this).attr("data-anchor",d.anchors[a]),c(this).hasClass("active")&&
K(d.anchors[a],a));if(0<f){a=100*f;var h=100/f;e.wrapAll('<div class="fp-slidesContainer" />');e.parent().wrap('<div class="fp-slides" />');c(this).find(".fp-slidesContainer").css("width",a+"%");d.controlArrows&&1<f&&Ha(c(this));d.slidesNavigation&&Pa(c(this),f);e.each(function(a){c(this).css("width",h+"%");d.verticalCentered&&za(c(this))});b=b.find(".fp-slide.active");b.length?O(b):e.eq(0).addClass("active")}else d.verticalCentered&&za(c(this))}).promise().done(function(){e.setAutoScrolling(d.autoScrolling,
"internal");var a=c(".fp-section.active").find(".fp-slide.active");a.length&&(0!==c(".fp-section.active").index(".fp-section")||0===c(".fp-section.active").index(".fp-section")&&0!==a.index())&&O(a);d.fixedElements&&d.css3&&c(d.fixedElements).appendTo(q);d.navigation&&(y.css("margin-top","-"+y.height()/2+"px"),y.find("li").eq(c(".fp-section.active").index(".fp-section")).find("a").addClass("active"));d.menu&&d.css3&&c(d.menu).closest(".fullpage-wrapper").length&&c(d.menu).appendTo(q);d.scrollOverflow?
("complete"===k.readyState&&da(),l.on("load",da)):ea();wa();if(!d.animateAnchor&&(a=h.location.hash.replace("#","").split("/")[0],a.length)){var b=c('[data-anchor="'+a+'"]');b.length&&(d.autoScrolling?x(b.position().top):(x(0),v.scrollTop(b.position().top)),K(a,null),c.isFunction(d.afterLoad)&&d.afterLoad.call(b,a,b.index(".fp-section")+1),b.addClass("active").siblings().removeClass("active"))}Ea();l.on("load",function(){var a=h.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&aa(b,a)})});
var ga,ha,U=!1;l.on("scroll",fa);var F=0,N=0,E=0,M=0,ma=(new Date).getTime();l.on("hashchange",ra);r.keydown(function(a){clearTimeout(Ga);Y=a.ctrlKey;var b=c(k.activeElement);b.is("textarea")||b.is("input")||b.is("select")||!d.keyboardScrolling||!d.autoScrolling||(-1<c.inArray(a.which,[40,38,32,33,34])&&a.preventDefault(),Ga=setTimeout(function(){var b=a.shiftKey;switch(a.which){case 38:case 33:e.moveSectionUp();break;case 32:if(b){e.moveSectionUp();break}case 40:case 34:e.moveSectionDown();break;
case 36:e.moveTo(1);break;case 35:e.moveTo(c(".fp-section").length);break;case 37:e.moveSlideLeft();break;case 39:e.moveSlideRight()}},150))});r.keyup(function(a){Y=a.ctrlKey});var Ga;f.mousedown(function(a){2==a.which&&(P=a.pageY,f.on("mousemove",Na))});f.mouseup(function(a){2==a.which&&f.off("mousemove")});var P=0;r.on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=c(this).parent().index();A(c(".fp-section").eq(a))});r.on("click touchstart",".fp-slidesNav a",function(a){a.preventDefault();
a=c(this).closest(".fp-section").find(".fp-slides");var b=a.find(".fp-slide").eq(c(this).closest("li").index());G(a,b)});d.normalScrollElements&&(r.on("mouseenter",d.normalScrollElements,function(){e.setMouseWheelScrolling(!1)}),r.on("mouseleave",d.normalScrollElements,function(){e.setMouseWheelScrolling(!0)}));c(".fp-section").on("click touchstart",".fp-controlArrow",function(){c(this).hasClass("fp-prev")?p.left&&e.moveSlideLeft():p.right&&e.moveSlideRight()});l.resize(va);var ba=u,xa;e.destroy=
function(a){e.setAutoScrolling(!1,"internal");e.setAllowScrolling(!1);e.setKeyboardScrolling(!1);f.addClass("fp-destroyed");l.off("scroll",fa).off("hashchange",ra).off("resize",va);r.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",d.normalScrollElements).off("mouseout",d.normalScrollElements);c(".fp-section").off("click",".fp-controlArrow");a&&Ta()}}});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
  } else {
      factory(jQuery);
  }

}(function($) {
  'use strict';
  var Slick = window.Slick || {};

  Slick = (function() {

      var instanceUid = 0;

      function Slick(element, settings) {

          var _ = this, dataSettings;

          _.defaults = {
              accessibility: true,
              adaptiveHeight: false,
              appendArrows: $(element),
              appendDots: $(element),
              arrows: true,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: false,
              autoplaySpeed: 3000,
              centerMode: false,
              centerPadding: '50px',
              cssEase: 'ease',
              customPaging: function(slider, i) {
                  return $('<button type="button" />').text(i + 1);
              },
              dots: false,
              dotsClass: 'slick-dots',
              draggable: true,
              easing: 'linear',
              edgeFriction: 0.35,
              fade: false,
              focusOnSelect: false,
              focusOnChange: false,
              infinite: true,
              initialSlide: 0,
              lazyLoad: 'ondemand',
              mobileFirst: false,
              pauseOnHover: true,
              pauseOnFocus: true,
              pauseOnDotsHover: false,
              respondTo: 'window',
              responsive: null,
              rows: 1,
              rtl: false,
              slide: '',
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: true,
              swipeToSlide: false,
              touchMove: true,
              touchThreshold: 5,
              useCSS: true,
              useTransform: true,
              variableWidth: false,
              vertical: false,
              verticalSwiping: false,
              waitForAnimate: true,
              zIndex: 1000
          };

          _.initials = {
              animating: false,
              dragging: false,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: false,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: false,
              slideOffset: 0,
              swipeLeft: null,
              swiping: false,
              $list: null,
              touchObject: {},
              transformsEnabled: false,
              unslicked: false
          };

          $.extend(_, _.initials);

          _.activeBreakpoint = null;
          _.animType = null;
          _.animProp = null;
          _.breakpoints = [];
          _.breakpointSettings = [];
          _.cssTransitions = false;
          _.focussed = false;
          _.interrupted = false;
          _.hidden = 'hidden';
          _.paused = true;
          _.positionProp = null;
          _.respondTo = null;
          _.rowCount = 1;
          _.shouldClick = true;
          _.$slider = $(element);
          _.$slidesCache = null;
          _.transformType = null;
          _.transitionType = null;
          _.visibilityChange = 'visibilitychange';
          _.windowWidth = 0;
          _.windowTimer = null;

          dataSettings = $(element).data('slick') || {};

          _.options = $.extend({}, _.defaults, settings, dataSettings);

          _.currentSlide = _.options.initialSlide;

          _.originalSettings = _.options;

          if (typeof document.mozHidden !== 'undefined') {
              _.hidden = 'mozHidden';
              _.visibilityChange = 'mozvisibilitychange';
          } else if (typeof document.webkitHidden !== 'undefined') {
              _.hidden = 'webkitHidden';
              _.visibilityChange = 'webkitvisibilitychange';
          }

          _.autoPlay = $.proxy(_.autoPlay, _);
          _.autoPlayClear = $.proxy(_.autoPlayClear, _);
          _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
          _.changeSlide = $.proxy(_.changeSlide, _);
          _.clickHandler = $.proxy(_.clickHandler, _);
          _.selectHandler = $.proxy(_.selectHandler, _);
          _.setPosition = $.proxy(_.setPosition, _);
          _.swipeHandler = $.proxy(_.swipeHandler, _);
          _.dragHandler = $.proxy(_.dragHandler, _);
          _.keyHandler = $.proxy(_.keyHandler, _);

          _.instanceUid = instanceUid++;

          // A simple way to check for HTML strings
          // Strict HTML recognition (must start with <)
          // Extracted from jQuery v1.11 source
          _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


          _.registerBreakpoints();
          _.init(true);

      }

      return Slick;

  }());

  Slick.prototype.activateADA = function() {
      var _ = this;

      _.$slideTrack.find('.slick-active').attr({
          'aria-hidden': 'false'
      }).find('a, input, button, select').attr({
          'tabindex': '0'
      });

  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

      var _ = this;

      if (typeof(index) === 'boolean') {
          addBefore = index;
          index = null;
      } else if (index < 0 || (index >= _.slideCount)) {
          return false;
      }

      _.unload();

      if (typeof(index) === 'number') {
          if (index === 0 && _.$slides.length === 0) {
              $(markup).appendTo(_.$slideTrack);
          } else if (addBefore) {
              $(markup).insertBefore(_.$slides.eq(index));
          } else {
              $(markup).insertAfter(_.$slides.eq(index));
          }
      } else {
          if (addBefore === true) {
              $(markup).prependTo(_.$slideTrack);
          } else {
              $(markup).appendTo(_.$slideTrack);
          }
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slides.each(function(index, element) {
          $(element).attr('data-slick-index', index);
      });

      _.$slidesCache = _.$slides;

      _.reinit();

  };

  Slick.prototype.animateHeight = function() {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
          var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
          _.$list.animate({
              height: targetHeight
          }, _.options.speed);
      }
  };

  Slick.prototype.animateSlide = function(targetLeft, callback) {

      var animProps = {},
          _ = this;

      _.animateHeight();

      if (_.options.rtl === true && _.options.vertical === false) {
          targetLeft = -targetLeft;
      }
      if (_.transformsEnabled === false) {
          if (_.options.vertical === false) {
              _.$slideTrack.animate({
                  left: targetLeft
              }, _.options.speed, _.options.easing, callback);
          } else {
              _.$slideTrack.animate({
                  top: targetLeft
              }, _.options.speed, _.options.easing, callback);
          }

      } else {

          if (_.cssTransitions === false) {
              if (_.options.rtl === true) {
                  _.currentLeft = -(_.currentLeft);
              }
              $({
                  animStart: _.currentLeft
              }).animate({
                  animStart: targetLeft
              }, {
                  duration: _.options.speed,
                  easing: _.options.easing,
                  step: function(now) {
                      now = Math.ceil(now);
                      if (_.options.vertical === false) {
                          animProps[_.animType] = 'translate(' +
                              now + 'px, 0px)';
                          _.$slideTrack.css(animProps);
                      } else {
                          animProps[_.animType] = 'translate(0px,' +
                              now + 'px)';
                          _.$slideTrack.css(animProps);
                      }
                  },
                  complete: function() {
                      if (callback) {
                          callback.call();
                      }
                  }
              });

          } else {

              _.applyTransition();
              targetLeft = Math.ceil(targetLeft);

              if (_.options.vertical === false) {
                  animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
              } else {
                  animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
              }
              _.$slideTrack.css(animProps);

              if (callback) {
                  setTimeout(function() {

                      _.disableTransition();

                      callback.call();
                  }, _.options.speed);
              }

          }

      }

  };

  Slick.prototype.getNavTarget = function() {

      var _ = this,
          asNavFor = _.options.asNavFor;

      if ( asNavFor && asNavFor !== null ) {
          asNavFor = $(asNavFor).not(_.$slider);
      }

      return asNavFor;

  };

  Slick.prototype.asNavFor = function(index) {

      var _ = this,
          asNavFor = _.getNavTarget();

      if ( asNavFor !== null && typeof asNavFor === 'object' ) {
          asNavFor.each(function() {
              var target = $(this).slick('getSlick');
              if(!target.unslicked) {
                  target.slideHandler(index, true);
              }
          });
      }

  };

  Slick.prototype.applyTransition = function(slide) {

      var _ = this,
          transition = {};

      if (_.options.fade === false) {
          transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
      } else {
          transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
      }

      if (_.options.fade === false) {
          _.$slideTrack.css(transition);
      } else {
          _.$slides.eq(slide).css(transition);
      }

  };

  Slick.prototype.autoPlay = function() {

      var _ = this;

      _.autoPlayClear();

      if ( _.slideCount > _.options.slidesToShow ) {
          _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
      }

  };

  Slick.prototype.autoPlayClear = function() {

      var _ = this;

      if (_.autoPlayTimer) {
          clearInterval(_.autoPlayTimer);
      }

  };

  Slick.prototype.autoPlayIterator = function() {

      var _ = this,
          slideTo = _.currentSlide + _.options.slidesToScroll;

      if ( !_.paused && !_.interrupted && !_.focussed ) {

          if ( _.options.infinite === false ) {

              if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                  _.direction = 0;
              }

              else if ( _.direction === 0 ) {

                  slideTo = _.currentSlide - _.options.slidesToScroll;

                  if ( _.currentSlide - 1 === 0 ) {
                      _.direction = 1;
                  }

              }

          }

          _.slideHandler( slideTo );

      }

  };

  Slick.prototype.buildArrows = function() {

      var _ = this;

      if (_.options.arrows === true ) {

          _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
          _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

          if( _.slideCount > _.options.slidesToShow ) {

              _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
              _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

              if (_.htmlExpr.test(_.options.prevArrow)) {
                  _.$prevArrow.prependTo(_.options.appendArrows);
              }

              if (_.htmlExpr.test(_.options.nextArrow)) {
                  _.$nextArrow.appendTo(_.options.appendArrows);
              }

              if (_.options.infinite !== true) {
                  _.$prevArrow
                      .addClass('slick-disabled')
                      .attr('aria-disabled', 'true');
              }

          } else {

              _.$prevArrow.add( _.$nextArrow )

                  .addClass('slick-hidden')
                  .attr({
                      'aria-disabled': 'true',
                      'tabindex': '-1'
                  });

          }

      }

  };

  Slick.prototype.buildDots = function() {

      var _ = this,
          i, dot;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

          _.$slider.addClass('slick-dotted');

          dot = $('<ul />').addClass(_.options.dotsClass);

          for (i = 0; i <= _.getDotCount(); i += 1) {
              dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
          }

          _.$dots = dot.appendTo(_.options.appendDots);

          _.$dots.find('li').first().addClass('slick-active');

      }

  };

  Slick.prototype.buildOut = function() {

      var _ = this;

      _.$slides =
          _.$slider
              .children( _.options.slide + ':not(.slick-cloned)')
              .addClass('slick-slide');

      _.slideCount = _.$slides.length;

      _.$slides.each(function(index, element) {
          $(element)
              .attr('data-slick-index', index)
              .data('originalStyling', $(element).attr('style') || '');
      });

      _.$slider.addClass('slick-slider');

      _.$slideTrack = (_.slideCount === 0) ?
          $('<div class="slick-track"/>').appendTo(_.$slider) :
          _.$slides.wrapAll('<div class="slick-track"/>').parent();

      _.$list = _.$slideTrack.wrap(
          '<div class="slick-list"/>').parent();
      _.$slideTrack.css('opacity', 0);

      if (_.options.centerMode === true || _.options.swipeToSlide === true) {
          _.options.slidesToScroll = 1;
      }

      $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

      _.setupInfinite();

      _.buildArrows();

      _.buildDots();

      _.updateDots();


      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

      if (_.options.draggable === true) {
          _.$list.addClass('draggable');
      }

  };

  Slick.prototype.buildRows = function() {

      var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

      newSlides = document.createDocumentFragment();
      originalSlides = _.$slider.children();

      if(_.options.rows > 0) {

          slidesPerSection = _.options.slidesPerRow * _.options.rows;
          numOfSlides = Math.ceil(
              originalSlides.length / slidesPerSection
          );

          for(a = 0; a < numOfSlides; a++){
              var slide = document.createElement('div');
              for(b = 0; b < _.options.rows; b++) {
                  var row = document.createElement('div');
                  for(c = 0; c < _.options.slidesPerRow; c++) {
                      var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                      if (originalSlides.get(target)) {
                          row.appendChild(originalSlides.get(target));
                      }
                  }
                  slide.appendChild(row);
              }
              newSlides.appendChild(slide);
          }

          _.$slider.empty().append(newSlides);
          _.$slider.children().children().children()
              .css({
                  'width':(100 / _.options.slidesPerRow) + '%',
                  'display': 'inline-block'
              });

      }

  };

  Slick.prototype.checkResponsive = function(initial, forceUpdate) {

      var _ = this,
          breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
      var sliderWidth = _.$slider.width();
      var windowWidth = window.innerWidth || $(window).width();

      if (_.respondTo === 'window') {
          respondToWidth = windowWidth;
      } else if (_.respondTo === 'slider') {
          respondToWidth = sliderWidth;
      } else if (_.respondTo === 'min') {
          respondToWidth = Math.min(windowWidth, sliderWidth);
      }

      if ( _.options.responsive &&
          _.options.responsive.length &&
          _.options.responsive !== null) {

          targetBreakpoint = null;

          for (breakpoint in _.breakpoints) {
              if (_.breakpoints.hasOwnProperty(breakpoint)) {
                  if (_.originalSettings.mobileFirst === false) {
                      if (respondToWidth < _.breakpoints[breakpoint]) {
                          targetBreakpoint = _.breakpoints[breakpoint];
                      }
                  } else {
                      if (respondToWidth > _.breakpoints[breakpoint]) {
                          targetBreakpoint = _.breakpoints[breakpoint];
                      }
                  }
              }
          }

          if (targetBreakpoint !== null) {
              if (_.activeBreakpoint !== null) {
                  if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                      _.activeBreakpoint =
                          targetBreakpoint;
                      if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                          _.unslick(targetBreakpoint);
                      } else {
                          _.options = $.extend({}, _.originalSettings,
                              _.breakpointSettings[
                                  targetBreakpoint]);
                          if (initial === true) {
                              _.currentSlide = _.options.initialSlide;
                          }
                          _.refresh(initial);
                      }
                      triggerBreakpoint = targetBreakpoint;
                  }
              } else {
                  _.activeBreakpoint = targetBreakpoint;
                  if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                      _.unslick(targetBreakpoint);
                  } else {
                      _.options = $.extend({}, _.originalSettings,
                          _.breakpointSettings[
                              targetBreakpoint]);
                      if (initial === true) {
                          _.currentSlide = _.options.initialSlide;
                      }
                      _.refresh(initial);
                  }
                  triggerBreakpoint = targetBreakpoint;
              }
          } else {
              if (_.activeBreakpoint !== null) {
                  _.activeBreakpoint = null;
                  _.options = _.originalSettings;
                  if (initial === true) {
                      _.currentSlide = _.options.initialSlide;
                  }
                  _.refresh(initial);
                  triggerBreakpoint = targetBreakpoint;
              }
          }

          // only trigger breakpoints during an actual break. not on initialize.
          if( !initial && triggerBreakpoint !== false ) {
              _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
          }
      }

  };

  Slick.prototype.changeSlide = function(event, dontAnimate) {

      var _ = this,
          $target = $(event.currentTarget),
          indexOffset, slideOffset, unevenOffset;

      // If target is a link, prevent default action.
      if($target.is('a')) {
          event.preventDefault();
      }

      // If target is not the <li> element (ie: a child), find the <li>.
      if(!$target.is('li')) {
          $target = $target.closest('li');
      }

      unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
      indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

      switch (event.data.message) {

          case 'previous':
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                  _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
              }
              break;

          case 'next':
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                  _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
              }
              break;

          case 'index':
              var index = event.data.index === 0 ? 0 :
                  event.data.index || $target.index() * _.options.slidesToScroll;

              _.slideHandler(_.checkNavigable(index), false, dontAnimate);
              $target.children().trigger('focus');
              break;

          default:
              return;
      }

  };

  Slick.prototype.checkNavigable = function(index) {

      var _ = this,
          navigables, prevNavigable;

      navigables = _.getNavigableIndexes();
      prevNavigable = 0;
      if (index > navigables[navigables.length - 1]) {
          index = navigables[navigables.length - 1];
      } else {
          for (var n in navigables) {
              if (index < navigables[n]) {
                  index = prevNavigable;
                  break;
              }
              prevNavigable = navigables[n];
          }
      }

      return index;
  };

  Slick.prototype.cleanUpEvents = function() {

      var _ = this;

      if (_.options.dots && _.$dots !== null) {

          $('li', _.$dots)
              .off('click.slick', _.changeSlide)
              .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
              .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

          if (_.options.accessibility === true) {
              _.$dots.off('keydown.slick', _.keyHandler);
          }
      }

      _.$slider.off('focus.slick blur.slick');

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
          _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
          _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

          if (_.options.accessibility === true) {
              _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
              _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
          }
      }

      _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
      _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
      _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
      _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

      _.$list.off('click.slick', _.clickHandler);

      $(document).off(_.visibilityChange, _.visibility);

      _.cleanUpSlideEvents();

      if (_.options.accessibility === true) {
          _.$list.off('keydown.slick', _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
          $(_.$slideTrack).children().off('click.slick', _.selectHandler);
      }

      $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

      $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

      $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

      $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

  };

  Slick.prototype.cleanUpSlideEvents = function() {

      var _ = this;

      _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

  };

  Slick.prototype.cleanUpRows = function() {

      var _ = this, originalSlides;

      if(_.options.rows > 0) {
          originalSlides = _.$slides.children().children();
          originalSlides.removeAttr('style');
          _.$slider.empty().append(originalSlides);
      }

  };

  Slick.prototype.clickHandler = function(event) {

      var _ = this;

      if (_.shouldClick === false) {
          event.stopImmediatePropagation();
          event.stopPropagation();
          event.preventDefault();
      }

  };

  Slick.prototype.destroy = function(refresh) {

      var _ = this;

      _.autoPlayClear();

      _.touchObject = {};

      _.cleanUpEvents();

      $('.slick-cloned', _.$slider).detach();

      if (_.$dots) {
          _.$dots.remove();
      }

      if ( _.$prevArrow && _.$prevArrow.length ) {

          _.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display','');

          if ( _.htmlExpr.test( _.options.prevArrow )) {
              _.$prevArrow.remove();
          }
      }

      if ( _.$nextArrow && _.$nextArrow.length ) {

          _.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display','');

          if ( _.htmlExpr.test( _.options.nextArrow )) {
              _.$nextArrow.remove();
          }
      }


      if (_.$slides) {

          _.$slides
              .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function(){
                  $(this).attr('style', $(this).data('originalStyling'));
              });

          _.$slideTrack.children(this.options.slide).detach();

          _.$slideTrack.detach();

          _.$list.detach();

          _.$slider.append(_.$slides);
      }

      _.cleanUpRows();

      _.$slider.removeClass('slick-slider');
      _.$slider.removeClass('slick-initialized');
      _.$slider.removeClass('slick-dotted');

      _.unslicked = true;

      if(!refresh) {
          _.$slider.trigger('destroy', [_]);
      }

  };

  Slick.prototype.disableTransition = function(slide) {

      var _ = this,
          transition = {};

      transition[_.transitionType] = '';

      if (_.options.fade === false) {
          _.$slideTrack.css(transition);
      } else {
          _.$slides.eq(slide).css(transition);
      }

  };

  Slick.prototype.fadeSlide = function(slideIndex, callback) {

      var _ = this;

      if (_.cssTransitions === false) {

          _.$slides.eq(slideIndex).css({
              zIndex: _.options.zIndex
          });

          _.$slides.eq(slideIndex).animate({
              opacity: 1
          }, _.options.speed, _.options.easing, callback);

      } else {

          _.applyTransition(slideIndex);

          _.$slides.eq(slideIndex).css({
              opacity: 1,
              zIndex: _.options.zIndex
          });

          if (callback) {
              setTimeout(function() {

                  _.disableTransition(slideIndex);

                  callback.call();
              }, _.options.speed);
          }

      }

  };

  Slick.prototype.fadeSlideOut = function(slideIndex) {

      var _ = this;

      if (_.cssTransitions === false) {

          _.$slides.eq(slideIndex).animate({
              opacity: 0,
              zIndex: _.options.zIndex - 2
          }, _.options.speed, _.options.easing);

      } else {

          _.applyTransition(slideIndex);

          _.$slides.eq(slideIndex).css({
              opacity: 0,
              zIndex: _.options.zIndex - 2
          });

      }

  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

      var _ = this;

      if (filter !== null) {

          _.$slidesCache = _.$slides;

          _.unload();

          _.$slideTrack.children(this.options.slide).detach();

          _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

          _.reinit();

      }

  };

  Slick.prototype.focusHandler = function() {

      var _ = this;

      _.$slider
          .off('focus.slick blur.slick')
          .on('focus.slick blur.slick', '*', function(event) {

          event.stopImmediatePropagation();
          var $sf = $(this);

          setTimeout(function() {

              if( _.options.pauseOnFocus ) {
                  _.focussed = $sf.is(':focus');
                  _.autoPlay();
              }

          }, 0);

      });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

      var _ = this;
      return _.currentSlide;

  };

  Slick.prototype.getDotCount = function() {

      var _ = this;

      var breakPoint = 0;
      var counter = 0;
      var pagerQty = 0;

      if (_.options.infinite === true) {
          if (_.slideCount <= _.options.slidesToShow) {
               ++pagerQty;
          } else {
              while (breakPoint < _.slideCount) {
                  ++pagerQty;
                  breakPoint = counter + _.options.slidesToScroll;
                  counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
              }
          }
      } else if (_.options.centerMode === true) {
          pagerQty = _.slideCount;
      } else if(!_.options.asNavFor) {
          pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
      }else {
          while (breakPoint < _.slideCount) {
              ++pagerQty;
              breakPoint = counter + _.options.slidesToScroll;
              counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
          }
      }

      return pagerQty - 1;

  };

  Slick.prototype.getLeft = function(slideIndex) {

      var _ = this,
          targetLeft,
          verticalHeight,
          verticalOffset = 0,
          targetSlide,
          coef;

      _.slideOffset = 0;
      verticalHeight = _.$slides.first().outerHeight(true);

      if (_.options.infinite === true) {
          if (_.slideCount > _.options.slidesToShow) {
              _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
              coef = -1

              if (_.options.vertical === true && _.options.centerMode === true) {
                  if (_.options.slidesToShow === 2) {
                      coef = -1.5;
                  } else if (_.options.slidesToShow === 1) {
                      coef = -2
                  }
              }
              verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
          }
          if (_.slideCount % _.options.slidesToScroll !== 0) {
              if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                  if (slideIndex > _.slideCount) {
                      _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                      verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                  } else {
                      _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                      verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                  }
              }
          }
      } else {
          if (slideIndex + _.options.slidesToShow > _.slideCount) {
              _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
              verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
          }
      }

      if (_.slideCount <= _.options.slidesToShow) {
          _.slideOffset = 0;
          verticalOffset = 0;
      }

      if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
          _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
      } else if (_.options.centerMode === true && _.options.infinite === true) {
          _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
      } else if (_.options.centerMode === true) {
          _.slideOffset = 0;
          _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
      }

      if (_.options.vertical === false) {
          targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
      } else {
          targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
      }

      if (_.options.variableWidth === true) {

          if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
              targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
          } else {
              targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
          }

          if (_.options.rtl === true) {
              if (targetSlide[0]) {
                  targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
              } else {
                  targetLeft =  0;
              }
          } else {
              targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
          }

          if (_.options.centerMode === true) {
              if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                  targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
              } else {
                  targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
              }

              if (_.options.rtl === true) {
                  if (targetSlide[0]) {
                      targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                  } else {
                      targetLeft =  0;
                  }
              } else {
                  targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
              }

              targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
          }
      }

      return targetLeft;

  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

      var _ = this;

      return _.options[option];

  };

  Slick.prototype.getNavigableIndexes = function() {

      var _ = this,
          breakPoint = 0,
          counter = 0,
          indexes = [],
          max;

      if (_.options.infinite === false) {
          max = _.slideCount;
      } else {
          breakPoint = _.options.slidesToScroll * -1;
          counter = _.options.slidesToScroll * -1;
          max = _.slideCount * 2;
      }

      while (breakPoint < max) {
          indexes.push(breakPoint);
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }

      return indexes;

  };

  Slick.prototype.getSlick = function() {

      return this;

  };

  Slick.prototype.getSlideCount = function() {

      var _ = this,
          slidesTraversed, swipedSlide, centerOffset;

      centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

      if (_.options.swipeToSlide === true) {
          _.$slideTrack.find('.slick-slide').each(function(index, slide) {
              if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                  swipedSlide = slide;
                  return false;
              }
          });

          slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

          return slidesTraversed;

      } else {
          return _.options.slidesToScroll;
      }

  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

      var _ = this;

      _.changeSlide({
          data: {
              message: 'index',
              index: parseInt(slide)
          }
      }, dontAnimate);

  };

  Slick.prototype.init = function(creation) {

      var _ = this;

      if (!$(_.$slider).hasClass('slick-initialized')) {

          $(_.$slider).addClass('slick-initialized');

          _.buildRows();
          _.buildOut();
          _.setProps();
          _.startLoad();
          _.loadSlider();
          _.initializeEvents();
          _.updateArrows();
          _.updateDots();
          _.checkResponsive(true);
          _.focusHandler();

      }

      if (creation) {
          _.$slider.trigger('init', [_]);
      }

      if (_.options.accessibility === true) {
          _.initADA();
      }

      if ( _.options.autoplay ) {

          _.paused = false;
          _.autoPlay();

      }

  };

  Slick.prototype.initADA = function() {
      var _ = this,
              numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
              tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                  return (val >= 0) && (val < _.slideCount);
              });

      _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
          'aria-hidden': 'true',
          'tabindex': '-1'
      }).find('a, input, button, select').attr({
          'tabindex': '-1'
      });

      if (_.$dots !== null) {
          _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
              var slideControlIndex = tabControlIndexes.indexOf(i);

              $(this).attr({
                  'role': 'tabpanel',
                  'id': 'slick-slide' + _.instanceUid + i,
                  'tabindex': -1
              });

              if (slideControlIndex !== -1) {
                 var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                 if ($('#' + ariaButtonControl).length) {
                   $(this).attr({
                       'aria-describedby': ariaButtonControl
                   });
                 }
              }
          });

          _.$dots.attr('role', 'tablist').find('li').each(function(i) {
              var mappedSlideIndex = tabControlIndexes[i];

              $(this).attr({
                  'role': 'presentation'
              });

              $(this).find('button').first().attr({
                  'role': 'tab',
                  'id': 'slick-slide-control' + _.instanceUid + i,
                  'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                  'aria-label': (i + 1) + ' of ' + numDotGroups,
                  'aria-selected': null,
                  'tabindex': '-1'
              });

          }).eq(_.currentSlide).find('button').attr({
              'aria-selected': 'true',
              'tabindex': '0'
          }).end();
      }

      for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
        if (_.options.focusOnChange) {
          _.$slides.eq(i).attr({'tabindex': '0'});
        } else {
          _.$slides.eq(i).removeAttr('tabindex');
        }
      }

      _.activateADA();

  };

  Slick.prototype.initArrowEvents = function() {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
          _.$prevArrow
             .off('click.slick')
             .on('click.slick', {
                  message: 'previous'
             }, _.changeSlide);
          _.$nextArrow
             .off('click.slick')
             .on('click.slick', {
                  message: 'next'
             }, _.changeSlide);

          if (_.options.accessibility === true) {
              _.$prevArrow.on('keydown.slick', _.keyHandler);
              _.$nextArrow.on('keydown.slick', _.keyHandler);
          }
      }

  };

  Slick.prototype.initDotEvents = function() {

      var _ = this;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
          $('li', _.$dots).on('click.slick', {
              message: 'index'
          }, _.changeSlide);

          if (_.options.accessibility === true) {
              _.$dots.on('keydown.slick', _.keyHandler);
          }
      }

      if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

          $('li', _.$dots)
              .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
              .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

      }

  };

  Slick.prototype.initSlideEvents = function() {

      var _ = this;

      if ( _.options.pauseOnHover ) {

          _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
          _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

      }

  };

  Slick.prototype.initializeEvents = function() {

      var _ = this;

      _.initArrowEvents();

      _.initDotEvents();
      _.initSlideEvents();

      _.$list.on('touchstart.slick mousedown.slick', {
          action: 'start'
      }, _.swipeHandler);
      _.$list.on('touchmove.slick mousemove.slick', {
          action: 'move'
      }, _.swipeHandler);
      _.$list.on('touchend.slick mouseup.slick', {
          action: 'end'
      }, _.swipeHandler);
      _.$list.on('touchcancel.slick mouseleave.slick', {
          action: 'end'
      }, _.swipeHandler);

      _.$list.on('click.slick', _.clickHandler);

      $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

      if (_.options.accessibility === true) {
          _.$list.on('keydown.slick', _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
          $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }

      $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

      $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

      $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

      $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
      $(_.setPosition);

  };

  Slick.prototype.initUI = function() {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

          _.$prevArrow.show();
          _.$nextArrow.show();

      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

          _.$dots.show();

      }

  };

  Slick.prototype.keyHandler = function(event) {

      var _ = this;
       //Dont slide if the cursor is inside the form fields and arrow keys are pressed
      if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
          if (event.keyCode === 37 && _.options.accessibility === true) {
              _.changeSlide({
                  data: {
                      message: _.options.rtl === true ? 'next' :  'previous'
                  }
              });
          } else if (event.keyCode === 39 && _.options.accessibility === true) {
              _.changeSlide({
                  data: {
                      message: _.options.rtl === true ? 'previous' : 'next'
                  }
              });
          }
      }

  };

  Slick.prototype.lazyLoad = function() {

      var _ = this,
          loadRange, cloneRange, rangeStart, rangeEnd;

      function loadImages(imagesScope) {

          $('img[data-lazy]', imagesScope).each(function() {

              var image = $(this),
                  imageSource = $(this).attr('data-lazy'),
                  imageSrcSet = $(this).attr('data-srcset'),
                  imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                  imageToLoad = document.createElement('img');

              imageToLoad.onload = function() {

                  image
                      .animate({ opacity: 0 }, 100, function() {

                          if (imageSrcSet) {
                              image
                                  .attr('srcset', imageSrcSet );

                              if (imageSizes) {
                                  image
                                      .attr('sizes', imageSizes );
                              }
                          }

                          image
                              .attr('src', imageSource)
                              .animate({ opacity: 1 }, 200, function() {
                                  image
                                      .removeAttr('data-lazy data-srcset data-sizes')
                                      .removeClass('slick-loading');
                              });
                          _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                      });

              };

              imageToLoad.onerror = function() {

                  image
                      .removeAttr( 'data-lazy' )
                      .removeClass( 'slick-loading' )
                      .addClass( 'slick-lazyload-error' );

                  _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

              };

              imageToLoad.src = imageSource;

          });

      }

      if (_.options.centerMode === true) {
          if (_.options.infinite === true) {
              rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
              rangeEnd = rangeStart + _.options.slidesToShow + 2;
          } else {
              rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
              rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
          }
      } else {
          rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
          rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
          if (_.options.fade === true) {
              if (rangeStart > 0) rangeStart--;
              if (rangeEnd <= _.slideCount) rangeEnd++;
          }
      }

      loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

      if (_.options.lazyLoad === 'anticipated') {
          var prevSlide = rangeStart - 1,
              nextSlide = rangeEnd,
              $slides = _.$slider.find('.slick-slide');

          for (var i = 0; i < _.options.slidesToScroll; i++) {
              if (prevSlide < 0) prevSlide = _.slideCount - 1;
              loadRange = loadRange.add($slides.eq(prevSlide));
              loadRange = loadRange.add($slides.eq(nextSlide));
              prevSlide--;
              nextSlide++;
          }
      }

      loadImages(loadRange);

      if (_.slideCount <= _.options.slidesToShow) {
          cloneRange = _.$slider.find('.slick-slide');
          loadImages(cloneRange);
      } else
      if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
          cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
          loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
          cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
          loadImages(cloneRange);
      }

  };

  Slick.prototype.loadSlider = function() {

      var _ = this;

      _.setPosition();

      _.$slideTrack.css({
          opacity: 1
      });

      _.$slider.removeClass('slick-loading');

      _.initUI();

      if (_.options.lazyLoad === 'progressive') {
          _.progressiveLazyLoad();
      }

  };

  Slick.prototype.next = Slick.prototype.slickNext = function() {

      var _ = this;

      _.changeSlide({
          data: {
              message: 'next'
          }
      });

  };

  Slick.prototype.orientationChange = function() {

      var _ = this;

      _.checkResponsive();
      _.setPosition();

  };

  Slick.prototype.pause = Slick.prototype.slickPause = function() {

      var _ = this;

      _.autoPlayClear();
      _.paused = true;

  };

  Slick.prototype.play = Slick.prototype.slickPlay = function() {

      var _ = this;

      _.autoPlay();
      _.options.autoplay = true;
      _.paused = false;
      _.focussed = false;
      _.interrupted = false;

  };

  Slick.prototype.postSlide = function(index) {

      var _ = this;

      if( !_.unslicked ) {

          _.$slider.trigger('afterChange', [_, index]);

          _.animating = false;

          if (_.slideCount > _.options.slidesToShow) {
              _.setPosition();
          }

          _.swipeLeft = null;

          if ( _.options.autoplay ) {
              _.autoPlay();
          }

          if (_.options.accessibility === true) {
              _.initADA();

              if (_.options.focusOnChange) {
                  var $currentSlide = $(_.$slides.get(_.currentSlide));
                  $currentSlide.attr('tabindex', 0).focus();
              }
          }

      }

  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function() {

      var _ = this;

      _.changeSlide({
          data: {
              message: 'previous'
          }
      });

  };

  Slick.prototype.preventDefault = function(event) {

      event.preventDefault();

  };

  Slick.prototype.progressiveLazyLoad = function( tryCount ) {

      tryCount = tryCount || 1;

      var _ = this,
          $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
          image,
          imageSource,
          imageSrcSet,
          imageSizes,
          imageToLoad;

      if ( $imgsToLoad.length ) {

          image = $imgsToLoad.first();
          imageSource = image.attr('data-lazy');
          imageSrcSet = image.attr('data-srcset');
          imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
          imageToLoad = document.createElement('img');

          imageToLoad.onload = function() {

              if (imageSrcSet) {
                  image
                      .attr('srcset', imageSrcSet );

                  if (imageSizes) {
                      image
                          .attr('sizes', imageSizes );
                  }
              }

              image
                  .attr( 'src', imageSource )
                  .removeAttr('data-lazy data-srcset data-sizes')
                  .removeClass('slick-loading');

              if ( _.options.adaptiveHeight === true ) {
                  _.setPosition();
              }

              _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
              _.progressiveLazyLoad();

          };

          imageToLoad.onerror = function() {

              if ( tryCount < 3 ) {

                  /**
                   * try to load the image 3 times,
                   * leave a slight delay so we don't get
                   * servers blocking the request.
                   */
                  setTimeout( function() {
                      _.progressiveLazyLoad( tryCount + 1 );
                  }, 500 );

              } else {

                  image
                      .removeAttr( 'data-lazy' )
                      .removeClass( 'slick-loading' )
                      .addClass( 'slick-lazyload-error' );

                  _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                  _.progressiveLazyLoad();

              }

          };

          imageToLoad.src = imageSource;

      } else {

          _.$slider.trigger('allImagesLoaded', [ _ ]);

      }

  };

  Slick.prototype.refresh = function( initializing ) {

      var _ = this, currentSlide, lastVisibleIndex;

      lastVisibleIndex = _.slideCount - _.options.slidesToShow;

      // in non-infinite sliders, we don't want to go past the
      // last visible index.
      if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
          _.currentSlide = lastVisibleIndex;
      }

      // if less slides than to show, go to start.
      if ( _.slideCount <= _.options.slidesToShow ) {
          _.currentSlide = 0;

      }

      currentSlide = _.currentSlide;

      _.destroy(true);

      $.extend(_, _.initials, { currentSlide: currentSlide });

      _.init();

      if( !initializing ) {

          _.changeSlide({
              data: {
                  message: 'index',
                  index: currentSlide
              }
          }, false);

      }

  };

  Slick.prototype.registerBreakpoints = function() {

      var _ = this, breakpoint, currentBreakpoint, l,
          responsiveSettings = _.options.responsive || null;

      if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

          _.respondTo = _.options.respondTo || 'window';

          for ( breakpoint in responsiveSettings ) {

              l = _.breakpoints.length-1;

              if (responsiveSettings.hasOwnProperty(breakpoint)) {
                  currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                  // loop through the breakpoints and cut out any existing
                  // ones with the same breakpoint number, we don't want dupes.
                  while( l >= 0 ) {
                      if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                          _.breakpoints.splice(l,1);
                      }
                      l--;
                  }

                  _.breakpoints.push(currentBreakpoint);
                  _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

              }

          }

          _.breakpoints.sort(function(a, b) {
              return ( _.options.mobileFirst ) ? a-b : b-a;
          });

      }

  };

  Slick.prototype.reinit = function() {

      var _ = this;

      _.$slides =
          _.$slideTrack
              .children(_.options.slide)
              .addClass('slick-slide');

      _.slideCount = _.$slides.length;

      if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
          _.currentSlide = _.currentSlide - _.options.slidesToScroll;
      }

      if (_.slideCount <= _.options.slidesToShow) {
          _.currentSlide = 0;
      }

      _.registerBreakpoints();

      _.setProps();
      _.setupInfinite();
      _.buildArrows();
      _.updateArrows();
      _.initArrowEvents();
      _.buildDots();
      _.updateDots();
      _.initDotEvents();
      _.cleanUpSlideEvents();
      _.initSlideEvents();

      _.checkResponsive(false, true);

      if (_.options.focusOnSelect === true) {
          $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }

      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

      _.setPosition();
      _.focusHandler();

      _.paused = !_.options.autoplay;
      _.autoPlay();

      _.$slider.trigger('reInit', [_]);

  };

  Slick.prototype.resize = function() {

      var _ = this;

      if ($(window).width() !== _.windowWidth) {
          clearTimeout(_.windowDelay);
          _.windowDelay = window.setTimeout(function() {
              _.windowWidth = $(window).width();
              _.checkResponsive();
              if( !_.unslicked ) { _.setPosition(); }
          }, 50);
      }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

      var _ = this;

      if (typeof(index) === 'boolean') {
          removeBefore = index;
          index = removeBefore === true ? 0 : _.slideCount - 1;
      } else {
          index = removeBefore === true ? --index : index;
      }

      if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
          return false;
      }

      _.unload();

      if (removeAll === true) {
          _.$slideTrack.children().remove();
      } else {
          _.$slideTrack.children(this.options.slide).eq(index).remove();
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slidesCache = _.$slides;

      _.reinit();

  };

  Slick.prototype.setCSS = function(position) {

      var _ = this,
          positionProps = {},
          x, y;

      if (_.options.rtl === true) {
          position = -position;
      }
      x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
      y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

      positionProps[_.positionProp] = position;

      if (_.transformsEnabled === false) {
          _.$slideTrack.css(positionProps);
      } else {
          positionProps = {};
          if (_.cssTransitions === false) {
              positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
              _.$slideTrack.css(positionProps);
          } else {
              positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
              _.$slideTrack.css(positionProps);
          }
      }

  };

  Slick.prototype.setDimensions = function() {

      var _ = this;

      if (_.options.vertical === false) {
          if (_.options.centerMode === true) {
              _.$list.css({
                  padding: ('0px ' + _.options.centerPadding)
              });
          }
      } else {
          _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
          if (_.options.centerMode === true) {
              _.$list.css({
                  padding: (_.options.centerPadding + ' 0px')
              });
          }
      }

      _.listWidth = _.$list.width();
      _.listHeight = _.$list.height();


      if (_.options.vertical === false && _.options.variableWidth === false) {
          _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
          _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

      } else if (_.options.variableWidth === true) {
          _.$slideTrack.width(5000 * _.slideCount);
      } else {
          _.slideWidth = Math.ceil(_.listWidth);
          _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
      }

      var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
      if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

  };

  Slick.prototype.setFade = function() {

      var _ = this,
          targetLeft;

      _.$slides.each(function(index, element) {
          targetLeft = (_.slideWidth * index) * -1;
          if (_.options.rtl === true) {
              $(element).css({
                  position: 'relative',
                  right: targetLeft,
                  top: 0,
                  zIndex: _.options.zIndex - 2,
                  opacity: 0
              });
          } else {
              $(element).css({
                  position: 'relative',
                  left: targetLeft,
                  top: 0,
                  zIndex: _.options.zIndex - 2,
                  opacity: 0
              });
          }
      });

      _.$slides.eq(_.currentSlide).css({
          zIndex: _.options.zIndex - 1,
          opacity: 1
      });

  };

  Slick.prototype.setHeight = function() {

      var _ = this;

      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
          var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
          _.$list.css('height', targetHeight);
      }

  };

  Slick.prototype.setOption =
  Slick.prototype.slickSetOption = function() {

      /**
       * accepts arguments in format of:
       *
       *  - for changing a single option's value:
       *     .slick("setOption", option, value, refresh )
       *
       *  - for changing a set of responsive options:
       *     .slick("setOption", 'responsive', [{}, ...], refresh )
       *
       *  - for updating multiple values at once (not responsive)
       *     .slick("setOption", { 'option': value, ... }, refresh )
       */

      var _ = this, l, item, option, value, refresh = false, type;

      if( $.type( arguments[0] ) === 'object' ) {

          option =  arguments[0];
          refresh = arguments[1];
          type = 'multiple';

      } else if ( $.type( arguments[0] ) === 'string' ) {

          option =  arguments[0];
          value = arguments[1];
          refresh = arguments[2];

          if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

              type = 'responsive';

          } else if ( typeof arguments[1] !== 'undefined' ) {

              type = 'single';

          }

      }

      if ( type === 'single' ) {

          _.options[option] = value;


      } else if ( type === 'multiple' ) {

          $.each( option , function( opt, val ) {

              _.options[opt] = val;

          });


      } else if ( type === 'responsive' ) {

          for ( item in value ) {

              if( $.type( _.options.responsive ) !== 'array' ) {

                  _.options.responsive = [ value[item] ];

              } else {

                  l = _.options.responsive.length-1;

                  // loop through the responsive object and splice out duplicates.
                  while( l >= 0 ) {

                      if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                          _.options.responsive.splice(l,1);

                      }

                      l--;

                  }

                  _.options.responsive.push( value[item] );

              }

          }

      }

      if ( refresh ) {

          _.unload();
          _.reinit();

      }

  };

  Slick.prototype.setPosition = function() {

      var _ = this;

      _.setDimensions();

      _.setHeight();

      if (_.options.fade === false) {
          _.setCSS(_.getLeft(_.currentSlide));
      } else {
          _.setFade();
      }

      _.$slider.trigger('setPosition', [_]);

  };

  Slick.prototype.setProps = function() {

      var _ = this,
          bodyStyle = document.body.style;

      _.positionProp = _.options.vertical === true ? 'top' : 'left';

      if (_.positionProp === 'top') {
          _.$slider.addClass('slick-vertical');
      } else {
          _.$slider.removeClass('slick-vertical');
      }

      if (bodyStyle.WebkitTransition !== undefined ||
          bodyStyle.MozTransition !== undefined ||
          bodyStyle.msTransition !== undefined) {
          if (_.options.useCSS === true) {
              _.cssTransitions = true;
          }
      }

      if ( _.options.fade ) {
          if ( typeof _.options.zIndex === 'number' ) {
              if( _.options.zIndex < 3 ) {
                  _.options.zIndex = 3;
              }
          } else {
              _.options.zIndex = _.defaults.zIndex;
          }
      }

      if (bodyStyle.OTransform !== undefined) {
          _.animType = 'OTransform';
          _.transformType = '-o-transform';
          _.transitionType = 'OTransition';
          if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.MozTransform !== undefined) {
          _.animType = 'MozTransform';
          _.transformType = '-moz-transform';
          _.transitionType = 'MozTransition';
          if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.webkitTransform !== undefined) {
          _.animType = 'webkitTransform';
          _.transformType = '-webkit-transform';
          _.transitionType = 'webkitTransition';
          if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.msTransform !== undefined) {
          _.animType = 'msTransform';
          _.transformType = '-ms-transform';
          _.transitionType = 'msTransition';
          if (bodyStyle.msTransform === undefined) _.animType = false;
      }
      if (bodyStyle.transform !== undefined && _.animType !== false) {
          _.animType = 'transform';
          _.transformType = 'transform';
          _.transitionType = 'transition';
      }
      _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
  };


  Slick.prototype.setSlideClasses = function(index) {

      var _ = this,
          centerOffset, allSlides, indexOffset, remainder;

      allSlides = _.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true');

      _.$slides
          .eq(index)
          .addClass('slick-current');

      if (_.options.centerMode === true) {

          var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

          centerOffset = Math.floor(_.options.slidesToShow / 2);

          if (_.options.infinite === true) {

              if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                  _.$slides
                      .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              } else {

                  indexOffset = _.options.slidesToShow + index;
                  allSlides
                      .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              }

              if (index === 0) {

                  allSlides
                      .eq(allSlides.length - 1 - _.options.slidesToShow)
                      .addClass('slick-center');

              } else if (index === _.slideCount - 1) {

                  allSlides
                      .eq(_.options.slidesToShow)
                      .addClass('slick-center');

              }

          }

          _.$slides
              .eq(index)
              .addClass('slick-center');

      } else {

          if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

              _.$slides
                  .slice(index, index + _.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

          } else if (allSlides.length <= _.options.slidesToShow) {

              allSlides
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

          } else {

              remainder = _.slideCount % _.options.slidesToShow;
              indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

              if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                  allSlides
                      .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              } else {

                  allSlides
                      .slice(indexOffset, indexOffset + _.options.slidesToShow)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              }

          }

      }

      if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
          _.lazyLoad();
      }
  };

  Slick.prototype.setupInfinite = function() {

      var _ = this,
          i, slideIndex, infiniteCount;

      if (_.options.fade === true) {
          _.options.centerMode = false;
      }

      if (_.options.infinite === true && _.options.fade === false) {

          slideIndex = null;

          if (_.slideCount > _.options.slidesToShow) {

              if (_.options.centerMode === true) {
                  infiniteCount = _.options.slidesToShow + 1;
              } else {
                  infiniteCount = _.options.slidesToShow;
              }

              for (i = _.slideCount; i > (_.slideCount -
                      infiniteCount); i -= 1) {
                  slideIndex = i - 1;
                  $(_.$slides[slideIndex]).clone(true).attr('id', '')
                      .attr('data-slick-index', slideIndex - _.slideCount)
                      .prependTo(_.$slideTrack).addClass('slick-cloned');
              }
              for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                  slideIndex = i;
                  $(_.$slides[slideIndex]).clone(true).attr('id', '')
                      .attr('data-slick-index', slideIndex + _.slideCount)
                      .appendTo(_.$slideTrack).addClass('slick-cloned');
              }
              _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                  $(this).attr('id', '');
              });

          }

      }

  };

  Slick.prototype.interrupt = function( toggle ) {

      var _ = this;

      if( !toggle ) {
          _.autoPlay();
      }
      _.interrupted = toggle;

  };

  Slick.prototype.selectHandler = function(event) {

      var _ = this;

      var targetElement =
          $(event.target).is('.slick-slide') ?
              $(event.target) :
              $(event.target).parents('.slick-slide');

      var index = parseInt(targetElement.attr('data-slick-index'));

      if (!index) index = 0;

      if (_.slideCount <= _.options.slidesToShow) {

          _.slideHandler(index, false, true);
          return;

      }

      _.slideHandler(index);

  };

  Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

      var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
          _ = this, navTarget;

      sync = sync || false;

      if (_.animating === true && _.options.waitForAnimate === true) {
          return;
      }

      if (_.options.fade === true && _.currentSlide === index) {
          return;
      }

      if (sync === false) {
          _.asNavFor(index);
      }

      targetSlide = index;
      targetLeft = _.getLeft(targetSlide);
      slideLeft = _.getLeft(_.currentSlide);

      _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

      if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
          if (_.options.fade === false) {
              targetSlide = _.currentSlide;
              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                  _.animateSlide(slideLeft, function() {
                      _.postSlide(targetSlide);
                  });
              } else {
                  _.postSlide(targetSlide);
              }
          }
          return;
      } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
          if (_.options.fade === false) {
              targetSlide = _.currentSlide;
              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                  _.animateSlide(slideLeft, function() {
                      _.postSlide(targetSlide);
                  });
              } else {
                  _.postSlide(targetSlide);
              }
          }
          return;
      }

      if ( _.options.autoplay ) {
          clearInterval(_.autoPlayTimer);
      }

      if (targetSlide < 0) {
          if (_.slideCount % _.options.slidesToScroll !== 0) {
              animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
          } else {
              animSlide = _.slideCount + targetSlide;
          }
      } else if (targetSlide >= _.slideCount) {
          if (_.slideCount % _.options.slidesToScroll !== 0) {
              animSlide = 0;
          } else {
              animSlide = targetSlide - _.slideCount;
          }
      } else {
          animSlide = targetSlide;
      }

      _.animating = true;

      _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

      oldSlide = _.currentSlide;
      _.currentSlide = animSlide;

      _.setSlideClasses(_.currentSlide);

      if ( _.options.asNavFor ) {

          navTarget = _.getNavTarget();
          navTarget = navTarget.slick('getSlick');

          if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
              navTarget.setSlideClasses(_.currentSlide);
          }

      }

      _.updateDots();
      _.updateArrows();

      if (_.options.fade === true) {
          if (dontAnimate !== true) {

              _.fadeSlideOut(oldSlide);

              _.fadeSlide(animSlide, function() {
                  _.postSlide(animSlide);
              });

          } else {
              _.postSlide(animSlide);
          }
          _.animateHeight();
          return;
      }

      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(targetLeft, function() {
              _.postSlide(animSlide);
          });
      } else {
          _.postSlide(animSlide);
      }

  };

  Slick.prototype.startLoad = function() {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

          _.$prevArrow.hide();
          _.$nextArrow.hide();

      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

          _.$dots.hide();

      }

      _.$slider.addClass('slick-loading');

  };

  Slick.prototype.swipeDirection = function() {

      var xDist, yDist, r, swipeAngle, _ = this;

      xDist = _.touchObject.startX - _.touchObject.curX;
      yDist = _.touchObject.startY - _.touchObject.curY;
      r = Math.atan2(yDist, xDist);

      swipeAngle = Math.round(r * 180 / Math.PI);
      if (swipeAngle < 0) {
          swipeAngle = 360 - Math.abs(swipeAngle);
      }

      if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
          return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
          return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
          return (_.options.rtl === false ? 'right' : 'left');
      }
      if (_.options.verticalSwiping === true) {
          if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
              return 'down';
          } else {
              return 'up';
          }
      }

      return 'vertical';

  };

  Slick.prototype.swipeEnd = function(event) {

      var _ = this,
          slideCount,
          direction;

      _.dragging = false;
      _.swiping = false;

      if (_.scrolling) {
          _.scrolling = false;
          return false;
      }

      _.interrupted = false;
      _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

      if ( _.touchObject.curX === undefined ) {
          return false;
      }

      if ( _.touchObject.edgeHit === true ) {
          _.$slider.trigger('edge', [_, _.swipeDirection() ]);
      }

      if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

          direction = _.swipeDirection();

          switch ( direction ) {

              case 'left':
              case 'down':

                  slideCount =
                      _.options.swipeToSlide ?
                          _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                          _.currentSlide + _.getSlideCount();

                  _.currentDirection = 0;

                  break;

              case 'right':
              case 'up':

                  slideCount =
                      _.options.swipeToSlide ?
                          _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                          _.currentSlide - _.getSlideCount();

                  _.currentDirection = 1;

                  break;

              default:


          }

          if( direction != 'vertical' ) {

              _.slideHandler( slideCount );
              _.touchObject = {};
              _.$slider.trigger('swipe', [_, direction ]);

          }

      } else {

          if ( _.touchObject.startX !== _.touchObject.curX ) {

              _.slideHandler( _.currentSlide );
              _.touchObject = {};

          }

      }

  };

  Slick.prototype.swipeHandler = function(event) {

      var _ = this;

      if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
          return;
      } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
          return;
      }

      _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
          event.originalEvent.touches.length : 1;

      _.touchObject.minSwipe = _.listWidth / _.options
          .touchThreshold;

      if (_.options.verticalSwiping === true) {
          _.touchObject.minSwipe = _.listHeight / _.options
              .touchThreshold;
      }

      switch (event.data.action) {

          case 'start':
              _.swipeStart(event);
              break;

          case 'move':
              _.swipeMove(event);
              break;

          case 'end':
              _.swipeEnd(event);
              break;

      }

  };

  Slick.prototype.swipeMove = function(event) {

      var _ = this,
          edgeWasHit = false,
          curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

      touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

      if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
          return false;
      }

      curLeft = _.getLeft(_.currentSlide);

      _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
      _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

      _.touchObject.swipeLength = Math.round(Math.sqrt(
          Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

      verticalSwipeLength = Math.round(Math.sqrt(
          Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

      if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
          _.scrolling = true;
          return false;
      }

      if (_.options.verticalSwiping === true) {
          _.touchObject.swipeLength = verticalSwipeLength;
      }

      swipeDirection = _.swipeDirection();

      if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
          _.swiping = true;
          event.preventDefault();
      }

      positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
      if (_.options.verticalSwiping === true) {
          positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
      }


      swipeLength = _.touchObject.swipeLength;

      _.touchObject.edgeHit = false;

      if (_.options.infinite === false) {
          if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
              swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
              _.touchObject.edgeHit = true;
          }
      }

      if (_.options.vertical === false) {
          _.swipeLeft = curLeft + swipeLength * positionOffset;
      } else {
          _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
      }
      if (_.options.verticalSwiping === true) {
          _.swipeLeft = curLeft + swipeLength * positionOffset;
      }

      if (_.options.fade === true || _.options.touchMove === false) {
          return false;
      }

      if (_.animating === true) {
          _.swipeLeft = null;
          return false;
      }

      _.setCSS(_.swipeLeft);

  };

  Slick.prototype.swipeStart = function(event) {

      var _ = this,
          touches;

      _.interrupted = true;

      if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
          _.touchObject = {};
          return false;
      }

      if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
          touches = event.originalEvent.touches[0];
      }

      _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
      _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

      _.dragging = true;

  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

      var _ = this;

      if (_.$slidesCache !== null) {

          _.unload();

          _.$slideTrack.children(this.options.slide).detach();

          _.$slidesCache.appendTo(_.$slideTrack);

          _.reinit();

      }

  };

  Slick.prototype.unload = function() {

      var _ = this;

      $('.slick-cloned', _.$slider).remove();

      if (_.$dots) {
          _.$dots.remove();
      }

      if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.remove();
      }

      if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.remove();
      }

      _.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');

  };

  Slick.prototype.unslick = function(fromBreakpoint) {

      var _ = this;
      _.$slider.trigger('unslick', [_, fromBreakpoint]);
      _.destroy();

  };

  Slick.prototype.updateArrows = function() {

      var _ = this,
          centerOffset;

      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if ( _.options.arrows === true &&
          _.slideCount > _.options.slidesToShow &&
          !_.options.infinite ) {

          _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
          _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          if (_.currentSlide === 0) {

              _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
              _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

              _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
              _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

              _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
              _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          }

      }

  };

  Slick.prototype.updateDots = function() {

      var _ = this;

      if (_.$dots !== null) {

          _.$dots
              .find('li')
                  .removeClass('slick-active')
                  .end();

          _.$dots
              .find('li')
              .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
              .addClass('slick-active');

      }

  };

  Slick.prototype.visibility = function() {

      var _ = this;

      if ( _.options.autoplay ) {

          if ( document[_.hidden] ) {

              _.interrupted = true;

          } else {

              _.interrupted = false;

          }

      }

  };

  $.fn.slick = function() {
      var _ = this,
          opt = arguments[0],
          args = Array.prototype.slice.call(arguments, 1),
          l = _.length,
          i,
          ret;
      for (i = 0; i < l; i++) {
          if (typeof opt == 'object' || typeof opt == 'undefined')
              _[i].slick = new Slick(_[i], opt);
          else
              ret = _[i].slick[opt].apply(_[i].slick, args);
          if (typeof ret != 'undefined') return ret;
      }
      return _;
  };

}));