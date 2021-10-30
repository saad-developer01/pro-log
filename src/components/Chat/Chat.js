import React from "react";
import "./Chat.css";
import { PropTypes } from "prop-types";
import LeftArrowIcon from "assets/icons/left-arrow-icon.png";
import ProfileIcon from "assets/icons/profile-icon.png";
import SendIcon from "assets/icons/send-icon.png";

export default function Chat({ goBack }) {
  return (
    <div className="messanger-main-container">
      <div className="messenger-inner-container">
        <div className="messanger-header">
          <div className="messanger-header-3-combo">
            <div
              className="messanger-leftArrow-div"
              onClick={() => goBack && goBack()}
            >
              <img className="messanger-leftArrow-img" src={LeftArrowIcon} />
            </div>
            <div className="messanger-profile-div">
              <img className="messanger-profile-img" src={ProfileIcon} />
            </div>
            <div className="messanger-name-div">
              <span className="messanger-name">Dave Parker</span>
            </div>
          </div>
          <div className="messanger-tblnum-div">
            <span className="messanger-tblnum">Table # R01</span>
          </div>
        </div>
        <div className="messanger-body">
          <div className="message-sender">
            <div className="sender-header">
              <div className="sender-img-div">
                <img className="sender-img" src={ProfileIcon} />
              </div>
              <div className="sender-name-div">
                <span className="sender-name">Dave Parker</span>
              </div>
              <div className="dot-div"></div>
              <div className="sender-time-div">
                <span className="sender-time">12min ago</span>
              </div>
            </div>
            <div className="sender-text">
              I am looking for my food, Please tell me the status of my order.
            </div>
          </div>
          <div className="message-reply">
            <div className="reply-text">
              I am looking for my food, Please tell me the status of my order.
            </div>
          </div>
          <div className="message-sender">
            <div className="sender-header">
              <div className="sender-img-div">
                <img className="sender-img" src={ProfileIcon} />
              </div>
              <div className="sender-name-div">
                <span className="sender-name">Dave Parker</span>
              </div>
              <div className="dot-div"></div>
              <div className="sender-time-div">
                <span className="sender-time">12min ago</span>
              </div>
            </div>
            <div className="sender-text">
              I am looking for my food, Please tell me the status of my order.
            </div>
          </div>
        </div>
      </div>
      <div className="messanger-footer">
        <div className="messanger-footer-sub-div">
          <textarea
            className="message-messagner"
            placeholder="Type message...."
          ></textarea>
          <img className="message-send-img" src={SendIcon} />
        </div>
      </div>
    </div>
  );
}
Chat.propTypes = {
  goBack: PropTypes.Func,
};
