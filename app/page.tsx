import MusicPlayer from "@/components/MusicPlayer";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="">
      <div className="main">
        <div className="grid">
          <div className="row">
            <div className="col l-2 m-1">
              <Sidebar />
            </div>
            <div className="col l-10">
              <Header />
              <MainLayout />
            </div>
            <MusicPlayer />
          </div>
        </div>
      </div>
    </main>
  );
}
