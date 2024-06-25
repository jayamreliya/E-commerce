import React from 'react'
import Account from './Account';

function MainPage() {
    let Name = localStorage.getItem('name');
    return (
        <>
            <div className='color'>
                <div className="image">
                <div class="heading_text">
                    <h2> Account Manegment!</h2>
                </div>
                    <div className="main_page">
                        <div className="row">
                            <div className="col">
                                <h6>Name:-{Name}</h6>
                            </div>
                            <div className="col_btn">
                                <a href="btn"> <button>Login</button> </a>
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

                            <div className="text2">
                                <ul>
                                    <li>Name:-</li>
                                    <li>Username:-</li>
                                    <li>Email:-</li>
                                    <li>Password:-</li>
                                </ul>

                                <ul>
                                    <li>Aadharcard no :- </li>
                                    <li>Pancard no :-</li>
                                    <li>Passbook no :-</li>
                                    <li>Pincode no :-</li>
                                </ul>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default MainPage
