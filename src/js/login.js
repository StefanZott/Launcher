document.getElementById("registerTab").onclick = function () {
    document.getElementById("loginTab").classList.remove("active")
    document.getElementById("registerTab").classList.add("active");

    $("#contentRegister").css("display", "block");
    $("#contentLogin").css("display", "none");
}

document.getElementById("loginTab").onclick = function () {
    document.getElementById("registerTab").classList.remove("active")
    document.getElementById("loginTab").classList.add("active");

    $("#contentLogin").css("display", "block");
    $("#contentRegister").css("display", "none");
}