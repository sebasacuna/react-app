import React from "react";
import "./style.css";

interface Props {
    title: string,
    children: any
}

export const Index: React.FC<Props> = ({title, children}) => {
    return (
        <div>
            {title &&
            <div className={'menu-title'}>
                <h3>{title}</h3>
            </div>
            }
            <div className={'wrapper-menus'}>{children}</div>
        </div>
    )
}

export default Index;

