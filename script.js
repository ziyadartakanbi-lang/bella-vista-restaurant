// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================
// STICKY NAVBAR
// ==========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="#000";

        navbar.style.boxShadow="0 8px 20px rgba(0,0,0,.4)";

    }else{

        navbar.style.background="rgba(0,0,0,.5)";

        navbar.style.boxShadow="none";

    }

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements=document.querySelectorAll(

".about,.menu-card,.chef,.gallery img,.testimonial-card,.reservation,.contact,.map"

);

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="all .8s ease";

});

function reveal(){

    const trigger=window.innerHeight*0.85;

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});