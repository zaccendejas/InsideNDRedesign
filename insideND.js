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
    $("#body").load("index-body.html", function () {
        $("[data-toggle=popover]").popover();
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });
    });
});



function goToAcademics(anchor) {
    $("#body").load("academics-body.html", function () {
        location.href = anchor;
        $("[data-toggle=popover]").popover();
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });
    });
    $("#navigation > .subsection").remove();
    $("#navigation").append('<span class="subsection"> Academics</span>');
    $("#academics").addClass('selectedTab');
}

function goToSearch() {
    $("#body").load("search-body.html", function () {
        $("[data-toggle=popover]").popover();
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });
    });
    $("#navigation > .subsection").remove();
    $("#navigation").append('<span class="subsection"> "job"</span>');
    $("#academics").removeClass('selectedTab');
}

function goToHome() {
    $("#body").load("index-body.html", function () {
        location.href = '#';
        $("[data-toggle=popover]").popover();
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });
    });
    $("#navigation > .subsection").remove();
    $("#academics").removeClass('selectedTab');
}

function starClick(id){
	var card = document.getElementById(id);
	var star = card.children[2].children[0];

	if ($(star).hasClass('fa')) {
		console.log("star is favorited");
		$(star).removeClass('fa').addClass('far');
	}
	else{
		$(star).removeClass('far').addClass('fa');
	}

}
