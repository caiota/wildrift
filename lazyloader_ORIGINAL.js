function home() {
    location.href = "https://wildrift.tk/";
}

function hideAlerta(click) {
    document.getElementsByClassName('captchaAlerta')[0].id = "item";
    document.getElementsByClassName('captchaAlerta')[0].className = "visto";
    if (document.getElementById("cookies")) {
        document.getElementById("cookies").style.display = "block";
    }
    loadDarkness();
    if (click == true) {
        setC('cookies', 1, 7);
    }
}
if (getC('cookies') == 1) {
    hideAlerta(false);
    document.getElementById("cookies").style.display = "none";
}

function openNav() {

    // document.getElementById("mySidenav").style.display="inline-block";
    document.getElementById("mySidenav").style.width = "60%";
    document.getElementById("menu").style.display = "none";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.display = "block";
    //setTimeout(function(){document.getElementById("mySidenav").style.display="none";},600);
}

function dark() {
    atual = document.getElementsByClassName('darkMode')[0].id;
    itens = document.body.querySelectorAll('.sucessoAlert, .erroAlert, .avisoAlert, .button, iframe, #item');
    switch (atual) {
        case 'white':

            if (document.getElementsByClassName('background')[0]) {
                document.getElementsByClassName('background')[0].dataset.tema = "dark";
            }
            setC('tema', 'black', 90);
            document.body.dataset.tema = "dark";


            if (itens) {
                itens.forEach(function(ar) {
                    ar.dataset.tema = "dark";
                });
            }
            document.getElementsByClassName('darkMode')[0].querySelector('img').src = "https://wildrift.tk/imagens/sun.webp";
            document.getElementsByClassName('darkMode')[0].id = "black";
            document.getElementsByClassName('darkMode')[0].querySelector('img').style.filter = "brightness(3)";
            break;
        case 'black':

            if (document.getElementsByClassName('background')[0]) {
                document.getElementsByClassName('background')[0].dataset.tema = "sun";
            }
            setC('tema', 'white', 90);
            document.body.dataset.tema = "sun";


            if (itens) {
                itens.forEach(function(ar) {
                    ar.dataset.tema = "sun";
                });
            }
            document.getElementsByClassName('darkMode')[0].querySelector('img').src = "https://wildrift.tk/imagens/dark.webp";
            document.getElementsByClassName('darkMode')[0].id = "white";
            document.getElementsByClassName('darkMode')[0].querySelector('img').style.filter = "invert(0%)";
            break;
    }

}


function loadDarkness() {

    itens = document.body.querySelectorAll('.sucessoAlert, .erroAlert, .avisoAlert, .button, iframe, #item');
    buttons = document.getElementById('button');
    atual = getC('tema');
    switch (atual) {
        case 'black':
            if (document.getElementsByClassName('background')[0]) {
                document.getElementsByClassName('background')[0].dataset.tema = "dark";
            }
            if (buttons) {
                buttons.dataset.tema = "dark";
            }
            if (itens) {
                itens.forEach(function(ar) {
                    ar.dataset.tema = "dark";
                });
            }
            document.body.dataset.tema = "dark";

            document.getElementsByClassName('darkMode')[0].querySelector('img').src = "https://wildrift.tk/imagens/sun.webp";
            document.getElementsByClassName('darkMode')[0].id = "black";
            document.getElementsByClassName('darkMode')[0].querySelector('img').style.filter = "brightness(3)";
            break;
        case 'white':

            if (document.getElementsByClassName('background')[0]) {
                document.getElementsByClassName('background')[0].dataset.tema = "sun";
            }
            if (buttons) {
                buttons.dataset.tema = "sun";
            }
            if (itens) {
                itens.forEach(function(ar) {
                    ar.dataset.tema = "sun";
                });
            }
            document.body.dataset.tema = "sun";
            document.getElementsByClassName('darkMode')[0].querySelector('img').src = "https://wildrift.tk/imagens/dark.webp";
            document.getElementsByClassName('darkMode')[0].id = "white";
            document.getElementsByClassName('darkMode')[0].querySelector('img').style.filter = "invert(0%)";
            break;
    }
}

