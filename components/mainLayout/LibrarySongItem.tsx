import React from "react";
import { AiOutlineHeart } from "react-icons/Ai";
import { FiMoreHorizontal } from "react-icons/Fi";
import { GiMicrophone } from "react-icons/Gi";

const LibrarySongItem = () => {
  return (
    <div className="select-song-item active}">
      <div className="select-song-item-left">
        <div className="select-song-item--icon">
          <i className="bx bx-music" />
          <input type="checkbox" />
        </div>
        <div className="song-card overflow-hidden">
          <img
            src="https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg"
            alt=""
            className="song-card-image"
          />
        </div>
        <div className="select-song-text">
          <span>tên bài hát</span>
          <a href="" className="select-song-text-content">
            G-DRAGON
          </a>
        </div>
      </div>
      <div className="select-song-item-content">
        <div className="album-info">
          <span>Tên album</span>
        </div>
      </div>
      <div className="select-song-item-right">
        <div className="hover-item">
          <div className="hover-item-icon">
            <GiMicrophone />
          </div>
        </div>
        <div className="action-item">
          <div className="action-item-box">
            <button className="action-like">
              <AiOutlineHeart className="" />
            </button>
            <div className="action-duration">
              <span>00.00</span>
              <FiMoreHorizontal className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarySongItem;
