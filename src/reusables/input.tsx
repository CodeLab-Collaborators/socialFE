import { FC } from "react";
import { inputData } from "../utils/types";

const Input: FC<inputData> = ({
  placeholder,
  labelName,
  onchange,
  characterLength,
  inputType,
}) => {
  return (
    <div className="flex items-center flex-col   ">
      {/* Email input */}
      <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
        <input
          type={inputType}
          className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:[&:not(:placeholder-shown)]:pb-[0.625rem] dark:[&:not(:placeholder-shown)]:pt-[1.625rem]"
          placeholder={placeholder}
          onChange={onchange}
          maxLength={characterLength}
          required
        />
        <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
          {labelName}
        </label>
      </div>
    </div>
  );
};

export default Input;
