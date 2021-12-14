import { React, useEffect, useState } from "react";
import UserProvider from "../../Components/UserContext";
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
      <UserProvider>
        <br />
        <br />
        <ListingComponent selectedListing={id} />
      </UserProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Listing;
