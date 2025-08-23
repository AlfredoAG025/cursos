
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
};

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0,
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
    return [total, total * tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const options: TaxCalculationOptions = {
    products: shoppingCart,
    tax,
};


const [total, totalWithTax] = taxCalculation(options);

// console.log({ total, totalWithTax });