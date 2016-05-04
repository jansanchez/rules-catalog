import React from 'react';

export default class Banner extends React.Component {
  render() {
    return (
      <section className="jumbotron">
        <div data-name={this.props.logo} className="circle-logo">
        <div className="logo"></div>
        </div>
        <h1>{this.props.title}</h1>
        <p>{this.props.summary}</p>
        <a className="btn btn-success btn-lg" href="signup()" title="Try It In Auth0 For Free">Try It In Auth0 For Free</a>
      </section>
    );
  }
}
Banner.defaultProps = {logo: 'vanillajs'};
