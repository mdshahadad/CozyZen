const Banner = () => {
    return (
        <div className="bg-[#ECE8E5] h-fit overflow-x-hidden">
            <div className="banner flex items-center justify-center md:px-20">
                <div className="md:w-1/2 space-y-4 mx-8 md:mx-28 absolute md:static z-10 md:z-0 top-96 md:top-0">
                    <div className="">
                        <h1 className="text-4xl md:text-6xl md:font-medium font-bold">Decor Your Corner <br /> In Minimalist</h1>
                    </div>
                    <div className="space-y-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo vel consequuntur saepe quasi iure odit ad optio expedita officia.</p>
                        <button className="border-2 border-black px-8 py-2 rounded-md font-medium">Buy Now</button>
                    </div>
                </div>
                <div className="h-screen md:pt-20">
                    <img className="w-[480px] md:h-[780px] md:w-[900px] mt-20 md:mt-0 scale-125 md:scale-100" src="https://i.postimg.cc/3J5kvZKp/banner-Chair-removebg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;