import React from 'react';
import Filters from './filters.js';
import ProductForm from './productForm.js';
import ProductTable from './productTable.js';

var PRODUCTS = {
    '1': {id: 1, category: "Fruit", price: "3,25", stocked: true, name: "Apple"},
    '2': {id: 2, category: "Cookie", price: "2,49", stocked: false, name: "Ringo"},
    '3': {id: 3, category: "Pasta", price: "1,99", stocked: true, name: "Penne rigate"},
    '4': {id: 4, category: "Chiken", price: "6,99", stocked: false, name: "Wings"},
    '5': {id: 5, category: "Meat", price: "12,45", stocked: true, name: "Scotch fillet"},
    '6': {id: 6, category: "Sweet", price: "4,65", stocked: true, name: "Tiramisu"}
};

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false,
            products: PRODUCTS
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    saveProduct(product) {
        if(!product.id) {
        product.id = new Date().getTime();
    }
        this.setState((prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return { products };
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[productId];
            return { products };
        });
    }

    render() {
        return (
            <div>
                <Filters 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                onFilter={this.handleFilter}>
                </Filters>
                <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                onDestroy={this.handleDestroy}>
                </ProductTable>
                <ProductForm onSave={this.saveProduct}></ProductForm>
            </div>
        );
    }
}

export default Products;