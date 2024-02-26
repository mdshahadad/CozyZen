import { Button, Navbar } from 'flowbite-react';
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";


const Header = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar fluid rounded>
                <Navbar.Brand href="/">
                    <img src="../../../public/sofa.jpg" className="mr-2 h-6 sm:h-16" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">CozyZen</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='bg-transparent text-black px-0 
                    enabled:hover:bg-white focus:ring-0'><IoSearchOutline className='text-3xl' /></Button>
                    <Button className='bg-transparent text-black px-0 enabled:hover:bg-white focus:ring-0'><FaCartShopping className='text-3xl' /></Button>
                    <Button className='bg-transparent text-black px-0 enabled:hover:bg-white focus:ring-0'><FaUser className='text-3xl' /></Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse  className='mt-1'>
                    <Navbar.Link href="#" active className='text-lg'>
                        Home
                    </Navbar.Link>
                    {/* <Navbar.Link href="/about">About</Navbar.Link> */}
                    <Navbar.Link href="/shop" className='text-lg'>Shop</Navbar.Link>
                    <Navbar.Link href="/checkout" className='text-lg'>Checkout</Navbar.Link>
                    <Navbar.Link href="#" className='text-lg'>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;