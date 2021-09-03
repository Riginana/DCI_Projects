// import React, { useState } from "react";

// function LinkUrl() {
//   const [inputUrl, setInputUrl] = useState("");
//   const [inputTitle, setInputTitle] = useState("");
//   const [inputExpl, setInputExpl] = useState("");
//   const [inputImgUrl, setInputImgUrl] = useState("");

//   function handleInputUrl(e) {
//     setInputUrl(e.target.value);
//   }
//   function handleInputTitle(e) {
//     setInputTitle(e.target.value);
//   }
//   function handleInputExpl(e) {
//     setInputExpl(e.target.value);
//   }
//   function handleInputImgUrl(e) {
//     setInputImgUrl(e.target.value);
//   }

//   function handleBtn(e) {
//     e.preventDefault();
//     console.log(inputUrl, inputTitle, inputExpl, inputImgUrl);

//     const newUrl = {
//       url: inputUrl,
//       title: inputTitle,
//       explanation: inputExpl,
//       image: inputImgUrl,
//     };
//     console.log(newUrl);
//     let allUrl = JSON.parse(localStorage.getItem("allUrl")) || [];
//     allUrl.push(newUrl);
//     localStorage.setItem("allUrl", JSON.stringify(allUrl));
//     setInputUrl("");
//     setInputTitle("");
//     setInputExpl("");
//     setInputImgUrl("");
//   }

//   return (
//     <>
//       <form className="formUrl" action="">
//         <label For="inputLink">Website URL</label>
//         <input
//           placeholder="Write your link..."
//           type="text"
//           id="inputLink"
//           value={inputUrl}
//           onChange={handleInputUrl}
//         />

//         <label For="inputTitle">Title</label>
//         <input
//           placeholder="Write Title..."
//           type="text"
//           id="inputTitle"
//           value={inputTitle}
//           onChange={handleInputTitle}
//         />

//         <label For="inputExplanation">Explanation</label>
//         <input
//           placeholder="Write your explanation..."
//           type="text"
//           id="inputExplanation"
//           value={inputExpl}
//           onChange={handleInputExpl}
//         />
//         <label For="inputImageUrl">Image URL</label>
//         <input
//           placeholder="Write image URL..."
//           type="text"
//           id="inputImageUrl"
//           value={inputImgUrl}
//           onChange={handleInputImgUrl}
//         />
//         <button className="urlButton" onClick={handleBtn}>
//           Enter
//         </button>
//       </form>
//     </>
//   );
// }

// export default LinkUrl;
