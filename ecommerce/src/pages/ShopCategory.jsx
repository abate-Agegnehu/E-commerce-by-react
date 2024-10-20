import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Item from "../components/item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop_category">
      <div className="category_banner">
        <div className="category_left">
          <h2>FLAT 50% OFF</h2>
          <div>
            <span>12</span>Hours <span>20</span>Mins
          </div>
          <div className="explore_now">
            <div>Explore now</div>
          </div>
        </div>
        <div className="category_right">
          <img className="shopcategory_banner" src={props.banner} alt="" />
        </div>
      </div>
      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort by <ArrowDropDownIcon />
        </div>
      </div>
        <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
<div className="shopcategory_loadmore">
  Explore More
</div>


    </div>
  );
};

export default ShopCategory;
