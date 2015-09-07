$(document).ready(function () {

    var $link1 = $('.js-link-1');
    var $link2 = $('.js-link-2');
    var $link3 = $('.js-link-3');
    var linkDuratray = $('.js-duratray-link');

    var $modal1 = $('.js-modal-1');
    var $modal2 = $('.js-modal-2');
    var $modal3 = $('.js-modal-3');
    var modalDuratray = $('.js-duratray-modal');

    if ($("body").hasClass("duratray")) {
        $(".menu li:first-child").addClass("active");
    }

    if ($("body").hasClass("becorit")) {
        $(".menu li:nth-child(2)").addClass("active");
    }

    //клик по пунктам меню, делающий их активными
    $(".menu>li").click(function () {
        $(".menu>li").removeClass("active");
//        $(this).toggleClass("active");
    });

    //клик по пунктам сабменю, делающий их активными
    $("#submenu li").click(function () {
        $("#submenu li").removeClass("active");
        $(this).toggleClass("active");
    });

    //клик по пунктам сабменю, делающий их активными
    $("#submenu-page li").click(function () {
        $("#submenu-page li").removeClass("active");
        $(this).toggleClass("active");
    });

    //клик по пункту меню duratray-link, добавляет класс duratray к body
    $(".duratray-link").click(function () {
        $("body").removeClass("becorit");
        $("body").addClass("duratray");
    });

    //клик по пункту меню becorit-link, добавляет класс becorit к body
    $(".becorit-link").click(function () {
        $("body").removeClass("duratray");
        $("body").addClass("becorit");
    });

    //выравнивание высоты колонок submenu-page на странице becorit-page

    if ($('body').hasClass('becorit-page')) {
        setEqualHeight($("#submenu-page li"));
    }

    function setEqualHeight(columns)
    {
        var tallestcolumn = 0;
        columns.each(
                function ()
                {
                    currentHeight = $(this).height();
                    if (currentHeight > tallestcolumn)
                    {
                        tallestcolumn = currentHeight;
                    }
                }
        );
        columns.height(tallestcolumn);
    }

//***************************  страница becorit-about, модальные окна  ****************************//    


    /** Клик по кнопке "link1" **/
    $link1.on('click', function (e) {

        $modal1.modal({
            onShow: function (dialog) {

                var offsetOtherlist = ($(".other-list").offset()).top;
                $("#simplemodal-container").css("min-width", "960px");
                $("#simplemodal-container").css("height", "1200px");
                $("#simplemodal-container").css("top", offsetOtherlist);
                $("#simplemodal-container").css("position", "absolute");


            }
        });

        e.preventDefault();

    });

    /** Клик по кнопке "link2" **/
    $link2.on('click', function (e) {

        $modal2.modal({
            onShow: function (dialog) {

                var offsetOtherlist = ($(".other-list").offset()).top;
                $("#simplemodal-container").css("min-width", "960px");
                $("#simplemodal-container").css("height", "100%");
                $("#simplemodal-container").css("top", offsetOtherlist);
                $("#simplemodal-container").css("position", "absolute");


            }
        });

        e.preventDefault();

    });

    /** Клик по кнопке "link3" **/
    $link3.on('click', function (e) {

        $modal3.modal({
            onShow: function (dialog) {

                var offsetOtherlist = ($(".other-list").offset()).top;
                $("#simplemodal-container").css("min-width", "960px");
                $("#simplemodal-container").css("height", "100%");
                $("#simplemodal-container").css("top", offsetOtherlist);
                $("#simplemodal-container").css("position", "absolute");


            }
        });

        e.preventDefault();

    });

    //***************************  страница duratray-tech, модальные окна  ****************************//

    var offsetContent;

    var data_id;

    $('.js-duratray-link[data-id]').on('click', function () {

        data_id = $(this).attr("data-id");

    });


    /** Клик по кнопке "linkDuratray" **/
    linkDuratray.on('click', function (e) {

        modalDuratray.modal({
            onShow: function (dialog) {

                offsetContent = ($("#content").offset()).top;
                $("#simplemodal-container").css("position", "absolute");
                $("#simplemodal-container").css("top", offsetContent - 80);
                $("#simplemodal-container").css("min-width", "960px");
                $("#simplemodal-container").css("height", "1300px");

                $('.modal-close').html('<span>закрыть</span>');

                $(".duratray-modal-item[data-id= " + data_id + "]").addClass('active');
                $(".duratray-modal-description[data-id= " + data_id + "]").addClass('active');

                $('.duratray-modal-item[data-id]').on('click', function () {

                    data_id = $(this).attr("data-id");

                    $(".duratray-modal-item").removeClass('active');
                    $(".duratray-modal-description").removeClass('active');

                    $(".duratray-modal-item[data-id= " + data_id + "]").addClass('active');
                    $(".duratray-modal-description[data-id= " + data_id + "]").addClass('active');

                });

                $('.js-duratray-link[data-id]').on('click', function () {

                    data_id = $(this).attr("data-id");

                    $(".duratray-modal-item").removeClass('active');
                    $(".duratray-modal-description").removeClass('active');

                    $(".duratray-modal-item[data-id= " + data_id + "]").addClass('active');
                    $(".duratray-modal-description[data-id= " + data_id + "]").addClass('active');

                });


            },
            onClose: function (dialog) {

                data_id = 0;

                $(".duratray-modal-item").removeClass('active');
                $(".duratray-modal-description").removeClass('active');

                $.modal.close();

            }

        });

        e.preventDefault();

    });

    /** Клик по фону вне попапа закрывает окно **/
    $.extend($.modal.defaults, {
        overlayClose: true,
        closeClass: 'modal-close',
        closeHTML: '<a href="#"></a>',
        onShow: function (dialog) {
            dialog.container.css('height', 'auto');
        }
    });
    $('body').on('click', '.js-modal-close', function (e) {
        $.modal.close();
        e.preventDefault();
    });


    /** на главной странице эффект наведения на блоки **/

    $('.we-deal-item:first-child .deal-bg').hover(
            function () {
                $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '0');
                $('.we-deal-item:last-child .deal-bg').css('opacity', '0');
            }, function () {
        $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '1');
        $('.we-deal-item:last-child .deal-bg').css('opacity', '1');
    });
    $('we-deal-item:first-child p').hover(
            function () {
                $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '0');
                $('.we-deal-item:last-child .deal-bg').css('opacity', '0');
            }, function () {
        $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '1');
        $('.we-deal-item:last-child .deal-bg').css('opacity', '1');
    });
    $('we-deal-item:first-child .deal-min').hover(
            function () {
                $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '0');
                $('.we-deal-item:last-child .deal-bg').css('opacity', '0');
            }, function () {
        $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '1');
        $('.we-deal-item:last-child .deal-bg').css('opacity', '1');
    });
    $('.we-deal-item:last-child .deal-bg').hover(
            function () {
                $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '0');
                $('.we-deal-item:first-child .deal-bg').css('opacity', '0');
            }, function () {
        $('.we-deal-item:nth-child(2) .deal-bg').css('opacity', '1');
        $('.we-deal-item:first-child .deal-bg').css('opacity', '1');
    });
    $('.we-deal-item:nth-child(2) .deal-bg').hover(
            function () {
                $('.we-deal-item:first-child .deal-bg').css('opacity', '0');
                $('.we-deal-item:last-child .deal-bg').css('opacity', '0');
            }, function () {
        $('.we-deal-item:first-child .deal-bg').css('opacity', '1');
        $('.we-deal-item:last-child .deal-bg').css('opacity', '1');
    });




});

