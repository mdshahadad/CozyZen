import living from '../../../../public/Images/LivingRoom (1).jpg'
import bed from '../../../../public/Images/BedROom (1).jpg'
import office from '../../../../public/Images/OfficeRoom (1) (1).jpg'
import living1 from '../../../../public/Images/OfficeRoomOne (1).jpg'

const RoomSections = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-6 gap-2'>
                <div className='relative col-span-4'>
                    <img className='w-full' src={living} alt="" />
                    <div className='absolute top-0 w-full'>
                        <h2 className='text-5xl font-medium backdrop-blur-lg py-2 px-4 text-white'>Living Room</h2>
                    </div>
                </div>
                <div className='relative w-full h-full col-span-2'>
                    <img className='w-full h-full' src={office} alt="" />
                    <div className='absolute top-0 w-full'>
                        <h2 className='text-5xl font-medium backdrop-blur-lg py-2 px-4 text-white'>Living Room</h2>
                    </div>
                </div>
                <div className='relative col-span-3'>
                    <img className='w-full' src={bed} alt="" />

                    <div className='absolute top-0 w-5/6'>
                        <h2 className='text-5xl font-medium backdrop-blur-lg py-2 px-4 text-white'>Living Room</h2>
                    </div>
                </div>
                <div className='relative col-span-3'>
                    <img className='w-full' src={living1} alt="" />

                    <div className='absolute top-0 w-5/6'>
                        <h2 className='text-5xl font-medium backdrop-blur-lg py-2 px-4 text-white'>Living Room</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomSections;