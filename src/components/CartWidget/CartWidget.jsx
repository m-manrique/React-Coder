import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div style={{ marginRight: 40}}>
      <ShoppingCartIcon sx={{ fontSize: 40}}/>
      <span style={{ fontSize: 25}}>3</span>
    </div>
  );
};

export default CartWidget;
