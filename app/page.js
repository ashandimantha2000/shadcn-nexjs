import About from "@/components/About";
import CodeViewer from "@/components/CodeViewer";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import UseCodeViewer from "@/components/UseCodeViewer";

function Home() {
  return (
    <div>
      {/* this is home */}
      {/* <About /> */}
      <div className="flex justify-center">
        <CreatePost />
      </div>
      <Post />
    </div>
  );
}

export default Home;
