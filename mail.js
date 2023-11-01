emailjs.init("service_hbiuzel");

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var plaka = document.getElementById("plaka").value;
    var telefon = document.getElementById("telefon").value;
    var tcKimlik = document.getElementById("tcKimlik").value;
    var belgeSeri = document.getElementById("belgeSeri").value;

    var templateParams = {
        to_email: "cetinebrarkadir@gmail.com",
        plaka: plaka,
        telefon: telefon,
        tcKimlik: tcKimlik,
        belgeSeri: belgeSeri
    };

    emailjs.send("service_hbiuzel", "template_9sp3ivr", templateParams)
        .then(function(response) {
            alert("E-posta başarıyla gönderildi: ", response);
        })
        .catch(function(error) {
            alert("E-posta gönderirken hata oluştu: ", error);
        });
});
