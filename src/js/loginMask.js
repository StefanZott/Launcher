document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    xhr.open("GET", "../php/database.php", true);
    xhr.send();
})