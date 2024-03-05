// selects
// site loader
const siteLoaderEl = document.querySelector('.site-loader');
const homeContainer = document.querySelector('.hero-container');
// header slide
const headerEl = document.querySelector('.header');
const homeEl = document.querySelector('.hero');
// menu item light
const menuItemsLink = document.querySelectorAll('.menu-item-link');
const parts = document.querySelectorAll('.part');
// show menu
const menuHamburgerEl = document.querySelector('.menu-hamburger');
const menuEl = document.querySelector('.menu');
// show element by rotate
const galleryImages = document.querySelectorAll('.gallery-item-img');
// show element
const showElements = document.querySelectorAll('.show-element');
// inform contour
const informEl = document.querySelector('.inform-item');
const informNumEls = document.querySelectorAll('.inform-item-number');
// slider
const slideItems = document.querySelectorAll('.slide-item');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
// form
const formEl = document.querySelector('form');
const formItems = document.querySelectorAll('.form-item:not(.submit)');
const formSubmit = document.querySelector('.submit');
// scroll up
const scrollUpEl = document.querySelector('.scroll-up');

// site loader
homeContainer.style.display = 'none';
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        siteLoaderEl.style.opacity = '0';
        siteLoaderEl.style.visibility = 'hidden';
        homeContainer.style.display = 'block';
    }
};

// header slide
// header set min-width:768px
const headerFix = () => {
    headerEl.style.top = `-${headerEl.offsetHeight}px`;

    window.addEventListener('scroll' , () => {
        if (window.scrollY >= headerEl.offsetHeight) {
            headerEl.style.top = '0px';
        } else if (window.scrollY === 0) {
            headerEl.style.top = `-${headerEl.offsetHeight}px`;
        }
    });
};
// header set max-width:768px
const headerSlide = () => {
    let scrollPrimary = window.scrollY;

    window.addEventListener('scroll' , () => {
        const scrollSecondary = window.scrollY;
    
        if (scrollSecondary >= homeEl.offsetHeight - headerEl.offsetHeight) {
            if (scrollSecondary >= scrollPrimary) {
                headerEl.style.top = `-${headerEl.offsetHeight}px`;
            } else {
                headerEl.style.top = '0px';
            }

            scrollPrimary = scrollSecondary;
        }

        // debug
        if (menuEl.classList.contains('show-menu')) {
            headerEl.style.top = '0px';
        }
    });

    // debug
    headerEl.style.top = '0px';
    window.addEventListener('scroll' , () => {
        if (window.scrollY === 0) {
            headerEl.style.top = '0px';
        }
    });
};
// by responsive
if (window.innerWidth <= 768) {
    headerSlide();
} else {
    headerFix();
}
// by resize
window.addEventListener('resize' , () => {
    if (window.innerWidth <= 768) {
        headerSlide();
    } else {
        headerFix();
    }
});

// menu item target
window.addEventListener('scroll' , () => {
    for (const part of parts) {
        if (part.getBoundingClientRect().top - headerEl.offsetHeight <= 0) {
            for (const item of menuItemsLink) {
                if (item.getAttribute('href').includes(part.id)) {
                    item.classList.add('light');
                } else {
                    item.classList.remove('light');
                }
            }
        }
    }
});

// show menu
const showMenu = element => {
    element.addEventListener('click', () => {
        menuEl.classList.toggle('show-menu');
        // change menu hamburger icon
        menuHamburgerEl.classList.toggle('icon-close');
    });
};
showMenu(menuHamburgerEl);
showMenu(menuEl);

// portfolio
// show element by rotate
for (const galleryImage of galleryImages) {
    galleryImage.classList.add('show_rotate');
    galleryImage.parentElement.classList.add('parent-show_rotate');

    window.addEventListener('scroll' , () => {
        if (galleryImage.parentElement.getBoundingClientRect().top + 100 <= window.innerHeight) {
            galleryImage.style.display = 'block';
            // debug
            setTimeout (() => {
                galleryImage.classList.remove('show_rotate');
                galleryImage.parentElement.classList.remove('parent-show_rotate');
            }, 1200);
        }
    });
}
// show element by scale
for (const showElement of showElements) {
    showElement.classList.add('show_scale');
    window.addEventListener('scroll' , () => {
        if (showElement.parentElement.getBoundingClientRect().top + 100 <= window.innerHeight) {
            showElement.style.display = 'block';
        }
    });
}

// inform contour
for ( informNumEl of informNumEls) {
    informNumEl.textContent = '0';
    const contour = (elementId , endNum , numPlus , interval) => {
        let number = 0;
    
        const setNumber = setInterval(() => {
            number += numPlus;
    
            if (number >= endNum) {
                clearInterval(setNumber);
                number = endNum;
            }
    
            document.getElementById(elementId).textContent = number;
        }, interval);
    };
    window.addEventListener('scroll' , () => {
        if (informEl.getBoundingClientRect().bottom <= window.innerHeight && informNumEl.textContent === '0') {
            contour('projects',112,1,35);
            contour('experience',3265,5,1);
            contour('clients',47,1,80);
        }
    });  
}

// slider
let item = 0;
const setItem = () => {
    for (const slideItem of slideItems) {
        slideItem.classList.remove('show-slide');
    }
    setTimeout(() => {
        slideItems[item].classList.add('show-slide');
    }, 500);
};

// auto slide
setInterval(() => {
    item++;
    if (item >= slideItems.length) {
        item = 0;
    }
    setItem();
}, 7000);
// btn next
nextBtn.addEventListener('click' , () => {
    item++;
    if (item >= slideItems.length) {
        item = 0;
    }
    setItem();
});
// btn prev
prevBtn.addEventListener('click' , () => {
    item--;
    if (item < 0) {
        item = slideItems.length - 1;
    }
    setItem();
});

// form
// form valid
for (const formItem of formItems) {
    formSubmit.addEventListener('click' , () => {
        if (formItem.checkValidity()) {
            formItem.style.borderColor = 'initial';
        } else {
            formItem.style.borderColor = '#c80303';
        }

        formItem.addEventListener('keyup' , () => {
            if (formItem.checkValidity()) {
                formItem.style.borderColor = 'initial';
            }
        });
    });
}
// form hide
formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    formEl.style.transitionDuration = '0.5s';
    formEl.style.height = `${formEl.offsetHeight}px`;
    setTimeout(() => {
        formEl.style.opacity = '0';
        formEl.style.visibility = 'hidden';
    }, 500);
    setTimeout(() => {
        formEl.style.height = '0px';
    }, 1000);
});

// scroll up
scrollUpEl.style.visibility="hidden";
scrollUpEl.style.opacity='0';
window.addEventListener('scroll', () => {
    if (window.scrollY >= homeEl.offsetHeight) {
        scrollUpEl.style.visibility="visible";
        scrollUpEl.style.opacity='1';
    } else {
        scrollUpEl.style.visibility="hidden";
        scrollUpEl.style.opacity='0';
    }
});