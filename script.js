function hitungCinta() {
    let nama1 = document.getElementById("nama1").value;
    let nama2 = document.getElementById("nama2").value;

    if (nama1 === "" || nama2 === "") {
        alert("Isi dulu namanya ya 💗");
        return;
    }

    let persen = Math.floor(Math.random() * 41) + 60; // 60–100%

    let pesan = "";
    if (persen > 90) {
        pesan = "Cinta sejati 💍✨";
    } else if (persen > 75) {
        pesan = "Cocok banget 💞";
    } else {
        pesan = "Masih ada harapan 💗";
    }

    document.getElementById("hasil").innerHTML =
        `💖 ${nama1} & ${nama2} 💖<br>
         <strong>${persen}%</strong><br>
         ${pesan}`;
}
