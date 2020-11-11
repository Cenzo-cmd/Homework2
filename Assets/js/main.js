$(document).ready(() => {

    $("#submitButton").on("click", function(event) {
        event.preventDefault();
        console.log("clicked");


        const name = $(".nameForm").val().trim();
        const email = $(".emailForm").val().trim();
        const message = $(".messageForm").val().trim();

        if (!name && !email && !message) {
            $("#appendHere").append(`
            <br><h5>Please fill in all fields</h5>`)
            setTimeout(function() {
                $("#appendHere").empty()
            }, 2000)
            return;
        }
        console.log(name, email, message);

        $(".nameForm").val("");
        $(".emailForm").val("");
        $(".messageForm").val("");

        $("#appendHere").append(`
            <br><h5>I will contact you soon.  Thanks ${name}!</h5>`)
        setTimeout(function() {
            $("#appendHere").empty()
        }, 2000)

    })
});