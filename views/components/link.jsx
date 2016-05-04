import React from 'react';
const config = require('../../configuration');
const baseUrl = `${config.domain}:${config.port}/`;

const Link = React.createClass({
    render() {
        const href = `${baseUrl}${this.props.src}`;
        return (<link rel="stylesheet" href={href} media="screen" charSet="utf-8" />);
    }
});
module.exports = Link;
