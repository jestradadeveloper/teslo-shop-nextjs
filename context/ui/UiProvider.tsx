import React, {  useReducer, FC } from 'react'; 
import { UiContext, uiReducer } from './'; 

export interface UiState {
 isMenuOpen: boolean
}
const UI_INITIAL_STATE:UiState = {
  isMenuOpen: false,
}
interface LayoutProps {
  children: React.ReactNode;
}

export const UiProvider = ({ children }: LayoutProps) =>  {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' });
  }
  return (
    <UiContext.Provider value={{
      ...state,
      toggleSideMenu,
    }}> 
      {children}
    </UiContext.Provider>
  )
}
