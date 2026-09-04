onload = () => {
    document.body.classList.remove("container");

    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");

    if (music && btn) {
        const icon = btn.querySelector(".music-icon");
        const label = btn.querySelector(".music-label");

        // Audio sudah autoplay dalam kondisi muted (selalu diizinkan browser)
        music.play().catch(() => { /* diamkan, akan tetap coba lagi saat user klik */ });

        btn.addEventListener("click", () => {
            music.muted = !music.muted;

            if (!music.muted) {
                music.play();
                icon.textContent = "🔊";
                label.textContent = "";
                btn.classList.remove("pulse");
                btn.classList.add("active");
            } else {
                icon.textContent = "🔇";
                label.textContent = "Tap for sound";
                btn.classList.add("pulse");
                btn.classList.remove("active");
            }
        });
    }
};
