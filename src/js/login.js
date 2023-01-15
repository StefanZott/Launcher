for (let index = 0; index < document.getElementById("parentContainer")["children"][0].childElementCount; index++) {
    let classList = document.getElementById("parentContainer")["children"][0]["children"][index]["children"][0].classList;
    
    for (let x = 0; x < classList.length; x++) {
        if (classList[x] == "active") {
            let name = document.getElementById("parentContainer")["children"][0]["children"][0]["children"][0].id;
            console.log(name)

            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("content").innerHTML = this.responseText;
                    eval(document.getElementById("content").getElementsByTagName("script")[0].innerText);
                }
            }
            xhr.open("GET", "../html/" + name.slice(0, -3) + "Maske.html", true);
            xhr.send();
        }
    }
}

document.getElementById("registerTab").addEventListener("click", function () {
    document.getElementById("loginTab").classList.remove("active")
    document.getElementById("registerTab").classList.add("active");

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            console.log(document.getElementById("content").getElementsByTagName("script"))
            eval(document.getElementById("content").getElementsByTagName("script")[0].innerText);
        }
    }
    xhr.open("GET", "../html/registerMaske.html", true);
    xhr.send();
})

document.getElementById("loginTab").addEventListener("click", function () {
    document.getElementById("registerTab").classList.remove("active")
    document.getElementById("loginTab").classList.add("active");

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            console.log(document.getElementById("content").getElementsByTagName("script"))
            eval(document.getElementById("content").getElementsByTagName("script")[0].innerText);
        }
    }
    xhr.open("GET", "../html/loginMaske.html", true);
    xhr.send();
})