const formLoader = document.querySelector('.loader');
const addBtn = document.querySelector('#addLink');
const showBtn = document.querySelector('#productsLink');
const content = document.querySelector('.content');
const productSelector = document.querySelector('.data-product');

formLoader.addEventListener('change', e => {
    let productType = e.target.value;
    switch (productType) {
        case 'milk':{
            formLoader.querySelector('label').innerHTML=
                `Special parameter<input type="number" name="fat" class="form-control" 
                placeholder="Enter fat">` ;
            break;
        }
        case 'chocolate':{
            formLoader.querySelector('label').innerHTML=
                `Special parameter<input type="text" name="kind" class="form-control" 
                placeholder="Enter kind">` ;
            break;
        }
        case 'wine':{
            formLoader.querySelector('label').innerHTML=
                `Special parameter<input type="number" name="alcohol" class="form-control" 
                placeholder="Enter alcohol">` ;
            break;
        }
    }
});

formLoader.onsubmit = e => {
    e.preventDefault();
    let res = {};
    switch (e.target.type.value) {
        case 'milk':{
            res = new Milk (e.target.productID.value,
                e.target.title.value,
                e.target.manufacture.value,
                e.target.price.value,
                e.target.fat.value);
            break;
        }
        case 'chocolate':{
            res = new Chocolate (e.target.productID.value,
                e.target.title.value,
                e.target.manufacture.value,
                e.target.price.value,
                e.target.kind.value);
            break;
        }
        case 'wine':{
            res = new Wine (e.target.productID.value,
                e.target.title.value,
                e.target.manufacture.value,
                e.target.price.value,
                e.target.alcohol.value);
            break;
        }
    }
    store.add(res);
    console.log(store);
    formLoader.reset();
}


addBtn.onclick = e => {
    formLoader.style.display = 'flex';
    content.style.display = 'none';
}

function renderProductList(product) {
    function getOwnProperty(good) {
        if(good.fat)
            return `Fat: ${good.fat} %`
        else if (good.kind)
            return `Kind: ${good.kind}`
        else if(good.alcohol)
            return `Alcohol: ${good.alcohol} %`
        else return `   `;
    }

   function card(item) {
        return `<div class="card">
<h2>${item.constructor.name}</h2>
<h3>ID: ${item.id}</h3>
<h3>Title: ${item.title}</h3>
<h3>Manufacture: ${item.manufacture}</h3>
<h3>Special parameter: ${getOwnProperty(item)}</h3>
<h3>Price: ${item.price} NIS</h3>
</div>`}

    content.innerHTML =  product.map(card).join('\n');
}

showBtn.onclick = e => {
    formLoader.style.display = 'none';
    content.style.display = 'flex';
    renderProductList(store.getAll());
}
//----------------Selector--------------------
productSelector.addEventListener('click', (e) => {
    formLoader.style.display = 'none';
    content.style.display = 'flex';
    renderProductList(store.getByType(e.target.value));
    console.log(e);
})


