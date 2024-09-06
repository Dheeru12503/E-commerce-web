import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = ()=>{

    return (
      <>
       <div className="cartitems">
        <div className="sigleitems">
          <CartItem></CartItem>
          </div>
        <CartSummary></CartSummary>
       </div>
      </>
    );
}
export default Cart;