import React from 'react';
import './productTableHeader.css';

class ProductTableHeader extends React.Component {
    render() {
        return (
            <th>
                {this.props.column}
                <button className="productTableHeader-current">&#x25B2;</button>
                <button>&#x25BC;</button>
            </th>
        );
    }
}

export default ProductTableHeader