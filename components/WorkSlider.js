// data
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'hello',
          path: '/thumb1.jpg',
          fname: 'E -',
          sname: 'commerce',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          fname: 'Corporate',
          sname: 'website',
        },
        {
          title: 'titlege',
          path: '/thumb3.jpg',
          fname: 'Landing',
          sname: 'page',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          fname: 'E-',
          sname: 'commerce',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          fname: 'E-',
          sname: 'commerce',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          fname: 'E-',
          sname: 'commerce',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          fname: 'E-',
          sname: 'commerce',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          fname: 'E-',
          sname: 'commerce',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const WorkSlider = () => {
  return (
      <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, slideIndex) => (
            <SwiperSlide key={`slide-${slideIndex}`}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, imageIndex) => (
                    <Link href={image.title} key={`image-${slideIndex}-${imageIndex}`}>
                      <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                        <div className="flex items-center justify-center relative overflow-hidden group">
                          <Image
                              src={image.path}
                              width={500}
                              height={300}
                              alt="slider"
                              layout="responsive"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              <div className="delay-100">{image.fname}</div>
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                {image.sname}
                              </div>
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default WorkSlider;
