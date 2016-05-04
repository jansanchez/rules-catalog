import React from 'react';
import Rule from './Rule';

export default class RelatedRules extends React.Component {
    render() {
        const related = this.props.related;
        const createRelatedRule = rule => {
            return (<Rule
                key={rule.id}
                id={rule.id}
                title={rule.title}>
            </Rule>);
        };

        return (<section>
                  <div className="container center">
                    <h3>You Might Also be Interested in the Following Rules</h3>
                    <div className="related">{related.map(createRelatedRule)}</div>
                  </div>
                </section>
        );
    }
}
