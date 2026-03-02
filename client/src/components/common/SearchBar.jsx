export default function SearchBar(){
    return(
         <div className=" search-bar w-6/7 bg-white border my-2 m-auto rounded-lg mx-auto md:w-[40%] md:flex md:justify-center md:h-10">
  <input
    type="search"
    placeholder="Search here..."
    className="w-full placeholder:text-gray-500 text-left outline-none placeholder:text-sm py-1 px-2.5 " 
  /> 
</div>
    )
}