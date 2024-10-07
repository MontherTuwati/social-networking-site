import { FaceSmileIcon, FilmIcon, PhotoIcon, TicketIcon, VideoCameraIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <div>
        <Image src='' alt='' className="w-12 h-12 object-cover rounded-full"/>
      </div>

      {/* Posts */}
      <div className="flex-1">
        {/* Text Input */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="bg-slate-100 rounded-lg flex-1 p-2"></textarea>
          <FaceSmileIcon className="h-6 w-6 text-yellow-500 bg-black rounded-full cursor-pointer self-end" />
        </div>
        {/* Post Options */}
        <div className="flex items-center justify-between flex-wrap gap-4 mt-4 text-gray-400">
          <div><PhotoIcon className="h-8 w-8 text-green-500 cursor-pointer" />Photo/Video</div>
          <div><VideoCameraIcon className="h-8 w-8 text-red-500 cursor-pointer" />Go Live!</div>
          <div><TicketIcon className="h-8 w-8 text-blue-500 cursor-pointer" />Events</div>
        </div>
      </div>
    </div>
  )
}

export default AddPost