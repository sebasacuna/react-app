import axios, {AxiosResponse} from "axios"
import {globalEndpoint} from "./Global";
const Promise = require('es6-promise').Promise;

export interface Customer {
    rut: string,
    name: string,
    lastname: string,
    birthdate: string
}

interface ApiError {
    status: string,
    timestamp: string,
    message: string,
}

const getCustomer = async (rut: string) => {

    const resp: AxiosResponse = await axios.get(`${globalEndpoint}/customer/${rut}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .catch(function (error) {
            if (error.response) {
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
                return error.response;
            }
        });
    return resp;
};

export default getCustomer;

