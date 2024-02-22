// selects
// site loader
const siteLoaderEl = document.querySelector('.site-loader');
const heroContainer = document.querySelector('.hero .container');
const headerEl = document.querySelector('#header');
const heroEl = document.querySelector('.hero');
const submenuBtnEl = document.querySelector('.submenu-btn');
const submenuEl = document.querySelector('.submenu');
// menu-hamburger 
const menuHamburgerEl = document.querySelector('.menu-hamburger');
const menuEl = document.querySelector('.menu');
// scroll up
const scrollUpEl = document.querySelector('.scroll-up');

// // events
// // site loader
// document.onreadystatechange = ()=>{
//     if (document.readyState == "complete") {
//         siteLoaderEl.style.opacity = "0";
//         siteLoaderEl.style.visibility = "hidden";
//         heroContainer.style.display = 'flex';
//     } else {
//         heroContainer.style.display = 'none';
//     }
// };
// scrollUpEl.style.visibility = 'hidden';
// headerEl.style.position = 'fixed';
// window.addEventListener('scroll',() => {
//     // header secondary
//     if (heroEl.getBoundingClientRect().top <= -180 ){
//         headerEl.classList.add('header-secondary');
//     } else {
//         headerEl.classList.remove('header-secondary');
//     }
//     // scroll up page
//     if (heroEl.getBoundingClientRect().bottom - 200 <= 0) {
//         scrollUpEl.style.opacity = '1';
//         scrollUpEl.style.visibility = 'visible';
//     } else {
//         scrollUpEl.style.opacity = '0';
//         scrollUpEl.style.visibility = 'hidden';
//     }
// });
// // submenu-btn 
// submenuBtnEl.addEventListener('click',()=>{
//     submenuBtnEl.classList.toggle('icon-top');
//     submenuEl.classList.toggle('show-submenu');
//     submenuEl.parentElement.classList.toggle('current-page');
// });
// // menu-hamburger 
// menuHamburgerEl.addEventListener("click",()=>{
//     menuEl.classList.toggle('show-menu');
//     menuHamburgerEl.classList.toggle('icon-cancel');
// });

// menu scroll
// menu Active 
// const menuActive = ()=>{
//     let scrollPrimary = window.scrollY;
//     window.addEventListener('scroll',()=>{
//         if(window.scrollY >= heroEl.offsetHeight - headerEl.offsetHeight && !menuEl.classList.contains('show-menu')){
//             const scrollSecondary = window.scrollY;
            
//             // scroll to down
//             if(scrollPrimary <= scrollSecondary){
//                 headerEl.style.top = `-${headerEl.offsetHeight}px`;
//             }
            
//             // scroll to up
//             if(scrollPrimary >= scrollSecondary){
//                 headerEl.style.top = '0';
//             }
//         }

//         scrollPrimary = window.scrollY;
//     });
// }
// menu Fix
const menuFix = () => {
    headerEl.style.top = '-100%';
    window.addEventListener('scroll', () =>
        window.scrollY == 0 ?
        headerEl.style.top = '-100%' :
        headerEl.style.top = '0'
    );
};
// by responsive
// if (window.innerWidth <= 1300) {
//     menuActive();
// }
if(window.innerWidth >= 768){
    menuFix();
}
// by resize
window.addEventListener('resize',()=>{
    // if (window.innerWidth <= 1300) {
    //     menuActive();
    // }
    if(window.innerWidth >= 768){
        menuFix();
    }
});

// scroll up
scrollUpEl.style.visibility="hidden";
scrollUpEl.style.opacity='0';
window.addEventListener('scroll', () => {
    if (window.scrollY >= heroEl.offsetHeight) {
        scrollUpEl.style.visibility="visible";
        scrollUpEl.style.opacity='1';
    } else {
        scrollUpEl.style.visibility="hidden";
        scrollUpEl.style.opacity='0';
    }
});