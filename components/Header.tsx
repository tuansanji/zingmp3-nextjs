"use client";
import React, { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlinePlayCircle,
  AiOutlineSearch,
} from "react-icons/Ai";
import { GoChevronRight } from "react-icons/Go";
import { FaBrush } from "react-icons/Fa";
import { RiAdvertisementLine } from "react-icons/Ri";
import {
  BsTelephone,
  BsFileEarmarkTextFill,
  BsShieldCheck,
  BsInfoCircleFill,
} from "react-icons/Bs";
import { FiSettings } from "react-icons/Fi";

import SearchResult from "./header/SearchResult";

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [subSearchInput, setSubSearchInput] = useState<boolean>(false);
  const [setting, setSetting] = useState<boolean>(false);
  const [settingUser, setSettingUser] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="navbar-left">
        <div className="search-control">
          <button className="prev-btn button">
            <AiOutlineArrowLeft />
          </button>
          <button className="next-btn button">
            <AiOutlineArrowRight />
          </button>
          <div className="search-music">
            <AiOutlineSearch />
            <input
              onFocus={() => setSubSearchInput(true)}
              onBlur={() => setSubSearchInput(false)}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
            />
            {subSearchInput && <SearchResult searchInput={searchInput} />}
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <a className="dowload-app">
          <svg
            className="dowload-app--icon"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658"
              stroke="currentColor"
              strokeLinecap="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z"
              fill="currentColor"
            />
            <path
              d="M6 16.8333H14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <span>Tải Bản Windows</span>
        </a>

        <a className="setting-item setting-menu">
          <button
            className="flex justify-center items-center"
            onClick={() => setSetting(!setting)}
          >
            <FiSettings style={{ fontSize: "20px" }} />
          </button>
          {setting && (
            <div className="setting-item-control">
              <ul className="setting-item-control__header">
                <li className="setting-item-heading">
                  <div className="setting-item-heading-block">
                    <AiOutlinePlayCircle />
                    <span>Trình phát nhạc</span>
                    <GoChevronRight />
                  </div>
                </li>
                <li className="setting-item-heading">
                  <div className="setting-item-heading-block">
                    <FaBrush />
                    <span>màu nền</span>
                    <GoChevronRight />
                  </div>
                </li>
              </ul>
              <div className="line" />
              <ul className="setting-item-control__footer">
                <li className="footer-menu-list">
                  <div className="footer-menu-item">
                    <BsInfoCircleFill />
                    <span>Giới Thiệu</span>
                  </div>
                </li>
                <li className="footer-menu-list">
                  <div className="footer-menu-item">
                    <BsTelephone />
                    <span>Liên Hệ</span>
                    <GoChevronRight />
                  </div>
                </li>
                <li className="footer-menu-list">
                  <div className="footer-menu-item">
                    <RiAdvertisementLine />
                    <span>Quảng Cáo</span>
                    <GoChevronRight />
                  </div>
                </li>
                <li className="footer-menu-list">
                  <div className="footer-menu-item">
                    <BsFileEarmarkTextFill />
                    <span>Thảo Thuận Sử Dụng</span>
                    <GoChevronRight />
                  </div>
                </li>
                <li className="footer-menu-list">
                  <div className="footer-menu-item">
                    <BsShieldCheck />
                    <span>Chính Sách Bảo Mật</span>
                    <GoChevronRight />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </a>
        <div className="header-right-overlay hide" />
        <a className="setting-item profile-item">
          <button
            className="setting-item-btn button"
            onClick={() => setSettingUser(!settingUser)}
          >
            <div className="avatar-img">
              <img src="https://yt3.ggpht.com/U03Op9vbA6pYxD4mHZbzoX5u38qlRMcZxGsHCSkCzDXj1xsQLQH6rp0wqnDx7tX3Vr1-NN7jmA=s88-c-k-c0x00ffffff-no-rj-mo" />
            </div>
          </button>
          {settingUser && (
            <div className="setting-item-control">
              <ul className="setting-item-control__header">
                <li className="setting-item-heading">
                  <div className="setting-item-heading-block">
                    <GoChevronRight />
                    <span>Trình phát nhạc</span>
                    <GoChevronRight />
                  </div>
                </li>
                <li className="setting-item-heading">
                  <div className="setting-item-heading-block">
                    <GoChevronRight />
                    <span>Trình phát nhạc</span>
                    <GoChevronRight />
                  </div>
                </li>
              </ul>
              <div className="line" />
              <ul className="setting-item-control__footer">
                <li className="footer-menu-list">
                  <div className="footer-menu-item">
                    <GoChevronRight />
                    <span>Giới Thiệu</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
