import React from 'react'
import '../Custome.css';
function Slide() {
    return (
        <>

            <div class="heading_text">
                <h2>These are the 3 best banks !</h2>
            </div>

            <div class="Slide">
                <div class="Slide_col">
                    <img src={require('./image/bank1.jpeg')} alt="" />
                    <div class="Slide_text">
                        <h4>SBI</h4>
                        <p>State Bank of India (SBI) is an Indian multinational public sector bank and financial services statutory
                            body headquartered in Mumbai, Maharashtra.
                        </p>
                    </div>
                </div>
                <div class="Slide_col slide_img">
                    <img src={require('./image/bank3.jpeg')} alt="" />
                    <div class="Slide_text">
                        <h4>Kotak</h4>
                        <p>Kotak Mahindra Bank Limited is an Indian banking and financial services company headquartered in Mumbai.
                        </p>
                    </div>
                </div>
                <div class="Slide_col slide_img">
                    <img src={require('./image/bank2.jpeg')} alt="" />
                    <div class="Slide_text">
                        <h4>Bank Of Boroda</h4>
                        <p>Bank of Baroda (BOB or BoB) is an Indian government Public sector bank headquartere
                            d in Vadodara, Gujarat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide
