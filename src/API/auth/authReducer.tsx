const initialState = {
    isAdmin: false,
};

// @ts-ignore
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ADMIN_STATUS':
            return {
                ...state,
                isAdmin: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
