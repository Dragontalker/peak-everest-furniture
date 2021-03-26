import { createContext, useReducer, useContext, useEffect } from "react"

const initialData = {
  winX:window.innerWidth, 
  winY:window.innerHeight,
  loggedIn:true,
  username: "[User]"
};

/*! IMPORTANT all your reducer functionality goes here */
const dataReducer = (state, action) => {
  switch (action.type) {
  case "resize":
    return {...state, winX:window.innerWidth, winY:window.innerHeight};
  case "logout":
    return {...state, loggedIn:false};
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
}

const StoreContext = createContext();

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( dataReducer, initialData );
  useEffect(() => {
    // add listeners for window resize
    function handleResize() { dispatch({type:"resize"}) };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })
  return <StoreContext.Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = function(){ return useContext(StoreContext) };

export { StoreProvider, useStoreContext }