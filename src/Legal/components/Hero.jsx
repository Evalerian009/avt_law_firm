

const Hero = () => {
  return (
    <div className="py-20 md:py-24">
      <div className="w-[70vw] h-[65vh] lg:w-[78vw]  lg:h-[70vh] mx-auto  bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 relative">
        <div className="text-slate-100 absolute -top-[9%] -left-[35px] bg-gradient-to-r from-gray-900 to-gray-600 slate- text-lg sm:text-xl md:text-2xl lg:text-3xl md:w-[45%] md:max-w-[300px] p-4 capitalize font-semibold z-[10]">
          <h3>Creativity in service to our clients</h3>
        </div>
        <div className="hero-bg w-[95%] h-[90%] absolute bottom-0">
        <div className="w-[120px] h-[120px] bg-gradient-to-t from-slate-800 to-slate-500 rounded-full absolute -bottom-[10%] -left-[30px] " />
        <div className="hidden md:block bg-slate-200 w-[50%] lg:max-w-[500px] absolute right-[-15%] -bottom-[13%] p-3 lg:p-4">
          <p className="text-[14px] md:text-lg pb-3 font-[500]">
            Morbi posuere non nisl non tincidunt. Nunc pretium laoreet fermentum. Integer tincidunt dignissim sagittis. Nulla malesuada orci nec scelerisque tristique. Fusce eu maximus nisi, non pulvinar tellus. Nulla scelerisque orci sed bibendum porta.
          </p>
          <button className="bg-slate-800 text-slate-50 text-[14px] font-semibold py-1 py-3 px-4">See More</button>
        </div>
        </div>
      </div>
      <div className="block md:hidden bg-slate-200 w-[80%] mx-auto mt-14 p-3 lg:p-4">
        <p className="text-[14px] pb-3 font-[500]">
          Morbi posuere non nisl non tincidunt. Nunc pretium laoreet fermentum. Integer tincidunt dignissim sagittis. Nulla malesuada orci nec scelerisque tristique. Fusce eu maximus nisi, non pulvinar tellus. Nulla scelerisque orci sed bibendum porta.
        </p>
        <button className="bg-slate-800 text-slate-50 text-[14px] font-semibold py-1 py-3 px-4">See More</button>
      </div>
    </div>
  )
}

export default Hero