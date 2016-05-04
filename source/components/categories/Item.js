import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.url} target="_self" title={this.props.name}>{this.props.name}</a>
            </li>
        );
    }
}
