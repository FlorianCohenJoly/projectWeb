function getInputLoginValue() {
    const email = document.getElementsByClassName("email").item(0).value;
    const password = document.getElementsByClassName("password").item(0).value;
    console.log(email);
    console.log(password);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5500/login', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(`&email=${email}&password=${password}`);
} 

var icon_search = document.getElementById('icon-search');
var search_input = document.getElementById('search-input');

icon_search.addEventListener('click', function(e) {
    search_input.focus();
}); 