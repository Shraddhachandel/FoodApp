const Head = () => {
    return (
        <div className="flex shadow-lg py-4">
            <img
  className="h-11 mx-2 px-5 m-2 "
  alt="Food-logo"
  src="food.webp"
/>
<div className="flex p-5 space-x-6 " >
              
              <ul className="cursor-pointer"> Home</ul>
              <ul className="cursor-pointer"> About</ul>
              <ul>Contact </ul>
              <ul> Cart</ul>
            </div>
          <div className="col-span-10 px-10">
            
            <div>
              <input
                className="px-5 w-1/1.5    border border-gray-400 p-2 rounded-l-full"
                type="text"/>
              <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                🔍
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <img
              className="h-8"
              alt="user"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            />
          </div>
        </div>
)        
        }
export default Head;      
