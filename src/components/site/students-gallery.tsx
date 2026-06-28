"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "/img/students/airport-2.jpg",
    caption: "Tiễn học sinh xuất cảnh tại sân bay Nội Bài",
    span: "col-span-2",
  },
  {
    src: "/img/students/visa.jpg",
    caption: "Hoàn tất thủ tục visa – sẵn sàng sang Hàn",
    span: "col-span-1",
  },
  {
    src: "/img/students/airport-1.jpg",
    caption: "Đồng hành cùng học sinh tới tận cổng lên máy bay",
    span: "col-span-1",
  },
  {
    src: "/img/students/airport-3.jpg",
    caption: "Học sinh cầm biển Dongil – xuất cảnh kỳ tháng 9",
    span: "col-span-1",
  },
  {
    src: "/img/students/consult.jpg",
    caption: "Buổi tư vấn trực tiếp – lộ trình riêng cho từng bạn",
    span: "col-span-2",
  },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function StudentsGallery() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Học sinh Dongil Edu
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-[2.4rem]">
            Hàng trăm học sinh đã xuất cảnh thành công
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Dongil Edu đồng hành cùng từng học sinh — từ buổi tư vấn đầu tiên đến
            tận khi bước lên máy bay sang Hàn Quốc.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
        >
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${photo.span}`}
            >
              <div
                className={`relative w-full ${
                  photo.span === "col-span-2" ? "aspect-[16/9]" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-8 rounded-2xl border border-brand/20 bg-brand-soft px-7 py-5">
            {[
              ["100+", "Học sinh xuất cảnh"],
              ["42", "Trường liên kết"],
              ["5", "Hình thức visa"],
              ["100%", "Hỗ trợ tận nơi"],
            ].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-heading text-2xl font-extrabold text-brand">{num}</span>
                <span className="text-sm text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
