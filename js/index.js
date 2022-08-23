function setLanguage(value) {

    //set session languge and reload website
    sessionStorage.setItem("language", value);
    location.reload();
}

$(document).ready(function () {
    //content in english
    if (sessionStorage.getItem("language") === "eng") {
        $(".welcome-title").text("Welcome");
        $(".background-img").attr('src', "media/img/background1.jpg");
        $(".language > a > .active-eng").css("border", "2px solid white");
        //content in german
    } else {
        $(".welcome-title").text("Willkommen");
        $(".welcome-title").css("font-size", "15vw");
        $(".background-img").attr('src', "media/img/background2.jpg");
        $(".language > a > .active-deu").css("border", "2px solid white");
    }
});
