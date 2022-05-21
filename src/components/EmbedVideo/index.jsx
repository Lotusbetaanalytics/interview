import React from "react";
import PropTypes from "prop-types";
import "./embedVideo.css";

function EmbedVideo({ embedId }) {
  return (
    <div className="embed-video">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Training Video"
      />{" "}
    </div>
  );
}

EmbedVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default EmbedVideo;
