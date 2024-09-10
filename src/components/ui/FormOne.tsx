import React, { useState } from "react";
import { useFormik, ErrorMessage } from "formik";
import {
  CldImage,
  CldUploadButton,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Divide } from "lucide-react";
import UploadImage from "./UploadImage";

interface FormOneProps {
  formik: any;
}

const conditions = [
  "Hypertension",
  "Hypotension",
  "Diabetes 1 or 2",
  "Hyperthyroidism",
  "Hypothyroidism",
  "Autoimmune condition (rheumatoid arthritis, lupus etc)",
  "Kidney diseases",
  "Liver diseases",
  "Respiratory diseases (asthma, COPD etc)",
  "Heart diseases",
  "History of strokes or transient ischemic attacks (TIA), HIV, Hep ABC",
  "Parkinson's disease",
  "Multiple sclerosis",
  "Genetic disorder",
];

const FormOne: React.FC<FormOneProps> = ({ formik }) => {
  const [publicId, setPublicId] = useState("");

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="bg-white shadow-md p-6 max-w-2xl w-full">
        <div className="col-span-full">
          <h1 className="mb-4 text-xl font-bold">Personal detail</h1>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Cover photo
          </label>
          {formik.errors.profileImage ? (
            <div className="text-red-600">{formik.errors.profileImage}</div>
          ) : null}

          <CldUploadWidget
            uploadPreset="pukxe8xi"
            onSuccess={({ info }) => {
              if (typeof info === "object" && "secure_url" in info) {
                formik.setFieldValue("profileImage", info.secure_url);
                formik.setFieldValue("profileImageName", info.display_name);
                setPublicId(info.public_id);
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
                  {publicId ? (
                    <CldImage
                      src={publicId}
                      alt={publicId}
                      width={"300"}
                      height={"180"}
                    />
                  ) : (
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
                  )}

                  <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
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
                  {formik.values.profileImageName && (
                    <div>
                      {" "}
                      <p>{formik.values.profileImageName}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CldUploadWidget>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="DOB"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date Of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="DOB"
                  id="DOB"
                  value={formik.values.DOB}
                  onChange={formik.handleChange}
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.errors.DOB ? (
                  <div className="text-red-600">{formik.errors.DOB}</div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  placeholder="Location"
                  className=" p-3  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                />
                {formik.errors.location ? (
                  <div className="text-red-600">{formik.errors.location}</div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-full">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Do you have a preference for gender in therapist?
                </legend>
                {formik.errors.gender ? (
                  <div className="text-red-600">{formik.errors.gender}</div>
                ) : null}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="male"
                      name="gender"
                      type="radio"
                      value="Male"
                      checked={formik.values.gender === "Male"}
                      onChange={formik.handleChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600"
                    />
                    <label
                      htmlFor="male"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      name="gender"
                      type="radio"
                      value="Female"
                      checked={formik.values.gender === "Female"}
                      onChange={formik.handleChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600"
                    />
                    <label
                      htmlFor="female"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="both"
                      name="gender"
                      type="radio"
                      value="Both"
                      checked={formik.values.gender === "Both"}
                      onChange={formik.handleChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600"
                    />
                    <label
                      htmlFor="both"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Both
                    </label>
                  </div>
                </div>
              </fieldset>
              <h1 className="text-sm mt-10 font-semibold leading-6 text-gray-900">
                System Issues
              </h1>

              <div>
                {formik.errors.systemIssues ? (
                  <div className="text-red-600">
                    {formik.errors.systemIssues}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center border border-gray-200 rounded dark:border-gray-700 p-2"
                  >
                    <input
                      id={`condition-${index}`}
                      type="checkbox"
                      value={condition}
                      onChange={formik.handleChange}
                      checked={formik.values.systemIssues.includes(condition)}
                      name="systemIssues"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`condition-${index}`}
                      className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
