var host=document.location.hostname;"localhost"===host&&(document.location.hostname="127.0.0.1");var TO_REPLACE_URL="https://yaas.github.io/chewie-sample-result",url="127.0.0.1"===host?"http://127.0.0.1:9778":TO_REPLACE_URL,tag=document.createElement("link");tag.onload=function(){var body,intervalId=setInterval(function(){body=document.body,body&&(body.style.display="",clearInterval(intervalId))},10)},tag.rel="stylesheet",tag.href="127.0.0.1"===host?"https://devportal.yaas.io/styles/devportal-yaas.css":url+"/styles/devportal-yaas.css",document.head.appendChild(tag);