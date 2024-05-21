document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("background-audio");
    audio.play().catch(function (error) {
      console.log("Автовоспроизведение заблокировано браузером: ", error);
    });
  });


function validateForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const patronymic = document.getElementById("patronymic").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("passwordRepeat").value;
    const rules = document.getElementById("rules").checked;
    
    const errorMessages = [];
    
    if (!/[А-Яа-яЁё\s-]+/.test(name)) {
        errorMessages.push("Имя должно содержать только буквы, пробел и тире.");
    }
    if (!/[А-Яа-яЁё\s-]+/.test(surname)) {
        errorMessages.push("Фамилия должна содержать только буквы, пробел и тире.");
    }
    if (patronymic && !/[А-Яа-яЁё\s-]+/.test(patronymic)) {
        errorMessages.push("Отчество должно содержать только буквы, пробел и тире.");
    }
    if (!/^((?!admin).)*$/.test(email)) {
        errorMessages.push("Email не может быть 'admin'.");
    }
    if (password.length < 6) {
        errorMessages.push("Пароль должен содержать не менее 6 символов.");
    }
    if (password !== passwordRepeat) {
        errorMessages.push("Пароли не совпадают.");
    }
    if (!rules) {
        errorMessages.push("Необходимо согласиться с правилами регистрации.");
    }
    
    const errorDiv = document.getElementById("errorMessages");
    errorDiv.innerHTML = "<ul>";
    errorMessages.forEach(message => {
        errorDiv.innerHTML += `<li>${message}</li>`;
    });
    errorDiv.innerHTML += "</ul>";
    
    return errorMessages.length === 0;
}

function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }