  
// jS. NAVBAR //
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 3000; // Duração da animação em milissegundos
    let current = 0;
    const increment = target / (duration / 100);

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    setTimeout(() => {
      updateCounter();
    }, 500); // Atraso antes de iniciar a animação
  });
});


