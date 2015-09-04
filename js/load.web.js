function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        //(head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-fullscreen.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-indicator.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-video.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-vimeo.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-youtube.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/jquery.blueimp-gallery.js"
],function(){
    console.info('loaded.');
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-51911532-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

document.body.onload = addElement;
 function addElement () { 
  var theDiv = document.getElementById("quality");
   if(theDiv){
     theDiv.innerHTML += "<div id='blueimp-gallery' class='blueimp-gallery'><div class='slides'></div><h3 class='title'></h3><a class='prev'>‹</a><a class='next'>›</a><a class='close'>×</a><a class='play-pause'></a></div> <p>（。 ㅅ 。）<small></small></p>  <small></small> <small><a href='chickswithtits'><span class='s'>chickswithtits</span></small></a>  <small><a href='14by8inches'><span class='nc'>14by8inches</span></small></a></small> <small><a href='i-just-love-boobs'><span class='s'>i-just-love-boobs</span></small></a>  <small><a href='just4puffyboobs'><span class='nc'>just4puffyboobs</span></small></a></small> <small><a href='realnicetits'><span class='s'>realnicetits</span></small></a>  <small><a href='lovelyboobphotos'><span class='nc'>lovelyboobphotos</span></small></a></small> <small><a href='even-hotter'><span class='s'>even-hotter</span></small></a>  <small><a href='because-boobs-thats-why'><span class='nc'>because-boobs-thats-why</span></small></a></small> <small><a href='only-huge-boobs'><span class='s'>only-huge-boobs</span></small></a>  <small><a href='bigboobhound'><span class='nc'>bigboobhound</span></small></a></small> <small><a href='bestboobsonline'><span class='s'>bestboobsonline</span></small></a>  <small><a href='relaxtheyrejustboobs'><span class='nc'>relaxtheyrejustboobs</span></small></a></small> <small><a href='heavenlybreasts'><span class='s'>heavenlybreasts</span></small></a>  <small><a href='i-like-breasts'><span class='nc'>i-like-breasts</span></small></a></small> <small><a href='greatbigboobs'><span class='s'>greatbigboobs</span></small></a>  <small><a href='theittybittytittycommittee'><span class='nc'>theittybittytittycommittee</span></small></a></small> <small><a href='sluttybimbotits'><span class='s'>sluttybimbotits</span></small></a>  <small><a href='faketitsorbust'><span class='nc'>faketitsorbust</span></small></a></small> <small><a href='dreamwoman-boobs'><span class='s'>dreamwoman-boobs</span></small></a>  <small><a href='nosaj81'><span class='nc'>nosaj81</span></small></a></small> <small><a href='just-big-boobs'><span class='s'>just-big-boobs</span></small></a>  <small><a href='madregan'><span class='nc'>madregan</span></small></a></small> <small><a href='legen-wait-for-it-boobie'><span class='s'>legen-wait-for-it-boobie</span></small></a> <br><br>";
   }
 }
