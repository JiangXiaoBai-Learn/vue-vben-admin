import{dr as e}from"./index.fa77065c.js";let n=0;const t="webkit moz ms o".split(" ");let i,o;(()=>{if(e)i=o=()=>{};else{let e;i=window.requestAnimationFrame,o=window.cancelAnimationFrame;for(let n=0;n<t.length&&(!i||!o);n++)e=t[n],i=i||window[e+"RequestAnimationFrame"],o=o||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];i&&o||(i=function(e){const t=(new Date).getTime(),i=Math.max(0,16-(t-n)),o=window.setTimeout((()=>{e(t+i)}),i);return n=t+i,o},o=function(e){window.clearTimeout(e)})}})();export{o as c,i as r};