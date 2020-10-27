$(document).ready(function () {
    let circleMode = false;
    let clonedCard = $("#clone-this-card").clone();

    $.ajax({
        method: "GET",
        url: ``,
        dataType: "json"
    }).done(function (data) {
        $("#left").fadeIn(800);
        $("#right").fadeIn(1200);
        $("#footer-text").fadeIn(2000);

        clonedCard.removeAttr('id');
        clonedCard.find('h5').text(data.title);
        clonedCard.find('p').text("Тази снимка беше случайно избрана от API-то. При рефреш на страницата винаги ще се избира 1 случайна и ще бъде добавена в карта.");

        $("#cards-list").prepend(clonedCard);
        clonedCard.fadeIn(1500);
    });

    $("#circle-cards").click(function () {
        circleMode = !circleMode;

        $("#circle-cards").text(circleMode ? "Стандартни елементи" : "Кръгли елементи");
        // $(".card-img").toggleClass("rounded-circle")
    })

    $(".remove-card").on('click', function(event){
        // TODO - Fix remove card
    });
})
