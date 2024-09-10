import React from "react";
interface FormFourProps {
  formik: any;
}
const FormFour: React.FC<FormFourProps> = ({ formik }) => {
  return (
    <>
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white shadow-md p-6 max-w-2xl w-full">
          <div className="flex flex-col">
            <fieldset>
              <h1 className="text-lg font-semibold text-gray-900 mb-4">
                Have you ever been diagnosed with cancer ?
              </h1>
              <div>
                {formik.errors.cancer ? (
                  <div className="text-red-600">{formik.errors.cancer}</div>
                ) : null}
              </div>
              <div className="flex gap-20">
                <div className="flex items-center me-4">
                  <input
                    id="yes-radio"
                    type="radio"
                    value="yes"
                    checked={formik.values.cancer === "yes"}
                    name="cancer"
                    onChange={formik.handleChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="yes-radio"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no-radio"
                    type="radio"
                    checked={formik.values.cancer === "no"}
                    value="no"
                    name="cancer"
                    onChange={formik.handleChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="no-radio"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Location
            </label>
            <div>
              {formik.errors.locationformfour ? (
                <div className="text-red-600">
                  {formik.errors.locationformfour}
                </div>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="location"
                name="locationformfour"
                value={formik.values.locationformfour}
                onChange={formik.handleChange}
                placeholder="Enter Location"
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Specify Treatment
            </legend>

            <div className="mt-6 space-y-4">
              <div className="flex gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="chemotherapy"
                    name="treatment"
                    value="Chemotherapy"
                    checked={formik.values.treatment === "Chemotherapy"}
                    onChange={formik.handleChange}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="chemotherapy"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Chemotherapy & Radiation
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="radiation"
                    name="treatment"
                    value="Radiation"
                    checked={formik.values.treatment === "Radiation"}
                    onChange={formik.handleChange}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="radiation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Radiation
                  </label>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="chemo-radiation"
                    name="treatment"
                    value="Removal Of Cancer With Course Of Chemo & Radiation"
                    checked={
                      formik.values.treatment ===
                      "Removal Of Cancer With Course Of Chemo & Radiation"
                    }
                    onChange={formik.handleChange}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="chemo-radiation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Chemotherapy
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="natural"
                    name="treatment"
                    value="Natural"
                    checked={formik.values.treatment === "Natural"}
                    onChange={formik.handleChange}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="natural"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Removal Of Cancer With Course Of Chemo & Radiation
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="grid w-full items-center gap-1.5 mt-10">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Any Thing else you wish to let us Know
            </label>

            <textarea
              className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 resize-none"
              id="message"
              placeholder="Leave us a message"
              rows={6}
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
          </div>

          {/* here */}
        </div>
      </div>
    </>
  );
};

export default FormFour;
