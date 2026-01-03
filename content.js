(function () {
    const header = document.querySelector("ytd-masthead");
    if (header) {
        header.style.position = "relative";
        header.style.zIndex = 10000;
    }

    function addBlur() {
        if (document.getElementById("blurtube-overlay")) { return }

        const overlay = document.createElement("div");
        overlay.id = "blurtube-overlay";

        document.body.appendChild(overlay);
    }

    function removeBlur() {
        document.getElementById("blurtube-overlay")?.remove();
    }

    function checkRoute() {
        if (location.pathname === "/" || location.pathname.startsWith("/shorts/")) {
            addBlur();
        } else {
            removeBlur();
        }
    }

    setInterval(checkRoute, 500);
}());