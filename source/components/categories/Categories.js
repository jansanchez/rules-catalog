import React from 'react';
const config = require('../../../configuration');
import Title from './Title';
import CategoryList from './CategoryList';
const baseUrl = `${config.domain}:${config.port}/`;

export default class Categories extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      const categories = this.props.categories;
      const createCategory = category => {
          return (<div className="category col-md-6" key={category.name}>
                      <Title name={category.name}></Title>
                      <CategoryList base_url={baseUrl} rules={category.templates}></CategoryList>
                  </div>);
      };
      return (<div>{categories.map(createCategory)}</div>);
  }
}
//Categories.defaultProps = { categories: [] };
