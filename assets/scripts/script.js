
// Effects when pass the mouse over the plans

const planoMobile = document.querySelector('.card.mobile');
const planoMultitelas = document.querySelector('.card.multiscreen');

planoMobile.addEventListener('mouseover', () => {
  planoMultitelas.classList.add('effect');
});

planoMobile.addEventListener('mouseout', () => {
  planoMultitelas.classList.remove('effect');
});

planoMultitelas.addEventListener('mouseover', () => {
  planoMobile.classList.add('effect');
});

planoMultitelas.addEventListener('mouseout', () => {
  planoMobile.classList.remove('effect');
});

// Login button modal

// Obtém os elementos do modal e do botão
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.getElementsByClassName("close")[0];

// Abre o modal quando o botão é clicado
btn.onclick = function() {
  modal.style.display = "block";
}

// Fecha o modal quando o botão de fechar é clicado
span.onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}