import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.jsx';
import CategoryList from './CategoryList.jsx';

class Categories extends React.Component {
    render() {
        const categories = this.props.categories;
        const createCategory = category => {
            return (<div className="category col-md-6" key={category.name}>
                        <Title name={category.name}></Title>
                        <CategoryList base_url={category.baseUrl} rules={category.templates}></CategoryList>
                    </div>);
        };
        return (<div>{categories.map(createCategory)}</div>);
    }
}
module.exports = Categories;
