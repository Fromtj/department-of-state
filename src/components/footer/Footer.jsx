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
        <section className="max-w-[1230px] m-auto">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-[30px]'>
                    <img className='w-[70px] h-[70px] hover:w-[72px] hover:h-[72px] transition-[0.8s]' src={main_logo} alt="" />
                    <h3 className='text-white font-[classic] text-[18px] hover:text-[19px] transition-[0.8s]'>U.S DEPARTMENT of State</h3>
                </div>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s]'>White House</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s]'>USA.gov</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s]'>Office of the <br /> Inspector General</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s]'>Archives</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s]'>Contact Us</span>
                <span className='text-white font-[classic] text-[17px] hover:text-[18px] transition-[0.8s]'>America 250</span>
            </div>
            <hr className='my-[30px] bg-white' />
            <div className='flex justify-between'>
                 <p className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s]'>FOLLOW US</p>
                 <div className='flex gap-[25px]'>
                 <FacebookSharpIcon className='text-white' />
              <CloseSharpIcon className='text-white' />
              <InstagramIcon className='text-white' />
              <YouTubeIcon className='text-white' />
              <EmailIcon className='text-white' />
                 </div>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s]'>Privacy Policy</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s]'>Accessibility Statement</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s]'>Copyright Information</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s]'>FOIA</span>
                 <span className='text-white text-[18px] font-[400] hover:text-[19px] transition-[0.8s]'>No FEAR Act</span>
            </div>
        </section>
    </footer>
    </>)
}