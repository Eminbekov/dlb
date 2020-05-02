$(document).ready(function () {
    // let planbaby = "1098523742:AAFetMm_LcErQmlPwWXlKvGIgZjeJCfXBD4";
    // let chatId = -1001421494061;
    // $("form").on("submit", function (e) {
    //     e.preventDefault();
    //     let name = $(this).children("input[name='name']").val();
    //     let phone = $(this).children("input[name='tel']").val();
    //     wind(name, phone);
    //     location.reload();
    // });
    //
    // function wind(Name = "Empty", Phone = "Empty") {
    //     console.log("tester");
    //     let alltext = "Yangi Foydalanuvchi! Ism: "+Name+", Raqam: "+Phone+". Tezroq qong'iroq qiling! " +
    //         "Xaridor sizning qong'iroq qilishingizni kutmoqda!";
    //     if(navigator.onLine === true){
    //         $.get({
    //             url: 'https://api.telegram.org/bot'+planbaby+'/sendMessage',
    //             data: {
    //                 chat_id: chatId,
    //                 text: alltext
    //             },
    //             success: function (data) {
    //                 console.log(data);
    //             },
    //             error: function(err){
    //                 console.log((err))
    //             }
    //         });
    //     }
    //     else {
    //         alert('Siz internetga ulanmagansiz! :(');
    //     }
    // }

    $("#pdf input").on("keydown", function () {
        $(".error").css({"display": "none"})
    });
    $("#pdf button.animated-button").on("click", function (e) {
        e.preventDefault();
        let name = $("#pdf input[name='name']").val();
        let tel = $("#pdf input[name='tel']").val();
        if (name && tel) {
            let link = document.createElement("a");
            link.download = "instruction.pdf";
            link.href = "instruction.pdf";
            link.click();
            $("#pdf form").submit();
        } else {
            $(".error").css({"display": "block"});
        }
    });

    $(".products .female button.btn").on("click", function () {
        $('html,body').animate({
                scrollTop: $("#female-text").offset().top},
            'slow');
    });

    $(".products .male button.btn").on("click", function () {
        $('html,body').animate({
                scrollTop: $("#male-text").offset().top},
            'slow');
    });

    $(".order-scroller").on("click", function () {
        $('html,body').animate({
                scrollTop: $("section.order").offset().top},
            'slow');
    });

    $('.certificates-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 1
                }
            }
        ]
    });

});