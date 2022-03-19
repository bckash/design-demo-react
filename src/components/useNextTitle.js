
import { useState } from 'react';

const useNextTitle = () => {

    const [val, setVal] = useState(0);

    const nextTitle = (length) => {
        setVal(val === length -1 ? 0 : val + 1 )
    }
    return { val, nextTitle }
}

export default useNextTitle;