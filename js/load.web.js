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

ga('create', 'UA-51911532-1', 'ntumblr.com');
ga('require', 'displayfeatures');
ga('send', 'pageview');
