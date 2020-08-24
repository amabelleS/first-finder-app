import React from "react";
// import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import StrainItem from "./StainItem";

const StrainsGrid = ({ strains, isLoading }) => {
  const strainsArray = [];
  //   const toArr = () => {
  for (const [key, value] of Object.entries(strains)) {
    console.log(`${key}: ${value.id}`);
    let s = { name: key, ...value };
    console.log(s);

    strainsArray.push(s);
  }
  //   };

  //   <StrainItem strain={value} name={key} />;

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {/* {displatStrains()} */}
      {strainsArray.map((strain) => {
        console.log(strain);

        return <StrainItem key={strain.id} strain={strain} />;
      })}
    </section>
  );
};

export default StrainsGrid;
