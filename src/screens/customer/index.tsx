import React, {useState} from "react";

import {Container} from "react-bootstrap";
import getCustomer from "../../api/Api";
import InputRut from "../../components/inputs/input-rut";
import CustomerDetails from "./customer-detail";
import Message from "../../components/messages";
// @ts-ignore

const Customer: React.FC = () => {

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [rut, setRut] = useState('');

    const setValue = (value: string) => {
        setRut(value);
    }

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

    return (
        <>
            <Container fluid className='mt-5 pl-5 pr-5'>
                <h1 className={'title'}>Customer</h1>
                <div className={'controls'}>
                    <InputRut
                        value={rut}
                        callback={setValue}
                    />
                    <button onClick={search}>Search</button>
                </div>
                {
                    (customer.loaded && !error) &&
                    <CustomerDetails
                        rut={customer.data.rut}
                        name={customer.data.name}
                        lastName={customer.data.lastname}
                        birthDate={customer.data.birthdate}
                    />
                }
                {
                    error &&
                    <Message message={errorMsg} type={'ERROR'}/>
                }
            </Container>
        </>
    )
}

export default Customer;
