$(document).ready(function () {
    $(".starButton").click(function () {
        cardElement = $(this).parent().parent();
        if ($(this).find('span').hasClass("checked")) {
            console.log('unfavorite');
            if ($("#deletedList").children().length) {
                console.log('replace');
                cardElement.fadeOut("slow", function () {
                    $("#deletedList > .favCard").hide();
                    $("#deletedList > .favCard").replaceWith(cardElement);
                    cardElement.fadeIn("slow");
                });
            } else {
                console.log('deleted is empty');
                cardElement.fadeOut("slow", function () {
                    $("#deletedList").append(cardElement);
                    cardElement.fadeIn("slow");
                })
            }
            $(this).find('span').addClass('fa-star-o').removeClass('fa-star checked');
        } else {
            console.log('favorite');
            cardElement.hide("slow", function () {
                $("#currentFavs").append(cardElement);
                $(this).find('.starButton span').removeClass('fa-star-o').addClass('fa-star checked');
                cardElement.fadeIn("slow");
            });
        }
    });
});
