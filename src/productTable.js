import React from 'react';
import ProductTableHeader from './productTableHeader.js';
import ProductTableRow from './productTableRow.js'

class ProductTable extends React.Component {
    render() {
        let productsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        let rows = [];
        productsArray.forEach((product) => {
            rows.push(<ProductTableRow product={product} key={product.id}></ProductTableRow>
                );
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <ProductTableHeader column="name"></ProductTableHeader>
                            <ProductTableHeader column="price"></ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;