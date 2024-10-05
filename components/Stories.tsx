import Image from "next/image"

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll scrollbar-hide text-sm'>
        <div className="flex gap-4 w-max">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src=''
              alt=''
              className=" w-24 h-40 rounded-xl ring-2"
            />
            <span className='font-med'>User</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src=''
              alt=''
              className=" w-24 h-40 rounded-xl ring-2"
            />
            <span className='font-med'>User</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src=''
              alt=''
              className=" w-24 h-40 rounded-xl ring-2"
            />
            <span className='font-med'>User</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src=''
              alt=''
              className=" w-24 h-40 rounded-xl ring-2"
            />
            <span className='font-med'>User</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src=''
              alt=''
              className=" w-24 h-40 rounded-xl ring-2"
            />
            <span className='font-med'>User</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src=''
              alt=''
              className=" w-24 h-40 rounded-xl ring-2"
            />
            <span className='font-med'>User</span>
          </div>
        </div>
    </div>
  )
}

export default Stories