const UserBio = () => {
  return (
    <div className="mt-[116px] w-full text-[13px] flex flex-col  px-4">
      <p>
        This is a bio Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Temporibus, labore.
      </p>
      <span className="my-3 font-medium flex gap-3 items-center">
        <a href="#" className="text-orange-500">
          your link
        </a>
        <h3 className="text-gray-400">| 18 followers</h3>
      </span>
    </div>
  );
};

export default UserBio;
