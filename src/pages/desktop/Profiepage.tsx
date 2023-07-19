import LeftSidebar from "../../components/static/LeftSidebar"


const Profiepage = () => {
  return (
      <div className="flex w-[100%]">
      <LeftSidebar />
      
      {/* profile page styling */}
      <div className="w-[100%] justify-end flex">
        <main className="bg-white h-[100%] flex column justify-center pt-[40px]" style={{ width: "calc(100% - 18%)" }}>
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profie"
              className="w-[160px] h-[160px] rounded-full"
            />
          </div>
      </main>
      </div>
          
    </div>
  )
}

export default Profiepage