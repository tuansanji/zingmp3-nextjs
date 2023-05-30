import React from "react";
import { BiTrendingUp } from "react-icons/Bi";
type Props = {
  searchInput: string;
};

const SearchResult = ({ searchInput }: Props) => {
  return (
    <ul className="suggest__list">
      <div className="suggest__list-header">
        <div className="suggest__list--content">
          <div className="suggest-content-heading">Đề xuất cho bạn</div>
          {Array(6)
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
            {Array(4)
              .fill(null)
              .map((item, index) => (
                <div className="history-item">
                  <div key={index} className="history-img">
                    <img src="https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj" />
                  </div>
                  <div className="history-describe">
                    <div className="history-heading">Cho tôi lang thang</div>
                    <a className="history-astist">
                      <span>Playlist: Đen, Ngọt</span>
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
