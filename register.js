function getInputValue() {
    console.log('test');
    const prenom = document.getElementsByClassName("prenom").item(0).value;
    const nom = document.getElementsByClassName("nom").item(0).value;
    const email = document.getElementsByClassName("email").item(0).value;
    const password = document.getElementsByClassName("password").item(0).value;
    const date = document.getElementsByClassName("date").item(0).value;
    console.log(prenom);
    console.log(nom);
    console.log(email);
    console.log(password);
    console.log(date);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5500/register', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(`prenom=${prenom}&nom=${nom}&email=${email}&password=${password}&date=${date}`);
}