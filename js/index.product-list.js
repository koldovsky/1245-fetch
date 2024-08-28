const products = [
  {
    id: '1',
    title: 'Baby Yoda',
    description:
      'A cute and popular sticker featuring Baby Yoda, perfect for Star Wars fans.',
    image: 'img/baby-yoda.svg',
    price: 9.99,
  },
  {
    id: '2',
    title: 'Banana',
    description:
      'A fun and quirky banana sticker, ideal for adding a playful touch to any surface.',
    image: 'img/banana.svg',
    price: 8.99,
  },
  {
    id: '3',
    title: 'Girl',
    description:
      'A stylish sticker depicting a girl, great for personalizing notebooks or laptops.',
    image: 'img/girl.svg',
    price: 7.99,
  },
  {
    id: '4',
    title: 'Viking',
    description:
      'A bold and adventurous Viking sticker, perfect for those who love history and mythology.',
    image: 'img/viking.svg',
    price: 6.99,
  },
];

function renderProducts(products) {
  let productsHtml = '';
  for (const product of products) {
    productsHtml += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
  }
  document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProducts(products);
