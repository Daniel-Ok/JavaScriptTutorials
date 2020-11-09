

const productList = {
     products: [
       
        {
            title: 'A Carpet',
            imageUrl:'assets/images/capture.PNG',
            price: 39.9,
            description: 'A very nice carpet'   
        },
        {
            title: 'A Pillow',
            imageUrl: '',
            price: 19.9,
            description: 'A soft pillow'
        },

    ],
    render() {
        const renderElement = document.getElementById('app');
        const prodlist = document.createElement('ul');
        prodlist.className = 'product-list';
        var prodEl = document.createElement('li');
        for (const prod of this.products){
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