import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <Logo></Logo>
                <p>
                    <span className='font-bold'>STYLEDECOR</span>
                    <br />
                    17 years of evolving in interior design, with a passion for meaningful spaces.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Our Services</h6>
                <a className="link link-hover">Residential | Home</a>
                <a className="link link-hover">Office Design</a>
                <a className="link link-hover">Showroom Design</a>
                <a className="link link-hover">Landscape Architecture</a>
                <a className="link link-hover">Exterior Design</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact Us</h6>
                <a className="link link-hover">323 Aftab Tower, 1st Floor, <br />Rampura, Dhaka-1219.</a>
                <a className="link link-hover">+8801754804496</a>
                <a className="link link-hover">misskhat.hossen@gmail.com</a>

            </nav>
            <nav>
                <h6 className="footer-title">Connect With Us</h6>
                <div className='flex gap-2 text-2xl'>
                    <FaFacebookSquare />
                    <FaYoutubeSquare />
                    <FaInstagramSquare />
                    <FaLinkedin />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;