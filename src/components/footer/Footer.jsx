import main_logo from '@/assets/images/main_logo.png'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';

export default function Footer() {
    return(<>
    <footer className="bg-[#062135] w-[100%] pt-[30px] pb-[55px]">
        <section className="max-w-[400px] sm:max-w-[1230px] m-auto text-center">
            <div className='block sm:flex justify-between items-center'>
                <div className='block sm:flex items-center gap-[30px]'>
                    <img className='w-[70px] h-[70px] hover:w-[72px] hover:h-[72px] transition-[0.8s] m-auto mb-[10px] sm:mb-[0px]' src={main_logo} alt="" />
                    <h3 className='text-white font-[classic] text-[18px] hover:text-[19px] transition-[0.8s] mb-[20px] sm:mb-[0px]'>U.S DEPARTMENT of State</h3>
                </div>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>White House</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>USA.gov</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>Office of the <br /> Inspector General</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>Archives</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>Contact Us</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>America 250</span>
            </div>
            <hr className='my-[30px] bg-white hidden sm:block' />
            <div className='block sm:flex justify-between gap-[20px]'>
                 <p className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s] hidden sm:block'>FOLLOW US</p>
                 <div className='flex justify-center gap-[25px] m-auto py-[20px] sm:py-[0px] border-y-[1px] border-y-gray-500 sm:border-y-[#062135] my-[15px] sm:my-[0px]'>
                 <FacebookSharpIcon className='text-white' />
              <CloseSharpIcon className='text-white' />
              <InstagramIcon className='text-white' />
              <YouTubeIcon className='text-white' />
              <EmailIcon className='text-white' />
                 </div>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>Privacy Policy</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>Accessibility Statement</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>Copyright Information</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>FOIA</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s] block mb-[5px] sm:mb-[0px]'>No FEAR Act</span>
            </div>
        </section>
    </footer>
    </>)
}