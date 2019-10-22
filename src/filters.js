import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <div>
          
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />Only show stocked products
                </p>
           
            </div>
        );
    }
}

export default Filters;