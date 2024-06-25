import React, { useState } from 'react'

function Aadhar() {
    var object = { Aadharcard: '', Pancard: '', Passbook: '', Pincode: '' };
    const [number, setnumber] = useState(object);
    const [card, setcard] = useState([]);
    function excess() {
        setcard([...card, number]);
        setnumber(object);
    }
    function cart(n) {
        setnumber({ ...number, [n.target.name]: n.target.value })
    }
    return (
        <>
            <div className='color'>
                <div class="heading_text">
                    <h2> Information Number's !</h2>
                </div>
                <div className="Card">
                    <div>
                        <input type="password" name='Aadharcard' value={number.Aadharcard} placeholder='Aadhar Card Number' onChange={cart} />
                    </div>
                    <div>
                        <input type="password" name='Pancard' value={number.Pancard} placeholder='Pan Card Number' onChange={cart} />
                    </div>
                    <div>
                        <input type="password" name='Passbook' value={number.Passbook} placeholder='Bank Passbook Number' onChange={cart} />
                    </div>
                    <div>
                        <input type="password" name='Pincode' value={number.Pincode} placeholder='Bank Pincode Number' onChange={cart} />
                    </div>
                    <div>
                        <a href='Excess'>  <button onClick={excess} >Excess</button></a>
                    </div>
                </div>
            </div>

            {
                card.map((v) => {
                    localStorage.setItem('Aadharcard', v.Aadharcard);
                    localStorage.setItem('Pancard', v.Pancard);
                    localStorage.setItem('Passbook', v.Passbook);
                    localStorage.setItem('Pincode', v.Pincode)
                    return (
                        <>

                        
                        </>
                    );
                })
            }
        </>
    );
}

export default Aadhar;
