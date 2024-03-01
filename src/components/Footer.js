import React from 'react'
import logo from '../images/Logo .svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <section className='p-12 flex md:w-full md:flex-row md:gap-24 flex-col gap-8'>
                <div>
                    <img className='mb-4' src={logo} alt="" />
                    <p className='max-w-sm'>we are a family owned mediterraneran resturant, focused on traditional recipes served with a modern twist</p>
                </div>

                <div>
                    <h3 className='md:mb-4 mb-2 font-bold'>Important Links</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className="hover:text-green-700 "><Link to="/">Home</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">About Us</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Services</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Menu</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Reservations</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Order Online</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Login</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className='md:mb-4 mb-2 font-bold'>Contact Us</h3>
                    <ul className='flex flex-col gap-3'>
                        <li>Address: 123 Town Street,USA</li>
                        <li>Phone: ++ 0123 456 78</li>
                        <li>Email: littlelemon@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3 className='md:mb-4 mb-2 font-bold'>Social Media Links</h3>
                    <ul className='flex flex-col gap-3'>
                    <li className="hover:text-green-700 "><Link to="/">Facebook</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Twitter</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Instagram</Link></li>
                        <li className="hover:text-green-700 "><Link to="#">Telegram</Link></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer