import React from "react";
import "./Sidebar.css";
import "./sidebarRow.css";
import { Avatar } from "@material-ui/core";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FlagIcon from "@material-ui/icons/Flag";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import StorefrontIcon from "@material-ui/icons/Storefront";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TimerIcon from "@material-ui/icons/Timer";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import { useSelector } from "react-redux";

const SidebarRow = ({ title, src, Icon }) => {
  return (
    <div className="sidebarRow">
      {src && (
        <Avatar src="https://www.clipartmax.com/png/middle/22-221507_kevin-profile-cartoon-pic-man.png" />
      )}
      {Icon && <Icon />}
      <h6>{title}</h6>
    </div>
  );
};
function SideBar() {
  const { auth } = useSelector((state) => state);
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://www.clipartmax.com/png/middle/22-221507_kevin-profile-cartoon-pic-man.png"
        title={auth.email}
      />
      <SidebarRow Icon={SupervisorAccountIcon} title="Friends" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={GroupAddIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={EventNoteIcon} title="Events" />
      <SidebarRow Icon={TimerIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
    </div>
  );
}

export default SideBar;
