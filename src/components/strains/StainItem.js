import React from "react";
import pic from "../../img/psy.png";

const StrainItem = ({ strain }) => {
  console.log(strain);
  console.log(strain.flavors);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front" style={{ color: " rgb(80, 248, 58)" }}>
          <h4>{strain.name}</h4>
          <img src={pic} alt="weed pic" />
        </div>
        <div className="card-back">
          <ul>
            <li>
              <h4>{strain.name}</h4>
            </li>

            <li>
              <strong>Flavors:</strong>
              {strain.flavors.map((f) => {
                return <span> {f}</span>;
              })}
            </li>
            <li>
              <strong>Medical:</strong>
              {strain.effects.medical.map((m) => {
                return <span> {m}</span>;
              })}
            </li>
            <li>
              <strong>Positive effects:</strong>
              {strain.effects.positive.map((m) => {
                return <span> {m}</span>;
              })}
            </li>
            <li>{strain.race}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StrainItem;
