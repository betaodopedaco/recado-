// Adicionar efeito de clique ao botão
document.getElementById('whatsappButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Efeito visual ao clicar
    this.style.transform = 'scale(0.95)';
    this.style.backgroundColor = '#075E54';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#25D366';
        
        // Redirecionar após pequeno delay para ver o efeito
        setTimeout(() => {
            window.location.href = this.href;
        }, 300);
    }, 200);
});

// Manter a animação pulsando continuamente
setInterval(() => {
    const button = document.getElementById('whatsappButton');
    button.style.animation = 'none';
    setTimeout(() => {
        button.style.animation = 'pulse 3s infinite';
    }, 10);
}, 3000);
