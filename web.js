const form = document.getElementById("loginForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    // Данные для входа
    const correctUsername = "admin";
    const correctPassword = "123456";

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        message.textContent =
            "Успешный вход! Добро пожаловать.";

        message.className = "success";

        document.getElementById("loginBox").innerHTML = 
            <h1>Добро пожаловать! 👋</h1>

            <p>
                Вы успешно вошли в систему.
            </p>

            <button id="logout">
                Выйти
            </button>
        ;

        document.getElementById("logout").onclick = function() {
            location.reload();
        };

    } else {

        message.textContent =
            "Неверный логин или пароль.";

        message.className = "error";
    }

});