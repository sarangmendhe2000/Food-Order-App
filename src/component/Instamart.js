const Instamart =() =>{
    return (
        <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc')] bg-cover bg-center relative flex items-center justify-center font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif]">
  <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 h-full w-full">
    <div className="relative flex flex-col items-center justify-center text-center text-[#fff] z-[2] p-8 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] animate-fadeIn shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
      <h1 className="text-[3rem] mb-[1rem] shadow-[2px_2px_8px_rgba(0,0,0,0.3)]">🥦 Welcome to Instamart</h1>
      <p className="text-[1.5rem] mb-[2rem] text-[#e0e0e0]">Fresh groceries, delivered lightning fast at your doorstep.</p>
      <button className="px-8 py-4 text-[1.2rem] text-white bg-[#ff5722] border-none rounded-[50px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e64a19] hover:scale-[1.05] ">🛒 Start Shopping</button>
    </div>
  </div>
</div>

        
    )
};

export default Instamart;