import { CARD_URL } from "../utils/constants";


const ItemList = ({items}) =>{

    console.log(items)
    return(
        <div>
            <div className="menuItems ">
              <ul>
                {items.map((item) => (
                  <li  key={item.card.info.id}>
                    <div className="w-auto h-auto border-b-[1px] border-b-[rgb(177,177,177)] border-b-dashed flex cursor-pointer p-5">
                      <div className="w-[40%] flex flex-col justify-center items-center gap-1 ">
                        <div className="text-2xl font-bold">
                        {item.card.info.name} - Rs.{" "}
                        {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        </div>
                        <div className="text-[small]">
                          {item.card.info.description}
                        </div>
                      </div>
                      <div className="w-[60%] h-[200px] flex justify-center p-5">
                        <img className="MenuImg"
                        src={CARD_URL + item.card.info.imageId}>
            
                         </img>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    )
}

export default ItemList;