import React from 'react'
import MainPage from './MainPage';

function Account() {
    let Name = localStorage.getItem('name');
    let Email = localStorage.getItem('email');
    let Password = localStorage.getItem('password');
    let Username = localStorage.getItem('username');
    let Aadharcard = localStorage.getItem('Aadharcard');
    let Pancard = localStorage.getItem('Pancard');
    let Passbook = localStorage.getItem('Passbook');
    let Pincode = localStorage.getItem('Pincode');
    return (
        <>

            <div className='color'>
                <div class="heading_text">
                    <h2> Account Details!</h2>
                </div>
                <div className="main_page">
                    <div className="row">
                        <div className="col">
                            <h6>Name:-{Name}</h6>
                        </div>
                        <div className="col_btn">
                            <a href="btn"> <button  >Login</button> </a>
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
                                <li>Name:-{Name}</li>
                                <li>Username:-{Username}</li>
                                <li>Email:-{Email}</li>
                                <li>Password:-{Password}</li>
                            </ul>

                            <ul>
                                <li>Aadharcard no :- {Aadharcard}</li>  
                                <li>Pancard no :-{Pancard}</li>
                                <li>Passbook no :-{Passbook}</li>
                                <li>Pincode no :-{Pincode}</li>
                            </ul>
                        </div>

                    </div>
                </div >
            </div>

        </>
    )
}

export default Account;
