$(document).ready(function(){
    /* $('p').show('slow'); */
    $('.target,#target ').click(function(){
        alert('You click on p.target tag');
        $(this).hide('slow');
    })
});