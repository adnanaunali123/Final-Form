import React from "react";
interface FormFiveProps {
  formik: any;
}
const FormFive: React.FC<FormFiveProps> = ({ formik }) => {
  return (
    <>
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white shadow-md p-6 max-w-2xl w-full">
          <h1 className="mb-4 text-xl font-bold">Payment detail</h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="BSB"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                BSB Number
              </label>
              <div>
                {formik.errors.BSBNumber ? (
                  <div className="text-red-600">{formik.errors.BSBNumber}</div>
                ) : null}
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="BSBNumber"
                  value={formik.BSBNumber}
                  onChange={formik.handleChange}
                  placeholder="Enter BSB Number"
                  id="BSBNumber"
                  className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor=" accountHolderName,"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Account Holder Name
              </label>
              <div>
                {formik.errors.accountHolderName ? (
                  <div className="text-red-600">
                    {formik.errors.accountHolderName}
                  </div>
                ) : null}
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  id="accountHolderName"
                  name="accountHolderName"
                  value={formik.values.accountHolderName}
                  onChange={formik.handleChange}
                  placeholder="Enter Account Holder Name"
                  className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="accountNo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Account Number/IBAN Number
              </label>
              <div>
                {formik.errors.accountNo ? (
                  <div className="text-red-600">{formik.errors.accountNo}</div>
                ) : null}
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  id="accountNo"
                  name="accountNo"
                  value={formik.values.accountNo}
                  onChange={formik.handleChange}
                  placeholder="Enter Account Number/IBAN Number"
                  className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFive;
