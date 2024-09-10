import FormOne from "@/components/ui/FormOne";
import React, { useState } from "react";
import { useFormik, ErrorMessage } from "formik";
import FormTwo from "@/components/ui/FormTwo";
import FormThree from "@/components/ui/FormThree";
import FormFour from "@/components/ui/FormFour";
import FormFive from "@/components/ui/FormFive";
import OutPutTable from "@/components/ui/OutPutTable";
import ProgressBar from "@/components/ui/ProgressBar";
import {
  formFiveSchema,
  formFourSchema,
  formOneSchema,
  formThreeSchema,
  formTwoSchema,
} from "@/schema/form.schema";

interface Values {
  profileImage: string;
  profileImageName: string;
  DOB: string;
  location: string;
  gender: string;
  systemIssues: string[];
  selectIssue: string[];
  cancer: string;
  locationformfour: string;
  treatment: string;
  message: string;
  BSBNumber: string;
  accountHolderName: string;
  accountNo: string;
  physiotherapistrating: number;
  chiropractorrating: number;
  osteopathrating: number;
  myotherapistrating: number;
  remedialMassageTherapistrating: number;
  acupuncturistTCMDoctorrating: number;
}

const FormView = () => {
  const [formNo, setFormNo] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Values | null>(null);
  const handleSchema = () => {
    if (formNo === 1) return formOneSchema;
    if (formNo === 2) return formTwoSchema;
    if (formNo === 3) return formThreeSchema;
    if (formNo === 4) return formFourSchema;
    if (formNo === 5) return formFiveSchema;
  };

  const nextForm = async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      setFormNo((prev) => prev + 1);
    } else {
      const touchedErrors = Object.keys(errors).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      );
      formik.setTouched(touchedErrors);
      formik.setErrors(errors);
    }
  };

  const formik = useFormik<Values>({
    initialValues: {
      profileImageName: "",
      profileImage: "",
      DOB: "",
      location: "",
      gender: "",
      systemIssues: [],
      selectIssue: [],
      cancer: "",
      locationformfour: "",
      treatment: "",
      message: "",
      BSBNumber: "",
      accountHolderName: "",
      accountNo: "",
      physiotherapistrating: 0,
      chiropractorrating: 0,
      osteopathrating: 0,
      myotherapistrating: 0,
      remedialMassageTherapistrating: 0,
      acupuncturistTCMDoctorrating: 0,
    },
    validationSchema: handleSchema(),
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values) => {
      setIsSubmitted(true);
      setFormData(values);
    },
  });

  const renderView = () => {
    switch (formNo) {
      case 1:
        return <FormOne formik={formik} />;
      case 2:
        return <FormTwo formik={formik} />;
      case 3:
        return <FormThree formik={formik} />;
      case 4:
        return <FormFour formik={formik} />;
      case 5:
        return <FormFive formik={formik} />;
      default:
        return <h1>404 Page Not Found</h1>;
    }
  };

  return (
    <>
      {isSubmitted && formData ? (
        // <OutPutTable {...formData} />
        <OutPutTable formik={formik} />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="h-screen bg-gray-100 w-full ">
            <div className="flex justify-center items-center bg-gray-100 ">
              <div className="bg-white p-6 rounded-t-lg max-w-2xl w-full mt-10">
                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-black text-3xl font-bold">
                    Complete Profile
                  </h1>
                  <ProgressBar formNo={formNo} />
                </div>
              </div>
            </div>

            <hr className="h-px w-6 my-0 bg-gray-200 border-0 dark:bg-gray-700" />
            {renderView()}

            <div className="flex  justify-center bg-gray-100 w-full">
              <div className="bg-white p-6 rounded-b-lg max-w-2xl w-full mt-0">
                <div className="flex justify-between gap-4">
                  {formNo === 1 ? (
                    <button
                      type="button"
                      className="rounded-md opacity-0 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={() => setFormNo(formNo - 1)}
                    >
                      Back
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={() => setFormNo(formNo - 1)}
                    >
                      Back
                    </button>
                  )}

                  {formNo !== 5 && (
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={nextForm}
                    >
                      Continue
                    </button>
                  )}

                  {formNo === 5 && (
                    <button
                      type="submit"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={formik.submitForm}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default FormView;
