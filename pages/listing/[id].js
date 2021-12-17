import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListingComponent from "../../Components/Listing/ListingComponent";

function Listing() {
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(router.query.id);
  }, [router.query]);

  if (id) {
    return (
      <>
        <br />
        <br />
        <ListingComponent selectedListing={id} />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Listing;
