let links = document.querySelectorAll(".close");

links.forEach(function (link) {

    //Agregar un nuevo evento click a cada uno de ellos - case sensitive

    link.addEventListener("click", function (ev) {
        ev.preventDefault();



        let content = document.querySelector('.content');

        //Quitar las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown")
        //Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp")


        setTimeout(function () {
            location.href = "../index.html";
        }, 700);
        //set interval

        return false;

    });

});