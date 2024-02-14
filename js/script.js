
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    const swiper = new Swiper(".swiper", {
    loop: true, // デフォルトはfalse
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // クリック有効化
      },

    // スクロールバー
    scrollbar: {
        el: ".swiper-scrollbar"
    },
    autoplay: { // 自動再生
        delay: 3000, // 1秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      },
    // effect: 'fade', // フェード

      // スライドの表示枚数
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    768: {
      slidesPerView: 1,
    }
  }

    });
    

});