type iCategory = {
  theme?: string;
  category: string;
};

const Category: React.FC<iCategory> = ({ theme, category }) => {
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        border: theme === "dark" ? "" : "1px solid #dbdada",
      }}
      className="p-[10px] rounded-xl text-[11px] min-w-[100px] flex justify-center items-center">
      {category}
    </div>
  );
};

export default Category;
