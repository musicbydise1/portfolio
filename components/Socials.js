import Link from "next/link"
import {
    RiInstagramLine,
    RiGithubLine,
    RiWhatsappLine,
    RiTelegramLine,
    RiLinkedinLine
} from "react-icons/ri";

const Socials = () => {
  return (
      <div className='flex items-center gap-x-5 text-lg'>
        <Link href={'https://instagram.com/aksultan.yessenbay?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'} className='hover:text-accent transition-all duration-300'>
          <RiInstagramLine />
        </Link>
        <Link href={'https://www.linkedin.com/in/aksultan-yessenbay'} className='hover:text-accent transition-all duration-300'>
          <RiLinkedinLine />
        </Link>
        <Link href={'https://github.com/musicbydise1'} className='hover:text-accent transition-all duration-300'>
          <RiGithubLine />
        </Link>
        <Link href={'https://wa.me/77771903347'} className='hover:text-accent transition-all duration-300'>
          <RiWhatsappLine />
        </Link>
        <Link href={'https://t.me/musicbydise'} className='hover:text-accent transition-all duration-300'>
          <RiTelegramLine />
        </Link>
      </div>
  );
};

export default Socials;
