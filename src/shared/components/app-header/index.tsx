import React from 'react';
import { Navbar } from 'react-bootstrap';

import companyLogo from '../../../logo.svg';

export interface IAppHeaderProps {
    logo?: string;
    companyName?: string;
}

const AppHeader = ({ logo = companyLogo, companyName = 'Marley Spoon FE Test' }: IAppHeaderProps) => (
    <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {companyName}
            </Navbar.Brand>
            <div className="col" />
        </Navbar>
    </React.Fragment>
);

export default AppHeader;
