import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={5}
//         messages={["hello", "hey", "wts[", "test", "toutt"]}
//         onSetRating={setMovieRating}
//       />
//       <p>this movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["hello", "hey", "wts[", "test", "toutt"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
