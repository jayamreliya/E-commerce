import React from 'react'

function Service() {
    let Name = localStorage.getItem('name');
    return (
        <>
            <div className='color'>
                <div class="heading_text">
                    <h2> Service's!</h2>
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

                        <div className='Info'>
                            <h2> Services of Banks </h2>
                            <p> <input type="checkbox" /> In modern times there are many services that are offered by the banks.  This is done so
                                that more and more customers are attracted.<br /> Although there are some basic services as
                                well which are offered by the banks. Thus,  these basic services are common for all ban
                                ks. In this article, we will help you understand some of the services of banks which a
                                re common across all the banks in India.</p>
                        </div>

                    </div>
                </div >
            </div >
        </>
    )
}

export default Service
