const Newsletter = () => {
  return (
    <div className="px-6 py-10 md:flex">
      <div className="p-7 bg-gradient-to-b from-slate-600 to-slate-800 md:w-1/2">
        <h4 className="text-slate-200 text-3xl">Get in touch</h4>
        <div className="w-[100px] h-[4px] bg-slate-200 mt-4"/>
        <form className="mt-7 flex flex-col gap-y-10">
          <input type="text" placeholder="Enter your Name" className="bg-transparent outline-none border-b pb-2 text-lg text-slate-200 w-[90%]" />
          <input type="text" placeholder="Enter a valid email address" className="bg-transparent outline-none border-b pb-2 text-lg text-slate-200 w-[90%]" />
          <textarea rows={6} maxLength={400}placeholder='Leave us a comment...' className="bg-transparent outline-none border-b pb-2 w-[90%] resize-none text-lg text-slate-200" />
          <input type="submit" className="text-left py-2 px-4 bg-slate-200 uppercase w-fit font-bold text-slate-950"/>
        </form>
      </div>
      <div className="p-7 bg-slate-300 md:w-1/2">
        <h4 className="text-xl font-semibold uppercase mb-3">Address</h4>
        <p className="text-lg font-[500] text-slate-800">121 Rock Street 25 Avenue</p>
        <p className="text-lg font-[500] text-slate-800">New York NY-92103 8000</p>
        <h4 className="text-xl font-semibold uppercase mb-3 mt-7">Call us</h4>
        <p className="text-lg font-[500] text-slate-800">1 (234) 567891</p>
        <p className="text-lg font-[500] text-slate-800">1 (257) 461812</p>
        <h4 className="text-xl font-semibold uppercase mb-3 mt-7">Opening hours</h4>
        <p className="text-lg font-[500] text-slate-800">Monday - Friday _ _ _ _ 10am - 8pm</p>
        <p className="text-lg font-[500] text-slate-800">Saturday - Sunday _ _ _ _ Closed</p>
      </div>
    </div>
  )
}

export default Newsletter