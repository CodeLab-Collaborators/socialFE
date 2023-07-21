import img from "../../assets/23.jpeg"
import img2 from "../../assets/25.jpeg"
import img3 from "../../assets/9.jpeg"

const Profilesaved = () => {
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

export default Profilesaved