import { useEffect, useState } from "react"

export const useWindowDimension = () => {
    const [dimension, setDimension] = useState(() => ({ height: window.innerHeight, width: window.innerWidth }))
    useEffect(() => {

        function handleResize() {
            setDimension({ height: window.innerHeight, width: window.innerWidth })

        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return dimension
}