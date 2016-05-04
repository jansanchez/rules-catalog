import React from 'react';

export default class Description extends React.Component {
  render() {
    return (
      <section className="gray-light">
        <div className="container">
          <h3>How it Works?</h3>
          <p>{this.props.description}</p>
        </div>
        <div className="container">
          <h3>How do I use it?</h3>
          <p>Just create a new rule in the Auth0 dashboard, and copy the following code replacing the placeholders with the
          appropriate values.</p>
        </div>
        <div className="container">
          <div className="code">
            <pre><code className="language-js">{this.props.code}</code></pre>
          </div>
        </div>
      </section>
    );
  }
}
