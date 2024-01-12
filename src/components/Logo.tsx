'use client'
type LogoProps = {
    wrapStyle? : string
    textStyle? : string
    iconStyle? : string
}

export default function Logo({wrapStyle, textStyle, iconStyle} : LogoProps) {
    return(
        <>
        {/* <div className={wrapStyle}>
                <span className={` font-bold text-slate-900 dark:text-white ${mangaStyle}`}>manga</span>
                <span className= {`font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ${spotStyle}`}>
                  spot
                </span>
        </div> */}
        <div className={wrapStyle}>
                
                <span className= {`font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ${iconStyle}`}>
                記
                </span>
                <span className={` font-bold text-slate-950 dark:text-white ${textStyle}`}>Kiroku</span>
        </div>
        </>
    )
}