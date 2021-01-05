// // Dom Traversal
// const close = document.querySelectorAll(".close");


// close.forEach(function(el) {
//     el.addEventListener("click", function(e) {
//         e.target.parentElement.style.display = "none";
//         // e.target.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('Ok');
//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // console.log(e.target);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});