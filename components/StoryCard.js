import Image from "next/image";

function StoryCard({ src, profile, name }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-52 lg:w-28 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        alt=""
        // loader={() => src}
        unoptimized
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        alt=""
        layout="fill"
        unoptimized
        // loader={() => src}
        src={src}
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      />
      <p className="hidden md:absolute md:block md:text-white md:mt-24">{name}</p>
    </div>
  );
}

export default StoryCard;
