let lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
const config = {
  delay:200
};
if ("IntersectionObserver" in window) {
	var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(lazyImage) {
			if (lazyImage.isIntersecting) {
				if (!lazyImage.target.src || lazyImage.target.src == '(unknown)' &&lazyImage.target.classList!="LazyLoaded") {
      lazyImage.target.src = lazyImage.target.dataset.srcset+"?hashKey=otavalve";
					lazyImage.target.onload=function(c) {
						c.target.classList.remove("lazy");
					c.target.classList.remove("LazyLoading");
						c.target.classList.add("LazyLoaded");
						lazyImageObserver.unobserve(c.target);
				
    };
					
				}
			}
		});
	},config);
	lazyImages.forEach(function(lazyr) {
		lazyImageObserver.observe(lazyr);
	});
}

var head = document.getElementsByTagName('head').item(0);
/* LazyLoad Vídeo */
var lazyVideos = [].slice.call(document.querySelectorAll("video.lazyVideo"));
if ("IntersectionObserver" in window) {
	var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(video) {
			if (video.isIntersecting) {
				for (var source in video.target.children) {
					var videoSource = video.target.children[source];
					if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE" && videoSource.classList != "LazyLoaded") {
						videoSource.src = videoSource.dataset.src;
						video.target.load();
					}
				}
				video.target.classList.remove("lazyVideo");
				video.target.classList.remove("LazyLoading");
				video.target.classList.add("LazyLoaded");
				lazyVideoObserver.unobserve(video.target);
			}
		});
	});
	lazyVideos.forEach(function(lazyVideo) {
		lazyVideoObserver.observe(lazyVideo);
	});
}
/* LazyLoad Outros */
window.addEventListener('load', lazyLoadApp);
window.addEventListener('scroll', lazyLoadApp);
window.addEventListener('click', lazyLoadApp);
var page = null;
var url= window.location.origin+window.location.pathname;
function lazyLoadApp() {
      try{
	setTimeout(loadCss, 50);
	//setTimeout(lazyLoadScripts,3000);
	var background=document.querySelector("div.background");
	if(background){
	if (background.style.backgroundImage != 'url("https://wildrift.tk/imagens/bg.webp")') {
		setTimeout(function() {
			document.getElementById('pop').style.display = 'block';
			if (document.getElementsByClassName('wrapper')[0]) {
			document.getElementsByClassName('wrapper')[0].remove();
            }
		},200);
		setTimeout(function() {
          
		background.style.backgroundImage = "url(https://wildrift.tk/imagens/bg.webp)";
			background.classList.add("LazyLoaded");
			background.classList.remove("LazyLoading");
			background.classList.remove("lazy");
		}, 2000);
	}




	}

var lazyScripts = document.body.querySelectorAll("div[class='fb-like'], div[class='fb-comments'], div[class='fb-page']");
if ("IntersectionObserver" in window) {
	var scriptView = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(lazyScript) {
			if (lazyScript.isIntersecting) {
				if (page === null && url == "https://wildrift.tk/" || url == "https://wildrift.tk/MeuAndroid" || url == "https://wildrift.tk/prints" || url == "https://wildrift.tk/itens" ) {
			page = document.createElement('script');
			page.setAttribute('type', 'text/javascript');
			page.setAttribute('src', 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v7.0&appId=423979735201219&autoLogAppEvents=1');
			page.setAttribute('data-cbid', '7c95de57-a33f-4537-b5fc-841bb12d6b14');
			head.appendChild(page);
      
					lazyScript.target.onload=function(c) {
						scriptView.unobserve(c.target);
				
    };
					
				}
			}
		});
	},config);
	lazyScripts.forEach(function(divScripts) {
		scriptView.observe(divScripts);
	});
}





var socialitapi=null;
var lazySocial = document.body.querySelectorAll("div[class='socialit']");
if ("IntersectionObserver" in window) {
  
	if(socialitapi === null && url !== "https://wildrift.tk/" && document.getElementById('socialit')===null) {
	var scriptView2 = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(lazySocialit) {
			if (lazySocialit.isIntersecting) {
			socialitapi = document.createElement('script');
			socialitapi.setAttribute('type', 'text/javascript');
			socialitapi.setAttribute('id', 'socialit');
			socialitapi.setAttribute('src', 'https://cdn.jsdelivr.net/gh/caiota/socialitjs@0.45/socialit.min.js');
			head.appendChild(socialitapi);
      
					lazySocialit.target.onload=function(c) {
						scriptView2.unobserve(c.target);
						
				
    };
					
				
			}
		});
	},config);
	}

}
	lazySocial.forEach(function(divScripts) {
		scriptView2.observe(divScripts);
	});
      }catch(e){
    return;
}
}
var css = null;
var clearAlerts="notNull";
function loadCss() {
	if (css === null) {
		css = document.createElement('link');
		css.setAttribute('type', 'text/css');
		css.setAttribute('rel', 'stylesheet');
		css.setAttribute('href', 'https://wildrift.tk/css/index.css');
		head.appendChild(css);
		clearAlerts= setInterval(clearLayout,1000);
		if (document.getElementById('loadAlerta')) {
				document.getElementById('loadAlerta').style.display = 'none';
			}
	setTimeout(getSecurity,2000);

	}
	
}

function clearLayout(){
   	if (document.getElementById('loadAlerta')) {
				document.getElementById('loadAlerta').style.display = 'none';
				clearInterval(clearAlerts);
			} 
			
	
}





function getSecurity(){
    var cld = new XMLHttpRequest();
cld.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(cld.responseText==="true"||cld.responseText==='1'){
         cloudflare_api();
         document.onkeydown = clipboarder;
         console.log('x');
      }
      console.log(cld.responseText);
    }
};
dat=new Date().getTime();
cld.open("GET", "//wildrift.tk/scripts/cloudflare_api?d="+dat, true);
cld.send();
}



function clipboarder(e) {
    e = e || window.event;
    if (e.ctrlKey) {
        var c = e.key;
        
                console.log(e.key);
        switch (c) {
            case 'a':
            case 'c':
            case 'Shift':
            case 's':
            case 'p':
            case 'x':
                e.preventDefault();     
                e.stopPropagation();
            break;
        }
    }
};

function cloudflare_api() {
 dv=document.createElement('div');
 dv.setAttribute('id','consoleCatcher');
 document.body.appendChild(dv);
 
let consoleCatcher = document.getElementById('consoleCatcher');
let loop = setInterval(() => {
	console.log(consoleCatcher);
	console.clear();
},500);
Object.defineProperty(consoleCatcher, "id", {get: () => { 
    if(consoleCatcher.innerHTML!="1"){
  consoleCatcher.innerHTML = '1';
  window.location.href="https://facebook.com/CaiotaGames";
    }
}});
        
}