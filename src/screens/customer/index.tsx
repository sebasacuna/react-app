import React, {useState} from "react";

import {Container} from "react-bootstrap";
import getCustomer from "../../api/Api";
// @ts-ignore

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

    const search = async (event: React.FormEvent) => {
        event.preventDefault();

        if (rut.length > 1) {
            const response = await getCustomer(rut);
            const data = await response.data;

            if (response.status === 200) {
                setCustomer(oldState => {
                    return ({...oldState, data: data, loaded: true});
                });
                setError(false);
            } else {
                setError(true);
                setErrorMsg(data.message);
            }

        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setRut(event.target.value.replace(/[^0-9]{k}+/g, ""));
    }

    // @ts-ignore
    return (
        <>
            <Container fluid className='mt-5 pl-5 pr-5'>
                <h1 className={'title'}>Customer</h1>
                <div className={'controls'}>
                    <input
                        placeholder={'rut'}
                        minLength={1}
                        onChange={onChange}
                    />
                    <button onClick={search}>Search</button>

                </div>
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
