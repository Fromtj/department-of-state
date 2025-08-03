import bg_country from '@/assets/images/bg_country.png'
import LanguageIcon from '@mui/icons-material/Language';
import japan from '@/assets/images/japan.png'
import maylasia from '@/assets/images/maylasia.png'
import holy_see from '@/assets/images/holy_see.png'
import baner from '@/assets/images/baner.png'

export default function Countries() {
    return(<>
    <section style={{backgroundImage: `url(${bg_country})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%'}} className='pt-[100px] pb-[30px]'>
        <section className='max-w-[400px] sm:max-w-[1230px] m-auto'>
            <div className='block sm:flex items-end justify-between'>
            <h1 className='text-white text-[35px] font-[classic] flex items-center gap-[20px]'><LanguageIcon fontSize='large' className='text-[#C1A783]' /> Countries & Areas in <br className='block sm:hidden' /> the News</h1>
            <span className='text-white text-[15px] font-[500] underline tracking-[1px]'>View all countries and areas</span>
            </div>
            <div className='flex gap-[60px] items-end mt-[60px] border-t-[1px] border-t-gray-300 sm:border-none'>
                <div className='flex items-center gap-[15px]'>
                    <img className='w-[50px] hidden sm:block' src={japan} alt="" />
                    <p className='text-white text-[28px] font-[500] underline font-[classic] py-[20px] sm:py-[0px]'>Japan</p>
                </div>
                <div className='hidden sm:flex items-center gap-[15px]'>
                    <img className='w-[50px]' src={maylasia} alt="" />
                    <p className='text-white text-[28px] font-[500] underline font-[classic]'>Malaysia</p>
                </div>
                <div className='hidden sm:flex items-center gap-[15px]'>
                    <img className='w-[50px]' src={holy_see} alt="" />
                    <p className='text-white text-[28px] font-[500] underline font-[classic]'>Holy See</p>
                </div>
            </div>
            <div className='bg-gray-300 h-[1px] w-[100%]'></div>
            <div className='block sm:flex my-[35px] gap-[80px]'>
                <span className='text-white text-[20px] font-[500] underline tracking-[1px]'>Japan Overview</span> <br className='block sm:hidden' />
                <span className='text-white text-[20px] font-[500] underline tracking-[1px]'>Embassies & Consulates in Japan</span>
            </div>
            <section className='max-w-[430px] sm:max-w-[1230px] m-auto block sm:flex items-start justify-between'>
                <div className='w-full sm:w-[48%] pb-[30px] sm:pb-[0px]'>
                    <img src={baner} alt="" />
                    <div className='flex items-center gap-[25px] mt-[20px] mb-[35px]'>
                        <div className='w-[50px] bg-[#C1A783] h-[1px]'></div>
                        <span className='text-white text-[16px]'>July 15, 2025</span>
                    </div>
                    <h1 className='text-[32px] text-white font-[500] underline tracking-[1px]'>Presidential Delegation to Attend U.S. <br /> National Day at Expo 2025 Osaka</h1>
                </div>
                <div className='max-w-[430px] sm:w-[45%] px-[10px] sm:px-[35px] bg-white py-[35px]'>
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