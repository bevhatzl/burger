$(function () {

    // When the Devour button is clicked...
    $(".change-eat").on("click", function (event) {
        let id = $(this).data("id");
        // The devoured column will be set to true for that burger id
        let eatState = {
            devoured: true
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // When the Add Burger button is clicked...
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        // Set the burger_name to match the value entered and devoured column to false for new burger
        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});