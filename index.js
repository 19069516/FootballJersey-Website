// Sample product data
const products = [
    { id: 1, title: 'Premier Leauge', price: 49.99, imageUrl: 'Images/Leagues/PL.png' },
    { id: 2, title: 'La Liga', price: 59.99, imageUrl: 'Images/Leagues/LaLiga.svg.png' },
    { id: 2, title: 'Team Jersey 2', price: 59.99, imageUrl: 'jersey2.jpg' },
    { id: 2, title: 'Team Jersey 2', price: 59.99, imageUrl: 'jersey2.jpg' },
    { id: 2, title: 'Team Jersey 2', price: 59.99, imageUrl: 'jersey2.jpg' },
    // Add more products as needed
];

// Function to display products on the page
function renderProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.imageUrl;
        image.alt = product.title;
        image.classList.add('product-image');

        const title = document.createElement('h2');
        title.classList.add('product-title');
        title.textContent = product.title;

        const price = document.createElement('div');
        price.classList.add('product-price');
        price.textContent = `$${product.price.toFixed(2)}`;

        const button = document.createElement('a');
        button.href = '#'; // Add link to product page
        button.classList.add('button');
        button.textContent = 'Shop Now';

        card.appendChild(image);
        card.appendChild(title);
       // card.appendChild(price);
        card.appendChild(button);

        productList.appendChild(card);
    });
}

// Call the function to render products when the page loads
window.onload = renderProducts;
