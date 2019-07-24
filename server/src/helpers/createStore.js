import { createStore, applyMiddleware } from "redux";
import thunk from "react-redux";

export default ()=>{
    const store = createStore(reducers,{},applyMiddleware(thunk))

    return store
}
