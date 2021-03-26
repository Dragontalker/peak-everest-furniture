import { createContext, useReducer, useContext, useEffect } from "react"

const initialData = {
  winDim: {x:window.innerWidth, y:window.innerHeight}
};

/*! IMPORTANT all your reducer functionality goes here */
const dataReducer = (state, action) => {
  switch (action.type) {
  case "resize":
    return {...state, winDim:{x:window.innerWidth, y:window.innerHeight}};
  case "echo":
    return state;
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
}

const StoreContext = createContext();

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( dataReducer, initialData );
  useEffect(() => {
    // add listeners for window resize
    window.addEventListener('resize', dispatch({type:"resize"}));
  })
  return <StoreContext.Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = function(){ return useContext(StoreContext) };

export { StoreProvider, useStoreContext }