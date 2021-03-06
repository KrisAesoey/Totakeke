import React from 'react';

import NavBar from '../navigation/NavBar';

import './myAccount.css';

const MyAccount = () => {
    return (
        <div className="myAccount">
            <header>
                <NavBar />
            </header>
            <div>
                <img src="https://c.tenor.com/00ZMZ2jSw34AAAAd/lifecouldbeadream-monkey-swimming.gif" alt="rumours_fleetwoodmac.jpeg" />
            </div>
        </div>
    );
}

export default MyAccount;