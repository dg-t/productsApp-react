import React from 'react';

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }
    
    render() {
        return (
            <form>
                <input 
                type="text" 
                placeholder="Search..." 
                defaultValue={this.props.filterText} 
                onChange={this.handleChange} 
                name="filterText" />
                <p>
                    <input 
                    type="checkbox" 
                    defaultChecked={this.props.inStockOnly} 
                    onChange={this.handleChange} 
                    name="inStockOnly" /> Only show stocked products
                </p>
            </form>
        );
    }
}

export default Filters;