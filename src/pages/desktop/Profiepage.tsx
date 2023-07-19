import LeftSidebar from "../../components/static/LeftSidebar"
import {CiSettings} from "react-icons/ci"


const Profiepage = () => {
  return (
      <div className="flex w-[100%]">
      <LeftSidebar />
      
      {/* profile page styling */}
      <div className="w-[100%] justify-end flex">
        <main className="bg-white h-[100%] flex column justify-center pt-[40px]" style={{ width: "calc(100% - 18%)" }}>
          <div className="flex">
            <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-[160px] h-[160px] rounded-full mr-4"
            />
            
            <div className=" ml-[20px]">
              <div className="flex">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <button className="w-[100px] h-[30px] bg-[#252525] text-white rounded-md ml-[40px]">Edit profile</button>
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
                <p className="w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          
      </main>
      </div>
          
    </div>
  )
}

export default Profiepage