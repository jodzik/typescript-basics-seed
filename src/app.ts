class Coupon {
    static allowed = ['Pepperoni', 'Blazing inferno'];
    static create(percentage: number){
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.create(25));

interface SizesInterface {
    availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}


class Pizza extends Sizes implements PizzaInterface{
    toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]){
        this.sizes = sizes;
    }

    addTopping(topping: string){
        this.toppings.push(topping);
    }

}



const pizza = new Pizza('Pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);