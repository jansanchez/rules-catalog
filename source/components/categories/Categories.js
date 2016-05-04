import React from 'react';
import config from '../../../configuration';
const baseUrl = `${config.domain}:${config.port}/rules/`;
import Title from './Title';
import CategoryList from './CategoryList';

export default class Categories extends React.Component {
  render() {
      const categories = this.props.categories;
      const createCategory = category => {
          return (<div className="category col-md-6" key={category.name}>
                    <Title name={category.name}></Title>
                    <CategoryList base_url={baseUrl} rules={category.templates}></CategoryList>
                  </div>
          );
      };
      return (<div className="App row">{categories.map(createCategory)}</div>);
  }
}
