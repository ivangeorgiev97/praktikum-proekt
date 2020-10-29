$(document).ready(function () {
    /*  
    * API URL
    */
    const apiUrl = 'http://localhost:8000/api/memories';
    let darkMode = false;
    let currentResult = [];

    getAllApiCall(1, 'id', true);

    $("#dark-cards").click(function () {
        darkMode = !darkMode;

        $("#dark-cards").text(darkMode ? "Светли елементи" : "Тъмни елементи");
        $(".card").toggleClass('bg-dark text-white');
    })

    $(".remove-card").on('click', function(event){
        // TODO - Fix remove card
    });


    function getAllApiCall(fromId = 1, sortBy, isFirst) {
        $.ajax({
            method: "GET",
            url: `${apiUrl}/getAll/${fromId}/${sortBy}`,
            dataType: "json"
        }).done(function (data) {
            $("#cards-list").empty();

            if (isFirst) initDisplay();

            currentResult = [...data];
            
            for (let i = 0; i < currentResult.length; i++) {
                const card = createCard(currentResult[i]);
                $("#cards-list").append(card);
                card.show();
            }

            $("#cards-list").fadeIn(1500);
        }).catch(function () {
            onApiError();
        });
    }

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
