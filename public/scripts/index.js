jQuery(function($){

        /*Ссылки на "О нас"*/
    $('.insert_info_us').click(function(){
        window.location = '/about'
    });

    $('.buy_pc_wrapper input').click(function(){
        window.location = '/buy_pc'
    });

        /*Открытие/закрытие верхнего меню*/
    $(window).scroll(function(e){

        let scroll = $(window).scrollTop() + $(window).height(),
            dop_scroll =  $(window).scrollTop(),
            header = $('header').height();

        if (dop_scroll > header){
            $('.menu_wrapper_2').css({
                'pointer-events': 'all',
                'transform': 'translateY(0%)'
            });
            $('.menu_wrapper_2 a').css({
                'color': 'white'
            });
        }else{
            $('.menu_wrapper_2').css({
                'background': 'black',
                'pointer-events': 'none',
                'transform': 'translateY(-85%)'
            });
            $('.menu_wrapper_2 a').css({
                'color': 'black'
            });
            $('.open_menu').css({
                'background': 'black'
            })
        }
        
    });

    
    /*Слайдер*/
    let i=2;
    //$('.img_pc_info img').fadeOut(0);
    $('#right_img').click(function(){
        
        if (i < $('.img_pc_info img').length+1){
            i++;
            $('.img_pc_info img:nth-child('+(i-1)+')').fadeOut('fast');
            $('.img_pc_info img:nth-child('+i+')').fadeIn('fast');
        }

    });

    $('#left_img').click(function(){
        
        if (i > 2){
            i--;
            $('.img_pc_info img:nth-child('+(i+1)+')').fadeOut('fast');
            $('.img_pc_info img:nth-child('+i+')').fadeIn('fast');
        }

    });


    /*Автоматический слайдер*/
        
        function automatic_sl(){
            if (i < $('.img_pc_info img').length+1){
                i++;
                $('.img_pc_info img:nth-child('+(i-1)+')').fadeOut('fast');
                $('.img_pc_info img:nth-child('+i+')').fadeIn('fast');
            }
        }

        setInterval(automatic_sl, 5000);


        /*Модальное окно(комплектующие)*/
    $('.modal_pc_podrob').fadeOut(0);
    $('.podrobnee').click(function(){
        $('.modal_pc_podrob').fadeToggle('fast');
    });

    $('#close_modal_pc_info').click(function(){
        $('.modal_pc_podrob').fadeOut('fast')
    });

    $(document).mouseup(function (e){
		var div = $(".modal_pc_podrob");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.fadeOut('fast');
		}
	});

    $('.dop_info_pc_modal').fadeOut(0);
    $('.hover_block_modal').hover(function(e){
        let div = e.target;
        if ($(div).attr('class')=='hover_block_modal'){
            let name = $(div).find('p.name_compl').text();
            
            modal = $('.dop_info_pc_modal');
            pos = $(div).position();

            insert = $('.dop_info_pc_modal p');

            if(name=='CPU'){ 
                $(insert).html('<p>Ядер: <b>6</b></p> <p>Частота: <b>3,6 ГГЦ</b></p>') 
            }else if(name=='GPU'){ 
                $(insert).html('<p>Видеопамять: <b>2 GB</b></p> <p>Частота: <b>1531 МГц</b></p>') 
            }else if(name=='HDD'){
                 $(insert).html('<p>HDD: <b>0 Gb</b></p>')
            }else if(name=='Блок питания'){
                $(insert).html('<p>Мощность: <b>650 Вт</b></p>')
            }else if(name=='SSD'){
                $(insert).html('<p>Емкость: <b>500 Gb</b></p>')
            }else if(name=='Корпус'){
                $(insert).html('<p>Ширина: <b>160 мм</b></p> <p>Высота: <b>410 мм</b></p> <p>Глубина: <b>428 мм</b></p>')
            }else if(name=='RAM'){
                $(insert).html('<p>Объём памяти: <b>8 Gb</b></p> <p>Частота: <b>2666 МГц</b></p>')
            }else if(name=='Мат. плата'){
                $(insert).html('<p>Тип памяти: <b>DDR4</b></p> <p>Чипсет: <b>AMD A320</b></p> <p>Количество портов VGA (D-Sub): <b>1</b></p> <p>Количество портов Ethernet LAN ( RJ-45): <b>1</b></p> <p>Сокет: <b>Разъем AM4</b></p>')
            }else if(name=='Куллеры'){
                $(insert).html('<p>AMD AMD Wraith Spire cooler AM4</p> <p>Chieftec AF-0925S</p> <p>Chieftec AF-0825S</p>')
            }
            
            
            
            $(modal).css({
                'top' : ''+ pos.top +'px',
                'left' : ''+ pos.left +'px'
            });

            $(modal).fadeIn(0);
        }

    }, function(){
        $('.dop_info_pc_modal').fadeOut(0);
    });

    $('.dop_info_pc_modal').hover(function(){
        $('.dop_info_pc_modal').fadeIn(0);
    }, function(){
        $('.dop_info_pc_modal').fadeOut(0);
    });


        /*Скролл к доставке*/
    $('#dostav').click(function(){
        div = $('.dostavka');
        offset = div.offset().top + div.height();
        
        $('body,html').animate({
            scrollTop: offset/1.5
        }, 500);
        return false;
    });

    $('.dostav').click(function(){
        div = $('.dostavka');
        offset = div.offset().top + div.height();
        
        $('body,html').animate({
            scrollTop: offset/1.5
        }, 500);
        return false;
    });


        /*КНОПКА "КУПИТЬ ПК"*/
    $('.buy_pc_modal input').click(function(){
        window.location = '/buy_pc'
    });

})