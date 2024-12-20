// Fungsi untuk menangani tombol SEND
  document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector("button[type='submit'], button[id='send']");

    sendButton.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah form submit

      // Ambil nilai dari input fields
      const name = document.querySelector("input[placeholder='Your Name']").value;
      const email = document.querySelector("input[placeholder='Your Email']").value;
      const phone = document.querySelector("input[placeholder='Your Phone Number']").value;

      // Mengosongkan form input terlebih dahulu
      document.querySelector("input[placeholder='Your Name']").value = "";
      document.querySelector("input[placeholder='Your Email']").value = "";
      document.querySelector("input[placeholder='Your Phone Number']").value = "";
      document.querySelector("textarea[placeholder='Your Message']").value = "";

      // Tampilkan alert setelah form kosong
      setTimeout(() => {
        alert(`Thank you, ${name}! Your input has been received.\nWe'll contact you at ${email} or ${phone}.`);
      }, 100); // Delay kecil agar form terlihat dikosongkan dulu
    });
  });
