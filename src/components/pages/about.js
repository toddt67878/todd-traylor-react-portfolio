import React from "react";
import profilePicture from '../../../static/assets/images/bio/headshot.jpg';

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Todd has spent his career as a pharmacist in retail, hospital, and consultant practices. He has a strong desire to make things that will improve his industry through accessibility.
      </div>
    </div>
  );
}
