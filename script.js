/* =====================================
   TEXT TO SPEECH
===================================== */

function bacaTeks(teks) {

    // Hentikan suara sebelumnya
    window.speechSynthesis.cancel();

    // Membuat objek suara
    const suara = new SpeechSynthesisUtterance(teks);

    // Bahasa Indonesia
    suara.lang = "id-ID";

    // Kecepatan suara
    suara.rate = 0.9;

    // Nada suara
    suara.pitch = 1;

    // Jalankan suara
    window.speechSynthesis.speak(suara);
}


/* =====================================
   STOP AUDIO
===================================== */

function stopAudio() {

    window.speechSynthesis.cancel();

}


/* =====================================
   ANIMASI SAAT SCROLL
===================================== */

const cards = document.querySelectorAll(
    ".card, .info-box > div"
);

window.addEventListener("scroll", function () {

    cards.forEach(function(card) {

        const posisi =
            card.getBoundingClientRect().top;

        const tinggiLayar =
            window.innerHeight;

        if (posisi < tinggiLayar - 50) {

            card.style.opacity = "1";
            card.style.transform =
                "translateY(0)";

        }

    });

});


/* =====================================
   TUTUP SUARA SAAT PINDAH HALAMAN
===================================== */

window.addEventListener("beforeunload", function () {

    window.speechSynthesis.cancel();

});