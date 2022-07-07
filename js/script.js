
//@@@@@@@@@@@@@@@@@@@@@@@@@ 
//ハンバーガーメニューの表示
//@@@@@@@@@@@@@@@@@@@@@@@@@ 


$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
          $('.accordion').css('border-radius','0');
          $('.header_top_left>a').css('color','#272727');
        } else {
          $('.globalMenuSp').removeClass('active');
          $('.accordion').css('border-radius','0 0 30px 30px');
          $('.accordion').css('transition','0.5s');
          $('.header_top_left>a').css('color','#57B07B');
      }
  });
});




jQuery('#hamburger').on('click', function () {
  jQuery('#accordion-item').slideToggle();
});



//@@@@@@@@@@@@@@@@@@@@@@@@@ 
//スクロールトップ
//@@@@@@@@@@@@@@@@@@@@@@@@@ 
// デフォルトではボタンを非表示にする
$(function(){

  $(".scroll-top").hide();
  
  // 100px以上スクロールしたらボタンを表示させ、
  // それ以下の場合は非表示にする
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  
  // ボタンをクリックしたらページトップへ0.5秒で移動する
  $(".scroll-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});



//@@@@@@@@@@@@@@@@@@@@@@@@@ 
//facebook  のレスポンシブ対応
//@@@@@@@@@@@@@@@@@@@@@@@@@ 
jQuery(function($){
  var first_width = $(window).width();
   
  var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
          //resize完了時の動作
          var width = $(window).width();
          if(width!=first_width){
   
              //console.log('resized');
              fbiframe_reload();
              first_width=width;
          }
      }, 200);
  });
   
  function fbiframe_reload(){//facebookウィジェットの再描画
   
          var width = $("#side").width();//親要素のID,class要変更
   
          var src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E4%25B8%2580%25E8%2588%25AC%25E7%25A4%25BE%25E5%259B%25A3%25E6%25B3%2595%25E4%25BA%25BA-%25E5%2585%25A8%25E5%259B%25BD%25E7%25B2%25BE%25E7%25A5%259E%25E7%25A7%2591%25E6%25A0%2584%25E9%25A4%258A%25E5%25A3%25AB%25E5%258D%2594%25E4%25BC%259A-106399688763557&tabs&width=680&height=255&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
   
          $("#fbiframe").attr("src","");       
          $("#fbiframe").attr("src",src); 
   
          $("#fbiframe").attr("width",width); 
  };
   
  fbiframe_reload();
  });