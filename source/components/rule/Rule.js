import React from 'react';
import config from '../../../configuration';
const baseUrl = `${config.domain}:${config.port}/`;

export default class Rule extends React.Component {
  render() {
    const url = `${baseUrl}rules/${this.props.id}`;

    return (
      <div><a href={url} title="{this.props.title}" target="_self">{this.props.title}</a></div>
    );
  }
}
