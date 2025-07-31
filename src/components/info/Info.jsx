import passport from '@/assets/images/passport.png'
import usa_flag from '@/assets/images/usa_flag.png'
import tramp from '@/assets/images/tramp.png'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import american from '@/assets/images/american.png'

export default function Info() {
    return(<>
    <section>
        <div className='w-[100%] bg-[#C1A783]'>
           <div className='max-w-[1400px] m-auto flex justify-between items-start pt-[50px]'>
                <div className='flex items-center gap-[20px] bg-[#062135] pr-[100px]'>
                    <img className='w-[150px] h-[150px]' src={passport} alt="" />
                    <p className='text-white underline text-[20px]'>Online Passport <br /> Renewal</p>
                </div>
                <div className='flex items-center gap-[20px] bg-[#062135] pr-[100px]'>
                    <img className='w-[150px] h-[150px]'  src={usa_flag} alt="" />
                    <p className='text-white underline text-[20px]'>Making Foreign Aid <br /> Great Again</p>
                </div>
                <div className='flex items-center gap-[20px] bg-[#062135] pr-[100px]'>
                    <img className='w-[150px] h-[150px]'   src={tramp} alt="" />
                    <p className='text-white underline text-[20px]'>first 100 days of an <br /> america first state <br /> department</p>
                </div>
            </div>
            <div className='bg-white w-[87%] py-[15px] flex items-center gap-[70px] relative top-[70px]'>
                <p className='ml-[150px] text-[25px] font-[classic] '>Get email updates delivered to your inbox.</p>
                <button className='text-[#4574A1] border-[#4574A1] border-[1.6px] py-[10px] px-[17px] rounded-[25px] underline font-[500]'>SUBCRIBE</button>
                <div className='w-[0.6px] h-[100px] bg-[#666666]'></div>
                <div className='flex gap-[25px]'>
                <FacebookSharpIcon fontSize='large' className='text-[#062135]' />
              <CloseSharpIcon fontSize='large' className='text-[#062135]' />
              <InstagramIcon fontSize='large' className='text-[#062135]' />
              <YouTubeIcon fontSize='large' className='text-[#062135]' />
              <EmailIcon fontSize='large' className='text-[#062135]' />
                </div>
            </div>
        </div>
        <div className='w-[100%] bg-[#093452] pt-[110px] pb-[30px]'>
         <section className='max-w-[1230px] m-auto'>
            <h1 className='text-[47px] font-[classic] font-[500] text-white mb-[30px]'>Leading America’s foreign policy to advance the <span className='text-[#C1A783]'>interests</span> <br /> and <span className='text-[#C1A783]'>security</span> of the American people.</h1>
            <div className='bg-[#062135] flex items-center gap-[50px]'>
                <img className='w-[420px] h-[220px]' src={american} alt="" />
                <div>
                    <h3 className='text-white font-[500] underline text-[25px] tracking-[1px] mb-[15px]'>What is the most American thing?</h3>
                    <p className='text-white font-[300] text-[17px]'>What do you think is the most iconic symbol of America? Try our bracket to <br /> find out what tops your list as the Most American Thing.</p>
                </div>
            </div>
         </section>
        </div>
    </section>
    </>)
}