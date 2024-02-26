const Banner = () => {
    return (
        <div className="bg-[#ECE8E5] h-lvh">
            <div className="banner flex items-center justify-center px-20">
                <div className="w-1/2 space-y-4 mx-28">
                    <div className="">
                        <h1 className="text-6xl font-medium">Decor Your Corner <br /> In Minimalist</h1>
                    </div>
                    <div className="space-y-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo vel consequuntur saepe quasi iure odit ad optio expedita officia.</p>
                        <button className="border-2 border-black px-8 py-2 rounded-md font-medium">Buy Now</button>
                    </div>
                </div>
                <img className="" src="https://i.postimg.cc/3J5kvZKp/banner-Chair-removebg.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;