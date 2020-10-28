$(document).ready(function () {
    /*  
    * API URL
    */
    const apiUrl = 'http://localhost:8000/api/memories';
    let darkMode = false;

    $.ajax({
        method: "GET",
        url: `${apiUrl}/getAll/1/id`,
        dataType: "json"
    }).done(function (data) {
        initDisplay()
        
        for (let i = 0; i < data.length; i++) {
            const card = createCard(data[i]);
            $("#cards-list").append(card);
            card.show();
        }

        $("#cards-list").fadeIn(1500);
    }).catch(function () {
        onApiError();
    });

    $("#dark-cards").click(function () {
        darkMode = !darkMode;

        $("#dark-cards").text(darkMode ? "Светли елементи" : "Тъмни елементи");
        // $(".card-img").toggleClass("rounded-dark")
    })

    $(".remove-card").on('click', function(event){
        // TODO - Fix remove card
    });


    function onApiError() {
        alert('Проблем с API call-а. Моля проверете дали има работещо API и дали apiUrl-ът е правилен');
    }

    function initDisplay()
    {
        $("#left").fadeIn(800);
        $("#right").fadeIn(800);
        $("#footer-text").fadeIn(2000);
    }

    function createCard(data)
    {
        let clonedCard = $("#clone-this-card").clone();

        clonedCard.removeAttr('id');
        clonedCard.find('h5').text(`${data.id} - ${data.title}`);
        clonedCard.find('p').text(`${data.description}`);
        clonedCard.find('span').text(`${data.created_at}`);

        return clonedCard;
    }
})
