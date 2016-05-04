import React from 'react';

const Title = React.createClass({
    render() {
        return (<title>{this.props.title}</title>);
    }
});
module.exports = Title;
