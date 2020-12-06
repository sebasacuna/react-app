import React from "react";
import "./style.css";
import Menu from "../../components/menu";
import MenuItem from "../../components/menu/menu-item";

const SideBar: React.FC = () => {

    return (
        <>
            <div className={'sidebar-container'}>
                <Menu title={'Customers'}>
                    <MenuItem text={'Find Customer'} link={'/customer'}></MenuItem>
                    <MenuItem text={'Another Page'} link={'/page'}></MenuItem>
                </Menu>
            </div>

        </>
    )
}

export default SideBar;
