import Image from "next/image";
import {ChatAltIcon,ShareIcon,ThumbUpIcon} from '@heroicons/react/outline'

function Post({ name, image, email, createdAt, postImage, message }) {
  return (
    <div className="flex  flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            alt=""
            src={image}
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
          <div>
            <p className="font-medium ">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(createdAt?.toDate()).toLocaleString()}{" "}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md-96 bg-white">
          <Image alt="" src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* footer section for the post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="input-icon rounded-none rounded-bl-2xl">
              <ThumbUpIcon className="h-4" />
              <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="input-icon rounded-none">
          <ChatAltIcon className="h-4" />
              <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="input-icon rounded-none rounded-br-2xl">
              <ShareIcon className="h-4" />
              <p className="text-xs sm:text-base">Share</p>
          </div>
      </div>
    </div>
  );
}

export default Post;
