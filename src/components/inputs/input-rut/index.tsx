import React, {FocusEvent, useState} from "react";
import {formatRut, removeFormatToRut, restrictCharactersRut} from "./helpers/rut";
import './style.css';

interface Props {
    value: string,
    callback: any
}

const InputRut: React.FC<Props> = ({value, callback}) => {

    const [rut, setRut] = useState('');

    const focusBlur = (event: FocusEvent<any>) => {
        if (rut.length > 1) {
            setRut(formatRut(rut));
        }
    }

    const onFocus = (event: FocusEvent<any>) => {
        if (rut.length > 1) {
            setRut(removeFormatToRut(rut));
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = event.target.value;
        const newValue = restrictCharactersRut(valueInput);
        setRut(newValue);
        callback(newValue);

        return newValue;
    }

    return (
        <>
            <input
                placeholder={'Ingrese un rut'}
                minLength={1}
                value={rut}
                onFocus={onFocus}
                onBlur={focusBlur}
                onChange={onChange}
            />
        </>
    )
}


export default InputRut;
