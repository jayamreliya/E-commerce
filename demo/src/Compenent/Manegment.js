import React from 'react'

function Manegment() {
    return (
        <>
            <div className="Manegment">
                <div className="Panel_col">
                    <a href="Panel1"><button className="Regis_panel">Registration</button></a>
                    <a href="Panel3"><button className="Aadhar_Card">Aadhar & Pan / Card</button></a>
                </div>
                <div className="Panel_col1">
                    <a href="Panel2"><button className="Login_panel">Login</button></a>
                    <a href="Panel4"><button className="Main_panel">Main_panel</button></a>
                </div>
            </div>
        </>
    );
}

export default Manegment;
