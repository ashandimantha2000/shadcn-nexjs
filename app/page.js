import About from "@/components/About";
import CodeViewer from "@/components/CodeViewer";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import UseCodeViewer from "@/components/UseCodeViewer";
import UserProfile from "@/components/UserProfile";

function Home() {
  return (
    <div>
      {/* this is home */}
      {/* <About /> */}
      {/* <div className="flex justify-center">
        <CreatePost />
      </div> */}
      {/* <UserProfile /> */}
      <Post />
    </div>
  );
}

export default Home;
