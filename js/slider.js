
const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        card.style.transform = "translateY(-15px)"; 
        card.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)"; 
    });

   
    card.addEventListener('mouseleave', () => {
  
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
});
