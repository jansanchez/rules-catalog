import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.url} target="_blank" title={this.props.name}>{this.props.name}</a>
            </li>
        );
    }
}
module.exports = Item;
