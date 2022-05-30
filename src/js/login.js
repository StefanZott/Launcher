for (let index = 0; index < document.getElementById("loginTab").classList.length; index++) {
    if (document.getElementById("loginTab").classList[index] === "active") {
        $("#content").load("../html/loginMaske.html");
    }
}

for (let index = 0; index < document.getElementById("registerTab").classList.length; index++) {
    if (document.getElementById("registerTab").classList[index] === "active") {
        $("#content").load("../html/registerMaske.html");
    }
}

document.getElementById("registerTab").onclick = function () {
    document.getElementById("loginTab").classList.remove("active")
    document.getElementById("registerTab").classList.add("active");

    $("#content").load("../html/registerMaske.html");
}

document.getElementById("loginTab").onclick = function () {
    document.getElementById("registerTab").classList.remove("active")
    document.getElementById("loginTab").classList.add("active");

    $("#content").load("../html/loginMaske.html");
}