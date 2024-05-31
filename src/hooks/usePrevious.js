import { useEffect, useRef } from "react";

function usePrevious(state) {
    const previousRef = useRef();

    useEffect(() => {
        previousRef.current = state;
    }, [state]);

    return previousRef.current;
}

export default usePrevious;