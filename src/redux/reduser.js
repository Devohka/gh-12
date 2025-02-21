

const stateCompany = {
    company: [],
}


export const reduser = (state = stateCompany, actions) => {
    if("getPostsSuccessful" === actions.type) {
        return {
            company: actions.payload,
        }
    };
    return state;
}
