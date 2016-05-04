import React from 'react';
import Head from '../components/head.jsx';

const DefaultLayout = React.createClass({
  render() {
    return (
        <html>
            <Head title={this.props.title} />
        <body>
            {this.props.children}
        </body>
        </html>
    );
  }
});

module.exports = DefaultLayout;
