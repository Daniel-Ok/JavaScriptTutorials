
class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

const productList = {
     products: [
       new Product('A Pillow', 'assets/images/capture.PNG', 39.9, 'A very nice carpet' ),
       new Product('A man','assets/images/professional photo copy.png', 100.00, 'A very strong man')
    ],
    render() {
        const renderElement = document.getElementById('app');
        const prodlist = document.createElement('ul');
        prodlist.className = 'product-list';
       
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
            </div>
            </div>
            `;
            prodlist.append(prodEl);
           
        };
        renderElement.append(prodlist);
       
    }
};

productList.render();