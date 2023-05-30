import React from "react";
import MusicItem from "./mainLayout/MusicItem";
import LibrarySongItem from "./mainLayout/LibrarySongItem";

const MainLayout = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="heading-text">Thư viện</h1>
        <button className="play-song button">
          <i className="bx bx-play" />
        </button>
      </div>
      <div className="grid">
        <div className="row">
          <div className="col l-2 m-3 c-6 margin__left__right-10px">
            <div className="artist">
              <div className="artist-item">
                <a
                  href="https://zingmp3.vn/Thai-Dinh"
                  title="Thai Dinh"
                  className="artist-link"
                >
                  <span>Thái Đinh</span>
                  <div className="artist-img">
                    <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/a/5/a/1a5a16943514c142d74e29058df83187.jpg" />
                  </div>
                </a>
                <button className="artist--random-song button">
                  <i className="bx bx-shuffle" />
                </button>
              </div>
            </div>
          </div>
          <div className="col l-2 m-3 c-6 margin__left__right-10px">
            <div className="artist">
              <div className="artist-item">
                <a href="#" className="artist-link">
                  <span>Xem tất cả</span>
                  <div className="artist-img artist-more">
                    <i className="bx bx-right-arrow-" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {Array(6)
            .fill(null)
            .map((item, index) => (
              <MusicItem key={index} />
            ))}
        </div>
      </div>
      <nav className="bottom">
        <ul className="bottom-navbar-list">
          <li className="bottom-navbar-item active">
            <p>bài hát</p>
          </li>
          <li className="bottom-navbar-item">
            <p>podcast</p>
          </li>
          <li className="bottom-navbar-item">
            <p>album</p>
          </li>
        </ul>
        <div className="bottom-song">
          <div className="bottom-song-navbar">
            <div className="bottom-navbar-song-btn">
              <button className="bottom-navbar-song-btn--like active">
                <p>Yêu thích</p>
              </button>
            </div>
            <div className="bottom-navbar-song-btn">
              <button className="bottom-navbar-song-btn--like">
                <p>Đã tải lên</p>
              </button>
            </div>
          </div>
          <div className="library-song">
            <div className="list-select-song">
              <div className="select-song-heading">
                <div className="select-song-heading-text">Bài Hát</div>
                <div className="select-song-heading-text">Album</div>
                <div className="select-song-heading-text">Thời gian</div>
              </div>
            </div>
            <div className="list-song">
              <LibrarySongItem />
              <LibrarySongItem />
              <LibrarySongItem />
              <LibrarySongItem />
              <LibrarySongItem />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
