

const Contact = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 py-10 relative">
      <div className='hidden md:block md:w-[550px] md:h-[550px] bg-slate-100 rounded-full bg-gradient-to-b from-slate-600 via-slate-900 to-gray-800 absolute bottom-[400px]'/>
      <div className='hidden md:block md:w-[550px] md:h-[550px] bg-slate-100 rounded-full bg-gradient-to-b from-slate-600 via-slate-900 to-gray-800 absolute bottom-[100px] right-0'/>
      <div className="text-slate-200 relative z-[10] w-[80%] md:max-w-[900px] pb-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold w-[90%] md:leading-snug">Contact a lawyer from our firm</h2>
        <p className="py-7 text-lg md:text-[1.25rem] leading-[38px] font-[500]">Duis faucibus tellus a lacus bibendum aliquam. Phasellus ut sagittis lorem. Suspendisse potenti. Nullam fringilla sed ligula quis consequat. Nunc eget tortor accumsan, hendrerit sapien vel, placerat velit. Sed feugiat congue facilisis. Suspendisse et felis vel enim sagittis suscipit. Aenean pellentesque malesuada faucibus. Quisque euismod rutrum erat, vel maximus enim porta nec.</p>
        <button className="bg-slate-300 py-2 px-6 uppercase font-bold text-slate-950">View More</button>
      </div>
      <div className="w-full h-[30vh] md:w-[85%] md:h-[300px] lg:max-w-[800px] lg:h-[400px] bg-gradient-to-t from-slate-800 to-slate-500 relative sm:ml-auto top-14">
        <div className="contact-bg w-[85%] h-[95%] bg-slate-500 mx-auto relative -top-[30px]" />
        <div className="hidden w-[75%] mx-auto bg-slate-200 p-5 md:block md:absolute -bottom-[50px] md:-left-[150px] lg:-left-[200px] text-lg font-[500]">
          <p>Etiam diam leo, semper et pellentesque sed, egestas vitae diam. Donec in lacus ac sem ultrices iaculis. Ut luctus finibus arcu vitae ornare. Nullam venenatis tempor interdum. Etiam diam leo, semper et pellentesque sed, egestas vitae diam. Donec in lacus ac sem ultrices iaculis.</p>
          <button className="py-2 px-3 bg-slate-500 mt-4 text-slate-50">More</button>
        </div>
      </div>
      <div className="pt-20 w-full mx-auto bg-slate-200 p-5 text-lg font-[500] md:hidden">
          <p>Etiam diam leo, semper et pellentesque sed, egestas vitae diam. Donec in lacus ac sem ultrices iaculis. Ut luctus finibus arcu vitae ornare. Nullam venenatis tempor interdum. Etiam diam leo, semper et pellentesque sed, egestas vitae diam. Donec in lacus ac sem ultrices iaculis.</p>
          <button className="py-2 px-3 bg-slate-500 mt-4 text-slate-50 uppercase">More</button>
        </div>
      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-gradient-to-t from-slate-800 to-slate-500 rounded-full absolute top-[10%] right-[5%] sm:right-[5%] md:right-[30%] z-[9]" />
      <div className="text-slate-200 pt-10 md:pt-[170px] max-w-[800px] relative">
        <h3 className="text-4xl md:text-6xl font-semibold leading-[50px] md:leading-[75px] w-[80%] z-[8] relative">Comprehensive legal service</h3>
        <p className="text-lg md:text-xl pt-7 z-[8] relative font-[500]">Nulla dignissim id diam eu auctor. Etiam sapien nisi, pharetra consectetur malesuada vel, tristique nec massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula mi vitae augue finibus gravida. Nulla malesuada dolor ut magna tincidunt congue.</p>
        <button className="bg-slate-400 py-2 px-4 mt-5 text-slate-950 font-bold uppercase">View More</button>
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-gradient-to-t from-slate-800 to-slate-500 rounded-full absolute top-[60%] left-[60%] md:left-[50%] sm:right-[5%] md:right-[30%] z-[6]" />
      </div>
    </div>
  )
}

export default Contact