// Your code goes here

//HEADER IMAGE ANIMATION - MOUSEOVER
const headerImage = document.querySelector('.intro img');
// console.log(headerImage);

headerImage.addEventListener('mouseover', function(){
    event.target.style.opacity = '0.5';
});

headerImage.addEventListener('mouseout', function(){
    event.target.style.opacity = '1';
});

//H1 ANIMATION
const pageTitle = document.querySelector('h1.logo-heading');
console.log(pageTitle);

pageTitle.addEventListener('mouseover', function(event) {
    window.addEventListener('keydown', function(){
        event.target.style.color = 'blue';
        TweenMax.to("h1.logo-heading", .5, {x: 20, ease: Bounce.easeOut});
    });
});

//INTRO CONTAINER ANIMATION - WHEEL
const headerContainer = document.querySelector('.intro');
console.log(headerContainer);

headerContainer.addEventListener('wheel', function(){
    event.currentTarget.style.border = "thick solid blue";
    event.currentTarget.style.padding = '10px';
});

//INTRO CONTAINER ANIMATION - WHEEL