
let navBar = document.querySelector('#m-white');


document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar');
    } else{
        navBar.classList.remove('rolar');
    }
})