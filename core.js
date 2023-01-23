class Product{
    #id;
    #title;
    #manufacture;
    #price;

    constructor(id, title, manufacture, price) {

        this.#id = id;
        this.#title = title;
        this.#manufacture = manufacture;
        this._price = price;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get manufacture() {
        return this.#manufacture;
    }

    set manufacture(value) {
        this.#manufacture = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this.#price = value;
    }
}
class Milk extends Product{
    #fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.#fat = fat;
        this._fat = fat;
    }

    get fat() {
        return this._fat;
    }

    set fat(value) {
        this._fat = value;
    }
}
class Chocolate extends Product{
    #kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.#kind = kind;
        this._kind = kind;
    }

    get kind() {
        return this._kind;
    }

    set kind(value) {
        this._kind = value;
    }
}
class Wine extends Product {
    #alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.#alcohol = alcohol;
        this._alcohol = alcohol;
    }

    get alcohol() {
        return this._alcohol;
    }

    set alcohol(value) {
        this._alcohol = value;
    }
}
class Store {
    #products = [];

    add(product){
        this.#products.push(product);
    };
    getAll(){
        return this.#products;
    };
    getByType(type){
        return this.#products.filter( value => value.constructor.name === type)
    };
}

const milk1 = new Milk(123,'Dare Milk','SmartCow', 10, 4);
const chocolate1 = new Chocolate(124, 'Chocolate Dark', 'Rittersport',12,'dark');
const wine1 = new Wine(125,'Porto','Fanagoria',35,15);
const wine2 = new Wine(126,'Red Wine','Inkermann',40,15);

const store = new Store();
store.add(milk1);
store.add(chocolate1);
store.add(wine1);
store.add(wine2);
console.log(store.getAll());
store.getAll().forEach(item => console.log(item))
