import React from 'react';
import Item from './Item';

export default class CategoryList extends React.Component {
    render() {
        const baseUrl = this.props.base_url;
        const rules = this.props.rules;
        const createRule = rule => {
            const url = `${baseUrl}${rule.id}`;
            return (<Item className="rule"
                key={rule.id}
                url={url}
                id={rule.id}
                name={rule.title}>
            </Item>);
        };
        return (<ul className="list-unstyled">{rules.map(createRule)}</ul>);
    }
}
