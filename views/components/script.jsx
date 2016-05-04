import React from 'react';
const config = require('../../configuration');
const baseUrl = `${config.domain}:${config.port}/`;

const Script = React.createClass({
    render() {
        const url = `${baseUrl}${this.props.src}`;
        return (<script src={url} />);
    }
});
module.exports = Script;
