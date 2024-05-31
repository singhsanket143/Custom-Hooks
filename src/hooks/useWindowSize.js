import { useEffect, useState } from "react";

function useWindowSize() {
    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }, []);

    return size;
}

export default useWindowSize;