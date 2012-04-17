/*
	bMap - © 2010 Darren Dignam
	darren.dignam@blocsoft.com
	http://www.blocsoft.com/bMap
	Released under the GPL License
	http://www.gnu.org/licenses/gpl-3.0.txt
	
	This version requires the V3 Google Maps API
*/
(function(a){a.fn.bMap=function(b){eachOptions=b;return this.each(function(){obj=a(this);var d={mapCenter:[51,0],mapZoom:1,mapCanvas:obj.attr("id"),mapSidebar:"none",mapLayerbar:"none",mapType:google.maps.MapTypeId.ROADMAP,loadMsg:"<h2>Loading...</h2>"};var c=a.extend(d,eachOptions);obj.data("bMap",new bMap(c))});return this}})(jQuery);function bMap(b){var c={mapCenter:[51,0],mapZoom:1,mapCanvas:"map",mapSidebar:"none",mapLayerbar:"none",mapType:google.maps.MapTypeId.ROADMAP,loadMsg:"<h2>Loading...</h2>"};var b=$.extend(c,b);this.mapSidebar=b.mapSidebar;this.useSidebar=(this.mapSidebar!="none")?true:false;this.mapLayerbar=b.mapLayerbar;this.useLayerbar=(this.mapLayerbar!="none")?true:false;this.layerMgrArray=[];var a={zoom:b.mapZoom,center:new google.maps.LatLng(b.mapCenter[0],b.mapCenter[1]),mapTypeId:b.mapType};this.map=new google.maps.Map(document.getElementById(b.mapCanvas),a);this.mapCanvas=b.mapCanvas;$("#"+this.mapCanvas).append("<div id='"+this.mapCanvas+"bMapLoadMsg' class='bMapLoadMsg'>"+b.loadMsg+"</div>");$("#"+this.mapCanvas+"bMapLoadMsg").css("left",($("#map").width()/2)-50);$("#"+this.mapCanvas+"bMapLoadMsg").css("top",($("#map").height()/2)-50);if(b.icons){this.icons=b.icons}if(b.markers){this.insertMarkers(b.markers)}this.infoWindow=new google.maps.InfoWindow();this.geoCoder=new google.maps.Geocoder()}bMap.prototype.insertMarkers=function(a){tmpThis=this;var b=tmpThis.layerMgrArray.length;var c={name:"Layer"+b,type:"marker",visible:"true"};var a=$.extend(c,a);tmpThis.layerMgrArray[b]=a;tmpThis.layerMgrArray[b].toggleLayer=function(){if(this.visible!="false"){this.visible="false";for(i=0,j=this.data.length;i<j;i++){this.data[i].setMap(null);tmpThis.infoWindow.close()}$("#bMapLyr"+b).addClass("bLyrHide");$("#"+tmpThis.mapSidebar+' div[rel^="'+b+'"]').slideUp("fast");return false}else{this.visible="true";for(i=0,j=this.data.length;i<j;i++){this.data[i].setMap(tmpThis.map)}$("#bMapLyr"+b).removeClass("bLyrHide");$("#"+tmpThis.mapSidebar+' div[rel^="'+b+'"]').slideDown("fast");return true}};jQuery.each(a.data,function(f,g){var d=new google.maps.LatLng(g.lat,g.lng);if(g.icon){tmpThis.layerMgrArray[b].data[f]=new google.maps.Marker({position:d,map:tmpThis.map,icon:tmpThis.icons[parseInt(g.icon)]})}else{tmpThis.layerMgrArray[b].data[f]=new google.maps.Marker({position:d,map:tmpThis.map})}if(g.title){var e="<h2>"+g.title+"</h2>";if(g.body){e+=g.body}google.maps.event.addListener(tmpThis.layerMgrArray[b].data[f],"click",function(){tmpThis.infoWindow.setContent(e);tmpThis.infoWindow.open(tmpThis.map,tmpThis.layerMgrArray[b].data[f]);$("#"+tmpThis.mapSidebar+" div").removeClass("bSideSelect");$("#"+tmpThis.mapSidebar+' div[rel="'+b+" "+f+'"]').addClass("bSideSelect");var h=$("#"+tmpThis.mapSidebar).scrollTop()+$("#"+tmpThis.mapSidebar+' div[rel="'+b+" "+f+'"]').position().top-($("#"+tmpThis.mapSidebar).offset().top+($("#"+tmpThis.mapSidebar).height()/2));$("#"+tmpThis.mapSidebar).animate({scrollTop:h},500)});google.maps.event.addListener(tmpThis.layerMgrArray[b].data[f],"infowindowclose",function(){$("#"+tmpThis.mapSidebar+' div[rel="'+b+" "+f+'"]').removeClass("bSideSelect")})}if(tmpThis.useSidebar){$('<div rel="'+b+" "+f+'">'+g.title+"</div>").click(function(){google.maps.event.trigger(tmpThis.layerMgrArray[b].data[f],"click");$("#"+tmpThis.mapSidebar+" div").removeClass("bSideSelect");$(this).addClass("bSideSelect")}).appendTo("#"+tmpThis.mapSidebar)}});if(a.visible!="true"){for(i=0,j=tmpThis.layerMgrArray[b].data.length;i<j;i++){tmpThis.layerMgrArray[b].data[i].setMap(null);$("#"+tmpThis.mapSidebar+' div[rel^="'+b+'"]').hide()}$("#bMapLyr"+b).addClass("bLyrHide");return false}this.refreshLayerbar();return this};bMap.prototype.AJAXMarkers=function(c){var b={serviceURL:"mapService.php",action:"getMarkers",vars:[],options:{}};var c=$.extend(b,c);var a=this;$("#"+this.mapCanvas+"bMapLoadMsg").show();$.getJSON(c.serviceURL,{action:c.action,vars:c.vars},function(d){c.options=$.extend(d,c.options);a.insertMarkers(c.options);$("#"+a.mapCanvas+"bMapLoadMsg").hide()});return this};bMap.prototype.insertLine=function(c){tmpThis=this;var a=tmpThis.layerMgrArray.length;var d={name:"Layer"+a,type:"line",visible:"true",color:"#00F",weight:5,opacity:1};var c=$.extend(d,c);tmpThis.layerMgrArray[a]=c;tmpThis.layerMgrArray[a].toggleLayer=function(){if(this.visible!="false"){this.visible="false";this.data.setMap(null);$("#bMapLyr"+a).addClass("bLyrHide");return false}else{this.visible="true";this.data.setMap(tmpThis.map);$("#bMapLyr"+a).removeClass("bLyrHide");return true}};var b=[];jQuery.each(c.data,function(e,f){b.push(new google.maps.LatLng(f.lat,f.lng))});tmpThis.layerMgrArray[a].data=new google.maps.Polyline({path:b,strokeColor:tmpThis.layerMgrArray[a].color,strokeOpacity:parseFloat(tmpThis.layerMgrArray[a].opacity),strokeWeight:parseInt(tmpThis.layerMgrArray[a].weight)});tmpThis.layerMgrArray[a].data.setMap(tmpThis.map);if(c.visible!="true"){tmpThis.layerMgrArray[a].data.setMap(null)}this.refreshLayerbar();return this};bMap.prototype.AJAXLine=function(b){var c={serviceURL:"mapService.php",action:"getLine",vars:[]};var b=$.extend(c,b);var a=this;$("#"+this.mapCanvas+"bMapLoadMsg").show();$.post(b.serviceURL,{action:b.action,vars:b.vars},function(d){a.insertLine(d);$("#"+a.mapCanvas+"bMapLoadMsg").hide()},"json");return this};bMap.prototype.insertPolygon=function(d){tmpThis=this;var b=tmpThis.layerMgrArray.length;var a={name:"Layer"+b,type:"polygon",visible:"true",color:"#00F",weight:5,opacity:0.5};var d=$.extend(a,d);tmpThis.layerMgrArray[b]=d;tmpThis.layerMgrArray[b].toggleLayer=function(){if(this.visible!="false"){this.visible="false";this.data.setMap(null);$("#bMapLyr"+b).addClass("bLyrHide");return false}else{this.visible="true";this.data.setMap(tmpThis.map);$("#bMapLyr"+b).removeClass("bLyrHide");return true}};var c=[];jQuery.each(d.data,function(e,f){c.push(new google.maps.LatLng(f.lat,f.lng))});tmpThis.layerMgrArray[b].data=new google.maps.Polygon({path:c,strokeColor:tmpThis.layerMgrArray[b].color,strokeOpacity:1,strokeWeight:parseInt(tmpThis.layerMgrArray[b].weight),fillColor:tmpThis.layerMgrArray[b].color,fillOpacity:parseFloat(tmpThis.layerMgrArray[b].opacity)});tmpThis.layerMgrArray[b].data.setMap(tmpThis.map);if(d.visible!="true"){tmpThis.layerMgrArray[b].data.setMap(null)}this.refreshLayerbar();return this};bMap.prototype.AJAXPolygon=function(b){var c={serviceURL:"mapService.php",action:"getPolygon",vars:[]};var b=$.extend(c,b);var a=this;$("#"+this.mapCanvas+"bMapLoadMsg").show();$.post(b.serviceURL,{action:b.action,vars:b.vars},function(d){a.insertPolygon(d);$("#"+a.mapCanvas+"bMapLoadMsg").hide()},"json");return this};bMap.prototype.removeAllLayers=function(){for(i=0,j=this.layerMgrArray.length;i<j;i++){if(this.layerMgrArray[i].type=="marker"){for(i2=0,j2=this.layerMgrArray[i].data.length;i2<j2;i2++){this.layerMgrArray[i].data[i2].setMap(null)}this.infoWindow.close()}else{this.layerMgrArray[i].data.setMap(null)}this.layerMgrArray[i].data=0;if(this.useSidebar){$("#"+this.mapSidebar+' div[rel^="'+i+'"]').remove()}}this.layerMgrArray.length=0;this.refreshLayerbar();return this};bMap.prototype.removeLayer=function(a){if(this.layerMgrArray[a].type=="marker"){for(i2=0,j2=this.layerMgrArray[a].data.length;i2<j2;i2++){this.layerMgrArray[a].data[i2].setMap(null)}}else{this.layerMgrArray[a].data.setMap(null)}this.layerMgrArray[a].data=0;if(this.useSidebar){$("#"+this.mapSidebar+' div[rel^="'+a+'"]').remove()}this.refreshLayerbar();return this};bMap.prototype.popLayer=function(){var a=this.layerMgrArray.length-1;var b=this.layerMgrArray.pop();if(b.type=="marker"){for(i2=0,j2=b.data.length;i2<j2;i2++){b.data[i2].setMap(null)}}else{b.data.setMap(null)}b.data=0;if(this.useSidebar){$("#"+this.mapSidebar+' div[rel^="'+a+'"]').remove()}this.refreshLayerbar();return this};bMap.prototype.shiftLayer=function(){for(i3=0,j3=this.layerMgrArray.length;i3<j3;i3++){if(this.layerMgrArray[i3].data!=0){var a=i3;break}}if(this.layerMgrArray[a].type=="marker"){for(i2=0,j2=this.layerMgrArray[a].data.length;i2<j2;i2++){this.layerMgrArray[a].data[i2].setMap(null)}}else{this.layerMgrArray[a].data.setMap(null)}this.layerMgrArray[a].data=0;this.layerMgrArray[a].name="";this.layerMgrArray[a].type="";if(this.useSidebar){$("#"+this.mapSidebar+' ^"'+a+'"]').remove()}this.refreshLayerbar();return this};bMap.prototype.refreshLayerbar=function(){if(this.mapLayerbar){var b=this;$("#"+this.mapLayerbar).html("");for(var d=0,c=this.layerMgrArray.length;d<c;d++){if(this.layerMgrArray[d].data!=0){if(this.layerMgrArray[d].visible!="false"){var a=""}else{a="class='bLyrHide' "}$("<div "+a+"id='bMapLyr"+d+"' rel='"+d+"'>"+this.layerMgrArray[d].name+"</div>").click(function(){b.layerMgrArray[$(this).attr("rel")].toggleLayer()}).appendTo("#"+this.mapLayerbar)}}}};bMap.prototype.centerAtAddress=function(b){var a=this;this.geoCoder.geocode({address:b},function(d,c){if(c==google.maps.GeocoderStatus.OK){a.map.setCenter(d[0].geometry.location)}});return this};