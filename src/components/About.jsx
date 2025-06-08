import React, { useState } from "react";
import img1 from "../images/img33.jpg";
import { DiCodeigniter } from "react-icons/di";
import { SiProtonmail } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Head from "../components/Head";
import Foter from "../components/Foter";

export default function AboutMe() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgUrl) => {
    setModalImg(imgUrl);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <>
      <div className="mt-15">
        <Head />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-green-100 p-5">
        <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-lg p-6 lg:flex items-center gap-10">
          <img
            src={img1}
            alt="Muhammad Ahmad Fridi"
            className="w-full max-w-sm rounded-lg max-h-full shadow-lg object-cover"
          />
          <div className="mt-6 lg:mt-0 space-y-4">
            <h1 className="text-3xl font-bold text-green-800">
              Muhammad Ahmad Fridi
            </h1>
            <p className="text-gray-600">
              🏠 <strong>Address:</strong> 7/1A.L Akhtarabad, Okara, Punjab,
              Pakistan
            </p>
            <p className="text-green-700 font-medium">
              💼 I am an expert in <strong>Web Development</strong> and{" "}
              <strong>Frontend Mobile App Development</strong>. I build
              responsive, user-friendly websites and mobile apps with clean UI
              and strong performance.
            </p>
            <p className="text-gray-700 text-lg font-medium">🇵🇰 Pakistan</p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-6">
                <div className="flex-1 flex items-center gap-2">
                  <FaSchool className="text-green-700 text-xl" />
                  <p className="text-gray-600 font-semibold">
                    Matric: Govt High School 7/1A.L <br/> Marks: 902/1100
                  </p>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZQc8EbcVH-e_iiG8ALrY7Zy9i5R6MURfND_MXl-ZPDuMbxF74it7tADBpYkATEUyJMv5KMBmpA781r3YD5X-jo0XwKCTljJG6UOt4-6SAJcXeI1fRWmwXl3oI7lDlFpgs5c1ESA=s1360-w1360-h1020-rw"
                  alt="Govt High School"
                  className="w-40 rounded shadow cursor-pointer"
                  onClick={() =>
                    openModal(
"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZQc8EbcVH-e_iiG8ALrY7Zy9i5R6MURfND_MXl-ZPDuMbxF74it7tADBpYkATEUyJMv5KMBmpA781r3YD5X-jo0XwKCTljJG6UOt4-6SAJcXeI1fRWmwXl3oI7lDlFpgs5c1ESA=s1360-w1360-h1020-rw"                    )
                  }
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 flex items-center gap-2">
                  <FaUniversity className="text-green-700 text-xl" />
                  <p className="text-gray-600 font-semibold">
                    FSc: Aspire College, Renala Khurd<br/> Marks: 770/1100
                  </p>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Unlhafq1h7CNZ8_Zk10P_C8kylwXgs6caw&s"
                  alt="Aspire College"
                  className="w-40 rounded shadow cursor-pointer"
                  onClick={() =>
                    openModal(
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Unlhafq1h7CNZ8_Zk10P_C8kylwXgs6caw&s"
                    )
                  }
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 flex items-center gap-2">
                  <PiStudentFill className="text-green-700 text-xl" />
                  <p className="text-gray-600 font-semibold">
                    Graduation: BSc in Software Engineering from UMT Lahore<br/> CGPA: 3.14/4.00
                  </p>
                </div>
                <img
                  src="https://humenglish.com/wp-content/uploads/2024/02/UMT-Lahore.jpg"
                  alt="UMT Lahore"
                  className="w-40 rounded shadow cursor-pointer"
                  onClick={() =>
                    openModal(
                      "https://humenglish.com/wp-content/uploads/2024/02/UMT-Lahore.jpg"
                    )
                  }
                />
              </div>
            </div>

            <p className="text-red-700 font-semibold mt-6">
              🚀 Now working towards becoming a Future Full Stack Developer
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="lg:order-1">
            <h2 className="text-2xl text-center font-bold lg:text-[2rem] text-green-900">
              My Creative Process
            </h2>
          </div>

          <div className="mt-5 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 lg:mt-16">
            <div className="flex flex-col items-start mt-7 lg:items-center lg:mt-0">
              <div className="flex justify-center items-center gap-3 lg:flex-col">
                <DiCodeigniter className="text-[1.4rem] lg:text-[1.8rem] text-red-600" />
                <h3 className="font-semibold text-[1.1rem] lg:text-[1.2rem]">
                  Inspiration & Research
                </h3>
              </div>
              <div>
                <p className="mt-3 lg:text-center text-gray-700">
                  ɪ ꜱᴛᴀʀᴛ ʙʏ ᴜɴᴅᴇʀꜱᴛᴀɴᴅɪɴɢ ᴛʜᴇ ᴄʟɪᴇɴᴛ’ꜱ ɢᴏᴀʟꜱ ᴀɴᴅ ᴛᴀʀɢᴇᴛ
                  ᴜꜱᴇʀꜱ...
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start mt-7 lg:items-center lg:mt-0">
              <div className="flex justify-center items-center gap-3 lg:flex-col">
                <SiProtonmail className="text-[1.4rem] lg:text-[1.8rem] text-green-700" />
                <h3 className="font-semibold text-[1.1rem] lg:text-[1.2rem]">
                  Design & Prototyping
                </h3>
              </div>
              <div>
                <p className="mt-3 lg:text-center text-gray-700">
                  ɪ ᴄʀᴇᴀᴛᴇ ᴡɪʀᴇꜰʀᴀᴍᴇꜱ ᴀɴᴅ ᴘʀᴏᴛᴏᴛʏᴘᴇꜱ...
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start mt-7 lg:items-center lg:mt-0">
              <div className="flex justify-center items-center gap-3 lg:flex-col">
                <MdDeveloperMode className="text-[1.4rem] lg:text-[1.8rem] text-cyan-400" />
                <h3 className="font-semibold text-[1.1rem] lg:text-[1.2rem]">
                  Development & Testing
                </h3>
              </div>
              <div>
                <p className="mt-3 lg:text-center text-gray-700">
                  ɪ ʙʀɪɴɢ ᴛʜᴇ ɪᴅᴇᴀꜱ ᴛᴏ ʟɪꜰᴇ ᴜꜱɪɴɢ ʜᴛᴍʟ, ᴄꜱꜱ, ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalImg && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
        >
          <img
            src={modalImg}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
          />
        </div>
      )}
      <div className="mt-25">
        <Foter />
      </div>
    </>
  );
}
