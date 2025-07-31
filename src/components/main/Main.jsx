import bg_main from '@/assets/images/bg_main.png'
import politic from '@/assets/images/politic.png'
import logo2 from '@/assets/images/logo2.png'

export default function Main() {
    return(<>
    <section style={{backgroundImage: `url('${bg_main}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%'}} className="">
      <div className='max-w-[1230px] m-auto flex pt-[70px]'>
       <section>
       <div className='flex items-center gap-[15px] mb-[30px]'>
        <div className='w-[40px] h-[0.6px] bg-[#C1A783]'></div>
        <span className='text-[17px] text-white font-[500] font-[classic]'>July 28, 2025</span>
       </div>
        <h3 className='text-white text-[32px] font-[classic] font-[400]'>Ceasefire Between Cambodia and <br /> Thailand</h3>
        <h4 className='text-white text-[25px] font-[classic] font-[400] my-[25px]'>The U.S. applauds the ceasefire declaration <br /> between Cambodia and Thailand.</h4>
        <button className='text-white border-[1px] border-solid border-white text-[17px] px-[25px] py-[10px] hover:px-[27px] hover:py-[2px] transition-[0.8s]'>LEARN MORE</button>
       </section>
      </div>
      <section className='bg-white w-[87%] flex items-start justify-between py-[40px] relative top-[70px]'>
        <div className='ml-[140px] flex items-start gap-[30px] border-r-[1px] border-solid border-gray-600 pr-[50px]'>
            <div className=''>
                <span className='text-[15px] font-[500] text-gray-600 mb-[15px]'>July 29, 2025</span>
                <p className='text-[#4574A1] underline text-[18px] fint-[500] font-[classic]'>Department Press <br /> Briefing</p>
            </div>
            <img className='w-[100px] h-[100px]' src={politic} alt="" />
        </div>
        <div className='ml-[50px] flex items-start gap-[30px] border-r-[1px] border-solid border-gray-600 pr-[50px]'>
            <div>
                <span className='text-[15px] font-[500] text-gray-600 mb-[15px]'>July 28, 2025</span>
                <p className='text-[#4574A1] underline text-[18px] fint-[500] font-[classic]'>U.S. Rejects A Two- <br /> State Solution <br /> Conference</p>
            </div>
            <img src={logo2} alt="" />
        </div>
        <div className='ml-[50px] flex items-start gap-[30px] pr-[50px]'>
            <div>
                <span className='text-[15px] font-[500] text-gray-600 mb-[15px]'>July 27, 2025</span>
                <p className='text-[#4574A1] underline text-[18px] fint-[500] font-[classic]'>Standing with the <br /> Venezuelan People: One <br /> Year After Yet Another <br /> Sham Election</p>
            </div>
            <img src={logo2} alt="" />
        </div>
      </section>
    </section>
    </>)
}