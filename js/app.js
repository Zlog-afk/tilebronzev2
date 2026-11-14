// Tile Bronze - interaksi katalog: filter, pencarian, komposisi, tema, scroll
const cards=[...document.querySelectorAll('.card[data-cat]')];
const info=document.getElementById('resultInfo');
const search=document.getElementById('search');
let curFilter='all', curQ='';

// collapsible komposisi
cards.forEach(c=>{
  const comp=c.querySelector('.comp');
  const btn=document.createElement('button');
  btn.className='comp-btn'; btn.textContent='▸ Tampilkan Komposisi Kimia';
  btn.setAttribute('aria-expanded','false');
  btn.onclick=()=>{const open=comp.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
    btn.textContent=open?'▾ Sembunyikan Komposisi Kimia':'▸ Tampilkan Komposisi Kimia';};
  comp.after(btn);
});

function apply(){
  let n=0;
  cards.forEach(c=>{
    const hay=(c.innerText||'').toLowerCase();
    const ok=(curFilter==='all'||c.dataset.cat===curFilter)&&hay.includes(curQ);
    c.classList.toggle('hidden',!ok); if(ok)n++;
  });
  info.textContent = (curFilter!=='all'||curQ)? `${n} produk ditemukan` : '';
  document.getElementById('noRes').style.display = n? 'none':'block';
}
document.querySelectorAll('.fbtn').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.fbtn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); curFilter=b.dataset.f; apply();
});
search.oninput=()=>{curQ=search.value.toLowerCase().trim(); apply();};

// theme toggle
document.getElementById('themeBtn').onclick=function(){
  document.body.classList.toggle('dark');
  this.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
};

// scroll reveal + back to top
cards.forEach(c=>c.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');io.unobserve(e.target);}}),{threshold:.08});
cards.forEach(c=>io.observe(c));
const toTop=document.createElement('button');toTop.id='toTop';toTop.textContent='↑';
toTop.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
document.body.appendChild(toTop);
window.onscroll=()=>toTop.classList.toggle('show',window.scrollY>600);
