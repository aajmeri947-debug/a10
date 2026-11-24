(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
function chips(w,cb){if(!w)return;[].forEach.call(w.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){[].forEach.call(w.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(+b.getAttribute('data-v'));});});}
function nice(x){var r=Math.round(x*4)/4,w=Math.floor(r),f=r-w,fr=f===.25?'¼':f===.5?'½':f===.75?'¾':'';return (w||!fr?w:'')+fr;}
var ca=$('cv-a');if(ca){var u=0;function cv(){var a=+ca.value,inch=u===0?a:u===1?a:a;$('cv-ao').textContent=nice(a)+[' in',' tbsp',' tsp'][u];
  $('cv-r0').textContent=nice(inch)+' in';$('cv-r1').textContent=nice(inch)+' tbsp';$('cv-r2').textContent=nice(inch)+' tsp';
  var h=Math.min(100,inch/6*100);$('cv-j0').style.height=h+'%';$('cv-j1').style.height=h*.9+'%';$('cv-j2').style.height=h*.45+'%';
  $('cv-n').textContent=inch>=3?'That is a lot of turmeric: enough for a large pot of curry or several jars of pickle.':inch<=1?'Enough to colour and flavour a dish for two to four people.':'Enough for a family-sized dal or curry.';}
 ca.addEventListener('input',cv);chips($('cv-u'),function(v){u=v;cv();});cv();}
var go=$('tk-go');if(go){var dish=0,run=null,step=-1,left=0,elapsed=0;var D=[[['Heat ghee or oil until it shimmers',60],['Add cumin seeds; let them sizzle and darken a shade',20],['Add sliced garlic and dried chilli',30],['Off the heat: stir in turmeric and a pinch of asafoetida',5],['Pour over the dal and cover for a minute',10]],
  [['Heat oil until it shimmers',60],['Add mustard seeds and wait for them to pop',30],['Add cumin and curry leaves',15],['Add onions and cook until golden',300],['Stir in turmeric, chilli and coriander for a few seconds',10]],
  [['Heat oil until it shimmers',60],['Add mustard seeds; wait for the pop',30],['Add chana dal and peanuts until golden',60],['Add curry leaves and green chilli',10],['Off the heat: turmeric, then cooked rice and lemon juice',10]]];
 var seeds=$('tk-seeds'),oil=$('tk-oil');
 function list(){$('tk-l').innerHTML=D[dish].map(function(s,i){var c=i<step?'done':i===step?'on':'';return '<li class="'+c+'">'+s[0]+'<b>'+(s[1]>=60?Math.round(s[1]/60)+' min':s[1]+' sec')+'</b></li>';}).join('');}
 function vis(){var n=step;oil.className='tm-oil'+(n>=0?' hot':'')+(D[dish][n]&&/turmeric/i.test(D[dish][n][0])||n>=D[dish].length?' gold':'');var h='';if(n>=1){for(var i=0;i<22;i++){h+='<i style="left:'+(10+(i*37)%80)+'%;top:'+(10+(i*53)%80)+'%;--c:'+(i%3?'#3B2A22':'#8A5A2B')+';--dl:-'+(i%5)*.1+'s"></i>';}}if(n>=2){for(var j=0;j<6;j++)h+='<i class="leaf" style="left:'+(20+j*11)+'%;top:'+(30+(j%3)*15)+'%;--dl:-'+j*.2+'s"></i>';}seeds.innerHTML=h;}
 function tick(){left--;elapsed++;var m=Math.floor(elapsed/60),s=elapsed%60;$('tk-t').textContent=m+':'+(s<10?'0':'')+s;if(left<=0){step++;if(step>=D[dish].length){clearInterval(run);run=null;$('tk-s').textContent='Done. Pour and serve!';go.textContent='Start again';list();vis();return;}left=D[dish][step][1];}$('tk-s').textContent=D[dish][step][0];list();vis();}
 function reset(){clearInterval(run);run=null;step=-1;left=0;elapsed=0;$('tk-t').textContent='0:00';$('tk-s').textContent='Ready when you are';go.textContent='Start the tadka';list();vis();}
 go.addEventListener('click',function(){if(run){clearInterval(run);run=null;go.textContent='Resume';return;}if(step>=D[dish].length)reset();if(step<0){step=0;left=D[dish][0][1];}go.textContent='Pause';$('tk-s').textContent=D[dish][step][0];list();vis();run=setInterval(tick,1000);});
 $('tk-r').addEventListener('click',reset);chips($('tk-d'),function(v){dish=v;reset();});reset();}
var cups=document.querySelectorAll('.tm-cup');if(cups.length){var SP=[["Turmeric","Haldi","Earthy, warm and gently bitter. Adds colour and depth; cook it briefly in oil to mellow it."],["Cumin","Jeera","Nutty and smoky. Usually the first seed into hot oil, sizzled until it darkens a shade."],["Mustard seed","Rai","Pops in hot oil and turns sweet and nutty. The sound of a tadka starting."],["Coriander","Dhania","Citrusy and mild. Ground coriander thickens and rounds out sauces."],["Chilli","Mirch","Heat and colour. Kashmiri chilli is mild and deeply red; others are much hotter."],["Fenugreek","Methi","Maple-like and bitter. Use a pinch; it burns quickly."],["Cardamom","Elaichi","Floral and sweet. Lovely in rice, chai and desserts."]];function sp(i){$('sp-n').textContent=SP[i][0];$('sp-h').textContent=SP[i][1];$('sp-d').textContent=SP[i][2];[].forEach.call(cups,function(c,k){c.classList.toggle('on',k===i);c.setAttribute('aria-pressed',k===i);});}
 [].forEach.call(cups,function(c,k){c.addEventListener('click',function(){sp(k);});});sp(0);}
})();
