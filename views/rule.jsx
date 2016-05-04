import React from 'react'
import DefaultLayout from './layouts/layout.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import RelatedRules from '../source/components/rule/RelatedRules.js';
import Banner from '../source/components/rule/Banner.js';
import WhatIs from '../source/components/rule/WhatIs.js';
import Description from '../source/components/rule/Description.js';

import rules from '../public/json/rules_catalog.json';

export default class Rule extends React.Component{
  render() {
      let current = {};
      rules.map(category => {
          category.templates.map( rule => {
              if (rule.id === this.props.id) {
                  current.rule = rule;
                  current.category = category.name;
                  current.related = category.templates;
                  return current;
              }
          });
      });

    return (
        <DefaultLayout title={current.rule.title}>
            <div className="rule">
                <Header />
                <div id="rule">
                    <Banner title={current.rule.title} summary={current.rule.summary} logo={current.rule.logo} />
                    <Description description={current.rule.description} code={current.rule.code} />
                    <WhatIs />
                    <hr />
                    <RelatedRules related={current.related} />
                </div>
                <Footer />
            </div>
        </DefaultLayout>
    );
  }
};
