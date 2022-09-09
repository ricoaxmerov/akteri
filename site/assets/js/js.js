function Checker() {
    var username = document.getElementById("username").value

    var pass = document.getElementById("pass").value

    if (username === "axmerov" && pass === 023024123) {
        document.getElementById("tagp").innerHTML = "Вход выполнен!"
    } else {
        document.getElementById("tagp").innerHTML = "Неправильный логин или пароль"
    }


}