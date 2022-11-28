import { useState } from "react";
import Select from "./Select";

import { SelectOptions } from "./Select";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOptions[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOptions | undefined>(options[0]);
  return (
    <div className="App">
      <Select
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
        multiple
      />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </div>
  );
}

export default App;
