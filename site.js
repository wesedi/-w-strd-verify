(function(){
  var page=(location.pathname.split("/").pop()||"index.html");
  var h=document.createElement("header");h.className="top";
  h.innerHTML='<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span><span></span></button>'+
    '<a class="logo" href="./" aria-label="[W]STRD. home">[W]STRD.</a>'+
    '<a class="vf" href="verify.html" aria-label="Authenticate your piece"'+(page==="verify.html"?' aria-current="page"':'')+'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none"/><path d="M10 8.2a5.4 5.4 0 0 1 0 7.6"/><path d="M13.6 5.6a9.6 9.6 0 0 1 0 12.8"/><path d="M17.2 3.2a13.6 13.6 0 0 1 0 17.6"/></svg></a>';
  var m=document.createElement("nav");m.className="menu";m.id="menu";m.hidden=true;m.setAttribute("aria-label","Main menu");
  var links=[["shop.html","Shop"],["world.html","[w]orld"],["world.html#events","Events"],["verify.html","Authenticate"]];
  m.innerHTML=links.map(function(l){return '<a href="'+l[0]+'"'+(l[0]===page?' aria-current="page"':'')+'>'+l[1]+'</a>'}).join("");
  document.body.insertBefore(m,document.body.firstChild);
  document.body.insertBefore(h,document.body.firstChild);
  var S='fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  var ic={
    home:'<svg viewBox="0 0 24 24" '+S+'><path d="M4 11.5 12 4l8 7.5V20H4z"/></svg>',
    shop:'<svg viewBox="0 0 24 24" '+S+'><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    world:'<svg viewBox="0 0 24 24" '+S+'><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
    verify:'<svg viewBox="0 0 24 24" '+S+'><circle cx="6" cy="12" r="1.2" fill="currentColor" stroke="none"/><path d="M10 8.2a5.4 5.4 0 0 1 0 7.6"/><path d="M13.6 5.6a9.6 9.6 0 0 1 0 12.8"/><path d="M17.2 3.2a13.6 13.6 0 0 1 0 17.6"/></svg>'
  };
  var tabs=document.createElement("nav");tabs.className="tabs";tabs.setAttribute("aria-label","Primary");
  [["./","Home","home","index.html"],["shop.html","Shop","shop","shop.html"],["world.html","[w]orld","world","world.html"],["verify.html","Verify","verify","verify.html"]].forEach(function(t){
    var a=document.createElement("a");a.href=t[0];a.innerHTML=ic[t[2]]+"<span>"+t[1]+"</span>";
    if(page===t[3])a.setAttribute("aria-current","page");tabs.appendChild(a)});
  document.body.appendChild(tabs);
  if(document.getElementById("buy"))document.body.classList.add("has-buy");
  var mt=document.createElement("meta");mt.name="theme-color";mt.content="#fbf9f5";document.head.appendChild(mt);
  var b=h.querySelector(".burger");
  function set(open){m.hidden=!open;b.setAttribute("aria-expanded",String(open));b.setAttribute("aria-label",open?"Close menu":"Open menu");document.body.classList.toggle("noscroll",open)}
  b.addEventListener("click",function(){set(m.hidden)});
  m.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!m.hidden){set(false);b.focus()}});
})();
