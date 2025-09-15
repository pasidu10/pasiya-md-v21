const CONFIG = {
  emailTo: "pasidusampath590@gmail.com",
  contactNumbers: ["94766359869","94784548818"],
  whatsappBotUrl: "https://chat.whatsapp.com/D6dngoGTfPUAQDKTreVnyp?mode=ac_t",
  projects: [
    {title:"PASIYA-MD Signal Bot",desc:"WhatsApp/Telegram signal bot",link:"https://github.com/PASIYAv12/PASIYA-MD"},
    {title:"Binance Auto Trading Bot",desc:"Automated Binance trading bot",link:"https://github.com/PASIYAv12/Btc"},
    {title:"Forex / Exness MT5 Bot",desc:"MT5 / Exness multi-pair trading bot",link:"https://github.com/PASIYAv12/forex-exnes-bot"}
  ]
};

const projEl = document.getElementById("projectsList");
CONFIG.projects.forEach(p=>{
  const div = document.createElement("div"); div.className="project-card";
  div.innerHTML = `<h4>${p.title}</h4><p>${p.desc}</p><a class='navbtn' href='${p.link}' target='_blank'>Open</a>`;
  projEl.appendChild(div);
});

document.getElementById("waBot").href = CONFIG.whatsappBotUrl;

document.getElementById("wa1").addEventListener("click",e=>{
  e.preventDefault(); openWhatsAppTo(CONFIG.contactNumbers[0]);
});
document.getElementById("wa2").addEventListener("click",e=>{
  e.preventDefault(); openWhatsAppTo(CONFIG.contactNumbers[1]);
});

document.getElementById("applyForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Application from ${name} — PASIYA-MEAN`);
  const body = encodeURIComponent(`Name: ${name}\nAge: ${age}\nSkills: ${skills}\nMessage:\n${message}`);
  window.open(`mailto:${CONFIG.emailTo}?subject=${subject}&body=${body}`,"_blank");

  const waText = encodeURIComponent(`Application from ${name} (Age: ${age})\nSkills: ${skills}\nMessage: ${message}`);
  CONFIG.contactNumbers.forEach(num=>{
    window.open(`https://wa.me/${num}?text=${waText}`,"_blank");
  });

  setStatus("Application opened in your email and WhatsApp.");
});

document.getElementById("clearBtn").addEventListener("click",()=>{
  document.getElementById("applyForm").reset();
  setStatus("Form cleared");
});

function openWhatsAppTo(number){
  window.open(`https://wa.me/${number}`,"_blank");
}
function setStatus(text){
  document.getElementById("status").textContent=text;
}
