
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

class ProductItem {

    constructor(product) {
        this.product = product;
    };

    addToCart() {
        console.log('Adding products to cart ...');
        console.log(this.product)
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to cart</button>
        </div>
        </div>
        `;
        const addCartBtn = prodEl.querySelector('button');
        addCartBtn.addEventListener('click',this.addToCart.bind(this));
        return prodEl;
       
    };

}
class ProductList {
    products =[
        new Product('A Pillow', 'assets/images/capture.PNG', 39.9, 'A very nice carpet' ),
        new Product('A man','assets/images/professional photo copy.png', 100.00, 'A very strong man')
    ];
  

    render(){
        const renderElement = document.getElementById('app');
        const prodlist = document.createElement('ul');
        prodlist.className = 'product-list';
       
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodlist.append(prodEl);
           
        };
        renderElement.append(prodlist);
       
    }
    constructor () {}
}

const productList = new ProductList();

productList.render();