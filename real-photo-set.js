// Praxys real-photo override set — replaces generated-looking assets with photographic sources
(function(){
  const VERSION='real-photo-set-20261005';
  const PHOTOS={
    hero:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82',
    problems:[
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=78'
    ],
    services:[
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=78',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=78'
    ],
    cases:[
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1100&q=80'
    ]
  };

  function setImg(img, src, alt){
    if(!img || !src) return;
    if(img.getAttribute('src')!==src) img.setAttribute('src',src);
    img.removeAttribute('srcset');
    img.setAttribute('loading','lazy');
    img.setAttribute('decoding','async');
    img.setAttribute('data-real-photo',VERSION);
    if(alt) img.setAttribute('alt',alt);
  }

  function sectionImages(id){
    const section=document.getElementById(id);
    return section?Array.from(section.querySelectorAll('img')):[];
  }

  function applyList(id, urls, label){
    const imgs=sectionImages(id);
    imgs.forEach((img,i)=>setImg(img,urls[i % urls.length],`${label} ${i+1}`));
  }

  function installStyle(){
    let style=document.getElementById('praxys-real-photo-style');
    if(!style){style=document.createElement('style');style.id='praxys-real-photo-style';document.head.appendChild(style)}
    style.textContent=`
      #inicio{
        background-image:linear-gradient(90deg,rgba(16,32,51,.68),rgba(16,32,51,.38),rgba(16,32,51,.10)),url('${PHOTOS.hero}')!important;
        background-size:cover!important;
        background-position:center center!important;
        background-repeat:no-repeat!important;
      }
      #inicio .hero-visual,#inicio .hero-photo,#inicio figure.photo,#inicio .photo,#inicio img{display:none!important}
      #problemas img,#servicios img,#casos-concretos img{filter:saturate(.96) contrast(1.02)!important}
      #casos-concretos figure,#casos-concretos .photo,#casos-concretos .px-photo{aspect-ratio:16/9!important;height:auto!important;min-height:0!important;width:100%!important;overflow:hidden!important}
      #casos-concretos img{width:100%!important;height:100%!important;object-fit:cover!important;display:block!important}
    `;
  }

  function applyPhotos(){
    installStyle();
    const hero=document.getElementById('inicio');
    if(hero){
      hero.style.backgroundImage=`linear-gradient(90deg,rgba(16,32,51,.68),rgba(16,32,51,.38),rgba(16,32,51,.10)),url('${PHOTOS.hero}')`;
      hero.style.backgroundSize='cover';
      hero.style.backgroundPosition='center center';
    }
    applyList('problemas',PHOTOS.problems,'Problema Praxys');
    applyList('servicios',PHOTOS.services,'Servicio Praxys');
    applyList('casos-concretos',PHOTOS.cases,'Caso Praxys');
  }

  function schedule(){requestAnimationFrame(applyPhotos);setTimeout(applyPhotos,140);setTimeout(applyPhotos,700)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',schedule); else schedule();
  window.addEventListener('load',schedule);
  document.addEventListener('praxys:rendered',schedule);
  document.addEventListener('praxys:lang',schedule);
})();