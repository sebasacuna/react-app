import React, {useState} from "react";

import {Container} from "react-bootstrap";
import getCustomer from "../../api/Api";
import MaskedInput from 'react-text-mask'
// @ts-ignore
import RutTextMask from 'rut-text-mask';

const Customer: React.FC = () => {

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [rut, setRut] = useState('');

    const [customer, setCustomer] = useState({
        data: {
            name: '',
            lastname: '',
            rut: '',
            birthdate: ''
        },
        loaded: false,
        placeholder: 'Loading'
    });

    const search = async (event: any) => {
        event.preventDefault();
        const response = await getCustomer(rut);
        const data = await response.data;

        if (response.status === 200) {
            console.log(data);
            setCustomer(oldState => {
                return ({...oldState, data: data, loaded: true});
            });
            setError(false);
            console.log(customer);
        } else {
            setError(true);
            setErrorMsg(data.message);
        }
    }

    // @ts-ignore
    return (
        <>
            <Container fluid className='mt-5 pl-5 pr-5'>
                <h1>Home</h1>
                <MaskedInput
                    placeholder={'rut'}
                    mask={RutTextMask}
                    onChange={e => {
                        const regex = /dog/gi;
                        setRut(e.target.value.replace(/[^0-9]+/g, ""));
                        console.log(rut);
                    }}
                />
                <button onClick={search}>Search</button>
                {
                    (customer.loaded && !error) &&
                    <div className={'customer-container'}>
                        <h4>Rut: {customer.data.rut}</h4>
                        <h4>Name: {customer.data.name}</h4>
                        <h4>Last Name: {customer.data.name}</h4>
                        <h4>Birth Date: {customer.data.birthdate}</h4>
                    </div>
                }
                {
                    error &&
                    <div>
                        <h4 style={{color: 'red', marginTop: 20}}>{errorMsg}</h4>
                    </div>
                }
            </Container>
        </>
    )
}

export default Customer;
