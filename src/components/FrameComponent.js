import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({ myMentioMargin }) => {
  const myMentioStyle = useMemo(() => {
    return {
      margin: myMentioMargin,
    };
  }, [myMentioMargin]);

  return (
    <div className="frame-group">
      <div className="ellipse-wrapper">
        <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
      </div>
      <div className="my-mentio-wrapper">
        <div className="my-mentio" style={myMentioStyle}>
          My Mentio
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
