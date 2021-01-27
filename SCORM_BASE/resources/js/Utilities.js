$.fn.hideMK = function () {
    $(this).css("visibility", "hidden");
    //$(this).css({ pointerEvents: "none" })
};
$.fn.showMK = function () {
    $(this).css("visibility", "visible");
    $(this).css("opacity", "1");
    //$(this).css({ pointerEvents: "auto" })
};

$.fn.btnDisabled = function (btn) {
    $(btn).css({ pointerEvents: "none" })
};

$.fn.isVisibleMK = function() {
    return $(this).css('visibility') === 'visible';
};

$.fn.createDialogMk = function (titulo, msg, tamano, activacion, callback) {
    $(this).click(function () {
        var dialogMK = bootbox.dialog({
            title: titulo,
            message: msg,
            size: tamano
        });
        dialogMK.init(function () {
            dialogMK.find(".close").css("pointer-events", "none");
            setTimeout(function () {
                dialogMK.find(".close").css("color", "#e2221d");
                dialogMK.find(".close").css("opacity", "1");
                dialogMK.find(".close").css("pointer-events", "all");
            }, 3000);
            if (activacion) {
                callback();
            }
        });
    });
}

function createDialogMk2 (titulo, msg, tamano, activacion, callback) {
        var dialogMK = bootbox.dialog({
            title: titulo,
            message: msg,
            size: tamano
        });
        dialogMK.init(function () {
            dialogMK.find(".close").css("pointer-events", "none");
            setTimeout(function () {
                dialogMK.find(".close").css("color", "#e2221d");
                dialogMK.find(".close").css("opacity", "1");
                dialogMK.find(".close").css("pointer-events", "all");
            }, 3000);
            if (activacion) {
                callback();
            }
        });
}
$.fn.showBTN = function (time, callback) {
    var btn = $(this);
    setTimeout(function () {
        $(btn).css("opacity", "1");
    }, time);
    $(btn).click(function(){
        callback();
    });
}

function openNav() {
    $("#mySidenav").css("width", "300px");
    $(".footerDrawer").show("swing");
    $(".backDrawer").fadeIn();
    $(".headMobil").css("display", "none !important");
}

function closeNav() {
    $("#mySidenav").css("width", "0px");
    $(".backDrawer").hide();
    $(".footerDrawer").hide();
    $(".headMobil").show();
}