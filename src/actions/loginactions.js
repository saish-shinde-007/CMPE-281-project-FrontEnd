import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const POST ="POST";
export const TEMP ="TEMP";
export const HUMID ="HUMID";
export const TABLE ="TABLE";

export function actionlogin(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.doLogin(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function login(data) {
    console.log("data in action==>",data.message);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}

export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {

            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
    return {
        type: SIGNUP,
        message: "inside Signup Actions",
        data:data
    }
}

export function actiontemp(userdata) {
    console.log("in action Temp");
    return function (dispatch) {
        try {

            API.temp(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Temp(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Temp(data) {
    console.log(data);
    return {
        type: TEMP,
        message: "inside TEMP Actions",
        data:data
    }
}

export function actionhumid(userdata) {
    console.log("in action Humid");
    return function (dispatch) {
        try {

            API.humid(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Humid(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Humid(data) {
    console.log(data);
    return {
        type: HUMID,
        message: "inside HUMID Actions",
        data:data
    }
}

export function actiontable(userdata) {
    console.log("in action Table");
    return function (dispatch) {
        try {

            API.table(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Table(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Table(data) {
    console.log(data);
    return {
        type: TABLE,
        message: "inside TABLE Actions",
        data:data
    }
}