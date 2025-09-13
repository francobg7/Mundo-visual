import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-600 px-2 py-1 shadow-md bg-gray-800'>
      <Search className="w-4 h-4 text-gray-300"/>
      <input id="search" placeholder="Buscar..." className="text-sm outline-0 bg-transparent text-white placeholder-gray-400"/>
    </div>
  )
}

export default SearchBar