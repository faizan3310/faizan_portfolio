
var noOfHalfStars;
var disabledStars = 0;
var renderRatingStars = (selector, ratingValue) => {
    var ratingStarContainer = document.createElement("div");
    ratingStarContainer.classList.add('starContainer');
    // ratingStarContainer.setAttribute("class", "starContainer");

    // document.querySelector(".container").innerHTML = ratingValue;

    var noOfFullStars = parseInt(ratingValue);
    for (var i = 0; i < noOfFullStars; i++) {
        var divTag = document.createElement("div");
        divTag.classList.add("fullStar");
        ratingStarContainer.append(divTag);
    }

    noOfHalfStars = (ratingValue % 1 == 0) ? 0 : 1;
    if (noOfHalfStars) { // not zero
        var divTag = document.createElement("div");
        divTag.classList.add("halfStar");
        ratingStarContainer.append(divTag);
    }
    disabledStars = 5 - (noOfFullStars + noOfHalfStars);
    for (var i = 0; i < disabledStars; i++) {
        var divTag = document.createElement("div");
        divTag.classList.add("disableStar");
        ratingStarContainer.append(divTag);
    }
    document.querySelector(selector).append(ratingStarContainer);
}
