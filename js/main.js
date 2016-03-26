
function initfullpage(){
   $('#pages').fullpage({
      scrollBar:true,
      scrollingSpeed: 1000,
      navigation: false,
      afterLoad: function(anchorLink, index){
            $(this).find('.animation').addClass('fadeInUp animated');
            $(this).find('.animation2').addClass('fadeInDown animated');
          },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fadeInUp animated');
            $('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
          }
    });
  }


$(document).ready(function() {

  setTimeout(function(){if(!$('body').hasClass('loaded')) {$('body').addClass('loaded');initfullpage()};},3000);


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};
$('<style>section,.section{height:800px;display:block}.animation,.animation2{opacity:1}</style>').appendTo('head');
}

 
  $('.logo').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);});

  $('.s2-lent-chek').click(function(e){
    e.preventDefault();
    $(this).toggleClass('checked');
  });

  $('.s2-form-radio').click(function(e){
    e.preventDefault();
    $(this).parent().find('.radio-wrap').removeClass('rw-active');
    $(this).children('.radio-wrap').addClass('rw-active');    
  });

  $('.s2-conf').click(function(e){
    e.preventDefault();
    $(this).toggleClass('checked').toggleClass('error-input');  
  });

  $('.s5-form-conf').click(function(e){
    e.preventDefault();
    $(this).toggleClass('checked').toggleClass('error-input');  
  });

  $('input[name="phone"]').mask('+7 (999) 999-99-99');
  $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
  $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});


  $('input[name="phone1"]').mask('+7');
  $('input[name="phone2"]').mask('(999)');
  $('input[name="phone3"]').mask('999-99-99');

  $('input[name="phone1"]').blur(function() {if($(this).val().length != 2) {$(this).addClass('error-input');}
    $(this).parent().children('input[name="phone"]').val($(this).parent().children('input[name="phone1"]').val()+' '+$(this).parent().children('input[name="phone2"]').val()+' '+$(this).parent().children('input[name="phone3"]').val());
  });
  $('input[name="phone1"]').focus(function() {$(this).removeClass('error-input');});

  $('input[name="phone2"]').blur(function() {if($(this).val().length != 5) {$(this).addClass('error-input');}
    $(this).parent().children('input[name="phone"]').val($(this).parent().children('input[name="phone1"]').val()+' '+$(this).parent().children('input[name="phone2"]').val()+' '+$(this).parent().children('input[name="phone3"]').val());
  });
  $('input[name="phone2"]').focus(function() {$(this).removeClass('error-input');});

  $('input[name="phone3"]').blur(function() {if($(this).val().length != 9) {$(this).addClass('error-input');}
    $(this).parent().children('input[name="phone"]').val($(this).parent().children('input[name="phone1"]').val()+' '+$(this).parent().children('input[name="phone2"]').val()+' '+$(this).parent().children('input[name="phone3"]').val());
  });
  $('input[name="phone3"]').focus(function() {$(this).removeClass('error-input');});

  $('.close').click(function(e){
    e.preventDefault();
    $.arcticmodal('close');
  });

  $('.close').click(function(e){
    e.preventDefault();
    $.arcticmodal('close');
  });

  $('.footer-zz').click(function(e){
    e.preventDefault();
    $('#pop').arcticmodal();
  });
  $('.top-zz').click(function(e){
    e.preventDefault();
    $('#pop2').arcticmodal();
  });

    function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"],a').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
            }
        }); 
        }
    });

});
$(window).load(function(){
  if (!$('body').hasClass('loaded')) {$('body').addClass('loaded');initfullpage()};

    slider1 = $('.s6-sld-ul').bxSlider({infiniteLoop: true,pager:false,controls:false, auto:false, speed: 500,slideWidth:280,slideMargin:0,minSlides:3,maxSlides:3,moveSlides:1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
        $('.s6-sld-w').addClass('fadeouted');
        $slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
        $('.s6-sld-act').removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
        $('.s6-sld-act').removeClass('s6-sld-act').next().addClass('s6-sld-act');
        $slideElement.next().addClass('s6-sld-act');
        //$('.s6-sld-w').addClass('fadeouted');        
        //$('.s6-sld-act').removeClass('s6-sld-act').next().addClass('s6-sld-act');        
        //$('.s6-sld-act').prev().removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');        
        //$('.s6-sld-act').next().removeClass('fadeouted').next().removeClass('fadeouted');
        //$('.s6-sld-w').removeClass('s6-sld-act');
        //$slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
        //$slideElement.next().next().removeClass('fadeouted');
        //$slideElement.next().addClass('s6-sld-act');
        //$slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
        //slider1.goToSlide(newIndex);
        //return false;
        },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
        $('.s6-sld-w').addClass('fadeouted');
        $slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
        $('.s6-sld-act').removeClass('fadeouted').prev().removeClass('fadeouted').prev().removeClass('fadeouted');
        $('.s6-sld-act').removeClass('s6-sld-act').prev().addClass('s6-sld-act');
        $slideElement.next().addClass('s6-sld-act');  
        //$('.s6-sld-w').addClass('fadeouted');        
              
        //$slideElement.next().addClass('s6-sld-act');
        //$slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
              
      },
      onSliderLoad:function(){
        $('.s6-sld-w').addClass('fadeouted');
        $('.s6-sld-act').prev().removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');

      }
    });
    slider1.goToSlide(1);
  $('#sld1l').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
  $('#sld1r').click(function(e){e.preventDefault();slider1.goToNextSlide();});
  
  slider2 = $('#slider-full').bxSlider({pager:false,controls:false, auto:false, speed: 400,mode:'fade'});
  $('#sld2l').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
  $('#sld2r').click(function(e){e.preventDefault();slider2.goToNextSlide();});

});