import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
    render() {
        return (<div className="head-title">
                    <h3>{this.props.name}</h3>
                </div>
        );
    }
}
module.exports = Title;
