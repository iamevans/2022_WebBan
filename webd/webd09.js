// menu

$(".nav > ul > li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout (function () {
    $(this).find(".submenu").stop().slideUp(200);
});

// tab
$(document).ready(function() {
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
});

// popup
$(".layerPopup").click(function(e) {
    e.preventDefault();
    $(".layer").show();
});
$(".layer .close").click(function(e) {
    e.preventDefault();
    $(".layer").hide();
});

// slide
var currentIndex = 0;

setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-360) + "px";

    $(".slideList").animate({
        top: slidePosition
    }, 400);
}, 3000);
