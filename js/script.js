
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


