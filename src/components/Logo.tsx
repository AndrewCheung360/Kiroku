'use client'
type LogoProps = {
    wrapStyle? : string
    mangaStyle? : string
    spotStyle? : string
}

export default function Logo({wrapStyle, mangaStyle, spotStyle} : LogoProps) {
    return(
        <>
        <div className={wrapStyle}>
                <span className={` font-bold text-gray-800 dark:text-white ${mangaStyle}`}>manga</span>
                <span className= {`font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400 text-transparent bg-clip-text ${spotStyle}`}>
                  spot
                </span>
        </div>
        </>
    )
}