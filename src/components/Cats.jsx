import React, { useEffect, useState } from "react";
import { fetchCat, fetchCatTags } from "../api/Cats";

import loadingSpinner from "../assets/loading-spinner.svg";

const Cats = () => {
  const [catImageUrl, setCatImageUrl] = useState(null);
  const [otherCatImageUrl, setOtherCatImageUrl] = useState(null);
  const [possibleCatTags, setPossibleCatTags] = useState([]);

  useEffect(() => {
    const fetch = () => {
      fetchCatTags().then((catTags) => setPossibleCatTags(catTags));

      const catQuery = {
        isGif: true,
        tags: [],
        message: "hello everybody",
        fontSize: 20,
        fontColour: "green",
      };
      fetchCat(catQuery).then((url) => setCatImageUrl(url));

      const otherCatQuery = {
        isGif: false,
        tags: ["orange", "cute"],
      };
      fetchCat(otherCatQuery).then((url) => setOtherCatImageUrl(url));
    };

    fetch();
  }, []);

  return (
    <div>
      <div>
        <p>Random cat gif with green 'Hello everybody' message</p>
        {catImageUrl && <img className="smallImage" src={catImageUrl} alt="cat" />}
        {!catImageUrl && <img className="smallImage" src={loadingSpinner} alt="loading" />}
      </div>

      <div>
        <p>Cat image with 'orange' and 'cute' tags</p>
        {otherCatImageUrl && <img className="smallImage" src={otherCatImageUrl} alt="cat" />}
        {!otherCatImageUrl && <img className="smallImage" src={loadingSpinner} alt="loading" />}
      </div>

      <div className="maxWidthScreen">
        <button onClick={() => console.log(possibleCatTags)}>Print possible cat tags in developer console!</button>
      </div>
    </div>
  );
};

export default Cats;
