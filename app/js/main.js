$(document).ready(function(){$("a[data-rel^=lightcase]").lightcase(),$(".questions > .question > .question_title").click(function(){$(this).parents(".question").find("p").slideToggle(200),$(this).parents(".question").find(".question_title > img").toggleClass("rotate")});var t=$(".eighth_section").offset().top,i=$(".second_section").offset().top;$(window).bind("scroll",function(){var e=$(this).scrollTop();t<e?($(".count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}),$(window).unbind("scroll")):i<=e&&($(".video-1").html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/CC_etWCeg1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>День открытых дверей</p>'),$(".video-2").html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/U_w57O6hXkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Танцевальный номер</p>'),$(".video-3").html('<iframe width="100%" height="533px" src="https://www.youtube.com/embed/hwgW6s_QWUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Парад поколений ОЛ Связист 1-ая смена 2015 года</p>'),$(window).unbind("scroll"))}),$('a[href^="#"]').click(function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top},1e3),!1})});