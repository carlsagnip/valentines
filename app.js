
  document.addEventListener("DOMContentLoaded", function () {
    const cover = document.createElement("div");
    cover.style.position = "fixed";
    cover.style.top = "0";
    cover.style.left = "0";
    cover.style.width = "100%";
    cover.style.height = "100vh";
    cover.style.backgroundColor = "pink";
    cover.style.display = "flex";
    cover.style.justifyContent = "center";
    cover.style.alignItems = "center";
    cover.style.fontSize = "2rem";
    cover.style.color = "white";
    cover.style.fontFamily = "Georgia, serif";
    cover.style.zIndex = "1000";
    cover.innerText = "Swipe Down";
    document.body.appendChild(cover);

    let startY;

    document.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    });

    document.addEventListener("touchmove", function (e) {
        const moveY = e.touches[0].clientY;
        if (moveY - startY > 50) { // Detect swipe down
            cover.style.transition = "transform 0.5s ease-in-out";
            cover.style.transform = "translateY(100%)";
            setTimeout(() => cover.remove(), 500);
        }
    });
});

document.getElementById("ctaButton").addEventListener("click", function () {
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "countdown.html";
    }, 1000);
});

