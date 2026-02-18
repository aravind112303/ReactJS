import { useState } from "react";

function useCounter(initialValue =0) {
    const [num , setNum] = useState(initialValue);
    return [num , () => setNum(num+1)]
}

export default useCounter