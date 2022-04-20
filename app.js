function darkTheme() {
    var body = document.querySelector("body");
    var header = document.querySelector("header");
    var h1 = document.querySelectorAll("h1");
    var h2 = document.querySelectorAll("h2");
    var h3 = document.querySelectorAll("h3");
    var p = document.querySelectorAll("p");
    var a = document.querySelectorAll("a");
    var darkThemeButton = document.querySelector(".dark-theme");
    var singup = document.querySelectorAll(".signup");
    /* var navLinksBefore = getComputedStyle(
        document.querySelector("li a"),
        "::before"
    ); */

    // console.log(navLinksBefore.length);

    if (darkThemeButton.style.backgroundColor == "white") {
        body.style.backgroundColor = "#4e4e4e";
        header.style.backgroundColor = "black";

        for (let i = 0; i < h1.length; i++) {
            var link = h1[i];

            link.style.color = "white";
        }

        for (let i = 0; i < h2.length; i++) {
            var link = h2[i];

            link.style.color = "white";
        }

        for (let i = 0; i < h3.length; i++) {
            var link = h3[i];

            link.style.color = "white";
        }

        for (let i = 0; i < p.length; i++) {
            var link = p[i];

            link.style.color = "white";
        }

        for (let i = 0; i < a.length; i++) {
            var link = a[i];

            link.style.color = "white";
        }

        /* for (let i = 0; i < navLinksBefore.length; i++) {
            var link = navLinksBefore[i];

            link.style.backgroundColor = "white";
        } */

        darkThemeButton.style.backgroundColor = "black";

        for (let i = 0; i < singup.length; i++) {
            var link = singup[i];

            link.style.border = "1px solid white";
        }
    } else {
        body.style.backgroundColor = "#f2f2f2";
        header.style.backgroundColor = "white";

        for (let i = 0; i < h1.length; i++) {
            var link = h1[i];

            link.style.color = "black";
        }

        for (let i = 0; i < h2.length; i++) {
            var link = h2[i];

            link.style.color = "black";
        }

        for (let i = 0; i < h3.length; i++) {
            var link = h3[i];

            link.style.color = "black";
        }

        for (let i = 0; i < p.length; i++) {
            var link = p[i];

            link.style.color = "black";
        }

        for (let i = 0; i < a.length; i++) {
            var link = a[i];

            link.style.color = "black";
        }

        /* for (let i = 0; i < navLinksBefore.length; i++) {
            var link = navLinksBefore[i];

            link.style.backgroundColor = "black";
        } */

        for (let i = 0; i < singup.length; i++) {
            var link = singup[i];

            link.style.color = "white";
        }

        darkThemeButton.style.backgroundColor = "white";
    }
}

// Fonction qui vérifie que l'username existe dans la base de donnée et que le mot de passe associé est le même.
function verifyLogin() {}

// Fonction qui vérifie que l'e-mail et le mot de passe entrés par l'utilisateur sont conformes.
function verifySignup() {
    const email = document.getElementById("email").value;
    const emailVerif = /\S+@\S+\.\S+/;
    const emailMessage = document.getElementById("email-not-valid");
    const username = document.getElementById("username").value;
    const usernameMessage = document.getElementById("username-not-valid");
    const password = document.getElementById("password").value;
    const passwordMessage = document.getElementById("password-not-valid");
    const verifyPassword = document.getElementById("password2").value;
    const passwordConfirmMessage = document.getElementById(
        "password-not-confirmed"
    );

    if (!email.match(emailVerif)) {
        console.log("Message erroné");
        emailMessage.style.opacity = "1";
    } else {
        console.log("Email correcte");
        emailMessage.style.opacity = "0";
    }

    if (username.length < 6) {
        usernameMessage.style.opacity = "1";
    } else {
        usernameMessage.style.opacity = "0";
    }

    if (password.length < 8) {
        passwordMessage.style.opacity = "1";
    } else {
        passwordMessage.style.opacity = "0";
    }

    if (verifyPassword.localeCompare(password) != 0) {
        passwordConfirmMessage.style.opacity = "1";
    } else {
        passwordConfirmMessage.style.opacity = "0";
    }
}
