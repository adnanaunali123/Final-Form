import React from "react";

interface FormOneProps {
  formik: any;
}

const issues = [
  "Head and Neck Issues",
  "Torso Issues",
  "Pelvis Issues",
  "Arms Issues",
  "Legs Issues",
];
const FormThree: React.FC<FormOneProps> = ({ formik }) => {
  return (
    <>
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white shadow-md p-6 max-w-2xl w-full">
          <h1 className="text-lg font-semibold text-gray-900 mb-4">
            System Issues
          </h1>
          {formik.errors.selectIssue ? <div className="text-red-600">{formik.errors.selectIssue}</div> : null}
          <div className="space-y-2">
            {issues.map((issues, index) => (
              <div
                key={index}
                className="flex items-center p-4 border border-gray-200 rounded dark:border-gray-700"
              >
                <input
                  id={`issues-${index}`}
                  type="checkbox"
                  value={issues}
                  onChange={formik.handleChange}
                  checked={formik.values.selectIssue.includes(issues)}
                  name="selectIssue"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`issues-${index}`}
                  className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {issues}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormThree;
