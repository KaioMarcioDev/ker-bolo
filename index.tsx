/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Dados dos produtos
const products = [
  {
    name: 'Bolo de Morango',
    imageUrl: './images/bolo-morango.png'
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
    imageUrl: './images/torta-choco.png'
  },
   {
    name: 'Donuts Decorados',
    imageUrl: './images/donuts.png'
  },
  {
    name: 'Bolo Red Velvet',
    imageUrl: './images/velvet.png'
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
