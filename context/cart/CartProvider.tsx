import { FC, useEffect, useReducer } from 'react';
import { ICartProduct} from '../../interfaces';
import { CartContext, cartReducer } from './';
import Cookie  from 'js-cookie';

export interface CartState {
 cart: ICartProduct[]
}

const CART_INITIAL_STATE: CartState = {
  cart: []
}
interface LayoutProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }:LayoutProps) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


  useEffect(() => {
    try {
      const cookieProducts =  Cookie.get('cart') ? JSON.parse( Cookie.get('cart')! ): []
      console.log(cookieProducts)
      dispatch({ type: '[Cart] - Load Cart from cookies | storage', payload: cookieProducts });
    } catch (error) {
      dispatch({ type: '[Cart] - Load Cart from cookies | storage', payload: [] });
    }
  }, [])

  useEffect(() => {
    Cookie.set('cart', JSON.stringify(state.cart), { expires: 7 })
  }, [state.cart])


  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some(p =>  p._id === product._id)
    if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart' , payload: [...state.cart, product]});
    const productInCartButDiferentSize =  state.cart.some(p => p._id === product._id && p.size === product.size )
    if(!productInCartButDiferentSize) return dispatch({type: '[Cart] - Update products in cart', payload: [...state.cart, product]})
    //acumular
    const updatedProducts = state.cart.map(p=>{
      if(p._id !== product._id) return p;
      if(p.size !== product.size) return p;
      //actualizar la cantidad
      p.quantity += product.quantity
      return p;
    })
    dispatch({type: '[Cart] - Update products in cart', payload: updatedProducts})
  }
  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({type:'[Cart] - Change cart quantity', payload: product});
  }
  const removeCartProduct = (product: ICartProduct )=> {
    dispatch({type:'[Cart] - Remove product in cart', payload: product})
  }

  return(
    <CartContext.Provider value={{
        ...state,
        //methods
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
    }}>
        {children}
    </CartContext.Provider>
  )
}
