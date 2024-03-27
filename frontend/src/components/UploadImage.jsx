// src/components/UploadImage.jsx
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useFilesContext } from "../hooks/useFilesContext";
import { IoIosCloudUpload } from "react-icons/io";
const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState(""); // State to store image name input value

  const Files = useFilesContext();

  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setImageName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", selectedImage, imageName);
      const response = await axios.post(
        "http://localhost:3000/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded:", response.data.imageUrl);
      Files.dispatch({
        type: "ADD",
        payload: {
          url: response.data.imageUrl,
          name: imageName,
          file: selectedImage,
        },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center py-8 w-full"
    >
      <div className="w-full">
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="file-input"
          className="w-1/2 mx-auto border p-2 hover:border-primary cursor-pointer transition-all hover:text-primary flex text-center gap-4 items-center justify-center"
        >
          <IoIosCloudUpload color="#FFBF46" />
          Upload
        </label>
      </div>
      <input
        type="text"
        value={imageName}
        onChange={handleNameChange}
        placeholder="Enter image name"
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadImage;

UploadImage.propTypes = {
  onUpload: PropTypes.func,
};
