import React from "react";
import { AiOutlineHeart, AiOutlinePlayCircle } from "react-icons/Ai";
import { FiMoreHorizontal } from "react-icons/Fi";

const MusicItem = () => {
  return (
    <div className="col l-2 m-2 c-6 margin__left__right-5px">
      <div className="artist playlist-song">
        <div className="artist-item playlis-song-item">
          <a href="#" title="Thai Dinh" className="artist-link playlist-link">
            <span>Thái Đinh</span>
            <div className="artist-img playlist-song-img">
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/2/e/8/9/2e89f9e21efd60f76410a2331471a392.jpg" />
              <div className="opacity" />
              <div className="button-control">
                <div className="button-control-icon">
                  <button className="artist--random-song playlist-song-btn button">
                    <div className="flex justify-center">
                      <AiOutlineHeart className="" />
                      <AiOutlinePlayCircle className="" />
                      <FiMoreHorizontal className="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicItem;
