const btn = document.getElementById('btnn')
const xbtn = document.getElementById('xbtn')
const objs = document.getElementById('containers')
const imgs = document.querySelectorAll('.img')
const inp = document.getElementById('inp')
const sub = document.getElementById('send')
const feed = document.getElementById('thnks')
btn.onclick = ()=>{
objs.style.display = 'flex'
xbtn.style.display = 'flex'
btn.style.display = 'none'
}
xbtn.onclick = ()=>{
    objs.style.display = 'none'
    xbtn.style.display = 'none'
    btn.style.display = 'block'
    inp.style.display = 'none'
    feed.style.display = 'none'
    xbtn.style.left ='310px';
    xbtn.style.bottom ='20px';

}

imgs.forEach((image)=>{
image.addEventListener('click',()=>{
    inp.style.display = 'flex';
    xbtn.style.left ='0px';
    xbtn.style.bottom ='400px';
    sub.style.display = 'block'
})
})
sub.onclick =()=>{
feed.style.display = 'flex'
objs.style.display = 'none'

}


    
    // imgs.forEach(()=>{
    //     imgs.onclick = ()=>{
    //         inp.style.display = 'block'
    //     }
    // })

//     })
// }
// inp.style.display = 'block'
function show()
{
  let a=document.getElementById("toggle-nav");
  if (a.style.display=="none") {
    a.style.display="block"
  } else {
    a.style.display="none"

  }
}
