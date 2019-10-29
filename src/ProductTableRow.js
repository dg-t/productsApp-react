import React from 'react';
import './productRow.css'

class ProductTableRow extends React.Component {
    constructor(props) {
        super(props);

        this.destroy = this.destroy.bind(this);
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    render() {
        var name = this.props.product.stocked ? this.props.product.name :
        <span className={this.props.product.stocked ? '' : 'productRowOutOfStock'}> 
            {this.props.product.name}
        </span>

        return (
            <tr>
                <td>
                    {name}
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