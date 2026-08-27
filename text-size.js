"use strict";
(()=>{
  const key="lotto-helper-settings",root=document.documentElement,small=document.getElementById("smallTextButton"),large=document.getElementById("textSizeButton"),live=document.getElementById("liveStatus");
  const read=()=>{try{return JSON.parse(localStorage.getItem(key)||"{}")}catch{return{}}};
  const save=mode=>localStorage.setItem(key,JSON.stringify({...read(),textMode:mode,"large-text":false}));
  function apply(mode,announce=true){
    root.classList.toggle("small-text",mode==="small");root.classList.toggle("large-text",mode==="large");
    small.setAttribute("aria-pressed",String(mode==="small"));large.setAttribute("aria-pressed",String(mode==="large"));
    small.textContent=mode==="small"?"글자 원래대로":"글자 작게";large.textContent=mode==="large"?"글자 원래대로":"글자 크게";save(mode);
    if(announce){live.textContent="";setTimeout(()=>live.textContent=`글자 크기를 ${mode==="small"?"작게":mode==="large"?"크게":"기본으로"} 변경했습니다.`,30)}
  }
  const initial=read().textMode||(read()["large-text"]?"large":"normal");apply(initial,false);
  small.onclick=()=>apply(root.classList.contains("small-text")?"normal":"small");
  large.onclick=()=>apply(root.classList.contains("large-text")?"normal":"large");
})();
