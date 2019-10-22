import React from 'react';
import ProductTableHeader from './productTableHeader.js';
import ProductTableRow from './productTableRow.js'

class ProductTable extends React.Component {
    render() {
        return (
            <div>
                <ProductTableHeader></ProductTableHeader>
                <ProductTableRow></ProductTableRow>
            </div>
        );
    }
}

export default ProductTable;