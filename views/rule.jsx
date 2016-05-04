import React from 'react'
import DefaultLayout from './layouts/layout.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

//import Categories from '../source/components/categories/Categories.js';
import rules from '../public/json/rules_catalog.json';

export default class Rule extends React.Component{
  render() {
    return (
            <DefaultLayout title="Rule Detail">
                <div className="rule">
                    <Header />

                    <div id="rule">
                      <section className="jumbotron">
                        <div data-name="ember" className="circle-logo">
                          <div className="logo"></div>
                        </div>
                        <h1>title</h1>
                        <p>summary</p>
                        <a className="btn btn-success btn-lg" href="javascript:signup()" title="Try It In Auth0 For Free">Try It In Auth0 For Free</a>
                      </section>

                      <section className="gray-light">
                        <div className="container">
                          <h3>How it Works?</h3>
                          <p>description</p>
                        </div>
                        <div className="container">
                          <h3>How do I use it?</h3>
                          <p>Just create a new rule in the Auth0 dashboard, and copy the following code replacing the placeholders with the
                          appropriate values.</p>
                        </div>
                        <div className="container">
                          <div className="code">
                            <pre><code className="language-js">console.log('yay!');</code></pre>
                          </div>
                        </div>
                      </section>

                      <section>
                        <div className="container">
                          <h3>What is a Rule?</h3>
                          <p>A rule is arbitrary JavaScript code that can be used to extend Auth0's default behavior when authenticating a user.
                Enabled rules will be executed in the order shown below for all users and applications as the final step of the
                authentication process.</p>
                          <p>Rules can be used to enrich and transform the user profile, deny access to specific users under certain conditions, retrieve
                information from external services and much more. To learn more about rules, see <a href="https://auth0.com/docs/rules" title="https://auth0.com/docs/rules">https://auth0.com/docs/rules.</a></p>
                        </div>
                      </section>

                      <hr />

                      <section>
                        <div className="container center">
                          <h3>You Might Also be Interested in the Following Rules</h3>
                          <div className="related">
                            <div><a href="#" title="{title}" target="_self">Check user email domain matches domains configured in connection</a></div>
                            <div><a href="#" title="{title}" target="_self">Active Directory group membership</a></div>
                            <div><a href="#" title="{title}" target="_self">domain</a></div>
                            <div><a href="#" title="{title}" target="_self">Decrypt sensitive data from the user profile</a></div>
                          </div>
                        </div>
                      </section>

                    </div>

                    <Footer />
                </div>
            </DefaultLayout>
    );
  }
};
