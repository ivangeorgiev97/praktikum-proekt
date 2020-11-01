$(document).ready(function () {
    // API Url
    const apiUrl = 'http://localhost:8000/api/memories';

    let darkMode = false;
    let currentResult = [];
    let tempId;
    let sortByVal;
    let fromIdVal;

    // First api call 
    getAll(1, 'id', true);

    $("#dark-cards").click(function () {
        darkMode = !darkMode;

        $("#dark-cards").text(darkMode ? "Светли елементи" : "Тъмни елементи");
        $(".card").toggleClass('bg-dark text-white');
    })

    $("#sort-by").change(function () {
        sortByVal = $(this).val();
        fromIdVal = $("#from-id").val();

        if (!fromIdVal) fromIdVal = 1;

        if (sortByVal) getAll(fromIdVal, sortByVal, false);
    })

    $("#from-id").change(function () {
        fromIdVal = $(this).val();
        sortByVal = $("#sort-by").val();

        if (fromIdVal && (currentResult.length === 0 || (tempId && tempId > fromIdVal))) { 
            getAll(fromIdVal, 'id', false);
        }

        if (fromIdVal) {
            const filteredResult = currentResult.filter(el => el.id >= fromIdVal)
            
            tempId = fromIdVal;

            renderData(filteredResult, false);
        }
    })

    $("#submit-btn").click(function () {
       const title = $("#title").val();
       const description = $("#description").val();

       if (title && description) addCard(title, description);
    })

    $(".remove-card").click(function () {
        const id = $(this).data('id');

        if (id) deleteCard(id.split('-')[1]);
    });

    $(".edit-card").click(function () {
        const id = $(this).data('id');

        if (id) editCard(id);
    });

    $(".edit-card").click(function () {
        
    });

    function getAll(fromId = 1, sortBy, isFirst) {
        $.ajax({
            method: "GET",
            url: `${apiUrl}/getAll/${fromId}/${sortBy}`,
            dataType: "json"
        }).done(function (data) {
            currentResult = [...data];

            renderData(data, isFirst);
        }).catch(function () {
            onApiError();
        });
    }


    function addCard(title, description) {
        $.post(`${apiUrl}/create`, {
            title: title,
            description: description
        }, function(data) {
            currentResult.push(data);

            const card = createCard(data);
            $("#cards-list").prepend(card);

            $("#title").empty();
            $("#description").empty();

            card.fadeIn(1000);
        });
    }

    function deleteCard(id) {
        $.ajax({
            url: `${apiUrl}/delete/${id}`,
            type: 'DELETE',
            success: () => {
                $(`#card-${id}`).fadeOut(1000);
            }
        })
    }

    function editCard(id) {
        // TODO - Edit API call
    }

    function renderData(data, isFirst) {
        $("#cards-list").empty();

        if (isFirst) initDisplay();

        for (let i = 0; i < data.length; i++) {
            const card = createCard(data[i]);
            $("#cards-list").append(card);
            card.show();
        }

        $("#cards-list").fadeIn(1500);
    }

    function onApiError() {
        alert('Проблем с API call-а. Моля проверете дали има работещо API и дали apiUrl-ът е правилен');
    }

    function initDisplay() {
        $("#left").fadeIn(800);
        $("#right").fadeIn(800);
        $("#footer-text").fadeIn(2000);
    }

    function createCard(data) {
        let clonedCard = $("#clone-this-card").clone();

        clonedCard.removeAttr('id');
        clonedCard.attr('id', `card-${data.id}`)
        clonedCard.find('.remove-card').data('id', `remove-${data.id}`);
        clonedCard.find('.edit-card').data('id', `edit-${data.id}`);
        clonedCard.find('h5').text(`${data.id} - ${data.title}`);
        clonedCard.find('p').text(`${data.description}`);
        clonedCard.find('span').text(`${data.created_at}`);

        return clonedCard;
    }
})
