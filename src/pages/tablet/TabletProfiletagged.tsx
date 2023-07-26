import img from "../../assets/tony.jpg"
import img2 from "../../assets/9.jpeg"
import img3 from "../../assets/ave.jpg"

const TabletProfiletagged = () => {
  return (
      <div className="w-[100%] h-[100%] flex flex-wrap mt-[12px]">
          <img
              src={img}
              className="w-[325px] h-[330px] object-cover m-[3px]"
          />
          <img
              src={img2}
              className="w-[325px] h-[330px] object-cover m-[3px]"
          />
          <img
              src={img3}
              className="w-[325px] h-[330px] object-cover m-[3px]"
          />
          <img
              src={img}
              className="w-[325px] h-[330px] object-cover m-[3px]"
          />
          <img
              src={img2}
              className="w-[325px] h-[330px] object-cover m-[3px]"
          />
          <img
              src={img3}
              className="w-[325px] h-[330px] object-cover m-[3px]"
          />
    </div>
  )
}

export default TabletProfiletagged