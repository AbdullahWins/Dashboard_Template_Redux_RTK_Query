import React, { useState } from "react";

const ImageHandler = ({ image, setFile }) => {
  const [imagePreview, setImagePreview] = useState(image);
  const [typeError, setTypeError] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (
      file?.type === "image/jpg" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/png"
    ) {
      setFile(file);
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
      setTypeError(false);
    } else {
      setFile("");
      setImagePreview("");
      setTypeError(true);
    }
  };
  return (
    <div>
      {/* uploader  */}
      <div className="flex items-center gap-3">
        {/* <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
          Image
        </span> */}
        <div className="w-full">
          {/* <p className="font-semibold text-black mb-3">Namessss</p> */}
          <div className="w-full">
            <input
              type="file"
              required
              className="h-1 w-1 opacity-0 absolute"
              id="lesson"
              onChange={handleFileChange}
              name="lesson"
            />
            {!imagePreview && (
              <label
                htmlFor="lesson"
                className={`w-full border border-dotted border-primaryMain rounded-lg py-6 px-4 flex flex-col justify-center items-center gap-2 cursor-pointer`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                  >
                    <path
                      d="M12.1667 34.9683C9.8901 34.7935 7.72695 33.9038 5.98611 32.4264C4.24527 30.9489 3.01575 28.9592 2.47311 26.7413C1.93047 24.5235 2.10246 22.1909 2.96452 20.0766C3.82658 17.9623 5.33463 16.1744 7.27335 14.9683C7.68587 11.7517 9.25634 8.79577 11.6909 6.65353C14.1254 4.51128 17.2571 3.32959 20.5 3.32959C23.7429 3.32959 26.8746 4.51128 29.3091 6.65353C31.7437 8.79577 33.3142 11.7517 33.7267 14.9683C35.6654 16.1744 37.1734 17.9623 38.0355 20.0766C38.8976 22.1909 39.0696 24.5235 38.5269 26.7413C37.9843 28.9592 36.7548 30.9489 35.0139 32.4264C33.2731 33.9038 31.1099 34.7935 28.8333 34.9683V34.9999H12.1667V34.9683ZM22.1667 21.6666H27.1667L20.5 13.3333L13.8333 21.6666H18.8333V28.3333H22.1667V21.6666Z"
                      fill="#515EDB"
                    />
                  </svg>
                </div>
                <h4 className="text-base text-primaryMain font-medium mt-2">
                  Upload
                </h4>
              </label>
            )}
            {imagePreview && (
              <div className={` w-full h-60 rounded-xl  relative`}>
                <div className="">
                  <img
                    src={imagePreview}
                    alt=""
                    className=" w-full h-60 rounded-md bg-cover object-cover"
                  />
                </div>
                <label
                  htmlFor="lesson"
                  className="inline-flex gap-1 py-2 px-3  border border-primaryMain bg-whiteHigh rounded-full text-xs text-blueColor absolute top-6 right-4 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.87445 6.01333L10.4878 6.62667L4.44778 12.6667H3.83445V12.0533L9.87445 6.01333ZM12.2744 2C12.1078 2 11.9344 2.06667 11.8078 2.19333L10.5878 3.41333L13.0878 5.91333L14.3078 4.69333C14.5678 4.43333 14.5678 4.01333 14.3078 3.75333L12.7478 2.19333C12.6144 2.06 12.4478 2 12.2744 2ZM9.87445 4.12667L2.50111 11.5V14H5.00111L12.3744 6.62667L9.87445 4.12667Z"
                      fill="#5880CC"
                    />
                  </svg>
                  <span>Edit</span>
                </label>
              </div>
            )}
            {typeError && (
              <p className="text-xs text-errorColor mt-1">
                Select a valid image!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHandler;
