import React, { useState } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import CrossIcon from "assets/icons/cross-icon.png";
import ProfileIcon from "assets/icons/profile-icon.png";
import "./Messages.css";
import Chat from "components/Chat/Chat";

const Message = ({ openDrawer, setOpenDrawer }) => {
  const [selectedInbox, setSelectedInbox] = useState(null);
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      {!selectedInbox ? (
        <div className="main-container">
          <div className="messages-header">
            <span className="messages-header-title">Messages</span>
            <img
              src={CrossIcon}
              className="cross-icon"
              onClick={() => setOpenDrawer(false)}
            />
          </div>
          {[1, 2, 3, 4].map((item, index) => (
            <div
              className="message-card"
              key={index}
              onClick={() => setSelectedInbox(item)}
            >
              <div className="message-profile-image">
                <img src={ProfileIcon} alt="" />
              </div>
              <div className="table">
                <span className="table-number"> Table # R01</span>
                <div className="person-name"> Elbert Pinto</div>
              </div>
              <div className="lastseen">
                <div className="time">2min ago</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Chat goBack={() => setSelectedInbox(null)} />
      )}
    </Drawer>
  );
};

Message.propTypes = {
  openDrawer: PropTypes.bool,
  setOpenDrawer: PropTypes.bool,
};

export default Message;
