document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Coleta dos valores dos campos
        var firstName = document.getElementById('firstname').value;
        var lastName = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('Confirmpassword').value;

        // Coleta do valor do campo de gênero
        var gender;
        var genderOptions = document.getElementsByName('gender');
        for (var i = 0; i < genderOptions.length; i++) {
            if (genderOptions[i].checked) {
                gender = genderOptions[i].value;
                break;
            }
        }

        // Constrói a URL com os parâmetros
        var redirectUrl = 'outraPagina.html' +
            '?firstname=' + encodeURIComponent(firstName) +
            '&lastname=' + encodeURIComponent(lastName) +
            '&email=' + encodeURIComponent(email) +
            '&number=' + encodeURIComponent(number) +
            '&password=' + encodeURIComponent(password) +
            '&Confirmpassword=' + encodeURIComponent(confirmPassword) +
            '&gender=' + encodeURIComponent(gender);

        // Redirecionamento para outra página
        window.location.href = redirectUrl;
    });
});
