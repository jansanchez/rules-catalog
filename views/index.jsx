import React from 'react'
import DefaultLayout from './layout.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

import CategoriesApp from '../source/components/categories/CategoriesApp.js';
import rules from '../public/json/rules_catalog.json';

export default class Index extends React.Component{
  render() {
    return (
            <DefaultLayout>
                <div className="rule-categories">
                    <Header />
                    <div className="container">
                        <h2 className="rules">
                            <span>{this.props.title}</span>
                            <span>{this.props.subtitle}</span>
                        </h2>

                        <div className="container" id="container">
                            <CategoriesApp categories={rules} />
                        </div>

                        <div className="try-banner"><span>Don't have an account yet?</span><a href="javascript:signup()" className="btn btn-success btn-lg">Try Auth0 for Free</a></div>

                        <script defer src="js/build/build.js"></script>
                    </div>
                    <Footer />
                </div>
            </DefaultLayout>
    );
  }
};
