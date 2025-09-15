// ===== CONFIG =====
const CONFIG = {
  emailTo: "pasidusampath590@gmail.com",
  contactNumbers: ["94766359869","94784548818"], // without leading +
  whatsappBotUrl: "https://chat.whatsapp.com/D6dngoGTfPUAQDKTreVnyp?mode=ac_t"
};
// ===================

// DOM helpers
function el(id){return document.getElementById(id)}

// Wire up quick buttons on all pages where they exist
document.addEventListener("DOMContentLoaded",()=>{
  // Home quick buttons
  const waBtn1 = el("waBtn1");
  const waBtn2 = el("waBtn2");
  const mailBtn = el("mailBtn");

  if(waBtn1){ waBtn1.addEventListener("click",(e)=>{ e.preventDefault(); openWhatsApp(CONFIG.contactNumbers[0]); }); waBtn1.href = `https://wa.me/${CONFIG.contactNumbers[0]}`; }
  if(waBtn2){ waBtn2.addEventListener("click",(e)=>{ e.preventDefault(); openWhatsApp(CONFIG.contactNumbers[1]); }); waBtn2.href = `https://wa.me/${CONFIG.contactNumbers[1]}`; }
  if(mailBtn){ mailBtn.href = `mailto:${CONFIG.emailTo}`; }

  // Contact page buttons
  const contactWa1 = el("contactWa1");
  const contactWa2 = el("contactWa2");
  const contactMail = el("contactMail");
  if(contactWa1){ contactWa1.href = `https://wa.me/${CONFIG.contactNumbers[0]}`; contactWa1.addEventListener("click",(e)=>{ /* no-op — opens link */ }); }
  if(contactWa2){ contactWa2.href = `https://wa.me/${CONFIG.contactNumbers[1]}`; }
  if(contactMail){ contactMail.href = `mailto:${CONFIG.emailTo}`; }

  // Apply form (on home)
  const applyForm = el("applyForm");
  if(applyForm){
    applyForm.addEventListener("submit",(ev)=>{
      ev.preventDefault();
      const name = el("name").value.trim();
      const age = el("age").value.trim();
      const skills = el("skills").value.trim();
      const message = el("message").value.trim();
      if(!name || !skills || !message){ setStatus("Please fill all fields"); return; }

      const subject = encodeURIComponent(`Application from ${name} — PASIYA-MEAN`);
      const body = encodeURIComponent(`Name: ${name}\nAge: ${age}\nSkills: ${skills}\nMessage:\n${message}`);
      // open mailto
      window.open(`mailto:${CONFIG.emailTo}?subject=${subject}&body=${body}`,"_blank");

      // open whatsapp prefilled for both numbers
      const waText = encodeURIComponent(`Application from ${name} (Age: ${age})\nSkills: ${skills}\nMessage: ${message}`);
      CONFIG.contactNumbers.forEach(n=>{
        window.open(`https://wa.me/${n}?text=${waText}`,"_blank");
      });

      setStatus("Application opened in your email client and WhatsApp. Please confirm & send in those apps.");
    });
  }

  const clearBtn = el("clearBtn");
  if(clearBtn){ clearBtn.addEventListener("click",()=>{ if(el("applyForm")) el("applyForm").reset(); setStatus("Form cleared"); }); }

  // header mail quick link (if any header-level element uses it)
  const headerMail = el("headerMail");
  if(headerMail) headerMail.href = `mailto:${CONFIG.emailTo}`;
});

function setStatus(text){
  const s = el("status");
  if(s) s.textContent = text;
}

function openWhatsApp(number){
  window.open(`https://wa.me/${number}`,"_blank");
}
