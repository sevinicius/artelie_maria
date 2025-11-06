// Image paths - all images from the imagens folder
const imageFiles = [
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.25_3a00c1eb.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.25_473bd645.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.25_95a2e579.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.25_ff35961a.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.26_01ad6173.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.26_5c98c4d5.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.26_939d3bc6.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.26_a642f9e1.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 11.54.26_ef94297b.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 18.34.12_9310caaa.jpg',
    'imagens/Imagem do WhatsApp de 2025-11-01 à(s) 18.34.12_ce4b9ecd.jpg'
];

// Load gallery images
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!galleryGrid) return;

    imageFiles.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Tiara ou laço personalizado ${index + 1} - Ateliê Clara F`;
        img.loading = 'lazy';
        
        // Handle image load error
        img.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f0f0f0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3EImagem não encontrada%3C/text%3E%3C/svg%3E';
        };
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
        
        // Add click event to open modal
        galleryItem.addEventListener('click', function() {
            openModal(imagePath);
        });
    });
}

// Modal functionality
function openModal(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imagePath;
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    
    // Close modal button
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }, 100);
});

