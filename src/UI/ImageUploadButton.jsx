import React, { useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

const ImageUploadButton = ({ onImageSelect }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      if (onImageSelect) {
        onImageSelect(file);
      }
    }
  };

  return (
    <label
      htmlFor="image-upload"
      className="flex flex-col items-center justify-center flex-[1] border border-[#D7E1F4] rounded-3xl cursor-pointer bg-white hover:bg-gray-100"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <span className="rounded-full w-24 h-24 overflow-hidden flex items-center justify-center bg-gray-100">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="/image.svg"
              alt="Default"
              className="w-full h-full object-cover"
            />
          )}
        </span>
        <p className="mt-2 text-sm font-bold text-[#4169E1] flex items-center">
          <span className="flex items-center gap-2">
            <span className="text-lg">
              <MdOutlineCameraAlt />
            </span>
            {previewUrl ? "Change Image" : "Upload Image"}
          </span>
        </p>
      </div>
      <input
        id="image-upload"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </label>
  );
};

export default ImageUploadButton;
