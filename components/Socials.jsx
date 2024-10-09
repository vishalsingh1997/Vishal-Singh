import Link from "next/link"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/vishalsingh1997" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/vishal-singh-56a9051b5/" },
    { icon: <SiGmail />, path: "mailto:vishal1997official@gmail.com" },
   
]
const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link href={item.path} key={index} className={iconStyles}>  {item.icon} </Link>
            })}
        </div>
    )
}

export default Socials