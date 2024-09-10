import React from "react";
import { FaStar } from "react-icons/fa";
import { FormikProps } from "formik";
import * as yup from "yup";

interface FormTwoProps {
  formik: FormikProps<any>;
}

const therapyNames = [
  "Physiotherapist",
  "Chiropractor",
  "Osteopath",
  "Myotherapist",
  "Remedial Massage Therapist",
  "Acupuncturist/TCM Doctor",
];

const therapyKeys = [
  "physiotherapistrating",
  "chiropractorrating",
  "osteopathrating",
  "myotherapistrating",
  "remedialMassageTherapistrating",
  "acupuncturistTCMDoctorrating",
];

const FormTwo: React.FC<FormTwoProps> = ({ formik }) => {
  const handleRatingChange = (therapyKey: string, currentRating: number) => {
    formik.setFieldValue(therapyKey, currentRating);
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="bg-white shadow-md p-6 max-w-2xl w-full">
        <h1 className="mb-4 text-xl">
          Please select which of the following you have used in the past and
          rate how well they worked for you (Out of 5 Stars)
        </h1>

        {therapyNames.map((therapyName, index) => {
          const therapyKey = therapyKeys[index];
          const rating = formik.values[therapyKey] || 0;

          return (
            <div key={therapyKey} className="mb-4">
              <div className="flex justify-between items-center">
                <h1 className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  {therapyName}
                </h1>

                <div className="flex">
                  {[...Array(5)].map((_, i) => {
                    const currentRating = i + 1;
                    return (
                      <label
                        key={i}
                        className="relative flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={therapyKey}
                          value={currentRating}
                          onChange={() =>
                            handleRatingChange(therapyKey, currentRating)
                          }
                          checked={currentRating === rating}
                          className="absolute opacity-0"
                        />
                        <FaStar
                          size={30}
                          className="star"
                          color={currentRating <= rating ? "yellow" : "grey"}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              {formik.touched[therapyKey] && formik.errors[therapyKey] ? (
                <div className="text-red-500 text-sm mt-1">
                  {typeof formik.errors[therapyKey] === "string"
                    ? formik.errors[therapyKey]
                    : "Invalid input"}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormTwo;
