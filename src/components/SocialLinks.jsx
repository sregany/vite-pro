import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com/in/sregany',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/sregany',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:sergiregany1996@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Cv <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'https://drive.google.com/file/d/17U4H9APHseTfLwAMqbX-UWpApup9G24t/view',
            style: 'rounded-br-md',
            download: true,
        },
    ]
    return (
        <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-5px] bg-purple-600' + ' ' + style} >
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default SocialLinks