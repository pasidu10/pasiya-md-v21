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
      const
