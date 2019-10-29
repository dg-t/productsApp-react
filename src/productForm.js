import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSave(e) {
        this.props.onSave(this.state.product); 
        this.setState({
            product: Object.assign({}, RESET_VALUES), // reset form value after submitting
            errors: {} 
        });
        e.preventDefault(); // prevent form subimt from triggering HTTP Post
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product };
        });
    }
    
    render() {
        return (
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name
                        <br />
                        <input type="text" name ="name" onChange={this.handleChange} value={this.state.product.name} />
                    </label>
                </p>
                <p>
                    <label>
                        Category
                        <br />
                        <input type="text" name="category" onChange={this.handleChange} value ={this.state.product.category} />
                    </label>
                </p>
                <p>
                    <label>
                        Price
                        <br />
                        <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price} />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked} />
                        In stock?
                    </label>
                </p>
                <input type="submit" value="Save" onClick={this.handleSave} />
            </form>
        );
    }
}

export default ProductForm;