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
                <span className={` font-bold text-slate-900 dark:text-white ${mangaStyle}`}>manga</span>
                <span className= {`font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ${spotStyle}`}>
                  spot
                </span>
        </div>
        </>
    )
}