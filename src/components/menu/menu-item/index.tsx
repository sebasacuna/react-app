import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

interface Props {
    text: string,
    link?: string
}

export const MenuItem: React.FC<Props> = ({text, link = ''}) => {
    return (
        <>
            <Link to={link}>
                <div className={'wrapper-menu-item'}>
                    {text}
                </div>
            </Link>

        </>
    );
}

export default MenuItem;
