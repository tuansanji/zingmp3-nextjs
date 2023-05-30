import React from "react";
import { AiOutlineHeart, AiOutlinePlayCircle } from "react-icons/Ai";
import {
  BiRepost,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  BiVolumeFull,
} from "react-icons/Bi";
import { FiMoreHorizontal, FiPauseCircle } from "react-icons/Fi";
import { MdOutlineVideoLibrary } from "react-icons/Md";
import { RiPlayListFill } from "react-icons/Ri";
import { GiMicrophone } from "react-icons/Gi";
import { CgScreenMirror } from "react-icons/Cg";

const MusicPlayer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-img">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/8/7/7/68776bade941ba88073f7d075c0fb955.jpg"
              alt=""
            />
          </div>
          <div className="footer-item">
            <div className="footer-item-content">
              <div className="footer-item-heading">
                <h3>As long as you love me</h3>
              </div>
              <a className="footer-item-link">Justin Bieber</a>
            </div>
          </div>
          <div className="footer-item-control">
            <AiOutlineHeart />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="player-bar-control">
          <div className="player-control-btn">
            <div className="player-btn-item random-btn">
              <BiShuffle />
            </div>
            <div className="player-btn-item prev-btn-song">
              <BiSkipPrevious />
            </div>
            <div className="player-btn-item player-btn-item--play-control">
              <AiOutlinePlayCircle />
              <FiPauseCircle />
            </div>
            <div className="player-btn-item next-btn-song">
              <BiSkipNext />
            </div>
            <div className="player-btn-item repeat-song-btn">
              <BiRepost />
            </div>
          </div>
          <div className="player-control-music">
            <span className="time-line">0.00</span>
            <div className="player-control-music-input">
              <input
                id="progess"
                type="range"
                defaultValue={0}
                step={1}
                min={0}
                max={100}
              />
              <audio id="audio" src="" />
            </div>
            <span className="time-end">0.00</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-control">
            <div className="footer-right-control-btn inactive">
              <MdOutlineVideoLibrary />
            </div>
            <div className="footer-right-control-btn">
              <GiMicrophone />
            </div>
            <div className="footer-right-control-btn">
              <CgScreenMirror />
            </div>
            <div className="footer-right-control-btn">
              <div className="volume-control">
                <BiVolumeFull />
                <div className="volume-item">
                  <input
                    id="volume"
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={50}
                  />
                </div>
              </div>
            </div>
            <div className="footer-right-control-btn">
              <RiPlayListFill />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MusicPlayer;
