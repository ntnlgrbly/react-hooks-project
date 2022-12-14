import { useState, useEffect } from "react";

export const useScrollLazy = () => {
    const [endScreen, setEndScreen] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            // דואג לבטל את האזנה לאירוע כשנעבור לעמוד אחר
            // ככה שאם נחזור לא יאזין מספר פעמים לאותו אירוע
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const onScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
            setEndScreen(true)
        }

    }

    return [endScreen, setEndScreen]
}