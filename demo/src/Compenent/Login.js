import React, { useState } from 'react'

function Login() {
    let obj = { username: '', email: '', password: '' };
    const [user, setuser] = useState(obj);
    const [arr, setarr] = useState([]);
    let Email = localStorage.getItem('email');
    let Password = localStorage.getItem('password');

    function login() {
        if (Email != user.email) {
            alert('Please enter correct email...... 404 Not Found ')
        }
        else if (Password != user.password) {
            alert('Please enter correct password...... 404 Not Found ')
        }
        else {
            setarr([...arr, user]);
            setuser(obj);
        }
    }

    function rec(n) {
        setuser({ ...user, [n.target.name]: n.target.value });
    }


    return (
        <>
            <div className='color'>
                <div class="heading_text">
                    <h2> Login Page !</h2>
                </div>
                <div className='login registration' >
                    <div>
                        <input type='username' name='username' value={user.username} placeholder='Enter Username' onChange={rec} />
                    </div>
                    <div>
                        <input type='email' name='email' value={user.email} placeholder='Confirm Email' onChange={rec} />
                    </div>
                    <div>
                        <input type='password' name='password' value={user.password} placeholder='Confirm Password' onChange={rec} />
                    </div>
                    <div>
                        <a href='panel'> <button onClick={login}>Login</button></a>
                    </div>
                </div>
            </div>

            {
                arr.map((v) => {
                    localStorage.setItem('username', v.username);
                    return (
                        <>

                        </>
                    );
                })
            }
        </>
    )
}

export default Login
