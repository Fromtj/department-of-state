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
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return(<>
    <header>
    <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-[5px] sm:gap-[15px] w-full sm:max-w-[1230px] m-auto'>
      <div className='flex items-center gap-[10px]'>
        <img className='w-[20px]' src={usa_logo} alt="" />
        <p className='text-[13px]'>An official website of the United States Government</p>
      </div>
      <span className='text-blue-800 underline text-[13px]'>Here's how you know</span>
    </div>
  </AccordionSummary>

  <AccordionDetails>
    <section className='max-w-[1230px] flex flex-col sm:flex-row justify-between items-start gap-[30px] m-auto'>
      <div className='w-full sm:w-[50%] flex items-start gap-[15px]'>
        <img className='w-[45px] h-[45px]' src={bank_logo} alt="" />
        <div>
          <h5 className='text-[15px] sm:text-[17px] text-[#333333] font-[700]'>Official websites use .gov</h5>
          <p className='text-[15px] sm:text-[17px] font-[400]'>
            A <span className='text-[#333333] font-[700]'>.gov</span> website belongs to an official government organization in the United States.
          </p>
        </div>
      </div>
      <div className='w-full sm:w-[50%] flex items-start gap-[15px]'>
        <img className='w-[45px] h-[45px]' src={lock_logo} alt="" />
        <div>
          <h5 className='text-[15px] sm:text-[17px] text-[#333333] font-[700]'>Secure .gov websites use HTTPS</h5>
          <p className='text-[15px] sm:text-[17px] font-[400]'>
            A <span className='text-[#333333] font-[700]'>lock (🔒)</span> or <span className='text-[#333333] font-[700]'>https://</span> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.
          </p>
        </div>
      </div>
    </section>
  </AccordionDetails>
</Accordion>
<section>
  {/* Верхняя тёмная панель — показывается только на больших экранах */}
  <section className='w-full py-[12px] bg-[#061b2b] hidden sm:block'>
    <div className='max-w-[1230px] m-auto flex justify-end gap-[15px] items-center'>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Newsroom</span>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Business</span>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Employees</span>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Students</span>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Travelers</span>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Passports</span>
      <span className='text-[14px] font-[300] text-white hover:underline hover:font-[600] transition-[0.8s]'>Visas</span>
      <div className='w-[1px] h-[20px] bg-white'></div>
      <FacebookSharpIcon className='text-white' />
      <CloseSharpIcon className='text-white' />
      <InstagramIcon className='text-white' />
      <YouTubeIcon className='text-white' />
      <EmailIcon className='text-white' />
    </div>
  </section>

  {/* Нижняя шапка — адаптив */}
  <section className='w-full bg-[#0d2e47]'>
  <div className='max-w-[1230px] m-auto flex flex-col sm:flex-row justify-between items-center py-[15px] gap-[15px] sm:gap-0'>

    {/* Левая часть: логотип, меню и заголовок */}
    <div className='flex items-center justify-between w-full sm:w-auto'>
      <div className='flex items-center gap-[10px]'>
        <img className='w-[60px] h-[60px] hidden sm:block' src={main_logo} alt="" />
        <MenuIcon className='text-white text-[28px] block sm:hidden' />
        <h4 className='text-white text-[17px] sm:text-[20px] font-[500] font-[classic] whitespace-nowrap'>U.S DEPARTMENT of State</h4>
      </div>

      {/* Поисковик — справа от заголовка в мобилке */}
      <div className='block sm:hidden'>
        <SearchIcon className='text-white text-[24px]' />
      </div>
    </div>

    {/* Правая часть — отображается только на больших экранах */}
    <div className='hidden sm:flex items-center gap-[20px]'>
      <span className='text-[15px] font-[500] text-white hover:font-[600]'>CONTRIES & AREAS</span>
      <span className='text-[15px] font-[500] text-white hover:font-[600]'>BUREAUS & OFFICES</span>
      <span className='text-[15px] font-[500] text-white hover:font-[600]'>ABOUT</span>
      <SearchIcon className='text-white text-[24px]' />
    </div>
  </div>
</section>

</section>

    </header>
    </>)
}