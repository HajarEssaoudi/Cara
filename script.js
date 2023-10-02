var bodyWidth = document.querySelector('body').clientWidth;
if (bodyWidth > 799) {
  document.querySelector('body').style.width = '100%';
}


const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

    if(bar) {
        bar.addEventListener('click', ()=>{
            nav.classList.add('active');
        })
    }
    if(close) {
        close.addEventListener('click', ()=>{
            nav.classList.remove('active');
        })
    }