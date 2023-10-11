// import React, { useEffect, useState } from "react";
// import "./styles.css";

// export default function CountInputChanges() {
//   const [value, setValue] = useState("");
//   const [count, setCount] = useState(-1);

//   useEffect(() => setCount(count + 1));

//   const onChange = ({ target }) => setValue(target.value);

//   return (
//     <div>
//       <input type="text" value={value} onChange={onChange} />
//       <div>Number of changes: {count}</div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./styles.css";

export default function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1); // Initialize the count to 0

  // Use useEffect to update the count when 'value' changes
  useEffect(() => {
    setCount(count + 1);
  }, [value]);

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
