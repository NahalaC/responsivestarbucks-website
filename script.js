const hamburger=document.querySelector('.hamburger');
const mobilenavhidden= document.querySelector('.mobile-nav-hidden');

hamburger.addEventListener('click', () =>{
    mobilenavhidden.style.display="block";
   

     
        mobilenavhidden.classList.toggle("hidden");
        hamburger.classList.toggle('open'); 

});


const footercontents=document.querySelectorAll('.footer-contents');
const footerlinks=document.querySelectorAll('.footer-links');





for(let i=0; i<footercontents.length;i++){
    footercontents[i].addEventListener('click', () =>{
        footercontents[i].classList.toggle('active');
        footerlinks[i].classList.toggle('active');


    });
};
