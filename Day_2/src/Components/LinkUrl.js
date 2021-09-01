import React from "react";

function LinkUrl() {
  return (
    <>
      <form className="formUrl" action="">
        <input placeholder="Write your link..." type="text" id="inputLink" />
        <button className="urlButton">Enter</button>
      </form>
    </>
  );
}

export default LinkUrl;
