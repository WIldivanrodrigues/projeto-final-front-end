document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    carouselItems.forEach(item => {
        const img = item.querySelector('img');
        
        if (img && img.alt) {
            const caption = document.createElement('div');
            caption.className = 'carousel-caption d-none d-md-block';
            caption.style.pointerEvents = 'none';
            
            const captionText = document.createElement('p');
            captionText.textContent = img.alt;
            
            captionText.style.padding = '0px';
            captionText.style.color = 'white'; 
            captionText.style.position = 'absolute';
            captionText.style.fontWeight = 'bold';
            captionText.style.textAlign = 'left';
            captionText.style.borderRadius = '5px';
            captionText.style.zIndex = '2';
            
            caption.appendChild(captionText);
            item.appendChild(caption);
        }
        if (img) {
            // Criar o gradiente sobre a imagem
            const gradientOverlay = document.createElement('div');
            gradientOverlay.className = 'gradient-overlay';
            gradientOverlay.style.position = 'absolute';
            gradientOverlay.style.bottom = '0';
            gradientOverlay.style.left = '0';
            gradientOverlay.style.width = '100%';
            gradientOverlay.style.height = '40%';
            gradientOverlay.style.background = 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))';
            gradientOverlay.style.zIndex = '1';
            gradientOverlay.style.pointerEvents = 'none';

            // Definir o container da imagem como relative
            item.style.position = 'relative';
            
            // Adicionar o gradiente ao item do carrossel
            item.appendChild(gradientOverlay);
        }
    });
});
