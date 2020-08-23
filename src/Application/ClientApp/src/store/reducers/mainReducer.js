const initialStore = {
    authenticated: false,
    editable: false
}

const mainReducer = (state = initialStore, action) => {
 switch (action.type) {

    case "SET_EDITABLE":
        return {
          ...state,
          editable: action.editable,
        };
    case "SET_AUTHENTICATION":
      return {
        ...state,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
}
export default mainReducer
