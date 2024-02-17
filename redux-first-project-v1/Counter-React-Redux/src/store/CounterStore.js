import {createStore} from "redux";

const INITIAL_VALUE = {
  counter:0,
  privacy:true,
}
const counterReducer = (store = INITIAL_VALUE, action) => {
  if(action.type === "INCREMENT"){
      return {...store, counter :  store.counter + 1};
    }else if(action.type === "DECREMENT"){
      return {...store, counter :  store.counter - 1, privcy:store.privacy};
  }else if(action.type === "ADD"){
    if(Number(action.payload.num))
      return {...store, counter :  store.counter + action.payload.num, privcy:store.privacy};
}else if(action.type === "SUBTRACT"){
  if(Number(action.payload.num))
    return {...store, counter :  store.counter - action.payload.num, privcy:store.privacy};
}else if(action.type === "PRIVACY-TOGGLE"){
  return {...store, privacy :  !store.privacy};
}
  return store;
}

const counterStore = createStore(counterReducer);
export default counterStore;