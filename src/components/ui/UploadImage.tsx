// components/UploadImageComponent.tsx
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useFormik } from "formik";

interface UploadImageComponentProps {
  formik: ReturnType<typeof useFormik>;
}

const UploadImage: React.FC<UploadImageComponentProps> = ({ formik }) => {
  return (
    // <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    //   <div className="text-center">
    //     <svg
    //       className="mx-auto h-12 w-12 text-gray-300"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       aria-hidden="true"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //     <div className="mt-4 flex text-sm leading-6 text-gray-600">
    //       <CldUploadWidget
    //         uploadPreset="pukxe8xi"
    //         onSuccess={({ event, info }) => {
    //           if (typeof info === "object" && "secure_url" in info) {
    //             formik.setFieldValue("profileImage", info.secure_url);
    //             formik.setFieldValue("profileImageName", info.display_name);
    //             console.log("Upload successful:", info.display_name);
    //           } else {
    //             console.error("Upload failed: unexpected info type", info);
    //           }
    //         }}
    //         onError={(error) => {
    //           console.error("Upload error:", error);
    //         }}
    //       >
    //         {({ open }) => (
    //           <button
    //             type="button"
    //             onClick={() => open()}
    //             className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600"
    //           >
    //             Upload a file
    //           </button>
    //         )}
    //       </CldUploadWidget>
    //       <p className="pl-1">or drag and drop</p>
    //     </div>
    //     <p className="text-xs leading-5 text-gray-600">
    //       PNG, JPG, GIF up to 10MB
    //     </p>
    //   </div>
    // </div>


    <CldUploadWidget
  uploadPreset="pukxe8xi"
  onSuccess={({ event, info }) => {
    if (typeof info === "object" && "secure_url" in info) {
      formik.setFieldValue("profileImage", info.secure_url);
      formik.setFieldValue("profileImageName", info.display_name);
      console.log("Upload successful:", info.display_name);
    } else {
      console.error("Upload failed: unexpected info type", info);
    }
  }}
  onError={(error) => {
    console.error("Upload error:", error);
  }}
>
  {({ open }) => (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <button
            type="button"
            onClick={() => open()}
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600"
          >
            <span>Click to upload</span>
          </button>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">
          (SVG,JPG,PNG or PDF maximum 900 x 400)
        </p>
        {formik.values.profileImageName && (<div> <p>{formik.values.profileImageName}</p></div>)}
        {/* {formik.errors.profileImage ? (
                  <div className="text-red-600">{formik.errors.profileImage}</div>
                ) : null} */}
      </div>
    </div>
  )}
</CldUploadWidget>

  );
};

export default UploadImage;
