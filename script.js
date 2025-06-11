function vota(nome)  {
    document.getElementById("risultato").textContent = 'Hai votato per ${nome}!';
}

// Dark mode toggle
const toggle = document.getElementById("toggle-dark");
toggle.addEventListener("click", () =>{
  document.body.classList.toggle("dark-mode");  
});