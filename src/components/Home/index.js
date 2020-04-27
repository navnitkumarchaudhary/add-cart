import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList, FilterItems } from './styles';
import { searchProductByName, sortProductByPrice, searchProductByPriceRange } from '../../util/Utils';
import { productItems } from '../../MockProductlist';
import * as CartActions from '../../store/actions';
import { toast } from 'react-toastify';
import _ from 'lodash';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 280,
    position: "relative",
    display: "flex",
  },
});

function valuetext(value) {
  return `${value}`;
}

const Home = () => {

  const [products, setProducts] = useState([]);
  const [slidervalue, setSliderValue] = React.useState([0, 20]);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setProducts(productItems);
  }, []);

  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    (sumAmount[product.id] = product.amount);
    return sumAmount;
  }, {}));

  let addToCartStatus = useSelector(state => state.cart.reduce((sumAmount, product) => {
    (sumAmount[product.id] = product.amount);
    return sumAmount;
  }, {}));

  // add to cart funtion
  const handleAddToCartProdcuts = (product) => {
    if (!addToCartStatus[product.id]) {
      dispatch(CartActions.addToCart(product));
    } else {
      dispatch(CartActions.updateAmount(product.id, addToCartStatus[product.id] + 1));
    }
    toast("you have sucessfully added an item to cart.",
      {
        className: 'foo-bar',
        type: toast.TYPE.SUCCESS
      });
  };

  // to search products
  const handelSearch = (event) => {
    event.preventDefault()
    const searchtext = event.target.value.replace(/^\s+/g, '');

    if (searchtext) {
      searchDebounce(searchtext);
    } else {
      setProducts(productItems);
    }
  };

  // debaunce for prodcut search to reduce the function call
  const searchDebounce = _.debounce(function (searchtext) {
    let searchedProducts = searchProductByName(productItems, searchtext);
    setProducts(searchedProducts);
  }, 1000);

  // to sort the product by price
  const handleProductSort = (sortid) => {
    if (sortid) {
      let sortedProducts = sortProductByPrice(productItems, sortid);
      setProducts([...sortedProducts]);
    }
  }

  // to sort the product by price range
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    let rangeddProducts = searchProductByPriceRange(productItems, newValue);
    setProducts([...rangeddProducts]);
  }

  return (
    <div>
      <FilterItems>
        <div className={classes.root}>
          <Slider
            value={slidervalue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            color="secondary"
            step={1}
          />
        </div>

        <input type="text" placeholder="Search Product" onChange={handelSearch} />

        <p style={{ cursor: "default", color: "#aaa" }}>Sort By Price</p>
        <p onClick={() => handleProductSort(1)}>Low to High</p>
        <p onClick={() => handleProductSort(2)}>High to Low</p>
        <p onClick={() => handleProductSort(3)}>Discount</p>

      </FilterItems>

      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
            <span style={{ margin: "5px 0 10px" }}>₹ {product.price.actual}
              <span style={{ color: "#aaa", fontWeight: "normal", margin: "0 8px" }}><del>{product.price.display}</del> </span>
              <span style={{ color: "green", float: "right" }}>{product.discount}% off</span>
            </span>
            <button type="button" onClick={() => handleAddToCartProdcuts(product)}>
              <div>
                <MdShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>
              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    </div>

  );
}

export default Home;