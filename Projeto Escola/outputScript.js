
document.addEventListener('DOMContentLoaded', function () {
    // Função para obter parâmetros da URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Recupera os valores dos campos da URL
    var firstName = getParameterByName('firstname');
    var lastName = getParameterByName('lastname');
    var email = getParameterByName('email');
    var number = getParameterByName('number');
    var password = getParameterByName('password');
    var confirmPassword = getParameterByName('Confirmpassword');
    var gender = getParameterByName('gender');

    // Exibe os valores na página
    document.getElementById('firstNameOutput').textContent = firstName;
    document.getElementById('lastNameOutput').textContent = lastName;
    document.getElementById('emailOutput').textContent = email;
    document.getElementById('numberOutput').textContent = number;
    document.getElementById('passwordOutput').textContent = password;
    document.getElementById('confirmPasswordOutput').textContent = confirmPassword;
    document.getElementById('genderOutput').textContent = gender;
});
