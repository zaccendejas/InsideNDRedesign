$(document).ready(function () {
    $(".starButton").click(function () {
        cardElement = $(this).parent().parent();
		console.log(cardElement);
        if ($(this).find('span').hasClass('fa')) {
            console.log('unfavorite');
			unfavorite(cardElement);
            $(this).find('span').addClass('far').removeClass('far');
        } else {
            console.log('favorite');
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

function clickedStarFav(cardClick){
  var cardElement = cardClick.parentElement.parentElement;
  if (cardClick.children[0].classList.contains('fa')) {
      console.log('unfavorite');
      unfavorite(cardElement);
      $(this).find('span').addClass('far').removeClass('fa');
  } else {
      console.log('favorite');
      console.log(cardElement);
      favorite(cardElement);
  }
}

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
  var cardBody = document.getElementById(card.id.substring(0, card.id.length-3));
  if (cardBody != null){
    var star = cardBody.children[2].children[0];
    star.classList.remove("fa");
    star.classList.add("far");
  }
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
  var cardBody = document.getElementById(card.id.substring(0, card.id.length-3));
  if (cardBody != null){
    var star = cardBody.children[2].children[0];
    star.classList.remove("far");
    star.classList.add("fa");
  }
	$(card).hide("slow", function () {
		$("#currentFavs").append(card);
		$(card).find('.starButton span').removeClass('far').addClass('fa');
		$(card).fadeIn("slow");
	});
}

function addFavorite(card){
  console.log("addFavorite");
  console.log(card);
	var img = document.createElement("img");
	img.className = "appIcon";
	img.src = card.children[0].children[0].children[0].src;
	console.log(card.children[1].children[0].children[0]);

	var name = document.createElement("span");
	name.className = "favName";
	name.innerHTML = card.children[1].children[0].children[0].innerHTML;
	name.setAttribute("style","height: 60px;");
	console.log(name.innerHTML);
	if (name.innerHTML == "DART Registration"){
		name.innerHTML = "DART";
	}
	else if (name.innerHTML == "Graduation Progress System"){
		name.innerHTML ="GPS";
	}
  else if (name.innerHTML == "Submit Course and Instructor Evaluation"){
    name.innerHTML = "Submit CIFs";
  }

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
  starButton.id = card.id+"Button";
  starButton.setAttribute("onclick", "clickedStarFav(this)");
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

function createDiv(classDiv){
  var div = document.createElement("div");
  div.className = classDiv
  return div;
}

function createImage(classImg, srcImg){
  var picture = document.createElement("img");
  picture.className = classImg;
  picture.src = srcImg;
  return picture;
}

function createLink(classLink, linkHref){
  var link = document.createElement("a");
  link.className = classLink;
  link.href = linkHref;
  return link;
}

function createP(classP, text){
  var p = document.createElement("p");
  p.className = classP;
  p.innerHTML = text;
  return p;
}

function createSpan(classSpan){
  var span = document.createElement("span");
  span.className= classSpan;
  return span;
}

function createButtonDescript(description){
  var button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-secondary descriptionBtn p-0";
  button.setAttribute("data-toggle", "popover");
  button.setAttribute("data-trigger","hover focus");
  button.setAttribute("data-content", description);
  return button;
}

function buildCard(idName, photo, linkHref, title, subtitle, star, description, single = false){
  var picture = createImage("bodyImg", photo);
  var pictureLink = createLink("cardLink", linkHref);
  pictureLink.setAttribute("target", "_blank");
  pictureLink.appendChild(picture);
  var divPic = createDiv("col-auto p-0");
  divPic.appendChild(pictureLink);

  var titleP = createP("title", title);
  var subtitleP = createP("description", subtitle);
  // var divText = createDiv("col pr-2");
  var divText = createDiv("pr-2");
  divText.appendChild(titleP);
  divText.appendChild(subtitleP);
  var textLink = createLink("cardLink col", linkHref);
  textLink.setAttribute("target", "_blank");
  textLink.appendChild(divText);

  var star = createSpan(star + " fa-star star_body checked pr-1");
  var starLink = document.createElement("a");
  starLink.href = "#";
  starLink.setAttribute("onclick",  'starClick("'+idName+'")');
  starLink.appendChild(star);

  var border = createDiv("row border body-rect");
  border.id = idName;
  border.appendChild(divPic);
  border.appendChild(textLink);
  border.appendChild(starLink);

  var colDiv = createDiv("col pr-0");
  colDiv.appendChild(border);

  var arrow = createSpan("fa fa-2x fa-angle-right");
  var descript = createButtonDescript(description);
  descript.appendChild(arrow);

  var btnDiv = createDiv("col-auto tabBTN pl-0");
  btnDiv.appendChild(descript);

  var outerRowDiv = createDiv("row");
  outerRowDiv.appendChild(colDiv);
  outerRowDiv.appendChild(btnDiv);
  if(single){
    var scriptTag = document.getElementsByTagName('script');
    scriptTag = scriptTag[scriptTag.length - 1];
    var parentTag = scriptTag.parentNode;
    parentTag.appendChild(outerRowDiv);
  }
  else{
    return outerRowDiv;
  }
}

function buildRow(idSection, card1, card2 = null, card3 = null,){
  var divRow = createDiv("row");
  var col1 = createDiv("col-4");
  col1.appendChild(card1);
  divRow.appendChild(col1);

  if (card2 != null){
    var col2 = createDiv("col-4");
    col2.appendChild(card2);
    divRow.appendChild(col2);
  }

  if (card3 != null){
    var col3 = createDiv("col-4");
    col3.appendChild(card3);
    divRow.appendChild(col3);
  }

  var parentTag = document.getElementById(idSection);
  console.log(parentTag);
  parentTag.appendChild(divRow);
}
