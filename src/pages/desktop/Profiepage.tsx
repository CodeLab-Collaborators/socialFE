import LeftSidebar from "../../components/static/LeftSidebar"
import img from "../../assets/myPix.png"


const Profiepage = () => {
  return (
      <div className="flex w-[100%]">
          <LeftSidebar />
          <div className="flex-[1] bg-[red] h-[100%] column items-center bg-[#fff] pt-[40px]">
              
              <div className="flex h-[100%] bg-[#fff] justify-center">
                  <img src={img} className="w-[130px] h-[130px] rounded-[100px] object-cover" />
                  {/* <div className="text-[green]">hfhfhfhf</div> */}
              </div>
          </div>
    </div>
  )
}

export default Profiepage