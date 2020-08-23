const initialStore = {
    authenticated: false,
}

const mainReducer = (state = initialStore, action) => {
 switch (action.type) {

    case "SET_AUTHENTICATION":
      return {
        ...state,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }

}

