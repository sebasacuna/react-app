import React from "react";
import './style.css';

export type TpyOfMessages = 'INFO'|'ERROR'|'WARNING';

interface Props {
    message: string,
    type: TpyOfMessages
}

const Message: React.FC<Props> = ({message = '', type}) => {

    const getTypeOfMessage = (typeOfMessage: string): string => {
        switch (typeOfMessage) {
            case 'INFO':
                return "info-messages"
            case 'ERROR':
                return "error-messages"
            case 'WARNING':
                return "warning-messages"
            default:
                return "info-messages"
        }
    }

    return (
        <>
            <div className={getTypeOfMessage(type)}>
                <h4>{message}</h4>
            </div>
        </>
    )
}

export default Message;
