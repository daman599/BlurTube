(function () {
    const header = document.querySelector("ytd-masthead");
    if (header) {
        header.style.position = "relative";
        header.style.zIndex = 10000;
    }

    let timer = null;

    function addBlur() {
        if (document.getElementById("blurtube-overlay")) { return }

        const overlay = document.createElement("div");
        overlay.id = "blurtube-overlay";

        const text = document.createElement("span");
        text.innerText = "Be mindful of what you watch."

        overlay.appendChild(text);
        document.body.appendChild(overlay);
    }

    function removeBlur() {
        document.getElementById("blurtube-overlay")?.remove();
    }

    function handleWarning() {
        const backdrop = document.createElement("div");
        backdrop.id = "warning-backdrop";
        document.body.appendChild(backdrop);

        const warningBlock = document.createElement("div");
        warningBlock.id = "warning";

        warningBlock.innerHTML = `
        <span>Be mindful of what you are watching.</span>
        <button id="warning-ok">Ok</button>
        `
        document.body.appendChild(warningBlock);

        document.getElementById("warning-ok").addEventListener("click", () => {
            warningBlock.remove();
            backdrop.remove();
            timer = null;
        })
    }

    function handleResults() {
        removeBlur();

        if (timer) { return }

        timer = setTimeout(handleWarning, 30 * 60 * 1000);
    }

    function checkRoute() {
        if (location.pathname === "/" || location.pathname.startsWith("/shorts/")) {
            addBlur();
        } else {
            handleResults();
        }
    }

    setInterval(checkRoute, 500);
}());