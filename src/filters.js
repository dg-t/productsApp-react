import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."></input>
                <p>
                    <input type="checkbox">Only show stocked products</input>
                </p>
            </form>
        );
    }
}

export default Filters;