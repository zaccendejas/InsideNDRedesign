$(document).ready(function () {
    $("#UTButton").click(function () {
        if ($("#UTButton span").hasClass("checked")) {
            console.log('unfavorite');
            if ($("#NOVOCard").length) {
                console.log('NOVO exists');
                $("#NOVOCard").replaceWith($("#UTCard"));
            } else {
                console.log('NOVO is gone');
                $("#deletedList").append($("#UTCard"));
            }
            $("#UTButton span").addClass('fa-star-o').removeClass('fa-star checked');
        } else {
            console.log('favorite');
            $("#currentFavs").append($("#UTCard"));
            $("#UTButton span").addClass('fa-star checked').removeClass('fa-star-o');
        }
    });
});
