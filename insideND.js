$(document).ready(function () {
    $(".starButton").click(function () {
        cardElement = $(this).parent().parent();
        if ($(this).find('span').hasClass('fa')) {
            console.log('unfavorite');
            if ($("#deletedList").children().length) {
                console.log('replace');
                cardElement.fadeOut("slow", function () {
                    $("#deletedList > .favCard").hide();
                    $("#deletedList > .favCard").replaceWith(cardElement);
                    cardElement.find('.starButton span').removeClass('fa').addClass('far');
                    cardElement.fadeIn("slow");
                });
            } else {
                console.log('deleted is empty');
                cardElement.fadeOut("slow", function () {
                    $("#deletedList").append(cardElement);
                    cardElement.find('.starButton span').removeClass('fa').addClass('far');
                    cardElement.fadeIn("slow");
                })
            }
            $(this).find('span').addClass('far').removeClass('far');
        } else {
            console.log('favorite');
            cardElement.hide("slow", function () {
                $("#currentFavs").append(cardElement);
                cardElement.find('.starButton span').removeClass('far').addClass('fa');
                cardElement.fadeIn("slow");
            });
        }
    });
});