function setC(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getC(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}




let lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
const config = {
    delay: 200
};
if ("IntersectionObserver" in window) {
    var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(lazyImage) {
            if (lazyImage.isIntersecting) {
                if (!lazyImage.target.src || lazyImage.target.src == '(unknown)' && lazyImage.target.classList != "LazyLoaded") {
                    lazyImage.target.src = lazyImage.target.dataset.srcset + "?hashKey=otavalve";
                    lazyImage.target.onload = function(c) {
                        c.target.classList.remove("lazy");
                        c.target.classList.remove("LazyLoading");
                        c.target.classList.add("LazyLoaded");
                        lazyImageObserver.unobserve(c.target);

                    };

                }
            }
        });
    }, config);
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
var url = window.location.origin + window.location.pathname;

function lazyLoadApp() {
    try {
        setTimeout(loadCss, 50);
        //setTimeout(lazyLoadScripts,3000);
        var background = document.querySelector("div.background");
        if (background) {
            if (background.style.backgroundImage != 'url("https://wildrift.tk/imagens/bg.webp")') {
                setTimeout(function() {
                    document.getElementById('pop').style.display = 'block';
                    if (document.getElementsByClassName('wrapper')[0]) {
                        document.getElementsByClassName('wrapper')[0].remove();
                    }
                }, 200);
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
                        if (page === null && url == "https://wildrift.tk/" || url == "https://wildrift.tk/MeuAndroid" || url == "https://wildrift.tk/prints" || url == "https://wildrift.tk/itens") {
                            page = document.createElement('script');
                            page.setAttribute('type', 'text/javascript');
                            page.setAttribute('src', 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v7.0&appId=423979735201219&autoLogAppEvents=1');
                            page.setAttribute('data-cbid', '7c95de57-a33f-4537-b5fc-841bb12d6b14');
                            head.appendChild(page);

                            lazyScript.target.onload = function(c) {
                                scriptView.unobserve(c.target);

                            };

                        }
                    }
                });
            }, config);
            lazyScripts.forEach(function(divScripts) {
                scriptView.observe(divScripts);
            });
        }




        var socialitapi = null;
        var lazySocial = document.body.querySelectorAll("div[class='socialit']");
        if ("IntersectionObserver" in window) {

            if (socialitapi === null && url !== "https://wildrift.tk/" && document.getElementById('socialit') === null) {
                var scriptView2 = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(lazySocialit) {
                        if (lazySocialit.isIntersecting) {
                            socialitapi = document.createElement('script');
                            socialitapi.setAttribute('type', 'text/javascript');
                            socialitapi.setAttribute('id', 'socialit');
                            socialitapi.setAttribute('src', 'https://cdn.jsdelivr.net/gh/caiota/socialitjs@0.46/socialit.min.js');
                            head.appendChild(socialitapi);

                            lazySocialit.target.onload = function(c) {
                                scriptView2.unobserve(c.target);


                            };


                        }
                    });
                }, config);
            }

        }
        lazySocial.forEach(function(divScripts) {
            scriptView2.observe(divScripts);
        });
    } catch (e) {
        return;
    }
}
var css = null;
var clearAlerts = "notNull";

function loadCss() {
    if (css === null) {
        css = document.createElement('link');
        css.setAttribute('type', 'text/css');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('href', 'https://cdn.jsdelivr.net/gh/caiota/wildrift/index.min.css');
        head.appendChild(css);
        clearAlerts = setInterval(clearLayout, 1000);
        if (document.getElementById('loadAlerta')) {
            document.getElementById('loadAlerta').style.display = 'none';
        }
        setTimeout(getSecurity, 2000);

    }

}

function clearLayout() {
    if (document.getElementById('loadAlerta')) {
        document.getElementById('loadAlerta').style.display = 'none';
        clearInterval(clearAlerts);
    }


}




function getSecurity() {
    var cld = new XMLHttpRequest();
    cld.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (cld.responseText === "true" || cld.responseText === '1') {
                cloudflare_api();
                document.onkeydown = clipboarder;
                console.log('x');
            }
            console.log(cld.responseText);
        }
    };
    dat = new Date().getTime();
    cld.open("GET", "//wildrift.tk/scripts/cloudflare_api?d=" + dat, true);
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
    dv = document.createElement('div');
    dv.setAttribute('id', 'consoleCatcher');
    document.body.appendChild(dv);

    let consoleCatcher = document.getElementById('consoleCatcher');
    let loop = setInterval(() => {
        console.log(consoleCatcher);
        console.clear();
    }, 500);
    Object.defineProperty(consoleCatcher, "id", {
        get: () => {
            if (consoleCatcher.innerHTML != "1") {
                consoleCatcher.innerHTML = '1';
                window.location.href = "https://facebook.com/CaiotaGames";
            }
        }
    });

}
