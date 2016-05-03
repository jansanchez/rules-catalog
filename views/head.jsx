var React = require('react');

var Head = React.createClass({
  render: function() {
    return (
        <head>
            <meta charSet="UTF-8" />
            <title>List of Rules by Categories</title>
            <link rel="shortcut icon" href="https://styleguide.auth0.com/img/favicon.png" />
            <link href="https://cdn.auth0.com/styleguide/4.4.24/index.css" rel="stylesheet" />
            <link rel="stylesheet" href="css/rules-catalog.css" media="screen" charSet="utf-8" />
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            <script src="//cdn.auth0.com/styleguide/vendor/bootstrap-3.2.0.min.js"></script>
            <script src="https://cdn.auth0.com/docs/assets/js/commons.dddfa8b0517513339405.bundle.js"></script>
            <script src="https://cdn.auth0.com/js/lock-9.1.min.js"></script>
            <script src="js/extras/widget.js"></script>
        </head>
    );
  }
});

module.exports = Head;
