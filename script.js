var icon_search = document.getElementById('icon-search');
var search_input = document.getElementById('search-input');
let x = document.getElementsByClassName('product-name');
let products = document.querySelectorAll('#products');

icon_search.addEventListener('click', function(e) {
    search_input.focus();
});

search_input.addEventListener("input", function(e) {
    console.log(search_input.value);
    var xml = new XMLHttpRequest();
    xml.open("GET", `http://10.57.29.22:8080/articles`)
    xml.send();

    /*xml.onload = function () {
        console.log(xml.responseText)
    }*/
});

function searchFunction() {
    //search_input = search_input.toLowerCase();

    /*for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.includes(search_input)) {
    }
        else {
            products[i].style.display = "block";  
            }
        }
    if (search_input == "") {
        products[i].style.display = "block";  
    } */
}


