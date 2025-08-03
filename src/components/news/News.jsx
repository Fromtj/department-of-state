import bg_news from '@/assets/images/bg_news.png'
import StarIcon from '@mui/icons-material/Star';

export default function News() {
    return(<>
    <section style={{backgroundImage: `url('${bg_news}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%'}}>
        <div className='max-w-[400px] sm:max-w-[1230px] m-auto py-[200px]'>
           <div className='text-center'>
                <div className='mb-[10px]'>
                <StarIcon className='text-[#C1A783]'/>
                <StarIcon className='text-[#C1A783]'/>
                <StarIcon className='text-[#C1A783]'/>
                </div>
               <span className='text-[32px] font-[classic] text-[#333333]'>IN OTHER NEWS</span>
               <div className='w-[150px] h-[1px] bg-[#C1A783] mx-auto mt-[15px]'></div>
            </div>
            <section className='mt-[30px] block sm:flex justify-between items-start'>
                <div className='mb-[30px] sm:mb-[50px]'>
                    <div className='flex items-center gap-[15px]'>
                        <div className='w-[40px] h-[0.6px] bg-[#C1A783]'></div>
                        <span className='text-[#666666] text-[18px] font-[400] font-[sans]'>July 29, 2025</span>
                    </div>
                    <h3 className='text-[#4574A1] underline text-[22px] font-[500] my-[15px]'>Repatriation of Unaccompanied U.S. <br /> Citizen Minor</h3>
                    <p className='font-[400] text-[18px]'>Last week the U.S. repatriated a U.S. citizen <br /> minor from a displaced persons camp in <br /> northeast Syria for unification with the child’s <br /> family.</p>
                </div>
                <div className='mb-[30px] sm:mb-[50px]'>
                    <div className='flex items-center gap-[15px]'>
                        <div className='w-[40px] h-[0.6px] bg-[#C1A783]'></div>
                        <span className='text-[#666666] text-[18px] font-[400] font-[sans]'>July 29, 2025</span>
                    </div>
                    <h3 className='text-[#4574A1] underline text-[22px] font-[500] my-[15px]'>Rewards for Justice Reward Offer</h3>
                    <p className='font-[400] text-[18px]'>The new reward offer for information on the <br /> leader of al-Qa’ida in the Arabian Peninsula <br /> (AQAP), Sa’ad bin Atef al-Awlaki is up to $10 <br /> million.</p>
                </div>
                <div>
                    <div className='flex items-center gap-[15px]'>
                        <div className='w-[40px] h-[0.6px] bg-[#C1A783]'></div>
                        <span className='text-[#666666] text-[18px] font-[400] font-[sans]'>July 26, 2025</span>
                    </div>
                    <h3 className='text-[#4574A1] underline text-[22px] font-[500] my-[15px]'>Bounties on Individuals Exercising <br /> Freedom of Expression</h3>
                    <p className='font-[400] text-[18px]'>The extraterritorial targeting of Hong <br /> Kongers who are exercising their <br /> fundamental freedoms is a form of <br /> transnational repression.</p>
                </div>
            </section>
           
        </div>
    </section>
    </>)
}