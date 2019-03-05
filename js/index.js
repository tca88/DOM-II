// Your code goes here

//HEADER IMAGE ANIMATION - MOUSEOVER & MOUSEOUT
const headerImage = document.querySelector('.intro img');
// console.log(headerImage);

headerImage.addEventListener('mouseover', function(){
    event.target.style.opacity = '0.5';
});

headerImage.addEventListener('mouseout', function(){
    event.target.style.opacity = '1';
});

//H1 ANIMATION - KEYDOWN
const pageTitle = document.querySelector('h1.logo-heading');
// console.log(pageTitle);

pageTitle.addEventListener('mouseover', function(event) {
    window.addEventListener('keydown', function(){
        event.target.style.color = 'blue';
        TweenMax.to("h1.logo-heading", .5, {x: 20, ease: Bounce.easeOut});
    });
});

//INTRO CONTAINER ANIMATION - WHEEL
const headerContainer = document.querySelector('.intro');
// console.log(headerContainer);

headerContainer.addEventListener('wheel', function(){
    event.currentTarget.style.border = "thick solid blue";
    event.currentTarget.style.padding = '10px';
});

//CONTENT SECTION - DRAG & DOUBLECLICK
const adventureImg = document.querySelectorAll('.img-content');
const adventureContainer = document.querySelectorAll('.content-section');
const adventureText = document.querySelectorAll('.text-content');

// console.log(adventureImg);
// console.log(adventureContainer);


adventureImg[0].addEventListener('drag', function(){
    adventureContainer[0].style.flexDirection = 'row-reverse';
});


adventureImg[1].addEventListener('dblclick', function(){
    adventureContainer[1].style.flexDirection = 'row-reverse';
});

//CONTENT DESTINATION - CLICK EVENT
const destinationParagraph = document.querySelectorAll('.destination p');

destinationParagraph.forEach(function(p){
    p.addEventListener('click', function(){
            event.target.style.color = 'lightblue';
        });
});

const destinationText = document.querySelectorAll('.destination');
console.log(destinationText);


destinationText.forEach(function(text){
    text.addEventListener('click', function(){
            event.target.style.fontStyle = 'italic';
        });
});



//WHOLE BODY - SCROLL EVENT
    window.addEventListener('scroll', function(){
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        pageTitle.style.color = 'black';
        });

//DESTINATION BUTTON - MOUSEDOWN EVENT

const destinationBtn = document.querySelectorAll('.destination .btn');

destinationBtn.forEach(function(button){
    button.addEventListener('mousedown', function(){
            event.target.style.transform = 'scale(1.25)';
        });
});

//NAV - PREVENT DEFAULT

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink){
    navLink.addEventListener('click', function(){
        event.preventDefault();
    });
});


//WHOLE PAGE - LOAD EVENT

window.addEventListener("load", function(event) {
    alert("All resources finished loading!");
  });
