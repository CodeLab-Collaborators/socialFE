type iCategory = {
  theme?: string;
  category?: string;
  sizeInPexels: string;
};

const Category: React.FC<iCategory> = ({ theme, category, sizeInPexels }) => {
  return (
    <div
      style={{
        minWidth: sizeInPexels,
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        border: theme === "dark" ? "" : "1px solid #dbdada",
      }}
      className="px-[10px] py-[9px] rounded-xl text-[11px] flex justify-center items-center">
      {category}
    </div>
  );
};

export default Category;
