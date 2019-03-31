//$(document).ready(function () {
//    $("#UTButton").click(function () {
//        if ($("#UTButton span").hasClass("checked")) {
//            console.log('unfavorite');
//            if ($("#NOVOCard").length) {
//                console.log('NOVO exists');
//                $("#NOVOCard").replaceWith($("#UTCard"));
//            } else {
//                console.log('NOVO is gone');
//                $("#deletedList").append($("#UTCard"));
//            }
//            $("#UTButton span").addClass('fa-star-o').removeClass('fa-star checked');
//        } else {
//            console.log('favorite');
//            $("#currentFavs").append($("#UTCard"));
//            $("#UTButton span").addClass('fa-star checked').removeClass('fa-star-o');
//        }
//    });
//});

$(document).ready(function () {
    $(".starButton").click(function () {
        cardElement = $(this).parent().parent().parent();
        if ($(this).find('span').hasClass("checked")) {
            console.log('unfavorite');
            console.log($("#deletedList").children().length);
            if ($("#deletedList").children().length) {
                console.log('replace');
                $("#deletedList > a").replaceWith(cardElement);
            } else {
                console.log('empty deleted list');
                $("#deletedList").append(cardElement);
            }
            $(this).find('span').addClass('fa-star-o').removeClass('fa-star checked');
        } else {
            console.log('favorite');
            $("#currentFavs").append(cardElement);
            $(this).find('span').addClass('fa-star checked').removeClass('fa-star-o');
        }
    });
});
