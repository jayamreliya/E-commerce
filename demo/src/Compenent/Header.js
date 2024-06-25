import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HiOutlineBanknotes } from "react-icons/hi2";
function Header() {
    return (
        <>

            <div className="bg_color"/>
            <div class="header">
                <div class="logo">
                    <h1>HDFC BANK</h1>
                    <span>Housing Development Finance Corporation.</span>
                </div>

                <div class="navbar">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Help</a>
                    <a href="#">About</a>
                    <a href="#">Information</a>
                </div>
            </div>

            <div class="image">
                <OwlCarousel className='owl-theme' loop margin={0} nav={false} items={1}>
                    <div className="item_col">
                        <div class='item'>
                            <img src={require('./image/one.jpg')} alt="" />
                        </div>
                        <div className="item_text">
                            <h1>create best feature planning</h1>
                            <h2>With HDFC BANK</h2>
                            <div className="owl_text">
                                <ul>
                                    <li>term life insurance plans </li>
                                    <li>retirement / pension plans</li>
                                    <li>saving palns </li>
                                    <li>child insureance palns </li>
                                    <li>unite linked insureance palns </li>
                                </ul>
                                <ul className='owl_text2'>
                                    <li>10% Descount </li>
                                    <li>retirement / pension </li>
                                    <li>saving plans</li>
                                    <li>child  insuarnce </li>
                                    <li>Online payment </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="item_col">
                        <div class='item'>
                            <img src={require('./image/two.jpg')} alt="" />
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}

export default Header;
