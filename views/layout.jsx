var React = require('react');
var Head = require('./head.jsx');

var DefaultLayout = React.createClass({
  render: function() {
    return (
        <html>
            <Head />
        <body>
            {this.props.children}
        </body>
        </html>
    );
  }
});

module.exports = DefaultLayout;
