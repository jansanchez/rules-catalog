import React from 'react';

export default class Title extends React.Component {
    render() {
        return (<div className="head-title">
                    <h3>{this.props.name}</h3>
                </div>
        );
    }
}
