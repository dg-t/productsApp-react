import React from 'react';
import './productRow.css'

class ProductTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <span className={this.props.product.stocked ? '' : 'productRowOutOfStock'}>
                        {this.props.product.name}
                    </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button onClick={this.destroy} style={{color: 'red'}}>&times;</button>
                </td>
            </tr> 
        );
    }
}

export default ProductTableRow;