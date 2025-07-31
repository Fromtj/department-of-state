import bg_country from '@/assets/images/bg_country.png'
import LanguageIcon from '@mui/icons-material/Language';
import japan from '@/assets/images/japan.png'
import maylasia from '@/assets/images/maylasia.png'
import holy_see from '@/assets/images/holy_see.png'
import baner from '@/assets/images/baner.png'

export default function Countries() {
    return(<>
    <section style={{backgroundImage: `url(${bg_country})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%'}} className='pt-[100px] pb-[30px]'>
        <section className='max-w-[1230px] m-auto'>
            <div className='flex items-end justify-between'>
            <h1 className='text-white text-[35px] font-[classic] flex items-center gap-[20px]'><LanguageIcon fontSize='large' className='text-[#C1A783]' /> Countries & Areas in the News</h1>
            <span className='text-white text-[15px] font-[500] underline tracking-[1px]'>View all countries and areas</span>
            </div>
            <div className='flex gap-[60px] items-end mt-[60px]'>
                <div className='flex items-center gap-[15px]'>
                    <img className='w-[50px]' src={japan} alt="" />
                    <p className='text-white text-[28px] font-[500] underline font-[classic]'>Japan</p>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <img className='w-[50px]' src={maylasia} alt="" />
                    <p className='text-white text-[28px] font-[500] underline font-[classic]'>Malaysia</p>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <img className='w-[50px]' src={holy_see} alt="" />
                    <p className='text-white text-[28px] font-[500] underline font-[classic]'>Holy See</p>
                </div>
            </div>
            <hr className='bg-[#e7dcdc]' />
            <div className='flex my-[35px] gap-[80px]'>
                <span className='text-white text-[20px] font-[500] underline tracking-[1px]'>Japan Overview</span>
                <span className='text-white text-[20px] font-[500] underline tracking-[1px]'>Embassies & Consulates in Japan</span>
            </div>
            <section className='max-w-[1230px] m-auto flex items-start justify-between'>
                <div className='w-[48%]'>
                    <img src={baner} alt="" />
                    <div className='flex items-center gap-[25px] mt-[20px] mb-[35px]'>
                        <div className='w-[50px] bg-[#C1A783] h-[1px]'></div>
                        <span className='text-white text-[16px]'>July 15, 2025</span>
                    </div>
                    <h1 className='text-[32px] text-white font-[500] underline tracking-[1px]'>Presidential Delegation to Attend U.S. <br /> National Day at Expo 2025 Osaka</h1>
                </div>
                <div className='w-[45%] px-[35px] bg-white py-[35px]'>
                <div className='flex items-center gap-[25px] mb-[20px]'>
                        <div className='w-[50px] bg-[#C1A783] h-[1px]'></div>
                        <span className='text-[#666666] text-[16px]'>July 24, 2025</span>
                    </div>
                    <h3 className='text-[#4574A1] text-[23px] font-[400] underline font-[classic] mb-[35px]'>Department Press Briefing – July 24, 2025</h3>
                    <hr className='bg-gray-50 mb-[20px]' />
                    <div className='flex items-center gap-[25px] mb-[20px]'> 
                        <div className='w-[50px] bg-[#C1A783] h-[1px]'></div>
                        <span className='text-[#666666] text-[16px]'>July 18, 2025</span>
                    </div>
                    <h3 className='text-[#4574A1] text-[23px] font-[400] underline font-[classic] mb-[35px]'>Deputy Secretary Landau’s Trilateral Meeting with Japanese Vice Foreign Minister Funakoshi and ROK First Vice Foreign Minister Park</h3>
                    <hr className='bg-gray-50 mb-[20px]' />
                    <span className='text-[#4574A1] text-[15px] underline font-[500]'>Read more about Japan</span>
                </div>
            </section>
        </section>
    </section>
    </>) 
}