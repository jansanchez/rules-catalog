import React from 'react';
import Link from './link.jsx';
import Script from './script.jsx';
import Title from './title.jsx';

const Head = React.createClass({
    render() {
        return (
            <head>
                <meta charSet="UTF-8" />
                <Title title={this.props.title} />
                <link rel="shortcut icon" href="https://styleguide.auth0.com/img/favicon.png" />
                <link href="https://cdn.auth0.com/styleguide/4.4.24/index.css" rel="stylesheet" />
                <link href="https://cdn.auth0.com/docs/assets/js/commons.dddfa8b0517513339405.css" rel="stylesheet" />
                <Link src="css/rules-catalog.css" />
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="//cdn.auth0.com/styleguide/vendor/bootstrap-3.2.0.min.js"></script>
                <script src="https://cdn.auth0.com/docs/assets/js/commons.dddfa8b0517513339405.bundle.js"></script>
                <script src="https://cdn.auth0.com/docs/assets/js/standard.cf97fa9a59b1db233300.bundle.js"></script>
                <script src="https://cdn.auth0.com/js/lock-9.1.min.js"></script>
                <Script src="js/extras/widget.js" />
            </head>
        );
    }
});

module.exports = Head;
