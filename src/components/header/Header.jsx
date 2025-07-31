import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import usa_logo from '@/assets/images/usa_logo.png'
import bank_logo from '@/assets/images/bank_logo.png'
import lock_logo from '@/assets/images/lock_logo.png'
import main_logo from '@/assets/images/main_logo.png'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return(<>
    <header>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='flex items-center gap-[15px] w-[1230px] m-auto'>
          <img className='w-[20px]' src={usa_logo} alt="" /> 
         <p className='text-[13px]'> An official website of the United States Government</p> 
         <span className='text-blue-800 underline text-[13px]'>Here's how you know</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <section className='max-w-[1230px] flex justify-between items-center m-auto'>
            <div className='w-[50%] flex items-center gap-[20px]'>
                <img className='w-[55px] h-[55px]' src={bank_logo} alt="" />
                <div>
                    <h5 className='text-[17px] text-[#333333] font-[700]'>Official websites use .gov</h5>
                    <p className='text-[17px] font-[400]'>A <span className='text-[#333333] font-[700]'>.gov</span> website belongs to an official government organization in the United States.</p>
                </div>
            </div>
            <div className='w-[50%] flex items-center gap-[20px]'>
                <img className='w-[55px] h-[55px]' src={lock_logo} alt="" />
                <div>
                    <h5 className='text-[17px] text-[#333333] font-[700]'>Secure .gov websites use HTTPS</h5>
                    <p className='text-[17px] font-[400]'>A <span className='text-[#333333] font-[700]'>lock (  )</span> or <span className='text-[#333333] font-[700]'>https://</span> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.</p>
                </div>
            </div>
          </section>
        </AccordionDetails>
      </Accordion>
      <section>
        <section className='w-[100%] py-[12px] bg-[#061b2b]'>
            <div className='max-w-[1230px] m-auto flex justify-end gap-[15px] items-center'>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Newsroom</span>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Business</span>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Employees</span>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Students</span>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Travelers</span>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Passports</span>
              <span className='text-[14px] font-[300] text-white hover:underline hover:text-[14.6px] hover:font-[600] transition-[0.8s]'>Visas</span>
              <div className='w-[1px] h-[20px] bg-white'></div>
              <FacebookSharpIcon className='text-white' />
              <CloseSharpIcon className='text-white' />
              <InstagramIcon className='text-white' />
              <YouTubeIcon className='text-white' />
              <EmailIcon className='text-white' />
            </div>
        </section>
        <section className='w-[100%] bg-[#0d2e47]'>
            <div className='max-w-[1230px] m-auto flex justify-between items-center'>
                <div className='flex gap-[10px]'>
                    <img className='relative w-[100px] h-[100px] bottom-[30px]' src={main_logo} alt="" />
                    <h4 className='text-white text-[20px] relative top-[30px] font-[500] font-[classic]'>U.S DEPARTMENT of State</h4>
                </div>
                <div className='flex gap-[20px]'>
                    <span className='text-[15px] font-[500] text-white hover:text-[15.4px] hover:font-[600]'>CONTRIES & AREAS</span>
                    <span className='text-[15px] font-[500] text-white hover:text-[15.4px] hover:font-[600]'>BUREAUS & OFFICES</span>
                    <span className='text-[15px] font-[500] text-white hover:text-[15.4px] hover:font-[600]'>ABOUT</span>
                    <SearchIcon className='text-white' />
                </div>
            </div>
        </section>
      </section>
    </header>
    </>)
}