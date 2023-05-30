import React from "react";
import SidebarItem from "./sidebar/SidebarItem";
import LibraryMusic from "./sidebar/LibraryMusic";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="siderbar__header">
          <button className="siderbar__header-logo" />
        </div>
        <ul className="siderbar-list">
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </ul>
        <span className="line" />
        <ul className="siderbar-list sidebar-list--scroll">
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />

          <div className="siderbar-premium">
            <p>
              Nghe nhạc không quảng cáo <br />
              cùng kho nhạc VIP
            </p>
            <a>Nâng cấp VIP</a>
          </div>
          <LibraryMusic />
        </ul>
        <div className="siderbar-creater--playlist">
          <button className="siderbar-creater--playlist-btn">
            <i className="bx bx-plus" />
            <span>Tạo play list mới</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
