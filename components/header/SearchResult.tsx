"use client";

import { Song } from "@/@types/types";
import zingApi from "@/services/zingApi";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BiTrendingUp } from "react-icons/Bi";

type Props = {
  searchInput: string;
};
type DataSearch = {
  songs: Song[];
};

const SearchResult = ({ searchInput }: Props) => {
  const searchRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [songList, setSongList] = useState<Song[]>([]);

  useEffect(() => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    if (searchInput) {
      searchRef.current = setTimeout(() => {
        (async () => {
          const data: DataSearch | any = await zingApi.searchSong(searchInput);
          setSongList(data?.data?.songs);
        })();
      }, 800);
    }
  }, [searchInput]);

  return (
    // absolute z-50 bg-[#fff] w-[75%] top-[55px] h-[300px] py-[13px] px-[10px] m-0 list-none overflow-y-auto rounded-[0_0_10px_10px] shadow-search
    <ul
      className="suggest__list 
     "
    >
      <div className="suggest__list-header">
        <div className="suggest__list--content">
          <div className="suggest-content-heading">Đề xuất cho bạn</div>
          {Array(1)
            .fill(null)
            .map((item, index) => (
              <li key={index} className="suggest-item">
                <BiTrendingUp />
                <span>Một ngày nắng nắng</span>
              </li>
            ))}
        </div>
      </div>
      <div className="line" />
      <ul className="suggestion">
        <div className="suggestion--heading">
          <span>Tìm kiếm gần đây</span>
          <div className="delete">xoá</div>
        </div>
        <div className="suggestion-history">
          <div className="history__list">
            {songList?.map((item, index) => (
              <div key={index} className="history-item">
                <div className="history-img">
                  <img src={item.thumbnail} />
                </div>
                <div className="history-describe">
                  <div className="history-heading">{item.title}</div>
                  <a className="history-astist">
                    <span>{item.artistsNames}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ul>
    </ul>
  );
};
export default SearchResult;
