const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: "/",
    orderAfterLogin: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START:
            return {

            };
        case actionTypes.AUTH_SUCCESS:

        default:
            return state;
    }
};

export default reducer;