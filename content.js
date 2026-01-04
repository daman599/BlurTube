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

    function handleReminder() {
        const backdrop = document.createElement("div");
        backdrop.id = "reminder-backdrop";
        document.body.appendChild(backdrop);

        const reminderBlock = document.createElement("div");
        reminderBlock.id = "reminder";

        reminderBlock.innerHTML = `
        <span>Be mindful of what you are watching.</span>
        <button id="reminder-button">Ok</button>
        `
        document.body.appendChild(reminderBlock);

        document.getElementById("reminder-button").addEventListener("click", () => {
            reminderBlock.remove();
            backdrop.remove();
            timer = null;
        })
    }

    function handleResults() {
        removeBlur();

        if (timer) { return }

        timer = setTimeout(handleReminder, 30 * 60 * 1000);
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