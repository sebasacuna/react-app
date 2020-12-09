import React from "react";
import './style.css';

interface Props {
    rut: string,
    name: string,
    lastName: string,
    birthDate: string
}

const CustomerDetails: React.FC<Props> = ({rut, name, lastName, birthDate}) => {

    return (
        <>
            <div className={'customer-container'}>
                <h4>Rut: {rut}</h4>
                <h4>Name: {name}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Birth Date: {birthDate}</h4>
            </div>
        </>
    )
}

export default CustomerDetails;
