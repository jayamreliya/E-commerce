import React, { useState } from 'react'

function Registration() {
    let obj = { name: '', email: '', password: '' };
    const [rec, setrec] = useState(obj);
    const [data, setdata] = useState([]);
    function Add() {
        if (rec.name == '') {
            alert('Please enter name');
        }
        else if (rec.email == '') {
            alert('Please enter email')
        }
        else if (rec.password == '') {
            alert('Please enter password')
        }
        else {
            setdata([...data, rec]);
            setrec(obj);
        }
        console.log(rec)
    }

    function record(e) {
        setrec({ ...rec, [e.target.name]: e.target.value });
    }
    return (
        <>



            <div className="color">
                <div class="heading_text">
                    <h2>Registration now!</h2>
                </div>
                <div className='registration' >
                    <div>
                        <input type='text' name='name' value={rec.name} placeholder='Sername  /  Name  /  Lastname' onChange={record} />
                    </div>
                    <div>
                        <input type='email' name='email' value={rec.email} placeholder='Enter Email' onChange={record} />
                    </div>
                    <div>
                        <input type='password' name='password' value={rec.password} placeholder='Enter Password' onChange={record} />
                    </div>
                    <div>
                        <a href="add"><button onClick={Add} >Registration</button></a>
                    </div>
                </div>
            </div>

            {
                data.map((v) => {
                    localStorage.setItem('name', v.name);
                    localStorage.setItem('email', v.email);
                    localStorage.setItem('password', v.password);
                    return (
                        <>

                        </>
                    )
                })
            }
        </>
    );
}

export default Registration
