import React from 'react'
import DefaultLayout from './layouts/layout.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import Categories from '../source/components/categories/Categories.js';
import rules from '../public/json/rules_catalog.json';

export default class Index extends React.Component{
  render() {
    return (
            <DefaultLayout title="Rules Catalog by Categories">
                <div className="rule-categories">
                    <Header />
                    <div className="container">
                        <h2 className="rules">
                            <span>{this.props.title} </span>
                            <span>{this.props.subtitle}</span>
                        </h2>

                        <div className="container" id="container"><Categories categories={rules} /></div>

                        <div className="try-banner"><span>Don't have an account yet?</span><a href="javascript:signup()" className="btn btn-success btn-lg">Try Auth0 for Free</a></div>

                    </div>
                    <Footer />
                </div>
            </DefaultLayout>
    );
  }
};
