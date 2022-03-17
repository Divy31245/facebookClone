import Head from "next/head";
import Login from "../components/login";
import Header from "../components/header";
import { useSession } from "next-auth/react";
import Sidebar from "../components/sidebar";
import Feed from "../components/Feed";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>fbclone</title>
      </Head>
      {/* header */}
      <Header />

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </main>
    </div>
  );
}

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
