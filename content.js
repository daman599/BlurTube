(function () {
    const overlay = document.createElement("div");
    overlay.id = "blurtube-overlay";

    const header = document.querySelector("ytd-masthead");
    if (header) {
        header.style.position = "relative";
        header.style.zIndex = 10000;
    }

    document.body.appendChild(overlay);
}());