import React, {Component} from 'react';

class Product extends Component {
  constructor(props){
    super(props);
    this.buyNow = this.buyNow.bind(this);
    this.onHideProduct = this.onHideProduct.bind(this);

    this.state = {
      isActive : true
    };
  }

  buyNow(e){
    alert(this.props.name);
    e.preventDefault();
  }

  onHideProduct(){
    this.setState({
      isActive : !this.state.isActive
    })
  }

  render() {
    if (this.state.isActive === false) {
      return false;
    }
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.img} alt="" />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>
              <a href={this.props.img} className="btn btn-primary" onClick={this.buyNow} role="button">Mua ngay</a>
              <button type="submit" className="btn btn-danger" onClick={this.onHideProduct}>Hide</button>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Product;