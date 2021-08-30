jQuery(function($){

    /*Слайдер*/
    width = 0;
    inc = 1;
    $('#right_img').click(function(){

        let kol = $('.liner div').length;

        if(inc < kol){

            width = width + 100;
            inc++;
        
            $('.liner').css({
                'margin-left' : '-'+width+'vw'
            });
        }

    });

    $('#left_img').click(function(){
        
        if(inc > 1){
            width = width - 100;
            inc--;
            
            $('.liner').css({
                'margin-left' : '-'+width+'vw'
            });
        }
        

    });


        /*Скролл к форме*/
    $('.sel_zakaz').click(function(){

        form = $('form');
        offset = form.offset().top + form.height();
        
        $('body,html').animate({
            scrollTop: offset*1.6
        }, 500);
        return false;

    });

    $('.under_st').click(function(){

        form = $('form');
        offset = form.offset().top + form.height();
        
        $('body,html').animate({
            scrollTop: offset*1.6
        }, 500);
        return false;

    });



        /*ССЫЛКИ*/
    $('#href_about').click(function(){
        window.location = '/about'
    });

    $('#href_index').click(function(){
        window.location = '/'
    });

})