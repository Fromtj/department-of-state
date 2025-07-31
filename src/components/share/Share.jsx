import map from '@/assets/images/map.png'
import winner from '@/assets/images/winner.png'
import space from '@/assets/images/space.png'

export default function Share() {
    return(<>
    <section className='bg-[#0A3553] w-[100%] pt-[40px] pb-[20px]'>
        <div className='max-w-[1230px] m-auto'>
            <h1 className='text-white font-[classic] text-[30px] mb-[30px]'>Discover more on <span className='underline'>ShareAmerica:</span></h1>
            <section className='flex justify-between gap-[20px] mb-[25px]'>
                <div className='flex items-start gap-[30px] border-r-[1px] border-r-gray-500 w-[30%]'>
                    <img className='w-[130px] h-[90px]' src={map} alt="" />
                    <p className='text-[16px] text-white font-[500] underline'>When Every Postage <br /> Stamp Tells a Story</p>
                </div>
                <div className='flex items-start gap-[30px] border-r-[1px] border-r-gray-500 w-[30%]'>
                    <img className='w-[130px] h-[90px]' src={winner} alt="" />
                    <p className='text-[16px] text-white font-[500] underline'>LA Olympics to Embrace Flag Football</p>
                </div>
                <div className='flex items-start gap-[30px] border-r-[1px] border-r-gray-500 w-[30%]'>
                    <img className='w-[130px] h-[90px]' src={space} alt="" />
                    <p className='text-[16px] text-white font-[500] underline'>At World Expo 2025, U.S. Reveals Future of Space Exploration</p>
                </div>
            </section>
                    <span className='text-[18px] text-white font-[classic]'>ShareAmerica informs global audiences about American people, places, and policy.</span>
           </div>
    </section>
    </>)
}