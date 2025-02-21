import { createStore, applyMiddleware } from "redux";
import { reduser } from "./reduser";

const middlewareOne = (store) => (next) => (actionOne) => {
    // У асинхроному коді actions приходять у вигляді функції ,
    // а у синхроному actions є об'єктами в яких є ключ type тa payload 
    if (typeof actionOne === "function") {
        console.log(actionOne);
        return actionOne(store.dispatch);
    }


    return next(actionOne);

};

export const getPostThunk = () => async (dispatch) => {
    // dispatch({type: "getPosts"})
    await fetch("https://67b057b5dffcd88a6788f523.mockapi.io/middleware/TellBook")
        .then(data => data.json())
        .then(data => dispatch({type: "getPostsSuccessful", payload: data}))
        .catch(error => console.log(error));

};

export const store = createStore(reduser, applyMiddleware(middlewareOne));