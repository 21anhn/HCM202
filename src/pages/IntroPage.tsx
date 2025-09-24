// src/pages/IntroPage.tsx
import React from "react";
import { cubicBezier, motion } from "framer-motion";
import img3ng from "../assets/3ng.png";
import section1 from "../assets/section1.jpg";
import section2Img from "../assets/section2.png"; // Ảnh cho Section 2
import section3Img from "../assets/section3.jpg"; // Ảnh cho Section 3
import section4Img from "../assets/section4.png"; // Ảnh cho Section 4 (ảnh bạn đã tạo)
import {
  FaGavel,
  FaVoteYea,
  FaStar,
  FaGlobeAsia,
  FaLightbulb,
} from "react-icons/fa";

const videoUrl = "/assets/video/bg-socialism.mp4";

const IntroPage: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) },
    },
  };

  const tooltipClass =
    "absolute bottom-0 left-1/2 translate-y-full -translate-x-1/2 w-[80%] " +
    "bg-black/70 text-white text-sm md:text-base font-medium px-4 py-3 " +
    "rounded-lg shadow-lg backdrop-blur-md pointer-events-none";

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-20 bg-[#f4f7ff]">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-80 -z-10"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Hero Section */}
      <div className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-4 pt-24 gap-12 z-10">
        <motion.div
          className="flex-1 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#6e7fdc] font-semibold mb-2 text-lg">
            Khám phá chủ đề
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2a2e6e] mb-6 leading-tight drop-shadow-lg">
            Dân chủ xã hội chủ nghĩa
            <br />
            <span className="block text-3xl md:text-5xl font-bold text-[#6e7fdc] mt-2">
              & Nhà nước pháp quyền XHCN ở Việt Nam
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#2a2e6e]/80 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow bg-white/60 rounded-2xl px-6 py-4 backdrop-blur-md shadow-lg">
            Dân chủ xã hội chủ nghĩa là nền dân chủ rộng rãi, bảo đảm quyền lực
            thực sự thuộc về nhân dân, được thực hiện thông qua nhà nước pháp
            quyền xã hội chủ nghĩa.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="relative group w-full max-w-xs md:max-w-md"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.img
              src={img3ng}
              alt="3 nhà tư tưởng"
              className="rounded-3xl shadow-2xl w-full border-4 border-white/80 bg-white/60"
              variants={{
                rest: { rotate: 0 },
                hover: {
                  rotate: [0, -3, 3, -2, 2, 0],
                  transition: { duration: 0.6 },
                },
              }}
            />
            <motion.div
              variants={{
                rest: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className={tooltipClass}
            >
              Bức họa nổi tiếng về Karl Marx, Friedrich Engels và V.I. Lenin –
              ba nhà tư tưởng đã đặt nền móng lý luận cho chủ nghĩa xã hội khoa
              học.
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline Sections */}
      <div className="container mx-auto px-4 mt-20 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6e7fdc] to-[#2a2e6e] hidden md:block" />

        {/* Section 1: Nhà nước Pháp quyền XHCN */}
        <div className="flex flex-col md:flex-row items-center justify-between my-20">
          <motion.div
            className="md:w-1/2 md:pr-10 text-center md:text-right mb-8 md:mb-0"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaGavel className="inline-block text-4xl text-[#6e7fdc] mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-4">
              Nhà nước Pháp quyền XHCN
            </h2>
            <p className="text-lg text-gray-700 max-w-xl md:ml-auto">
              <span className="font-bold">Khái niệm:</span> Nhà nước{" "}
              <span className="font-bold">
                của nhân dân, do nhân dân, vì nhân dân
              </span>
              , quản lý xã hội bằng pháp luật.
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 mt-4 md:text-right md:pl-0 md:pr-10 space-y-2">
              <li className="font-semibold">Nguyên lý cơ bản:</li>
              <ul className="list-[circle] list-inside pl-4 font-normal">
                <li>Hiến pháp tối thượng, mọi tổ chức/cá nhân đều tuân thủ.</li>
                <li>
                  Quyền lực nhà nước thống nhất nhưng có phân công – phối hợp –
                  kiểm soát giữa lập pháp, hành pháp, tư pháp.
                </li>
                <li>Bảo đảm và bảo vệ quyền con người, quyền công dân.</li>
                <li>Gắn dân chủ với kỷ cương, pháp luật.</li>
                <li>Phục vụ phát triển xã hội công bằng, dân chủ, văn minh.</li>
              </ul>
            </ul>
          </motion.div>
          <div className="md:w-1/2 flex justify-center items-center relative">
            <motion.div
              className="relative group w-full max-w-sm"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.img
                src={section1}
                alt="Tòa nhà Quốc hội Việt Nam"
                className="rounded-2xl shadow-xl w-full border-4 border-white/80 bg-white/60"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.4 } },
                }}
              />
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className={tooltipClass}
              >
                Tòa nhà Quốc hội Việt Nam được khởi công tháng 10/2009, khánh
                thành và đi vào hoạt động ngày 20/10/2014 (kỳ họp Quốc hội thứ
                8, khóa XIII).
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Dân chủ XHCN */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between my-20">
          <div className="md:w-1/2 flex justify-center items-center relative">
            <motion.div
              className="relative group w-full max-w-sm"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.img
                src={section2Img}
                alt="Nhân dân tham gia bầu cử"
                className="rounded-2xl shadow-xl w-full border-4 border-white/80 bg-white/60"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.4 } },
                }}
              />
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className={tooltipClass}
              >
                Quyền bầu cử là một trong những quyền chính trị cơ bản, cho phép
                mọi tầng lớp nhân dân trực tiếp tham gia xây dựng Nhà nước.
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 md:pl-10 text-center md:text-left mb-8 md:mb-0"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaVoteYea className="inline-block text-4xl text-[#2a2e6e] mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-4">
              Dân chủ xã hội chủ nghĩa
            </h2>
            <p className="text-lg text-gray-700 max-w-xl md:mr-auto">
              <span className="font-bold">Bản chất:</span> Quyền lực thuộc về đa
              số nhân dân lao động.
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 mt-4 space-y-2">
              <li className="font-semibold">Nội dung dân chủ:</li>
              <ul className="list-[circle] list-inside pl-4 font-normal">
                <li>
                  <span className="font-bold">Chính trị:</span> bầu cử, ứng cử,
                  tham gia quản lý nhà nước.
                </li>
                <li>
                  <span className="font-bold">Kinh tế:</span> quyền lao động, sở
                  hữu, tham gia quyết định sản xuất.
                </li>
                <li>
                  <span className="font-bold">Văn hóa – xã hội:</span> quyền học
                  tập, sáng tạo, hưởng thụ văn hóa.
                </li>
              </ul>
            </ul>
            <p className="text-lg text-gray-700 max-w-xl md:mr-auto mt-4">
              <span className="font-bold">Nguyên tắc:</span> “Dân biết – dân bàn
              – dân làm – dân kiểm tra – dân thụ hưởng.”
            </p>
            <p className="text-lg text-gray-700 max-w-xl md:mr-auto mt-2">
              <span className="font-bold">Hình thức:</span> kết hợp dân chủ đại
              diện và dân chủ trực tiếp.
            </p>
          </motion.div>
        </div>

        {/* Section 3: Vai trò của Đảng */}
        <div className="flex flex-col md:flex-row items-center justify-between my-20">
          <motion.div
            className="md:w-1/2 md:pr-10 text-center md:text-right mb-8 md:mb-0"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaStar className="inline-block text-4xl text-[#6e7fdc] mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-4">
              Vai trò lãnh đạo của Đảng Cộng sản
            </h2>
            <ul className="list-disc list-inside text-left text-gray-600 mt-4 md:text-right md:pl-0 md:pr-10 space-y-2">
              <li>
                <span className="font-bold">
                  Đảng lãnh đạo Nhà nước và xã hội:
                </span>{" "}
                Bảo đảm định hướng XHCN trong mọi chính sách.
              </li>
              <li>
                <span className="font-bold">Xây dựng, chỉnh đốn Đảng:</span>{" "}
                Chống tham nhũng, nâng cao năng lực, uy tín lãnh đạo.
              </li>
              <li>
                <span className="font-bold">Đổi mới phương thức lãnh đạo:</span>{" "}
                Tôn trọng nguyên tắc pháp quyền, không bao biện làm thay Nhà
                nước, phát huy vai trò của Mặt trận Tổ quốc.
              </li>
            </ul>
          </motion.div>
          <div className="md:w-1/2 flex justify-center items-center relative">
            <motion.div
              className="relative group w-full max-w-sm"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.img
                src={section3Img}
                alt="Biểu tượng Đảng Cộng sản"
                className="rounded-2xl shadow-xl w-full border-4 border-white/80 bg-white/60"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.4 } },
                }}
              />
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className={tooltipClass}
              >
                Biểu tượng búa liềm của Đảng Cộng sản, đại diện cho liên minh
                công nông và sự lãnh đạo của giai cấp công nhân.
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Section 4: Thực tiễn Việt Nam */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between my-20">
          <div className="md:w-1/2 flex justify-center items-center relative">
            <motion.div
              className="relative group w-full max-w-sm"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.img
                src={section4Img}
                alt="Người dân sử dụng dịch vụ công trực tuyến"
                className="rounded-2xl shadow-xl w-full border-4 border-white/80 bg-white/60"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.4 } },
                }}
              />
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className={tooltipClass}
              >
                Hình ảnh người dân dễ dàng thực hiện các thủ tục hành chính
                thông qua Cổng Dịch vụ công Quốc gia, minh chứng cho nỗ lực cải
                cách và hiện đại hóa.
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 md:pl-10 text-center md:text-left mb-8 md:mb-0"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaGlobeAsia className="inline-block text-4xl text-[#2a2e6e] mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-4">
              Thực tiễn Việt Nam
            </h2>
            <ul className="list-disc list-inside text-left text-gray-600 mt-4 space-y-2">
              <li>
                <span className="font-bold">Hiến pháp 2013:</span> Khẳng định
                Nhà nước pháp quyền XHCN “của nhân dân, do nhân dân, vì nhân
                dân.”
              </li>
              <li>
                <span className="font-bold">
                  Cải cách tư pháp & hành chính:
                </span>{" "}
                Chính phủ điện tử, dịch vụ công trực tuyến, tòa án độc lập hơn.
              </li>
              <li>
                <span className="font-bold">
                  Luật Phòng chống tham nhũng (2018):
                </span>{" "}
                Minh bạch tài sản, xử lý nghiêm.
              </li>
              <li>
                <span className="font-bold">Quy chế dân chủ ở cơ sở:</span> Đối
                thoại chính quyền – nhân dân, công khai ngân sách, dân giám sát.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Conclusion */}
      <motion.div
        className="container mx-auto px-4 mt-20 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <FaLightbulb className="inline-block text-4xl text-purple-600 mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-4">
          Kết luận
        </h2>
        <ul className="space-y-4 text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto list-none">
          <li>
            Dân chủ là <span className="font-bold">mục tiêu</span>, Nhà nước
            pháp quyền là <span className="font-bold">phương tiện</span>.
          </li>
          <li>
            Đảng là nhân tố{" "}
            <span className="font-bold">bảo đảm định hướng đúng đắn</span>.
          </li>
          <li>
            Xây dựng xã hội công bằng, dân chủ, văn minh là{" "}
            <span className="font-bold">trách nhiệm chung</span>.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default IntroPage;
