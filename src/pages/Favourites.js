import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  let conetent;

  if (favouritesCtx.totalFavourites == 0) {
    conetent = <p>You got no favourites yet. Start adding some?</p>;
  } else {
    conetent = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {conetent}
    </section>
  );
}

export default Favourites;
