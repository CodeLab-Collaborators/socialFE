import img from "../../assets/myPix.png"
import img2 from "../../assets/tony.jpg"

const Profilepost = () => {
  return (
      <div className="w-[100%] h-[100%] flex flex-wrap mt-[12px] justify-between">
          
          <img
              src={img}
              className="w-[325px] h-[330px] object-cover pb-[10px]"
          />
          <img
              src={img2}
              className="w-[325px] h-[330px] object-cover pb-[10px]"
          />
          <img
              src={img}
              className="w-[325px] h-[330px] object-cover pb-[10px]"
          />
          <img
              src={img2}
              className="w-[325px] h-[330px] object-cover pb-[10px]"
          />
          <img
              src={img}
              className="w-[325px] h-[330px] object-cover pb-[10px]"
          />
          <img
              src={img2}
              className="w-[325px] h-[330px] object-cover pb-[10px]"
          />
    </div>
  )
}

export default Profilepost