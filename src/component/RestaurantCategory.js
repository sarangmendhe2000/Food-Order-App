
import ItemList from "./ItemList";
import { useState } from "react";

function RestaurantCategory({ data }) {
  // console.log(data);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("click")
    setShowItems(!showItems);
  };

  return (
    <div className="flex justify-center">
      {/* Accordian items */}

      <div className="h-auto w-6/12  mt-4 text-[20px] font-extrabold  bg-[rgba(237,234,234,0.9)] text-[#000000] rounded-2xl p-[20px] cursor-pointer hover:bg-[rgba(226,219,219,0.9)] shadow-xl " onClick={handleClick}>

        <div className="flex justify-between">
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span> 🔻 </span>
        </div>

        {/* Accordian Body */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
