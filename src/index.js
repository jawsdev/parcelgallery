import './js/import-jquery';
$(document).ready(function () {
    console.log('index.js')
    $('#root').html('')
    $('#root').append(`
    <h1>Parcel for jQuery</h1>
    <button>Click me!</button>
  `)
    $(document).on('click', 'button', function () {
        alert('Hello, Parcel')
    })
})
var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
});