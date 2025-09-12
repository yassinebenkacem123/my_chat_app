import LeftMenu from "@/components/LeftMenu";
import AddPost from "@/components/AddPost";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";
import RightMenu from "@/components/RightMenu";
export default function Home() {
  return (
   <div className="flex gap-8 min-h-screen">
    <div className="w-[20%]">
      <LeftMenu />
    </div>
    <div className="w-[50%]">
      <Stories />
      <AddPost />
      <Posts />
    </div>
    <div className="w-[30%]">
      <RightMenu userId="undefined" />
    </div>
   </div>
  );
}
