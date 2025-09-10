/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Dados dos produtos
const products = [
  {
    name: 'Bolo de Morango',
    imageUrl: 'https://images.unsplash.com/photo-1650419424455-d0513aaf0dd6?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Cupcakes de Baunilha',
    imageUrl: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Macarons Coloridos',
    imageUrl: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Torta de Chocolate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1723507349136-09a2ee63721d?q=80&w=831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
   {
    name: 'Donuts Decorados',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Bolo Red Velvet',
    imageUrl: 'https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

function createProductCard(product: { name: string; imageUrl: string }): string {
  return `
    <div class="product-card">
      <div class="product-card-image">
        <img src="${product.imageUrl}" alt="${product.name}">
      </div>
      <div class="product-card-overlay">
        <h3>${product.name}</h3>
        <a href="#" class="btn">Comprar Agora</a>
      </div>
    </div>
  `;
}

function renderProducts(): void {
  const productsGrid = document.getElementById('products-grid');
  if (productsGrid) {
    productsGrid.innerHTML = products.map(createProductCard).join('');
  }
}

function handleHeroSlider(): void {
    const slides = document.querySelectorAll<HTMLElement>('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos

    function showSlide(index: number) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, slideInterval);

    showSlide(currentSlide); // Mostra o primeiro slide imediatamente
}


// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  handleHeroSlider();
});
