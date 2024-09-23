const counterReducer = (state = { sayac: 0, text1: "" }, {type,payload}) => {
 

  switch (type) {
    case "ARTTIR":
      return { sayac: state.sayac + 1, text: payload};
  
    case "RESET":
      return { sayac: 0, text: payload};
  
    case "AZALT":
      return { sayac: state.sayac - 1 };
    default:
      return state;
  }
  
  
  
  };
  
  export default counterReducer