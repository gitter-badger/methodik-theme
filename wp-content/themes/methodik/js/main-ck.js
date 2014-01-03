/* == ENVIRONMENT == */function hidePopUp(){if(Modernizr.localstorage&&localStorage.getItem("modalClick")==="true"){popUp.hide();alert("modalclick is true! why is this showing")}}function hideNav(){navContainer.transition({y:"-23em"})}function showNav(){isiPad?navContainer.transition({y:"-23rem"}):navContainer.transition({y:"0"})}function sectionHandler(){location.hash==="#!work"?$("html, body").scrollTo(workEl,600):location.hash==="#!about-section"?$("html, body").scrollTo(aboutEl,600):location.hash==="#!what-we-do"?$("html, body").scrollTo(whatwedoEl,600):location.hash==="#!statistics"?$("html, body").scrollTo(statisticsEl,600):location.hash==="#!contact"&&$("html, body").scrollTo(contactEl,600)}function slideUp(){$this=$(this);$topSlide=$this.siblings(".slide-top");$bottomSlide=$this.siblings(".slide-bottom");$button=$this.siblings(".button-fixed");if($this.hasClass("photography"))if(!isIE8){$this.parent().transition({backgroundPosition:"50% 0%"},450);$topSlide.transition({y:"-150px"});$button.transition({bottom:"0"})}else{$this.parent().css({background:"url('"+absPath+"photography-tile-thumb.jpg')"},450);$topSlide.css({top:"-150px"});$button.css({bottom:"0"})}else if($this.parent().is("#bigTile")){$this.siblings(".slide-top").animate({marginTop:"-150px"},300);$bottomSlide.transition({y:"0"})}else if(!isIE8){$topSlide.transition({y:"-150px"});$bottomSlide.transition({y:"0"});$button.transition({bottom:"0"})}else{$topSlide.css({top:"-400px"});$bottomSlide.css({top:"32px"});$button.css({bottom:"0"})}}function slideDown(){if($this.hasClass("photography"))if(!isIE8){$this.parent().transition({backgroundPosition:"50% -400%"},600);$topSlide.transition({y:"0"});$button.transition({bottom:"-2rem"})}else{$this.parent().css({background:"white"});$topSlide.css({top:"30%"});$button.css({bottom:"-32px"})}else if($this.parent().is("#bigTile")){$this.siblings(".slide-top").animate({marginTop:"0"},300);$this.siblings(".slide-bottom:first").transition({y:tileDist})}else if(!isIE8){$topSlide.transition({y:"0"});$bottomSlide.transition({y:tileDist});$button.transition({bottom:"-2rem"})}else{$topSlide.css({top:"30%"});$bottomSlide.css({top:"400px"});$button.css({bottom:"-32px"})}}function animation(){if(svgCount<2){$(".infographic-text").transition({y:"-135px"},1500,"snap");$("#infographic1").lazylinepainter({svgData:path1}).lazylinepainter("stamp");$("#infographic1-dashed").lazylinepainter({svgData:path2}).lazylinepainter("paint");$("#infographic2").lazylinepainter({svgData:path3}).lazylinepainter("paint");$("#infographic3").lazylinepainter({svgData:clock}).lazylinepainter("paint");$("#infographicClockhand1").transition({rotate:"690deg"},3e3);$("#infographicClockhand2").transition({rotate:"630deg"},1500);$("#infographic4").transition({opacity:1},300);$("#infographic5").lazylinepainter({svgData:path5}).lazylinepainter("paint");svgCount++}}function showStats(e){var t=e.find(".stats-bar"),n=t.eq(0),r=t.eq(1),i=t.eq(2),s=t.eq(3),o=n.siblings(".percentage").text(),u=r.siblings(".percentage").text(),a=i.siblings(".percentage").text(),f=s.siblings(".percentage").text();if(!isIE8){n.transition({height:o},600,"snap");r.transition({height:u,delay:300},600,"snap");i.transition({height:a,delay:600},600,"snap");typeof s=="object"&&s.transition({height:f,delay:900},600,"snap")}else{n.animate({height:o},600);r.animate({height:u},600);i.animate({height:a},600);typeof s=="object"&&s.animate({height:f},600)}}function mapOpen(){$(".map-maskLayer").hide(300)}function mapClose(){$(".map-maskLayer").show(300)}function initialize(){var e={zoom:15,center:new google.maps.LatLng(50.827152,-0.135551),mapTypeId:google.maps.MapTypeId.ROADMAP},t=new google.maps.Map(document.getElementById("map-canvas"),e),n=new google.maps.Marker({position:new google.maps.LatLng(50.827152,-0.135551),title:"Hello World!",icon:absPath+"methodik-logo.png"});n.setMap(t);var r=[{stylers:[{hue:"#000"},{saturation:-100},{lightness:2}]}];t.setOptions({styles:r})}function loadScript(){var e=document.createElement("script");e.type="text/javascript";e.src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAXKhwWp7hhkDNavQ1lH9B01feX92292O8&sensor=false&callback=initialize";document.body.appendChild(e)}var $mobCheck=$(".mobCheck"),isMobile=!0;$mobCheck.css("position")==="absolute"&&(isMobile=!1);var $iPadCheck=$(".iPadCheck"),isiPad=!1;$iPadCheck.css("position")==="absolute"&&(isiPad=!0);var isIE8=!1;$mobCheck.css("position")==="fixed"&&(isIE8=!0);var absPath="http://localhost:8888/methodik-wp/wp-content/themes/methodik/img/",popUp=$(".modalNav"),popUpButton=popUp.find("#modalButton");localStorage.modalClick="false";popUpButton.click(function(){popUp.hide();Modernizr.localstorage&&localStorage.setItem("modalClick","true")});$(document).ready(function(){hidePopUp()});var mobNavButton=$("#mobNav"),navContainer=$("#navContainer");$.fn.clickToggle=function(e,t){return this.each(function(){var n=!1;$(this).bind("click",function(){if(n){n=!1;return t.apply(this,arguments)}n=!0;return e.apply(this,arguments)})})};mobNavButton.clickToggle(hideNav,showNav);var workLink=$(".workLink"),aboutLink=$(".aboutLink"),whatwedoLink=$(".whatwedoLink"),statisticsLink=$(".statisticsLink"),contactLink=$(".contactLink"),workEl=$("#scrollTo-work"),aboutEl=$("#scrollTo-aboutUs"),whatwedoEl=$("#scrollTo-whatWeDo"),statisticsEl=$("#scrollTo-statistics"),contactEl=$("#scrollTo-contact"),HTMLel=$("html"),isIndex=!1;HTMLel.hasClass("index")&&(isIndex=!0);var homeURL="http://localhost:8888/methodik-wp/";workLink.click(function(){isIndex?$("html, body").scrollTo(workEl,600):location.href=homeURL+"#!work"});aboutLink.click(function(){isIndex?$("html, body").scrollTo(aboutEl,600):location.href=homeURL+"#!about-us"});whatwedoLink.click(function(){isIndex?$("html, body").scrollTo(whatwedoEl,600):location.href=homeURL+"!what-we-do"});statisticsLink.click(function(){isIndex?$("html, body").scrollTo(statisticsEl,600):location.href=homeURL+"!statistics"});contactLink.click(function(){isIndex?$("html, body").scrollTo(contactEl,600):location.href=homeURL+"!contact"});$(document).ready(function(){sectionHandler()});$(".fitText").fitText();$(".fitText2").fitText(.1);var videoContainer=$(".videoContainer");!videoContainer.length==0&&videoContainer.fitVids();$("#slides").slidesjs({width:1e3,height:750,navigation:!1});var button=$(".button-arrowRight");if(isMobile)var tileDist="250px";else var tileDist="25rem";button.clickToggle(slideUp,slideDown);Modernizr.svg||$(".logoIcon").attr("src",absPath+"methodik-logo-icon.png");var csButton=$("#caseStudy-button"),cs1buttonHide=$("#cs1button-hide"),cs1Container=$("#cs1-container"),cs1showButton=$("#cs1-showButton"),cs2Container=$("#caseStudy"),csURL="http://localhost:8888/methodik-wp/wp-content/themes/methodik/ajax/casestudy.html";$(document).ready(function(){cs1Height=cs1Container.height();cs1Height+=100});csButton.click(function(){cs2Container.load(csURL,function(){cs2Container.transition({height:cs1Height},1e3)})});$(document).ajaxStart(function(){$("#loading").css({opacity:1})});$(document).ajaxStop(function(){$("#loading").css({opacity:0});$("#caseStudy-gallery").slidesjs({width:1e3,height:750,navigation:!1});csButton.hide();$("#cs2-hideButton").on("click",function(e){cs2Container.transition({height:"0px"});csButton.show()});$(".fitText2").fitText(.1)});cs1buttonHide.click(function(){cs1Container.transition({height:"0"},1e3);cs1showButton.show()});cs1showButton.click(function(){cs1Container.transition({height:cs1Height},1e3);cs1showButton.hide()});var nextProjectButton=$("#goToCS2"),caseStudy2=$("#scrollTo-CS2");nextProjectButton.click(function(){$("html, body").scrollTo(caseStudy2,600)});var comingSoonButton=$(".comingSoonButton");comingSoonButton.click(function(){alert("This site is still under construction")});var path1={infographic1:{strokepath:[{path:"M89.619,5.56C93.028,5.19,96.492,5,100,5c52.467,0,95,42.533,95,95  c0,52.467-42.533,95-95,95c-52.467,0-95-42.533-95-95C5,51.73,41,11.869,87.615,5.8",strokeWidth:9,strokeColor:"#272727"}],dimensions:{width:200,height:200}}},path2={"infographic1-dashed":{strokepath:[{path:"M89.619,5.56C93.028,5.19,96.492,5,100,5c52.467,0,95,42.533,95,95  c0,52.467-42.533,95-95,95c-52.467,0-95-42.533-95-95C5,51.73,41,11.869,87.615,5.8",duration:1500,strokeWidth:1.3,strokeColor:"#ffffff",strokeDash:"-"}],dimensions:{width:200,height:200}}},path3={infographic2:{strokepath:[{path:"M100,5c52.467,0,95,42.533,95,95c0,52.467-42.533,95-95,95  c-52.467,0-95-42.533-95-95c0-35.731,19.727-66.855,48.883-83.075",duration:1500,strokeWidth:9,strokeColor:"#272727"}],dimensions:{width:200,height:200}}},clock={infographic3:{strokepath:[{path:"M95.111,5.124C96.73,5.042,98.36,5,100,5   c52.467,0,95,42.533,95,95c0,52.467-42.533,95-95,95c-52.467,0-95-42.533-95-95C5,49.172,44.916,7.668,95.111,5.124",duration:1500,strokeWidth:9,strokeColor:"#272727"},{path:"M 100 4.75 L 100 14.75",duration:200,strokeWidth:4},{path:"M 100 185 L 100 195",duration:200,strokeWidth:4},{path:"M 195 100 L 185 100",duration:200,strokeWidth:4},{path:"M 14.875 100 L 4.834 100",duration:200,strokeWidth:4}],dimensions:{width:200,height:200}}},path5={infographic5:{strokepath:[{path:"M100,5c52.467,0,95,42.533,95,95c0,52.467-42.533,95-95,95  c-52.467,0-95-42.533-95-95",duration:1500,strokeWidth:9,strokeColor:"#272727"}],dimensions:{width:200,height:200}}},svgCount=1;$("#button").click(animation);var win=$(window),infoGraphicContainer=$(".infographic-container");infoGraphicContainer.each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("already-visible")});win.scroll(function(e){infoGraphicContainer.each(function(e,t){var t=$(t);t.visible(!0)&&$("#button").trigger("click")})});var allMods=$(".stats");allMods.each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("already-visible")});win.scroll(function(e){allMods.each(function(e,t){var t=$(t);t.visible(!0)&&showStats($(this))})});$(function(){allMods.hasClass("already-visible")&&showStats(allMods)});$("#map-button").clickToggle(mapOpen,mapClose);window.onload=loadScript;