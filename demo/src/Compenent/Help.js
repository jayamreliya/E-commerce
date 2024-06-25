import React from 'react'
import { BiMoneyWithdraw } from "react-icons/bi";
function Help() {
    let Name = localStorage.getItem('name');
    return (
        <>
            <div className='color'>
                <div class="heading_text">
                    <h2> Help mode!</h2>
                </div>
                <div className="main_page">
                    <div className="row">
                        <div className="col">
                            <h6>Name:-{Name}</h6>
                        </div>
                    </div>

                    <div className="text">
                        <div className="Servises">
                            <ul>
                                <li><a href="account">Account</a></li>
                                <li><a href="service">Service</a></li>
                                <li><a href="help">Help</a></li>
                                <li><a href="">Deposite</a></li>
                                <li><a href="">Withdraw</a></li>
                            </ul>
                        </div>

                        <div className='help'>
                            <h1>Customer Care Number</h1>
                            <div className="help_text">
                                <ul>
                                    <li> <span>1 - 800 - 419 – 5577</span>  (for Agri and Rural)</li>
                                    <li> <span>1 - 860 - 500 – 4971</span>  (Corporate Phone Banking & CMS Product Number)</li>
                                </ul>
                            </div>
                            <div className="help_text2">
                                <div className="helping">
                                    <li>  Withdraw and deposite founds easily </li>
                                    <li>Avail government subsidies</li>
                                    <li>Keep track of money</li>
                                    <li>Pay bills smoothly</li>
                                    <li>Store your money safely</li>
                                    <li>Get / icons insurance easier</li>
                                    <li>Grow your money</li>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div >
        </>
    );
}

export default Help
