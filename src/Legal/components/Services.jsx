import ServiceImg from '../assets/services.jpg'
import Hammer from '../assets/hammer.png'
import Note from '../assets/note.png'
import Scale from '../assets//scale.png'

const Services = () => {
  return (
    <div className="pt-14 md:pb-[450px] px-6">
      <h2 className="text-3xl font-semibold text-slate-200 pb-7">Legal Practice Areas</h2>
      <div className='bg-gradient-to-b from-slate-700 to-gray-900 pt-2 px-4'>
        <img src={ServiceImg} alt="services-img" className='w-[85%] mx-auto max-w-[500px]' />
        <div className='py-12 flex flex-col md:flex-row gap-x-5 gap-y-7'>
          <div className='w-[80%] max-w-[450px] mx-auto text-center bg-slate-200 py-7 px-4'>
            <img src={Hammer} alt="hammer" width={150} className='mx-auto pb-5' />
            <h4 className='capitalize text-2xl md:text-3xl font-semibold'>Insurance Law</h4>
            <p className='md:text-lg font-[500] pt-2'>Morbi vehicula mi vitae augue finibus gravida. Morbi vehicula mi vitae augue finibus gravida vehicula mi vitae augue finibus gravida.</p>
          </div>
          <div className='w-[80%] max-w-[450px] mx-auto text-center bg-slate-200 py-7 px-4'>
            <img src={Note} alt="hammer" width={150} className='mx-auto pb-5' />
            <h4 className='capitalize text-2xl md:text-3xl font-semibold'>Insurance Law</h4>
            <p className='md:text-lg font-[500] pt-2'>Morbi vehicula mi vitae augue finibus gravida. Morbi vehicula mi vitae augue finibus gravida vehicula mi vitae augue finibus gravida.</p>
          </div>
          <div className='w-[80%] max-w-[450px] mx-auto text-center bg-slate-200 py-7 px-4'>
            <img src={Scale} alt="hammer" width={150} className='mx-auto pb-5' />
            <h4 className='capitalize text-2xl md:text-3xl font-semibold'>Insurance Law</h4>
            <p className='md:text-lg font-[500] pt-2'>Morbi vehicula mi vitae augue finibus gravida. Morbi vehicula mi vitae augue finibus gravida vehicula mi vitae augue finibus gravida.</p>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='hidden md:block md:w-[550px] md:h-[550px] bg-slate-100 rounded-full bg-gradient-to-b from-slate-600 via-slate-900 to-gray-800 absolute'/>
        <div className='hidden md:block md:w-[550px] md:h-[550px] bg-slate-100 rounded-full bg-gradient-to-b from-slate-600 via-slate-900 to-gray-800 absolute right-0 top-[200px]'/>
        <div className="w-full h-[30vh] md:w-[75%] md:h-[300px] max-w-[800px] lg:h-[370px] bg-gradient-to-t from-slate-800 to-slate-500 relative sm:ml-auto top-14">
          <div className="contact-bg w-[85%] h-[95%] bg-slate-500 mx-auto relative -top-[30px]" />
          <div className="hidden w-[75%] mx-auto bg-slate-200 p-5 md:block md:absolute -bottom-[350px] -left-[175px] text-lg font-[500]">
            <h4 className='md:text-4xl'>Practice Areas</h4>
            <p className='text-xl semibold py-4 leading-8'>Get the personal attention you deserve as we connecnt with professionals who will handle your exceptionally.</p>
            <ul className='uppercase flex flex-col gap-y-4 font-normal'>
              <li>Car accidents</li>
              <li>Slips and falls</li>
              <li>Product liability</li>
              <li>Bus accidents</li>
              <li>Train accidents</li>
              <li>Medic aid fraud</li>
            </ul>
            <button className="py-2 px-3 bg-slate-500 mt-4 text-slate-50 uppercase">More</button>
          </div>
        </div>
        <div className="pt-20 w-full mx-auto bg-slate-200 p-5 text-lg font-[500] md:hidden">
        <h4 className='text-3xl md:text-4xl'>Practice Areas</h4>
            <p className='text-xl semibold py-4 leading-8'>Get the personal attention you deserve as we connecnt with professionals who will handle your exceptionally.</p>
            <ul className='uppercase flex flex-col gap-y-4 font-normal'>
              <li>Car accidents</li>
              <li>Slips and falls</li>
              <li>Product liability</li>
              <li>Bus accidents</li>
              <li>Train accidents</li>
              <li>Medic aid fraud</li>
            </ul>
            <button className="py-2 px-3 bg-slate-500 mt-4 text-slate-50 uppercase">More</button>
        </div>
      </div>
    </div>
  )
}

export default Services