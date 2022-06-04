import React from 'react';

import NavBar from '../navigation/NavBar';

import './myAccount.css';

const MyAccount = () => {
    return (
        <div className="myAccount">
            <header>
                <NavBar />
            </header>
            <body>
                <img src="https://c.tenor.com/00ZMZ2jSw34AAAAd/lifecouldbeadream-monkey-swimming.gif" alt="rumours_fleetwoodmac.jpeg" />
            </body>
        </div>
    );
}

export default MyAccount;