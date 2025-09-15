document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => btn.style.transform = "scale(1.1)");
    btn.addEventListener("mouseout", () => btn.style.transform = "scale(1)");
  });

  const applyForm = document.getElementById("applyFormElement");
  if(applyForm){
    applyForm.addEventListener("submit", function(e){
      e.preventDefault();
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const age = document.getElementById("age").value;
      const city = document.getElementById("city").value;
      const skills = document.getElementById("skills").value;
      const photo = document.getElementById("photo").value ? "✅ Photo selected" : "❌ No photo selected";

      const subject = encodeURIComponent("New Application from PASIYA-MEAN Website");
      const body = encodeURIComponent(
        `Name: ${fullName}\nEmail: ${email}\nAge: ${age}\nCity: ${city}\nSkills/Message: ${skills}\nPhoto: ${photo}\n\n⚠ Please attach your photo manually in Gmail before sending.`
      );

      // Open Gmail
      window.open(`mailto:pasidusampath590@gmail.com?subject=${subject}&body=${body}`, "_blank");

      // Open WhatsApp (Owner numbers)
      const wa1 = "94766359869";
      const wa2 = "94784548818";
      window.open(`https://wa.me/${wa1}?text=${body}`, "_blank");
      window.open(`https://wa.me/${wa2}?text=${body}`, "_blank");

      document.getElementById("status").innerText = "Application opened! Attach your photo in Gmail and send.";
      applyForm.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const applyForm = document.getElementById("applyFormElement");

  applyForm.addEventListener("submit", function(e){
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const skills = document.getElementById("skills").value;
    const photo = document.getElementById("photo").value ? "✅ Photo selected" : "❌ No photo selected";

    const message = encodeURIComponent(
      `📌 New Application from PASIYA-MEAN Website\n\n` +
      `Name: ${fullName}\n` +
      `Age: ${age}\n` +
      `City: ${city}\n` +
      `Skills/Message: ${skills}\n` +
      `Photo: ${photo}\n\n⚠ Please attach your photo manually before sending.`
    );

    // WhatsApp Owner numbers
    const waNumbers = ["94766359869", "94784548818"];
    waNumbers.forEach(number => {
      window.open(`https://wa.me/${number}?text=${message}`, "_blank");
    });

    document.getElementById("status").innerText = "WhatsApp opened! Please attach your photo and send.";
    applyForm.reset();
  });
});
