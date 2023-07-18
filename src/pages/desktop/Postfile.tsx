import img from "../../assets/myPix.png"
import { BsImages } from "react-icons/bs"
import {BiSmile} from "react-icons/bi"
import { AiOutlineGif } from "react-icons/ai"
import {HiOutlineLocationMarker} from "react-icons/hi"
import Picker from "@emoji-mart/react"
import { useState } from "react"

const Postfile = () => {

    const [input, setInput] = useState("")
    const [showEmojis, setShowEmojis] = useState(false)

    const addEmoji = (e: { unified: string }): void => {
  let sym: string[] = e.unified.split("-");
  let codesArray: number[] = [];
  sym.forEach((el: string) => codesArray.push(parseInt("0x" + el)));
  let emoji: string = String.fromCodePoint(...codesArray);
  setInput(input + emoji);
    };

    return (
      <div className="w-[100%] flex border-b border-[#DBDBDB] pt-[10px] pl-[20px]">
          <img src={img} className="w-[50px] h-[50px] rounded-[50px] " />

          <div className="flex-1 column ml-[20px] pr-[20px]">
              <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="pl-[13px] w-[100%] outline-none text-[18px] resize-none"
                  placeholder="What is happenning?!" />
              
              <select className="block appearance-none pr-8 pl-3 text-sm leading-tight focus:outline-none text-blue-500">
                  <option>Choose who can reply:</option>
                  <option>
                      Everyone can reply
                  </option>
                  <option>People you follow can reply</option>
                  <option>Only people you mention can reply</option>
                </select>
        
         <div className="w-[100%] h-[1px] bg-[#DBDBDB] mt-[16px]"></div>

              <div className="w-[100%] flex h-[48px] mt-[4px] items-center">
                  <div className="flex">
                      <div className="text-blue-500 cursor-pointer mr-[17px]"><BsImages /></div>
                      <div className="text-blue-500 cursor-pointer text-[20px] mr-[17px]"><AiOutlineGif /></div>
                      <button onClick={() => setShowEmojis(!showEmojis)} className="text-blue-500 cursor-pointer text-[20px] mr-[17px]">
                          <BiSmile />
                      </button>
                      <div className="text-blue-500 cursor-pointer text-[20px]"><HiOutlineLocationMarker /></div>
                  </div>

        {showEmojis && (
                      <div>
                          <Picker
                              onSelect={addEmoji}
                          />
                      </div>
                  )}
              </div>
          </div>
    </div>
  )
}

export default Postfile