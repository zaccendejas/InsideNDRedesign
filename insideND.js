$(document).ready(function () {
    $(".starButton").click(function () {
        cardElement = $(this).parent().parent();
		console.log(cardElement);
        if ($(this).find('span').hasClass('fa')) {
            console.log('unfavorite');
			unfavorite(cardElement);
            // if ($("#deletedList").children().length) {
            //     console.log('replace');
            //     cardElement.fadeOut("slow", function () {
            //         $("#deletedList > .favCard").hide();
            //         $("#deletedList > .favCard").replaceWith(cardElement);
            //         cardElement.find('.starButton span').removeClass('fa').addClass('far');
            //         cardElement.fadeIn("slow");
            //     });
            // } else {
            //     console.log('deleted is empty');
            //     cardElement.fadeOut("slow", function () {
            //         $("#deletedList").append(cardElement);
            //         cardElement.find('.starButton span').removeClass('fa').addClass('far');
            //         cardElement.fadeIn("slow");
            //     })
            // }
            $(this).find('span').addClass('far').removeClass('far');
        } else {
            console.log('favorite');
            // cardElement.hide("slow", function () {
            //     $("#currentFavs").append(cardElement);
            //     cardElement.find('.starButton span').removeClass('far').addClass('fa');
            //     cardElement.fadeIn("slow");
            // });
			favorite(cardElement);
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

function unfavorite(card){
	if ($("#deletedList").children().length) {
		console.log('replace');
		$(card).fadeOut("slow", function () {
			$("#deletedList > .favCard").hide();
			$("#deletedList > .favCard").replaceWith(card);
			$(card).find('.starButton span').removeClass('fa').addClass('far');
			$(card).fadeIn("slow");
		});
	}
	else {
		console.log('deleted is empty');
		$(card).fadeOut("slow", function () {
			$("#deletedList").append(card);
			$(card).find('.starButton span').removeClass('fa').addClass('far');
			$(card).fadeIn("slow");
		})
	}
}

function favorite(card){
	$(card).hide("slow", function () {
		$("#currentFavs").append(card);
		$(card).find('.starButton span').removeClass('far').addClass('fa');
		$(card).fadeIn("slow");
	});
}

function addFavorite(card){
	var img = document.createElement("img");
	img.className = "appIcon";
	img.src = card.children[0].children[0].src;
	console.log(img.src);

	var name = document.createElement("span");
	name.className = "favName";
	name.innerHTML = card.children[1].children[0].innerHTML;
	name.setAttribute("style","height: 60px;");
	console.log(name.innerHTML);

	var favli= document.createElement("li");
	favli.className = "favli";

	favli.appendChild(img);
	favli.appendChild(name);

	var link = document.createElement("a");
	link.href = "#";
	link.className="favLink";
	link.setAttribute("target", "_blank");
	link.appendChild(favli);

	var star = document.createElement("span");
	star.className = "fa fa-star star checked";

	var starButton = document.createElement("button");
	starButton.className="starButton";
	starButton.appendChild(star);

	var liStar = document.createElement("span");
	liStar.className = "liStar";
	liStar.appendChild(starButton);

	var fav = document.createElement("div");
	fav.id = card.id +"Fav";
	fav.className = "favCard";

	fav.appendChild(link);
	fav.appendChild(liStar);

	favorite(fav);


}

function starClick(id){
	var card = document.getElementById(id);
	var star = card.children[2].children[0];
	var fav = document.getElementById(id+"Fav");

	if ($(star).hasClass('fa')) {
		console.log("unfavorite");
		$(star).removeClass('fa').addClass('far');
		console.log(fav)
		unfavorite(fav);

	}
	else{
		console.log("favoriting");
		$(star).removeClass('far').addClass('fa');
		if (fav){
			favorite(fav);
		}
		else{
			addFavorite(card);
		}
	}


}
