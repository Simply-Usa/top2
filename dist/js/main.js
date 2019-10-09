$(document).ready(function(){
  $('a[data-rel^=lightcase]').lightcase();
  $(".questions > .question > .question_title").click(function() {
    $(this).parents(".question").find("p").slideToggle (200);
    $(this).parents(".question").find(".question_title > img").toggleClass('rotate');
  });
  
  var sec = $('.eighth_section');
  var secTop = sec.offset().top;
  var video = $('.second_section')
  var videoTop = video.offset().top;
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if(windowTop > secTop){
      $('.count').each(function(){
        $(this).prop('Counter', 0).animate({
          Counter:$(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function(now){
            $(this).text(Math.ceil(now));
          }
        })
      });
      $(window).unbind('scroll');
    }
    else if(windowTop >= videoTop){
      $('.video-1').html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/CC_etWCeg1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>День открытых дверей</p>');
      $('.video-2').html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/U_w57O6hXkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Танцевальный номер</p>');
      $('.video-3').html('<iframe width="100%" height="533px" src="https://www.youtube.com/embed/hwgW6s_QWUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Парад поколений ОЛ Связист 1-ая смена 2015 года</p>')
      $(window).unbind('scroll');
    }
  });
  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });
  $('.open_modal, #close_modal').click(function(){
    $('.modal').toggleClass('flex_modal');
  });
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "app/php/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.output').show(500);
      setTimeout(function() {
        $('.output').hide(500);
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});