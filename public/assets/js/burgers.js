$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        // let eatState = $(this).data("data-devour");

        var eatState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatState
        }).then(
            function () {
                console.log("changed to devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log('entering event handler');

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});