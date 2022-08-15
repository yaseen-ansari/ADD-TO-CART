export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "LOAD_ITEM") {

    return {
      ...state,
      item: action.payload,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
    };
  }

  if (action.type === "INCREMENT") {

   
    let updateCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
      
    if(curElem.countId != undefined){
    var obj = { ...curElem ,countId: curElem.countId + 1};

    state.cartItem.push(obj);

     
      return obj;
    }
    else{
      var obj = { ...curElem ,countId: 1};
      state.cartItem.push(obj);
      return obj;
    }
        
    
      }
     
      
      return curElem;
    });
    
    console.log(state)
    return { ...state, item: updateCart };
  }

  if (action.type === "DECREMENT") {
    let updateCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
       
          if(curElem.countId != undefined && curElem.countId != 0){
            
            return { ...curElem ,countId: curElem.countId - 1};
          }
          else{
            alert("already zero")
            return { ...curElem };
          }
              
            }

        // if (curElem.id === action.payload) {
        //   return { ...curElem, count: curElem.count - 1 };
        // }

        return curElem;
      })
      .filter((curElem) => curElem.count !== 0);

    return { ...state, item: updateCart };
  }

 

  if (action.type === "GET_TOTAL") {
    
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        
        let { price , countId } = curVal;
        //console.log('state', countId)

        if(countId != undefined){
          let updatedTotalAmount = price * countId;
          accum.totalAmount += updatedTotalAmount;
          accum.totalItem += countId;
        }
    

        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );

    //console.log(totalAmount , totalItem)
    return { ...state, totalItem, totalAmount };
  }

  return state;
};
