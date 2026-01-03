(function () {
    const overlay = document.createElement("div");
    overlay.id = "blurtube-overlay";

    const header = document.querySelector("ytd-masthead");
    if (header) {
        header.style.position = "relative";
        header.style.zIndex = 10000;
    }

    document.body.appendChild(overlay);
    const input = document.querySelector('input[name="search_query"]');

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            document.getElementById("blurtube-overlay")?.remove();
        }
    })
}());