import './js/jquery';
window.$ = require('jquery')
$(document).ready(function () {
    $('#root').html('')
    $('#root').append(`
    <h1>Parcel for jQuery</h1>
    <button>Click me!</button>
  `)
    $(document).on('click', 'button', function () {
        alert('Hello, Parcel')
    })
})
// init Masonry after all images have loaded
// var $grid = $('.grid').imagesLoaded( function() {
//     $grid.masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: '.grid-sizer'
//     });
// });