import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>fbclone</title>
      </Head>
      {/* header */}
      <Header />

      <div className="flex justify-between">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        <Widgets />
        {/* widgets */}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const posts = await db.collection("posts").orderBy("createdAt", "desc").get();

//   const docs = posts.docs.map((post) => ({
//     id: post.id,
//     ...post.data(),
//     createdAt: null,
//   }));

//   return {
//     props: {
//       posts: docs,
//     },
//   };
// }

/* this below code was in the previous version of the next auth  */

// and now this whole code is replaced by just one hook useSession and made our life so much easier:))))
// export async function getServerSideProps(context){
//   // get the user
//   const session = await getSession(context);

//   return{
//     props:{
//       session,
//     }
//   }

// }
