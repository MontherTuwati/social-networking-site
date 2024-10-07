import { ArrowUpOnSquareIcon, HandThumbUpIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const Posts = () => {
  return (
    <div className="flex flex-col p-2 gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src='' alt='' className="w-10 h-10 rounded-full cursor-pointer"/>
          <span className="font-medium">Username</span>
        </div>
        <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500 cursor-pointer"/>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image src='' alt='' className="object-cover rounded-lg"/>
        </div>
        <p>Lorem Ipsum that cat smells funny</p>
      </div>

      {/* Comments/Interaction */}
      <div className="flex items-center justify-between px-10">
        <div>
          <HandThumbUpIcon className="h-7 w-7 text-gray-500 cursor-pointer" />
          <span>Like</span>
        </div>
        <div>
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-gray-500 cursor-pointer" />
          <span>Coment</span>
        </div>
        <div>
          <ArrowUpOnSquareIcon className="h-7 w-7 text-gray-500 cursor-pointer" />
          <span>Share</span>
        </div>
        
      </div>
    </div>
  )
}

export default Posts
