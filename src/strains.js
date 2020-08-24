import React from "react";
function Strains(props) {
  return (
    <table className="table">
      <tbody>
        {props.data.map((strain, i) => (
          <tr key={i}>
            <td>
              <strong className="mark">Name:</strong> {strain.name}
            </td>
            <td>
              <strong className="mark">race:</strong> {strain.race}
            </td>
            <td>
              <strong className="mark">desc:</strong> {strain.desc}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Strains;
