import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './categories/Categories.jsx';

const container = document.getElementById('categories');

class CategoriesApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        console.log('Iniciando montaje...');
        console.time('MountingTime');
        const requestUrl = `${this.props.domain}${this.props.resource}`;

        fetch(requestUrl)
            .then(result => {
                return result.json();
            })
            .then(result => {
                const categories = result.map(category => {
                  return {
                      name: category.name,
                      templates: category.templates,
                      baseUrl: requestUrl
                  };
                });
                this.setState({categories});
            });
    }

    componentDidMount() {
        console.timeEnd('MountingTime');
        console.log('Montaje terminado...');
    }

    render() {
        return (<div className="App row">
                    <Categories categories={this.state.categories} />
                </div>
        );
    }
}

ReactDOM.render(<CategoriesApp domain="http://localhost:3000/" resource="rules" />, container);
