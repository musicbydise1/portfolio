import Image from "next/image";
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return(
      <div className='mx-auto xl:mx-0'>
        <Link
            href={'/contact'}
            className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
        >
          <Image
              src={'/rounded-text1.png'}
              width={235}
              height={235}
              alt='rounded-text'
              className='animate-spin-slow w-full h-full max-w-[235px] max-h-[235px]'
          />
          <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
        </Link>
      </div>
  );
};

export default ProjectsBtn;
