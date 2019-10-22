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
    render() {
        return (
            <div>
                <Filters></Filters>
                <ProductTable products={PRODUCTS}></ProductTable>
                <ProductForm></ProductForm>
            </div>
        );
    }
}

export default Products;