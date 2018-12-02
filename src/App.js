import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products : [
        {
          name  : 'iPhone XR',
          img   : 'https://handsets.aerial-direct.co.uk/wp-content/uploads/2018/09/red.png'
        },
        {
          name  : 'iPhone XS Max',
          img   : 'https://shopdunk.com/wp-content/uploads/2018/09/iphone-xs-anh-dai-dien.png'
        }
      ],
      isActive: true
    };

    this.onAddProduct = this.onAddProduct.bind(this);
    this.hideAll    = this.hideAll.bind(this);
  }

  onAddProduct(){
    alert(this.refs.productName.value);
  }

  hideAll(){
    this.setState({
      isActive : !this.state.isActive
    });
  }

  render() {

    let listProduct = this.state.products.map((product, index) => {
      if (this.state.isActive){
        return <Product key={index} name={product.name} img={product.img} />
      }
    });

    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row">
            <div className="panel panel-warning">
              <div className="panel-heading">Input product</div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="usr">Product name:</label>
                  <input type="text" className="form-control" ref="productName"/>
                </div>
                <button type="submit" className="btn btn-success" onClick={this.onAddProduct}>Add Product</button>
              </div>
            </div>
          </div>
          <div className="row">
            {listProduct}
          </div>
          <div className="row">
            <button type="submit" className="btn btn-danger" onClick={this.hideAll}>Toggle</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
