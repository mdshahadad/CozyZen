import Carousel from 'react-multi-carousel';
import './ProductSlider.css';
import "react-multi-carousel/lib/styles.css";
import { FaCartPlus, FaRegHeart } from "react-icons/fa6";

const ProductSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='h-screen max-w-7xl mx-auto'>
            <div className='mt-28 mb-16'>
                <h3 className='text-xl'>New Arrival</h3>
                <h1 className='text-3xl font-semibold'>Choose Your Best Comfort</h1>
            </div>
            <div>
                <Carousel responsive={responsive}>
                    <div className='product relative'>
                        <img className='' src="https://i.postimg.cc/vmSR6k0Q/Slider3.jpg" alt="" />
                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/DwnKVqWK/slider4.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/y8jC7k93/slider6.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/vmSR6k0Q/Slider3.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/DwnKVqWK/slider4.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/y8jC7k93/slider6.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img className='' src="https://i.postimg.cc/vmSR6k0Q/Slider3.jpg" alt="" />
                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/DwnKVqWK/slider4.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/y8jC7k93/slider6.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/vmSR6k0Q/Slider3.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product  relative'>
                        <img src="https://i.postimg.cc/DwnKVqWK/slider4.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='product'>
                        <img src="https://i.postimg.cc/y8jC7k93/slider6.jpg" alt="" />

                        <div className='product-icons'>
                            <ul className='flex bg-black w-full absolute bottom-0 left-0 text-white py-2 justify-center'>
                                <li className='text-2xl cursor-pointer'><FaRegHeart /></li>
                                <li className='text-2xl cursor-pointer ml-4'><FaCartPlus /></li>
                            </ul>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default ProductSlider;