import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";

const HeroSection = () => {
  const [currentImg, setCurrentImg] = useState(img1);
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [modalImg, setModalImg] = useState(null);

  const PASSWORD = "MuhammadAhmadFridi@511";

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError("");
  };

  const handleSave = () => {
    if (password === PASSWORD) {
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setCurrentImg(imageUrl);
        setError("");
        setIsEditing(false);
        setPassword("");
        setSelectedFile(null);
      } else {
        setError("Please choose a file first.");
      }
    } else {
      setError("Incorrect password. Image not changed.");
    }
  };

  const openModal = (imgUrl) => setModalImg(imgUrl);
  const closeModal = () => setModalImg(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between lg:p-30 px-8 py-16 bg-[#1b263b] min-h-screen">
      <div className="text-left space-y-4 md:w-1/2">
        <h1 className="text-5xl md:text-5xl font-bold text-black">
          Muhammad Ahmad Fridi
        </h1>
        <h2 className="text-xl text-green-500 lg:text-2xl font-semibold">
          Frontend Developer
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          I specialize in Web Development and Mobile Development.
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-blue-600 ml-18 md:ml-1 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition duration-300">
            Let's Get Started
          </button>
        </Link>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center">
        <div
          className="w-80 h-80 rounded-full overflow-hidden shadow-lg cursor-pointer"
          onClick={() => openModal(currentImg)}
        >
          <img
            src={currentImg}
            alt="Muhammad Ahmad Afridi"
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-md transition duration-300"
        >
          {isEditing ? "Cancel" : "Edit Image"}
        </button>

        {isEditing && (
          <div className="mt-4 w-full max-w-xs space-y-2">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded w-full text-black bg-gray-100 placeholder-gray-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full bg-gray-100 text-black rounded"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition duration-300 w-full"
            >
              Save
            </button>
          </div>
        )}
      </div>

      {modalImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-[-0.8rem] right-[-0.3rem] text-white rounded-full p-2 text-3xl  hover:text-white transition"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={modalImg}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
