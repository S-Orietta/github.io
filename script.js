$(function(){
    $('.peti').hover(
        function() {
          $('.peti-info').fadeIn(300);
        },
        function() {
          $('.peti-info').fadeOut(300);
        }
      );

      $('.chocola').hover(
        function() {
          $('.chocola-info').fadeIn(300);
        },
        function() {
          $('.chocola-info').fadeOut(300);
        }
        
      );
});

$(document).ready(function() {
  var images = [
      'url("images/P1030021.JPG")',
      'url("images/P1030006.jpg")',
      'url("images/P1030053.JPG")'
      // ここに他の画像のURLを追加できます
  ];

  var currentIndex = 0;
  var $bgImages = $('.bg-image');
  $bgImages.eq(0).css('background-image', images[0]).show();

  setInterval(function() {
      var nextIndex = (currentIndex + 1) % images.length;
      $bgImages.eq(nextIndex).css('background-image', images[nextIndex]).fadeIn(1000, function() {
          $bgImages.eq(currentIndex).fadeOut(1000);
          currentIndex = nextIndex;
      });
  }, 4000); // 画像を切り替える間隔（ミリ秒）
});
