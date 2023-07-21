import LeftSidebar from "../../components/static/LeftSidebar"
import {CiSettings} from "react-icons/ci"
import img from "../../assets/myPix.png"
import Profilepost from "./Profilepost"
import {useState} from "react"
import Profilesaved from "./Profilesaved"
import Profiletagged from "./Profiletagged"
import { NavLink } from "react-router-dom"


const Profiepage = () => {
  const [show, setShow] = useState(true)
  const [showsaved, setShowsaved] = useState(false)
  const [showtagged, setShowtagged] = useState(false)

  const Toggle = () => {
    setShow(!show)
    setShowsaved(false)
    setShowtagged(false)
  }

  const Toggle2 = () => {
    setShowsaved(true)
    setShow(false)
    setShowtagged(false)
  }

  const Toggle3 = () => {
    setShowtagged(true)
    setShowsaved(false)
    setShow(false)
  }


  return (
      <div className="flex w-[100%]">
      <LeftSidebar />
      
      {/* profile page styling */}
      <div className="w-[100%] justify-end flex">
        <main className="bg-white h-[100%] column justify-center items-center pt-[40px]" style={{ width: "calc(100% - 18%)" }}>
          <div className="flex w-[100%] justify-center ">
            <img
            src={img}
            alt="Profile"
            className="w-[160px] h-[160px] rounded-full mr-4 object-cover"
            />
            
            <div className=" ml-[20px]">
              <div className="flex">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <NavLink to="account-update">
                  <button className="w-[100px] h-[30px] bg-[#252525] text-white rounded-md ml-[40px]">
                  Edit profile
                </button>
                  </NavLink>
                <div className="text-[30px] ml-[40px]"><CiSettings /></div>
              </div>

              <div>
                <p className="text-gray-500">@johndoe</p>
              </div>

              <div className="flex mb-6 mt-[13px]">
                <div className="mr-8">
                  <h2 className="font-bold">Posts</h2>
                  <p>100</p>
                </div>
                <div className="mr-8">
                  <h2 className="font-bold">Followers</h2>
                  <p>10k</p>
                </div>
                <div>
                  <h2 className="font-bold">Following</h2>
                  <p>500</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold">Bio</h2>
                <p className="w-[250px] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          
          <div className="flex w-[100%] column justify-center items-center mt-[40px]">
            <div className="border-t border-[#DBDBDB] w-[90%] items-center justify-center column">
              <div className="flex mt-[25px] w-[100%] justify-center">
                <h4 onClick={Toggle} className="text-[14px] mr-[40px] cursor-pointer">POSTS</h4>
                <h4 onClick={Toggle2} className="text-[14px] mr-[40px] cursor-pointer">SAVED</h4>
                <h4 onClick={Toggle3} className="text-[14px] mr-[40px] cursor-pointer">TAGGED</h4>
              </div>
              {show ? (
                <Profilepost />
              ) : null}
              {showsaved ? (
                <Profilesaved />
              ) : null}
              {showtagged ? (
                <Profiletagged />
              ) : null}
            </div>
          </div>
      </main>
      </div>
          
    </div>
  )
}

export default Profiepage