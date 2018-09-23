$(document).ready(function(){

    
    $('.box-earn .col-xs-3 i').on('click', function(){
        if($(window).width() <= 768){
            var tId = '#' + $(this).attr('target-earn');
            $("#earn1, #earn2, #earn3, #earn4").addClass('hidden-xs');
            $(tId).removeClass('hidden-xs');
            $('.box-earn .col-xs-3 i').removeClass('line-earn');
            $(this).addClass('line-earn');
        }        
    });
   

})