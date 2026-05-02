import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = {
   
    auth: authReducer,
    cart: cartReducer, 
    categories: categoryReducer,
    products: productReducer,
}
export default rootReducer;