import StoryCard from "./StoryCard";

const stories = [
  {
    id: 1,
    name: "Divy Zala",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/l4v",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 3,
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: 4,
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: 5,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          name={story.name}
          src={story.src}
          profile={story.profile}
          key={story.id}
        />
      ))}
    </div>
  );
}

export default Stories;

// {stories.map((story) => {
//   <Image
//     src={story.src}
//     alt=""
//     height={50}
//     width={25}
//     objectFit="contain"
//   />;
// })}
