$(document).ready(function () {
    let circleMode = false;
    let clonedCard = $("#clone-this-card").clone();
    const randomNumber = Math.floor((Math.random() * 18) + 1);

    $.ajax({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/photos/${randomNumber}`,
        dataType: "json"
    }).done(function (data) {
        $("#left").fadeIn(800);
        $("#right").fadeIn(1200);
        $("#footer-text").fadeIn(2000);
        $("#api-information").fadeIn(2400);

        clonedCard.removeAttr('id');
        clonedCard.find('h5').text(data.title);
        clonedCard.find('p').text("Тази снимка беше случайно избрана от API-то. При рефреш на страницата винаги ще се избира 1 случайна и ще бъде добавена в карта.");
        clonedCard.find('img').attr('src', data.url);
        clonedCard.find('img').attr('alt', data.title);

        $("#cards-list").prepend(clonedCard);
        clonedCard.fadeIn(1500);
    });

    $("#circle-pictures").click(function () {
        circleMode = !circleMode;

        $("#circle-pictures").text(circleMode ? "Стандартни снимки" : "Кръгли снимки");
        $(".card-img").toggleClass("rounded-circle")
    })

    $(".remove-card").on('click', function(event){
        // TODO - Fix remove card

        event.stopPropagation();
        event.stopImmediatePropagation();
        
        $(this).closest(".card").fadeOut(1500);
    });
})
