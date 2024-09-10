import React from "react";

interface TableProps {
  formik: any;
}

const OutPutTable: React.FC<TableProps> = ({ formik }) => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-lg font-semibold mb-4">Form Data Summary</h1>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Field
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Form 1 Data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Profile Image
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.profileImage}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Date of Birth (DOB)
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.DOB}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Location
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.location}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Gender
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.gender}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                System Issues
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.systemIssues.join(", ")}
              </td>
            </tr>

            {/* Form 3 Data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Selected Issues
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.selectIssue.join(", ")}
              </td>
            </tr>

            {/* Form 4 Data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Cancer Type
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.cancer}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Location (Form 4)
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.locationformfour}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Treatment
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.treatment}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Message
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.message}
              </td>
            </tr>

            {/* Form 5 Data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                BSB Number
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.BSBNumber}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Account Holder Name
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.accountHolderName}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Account Number
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.accountNo}
              </td>
            </tr>

            {/* New Ratings Data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Physiotherapist Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.physiotherapistrating}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Chiropractor Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.chiropractorrating}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Osteopath Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.osteopathrating}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Myotherapist Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.myotherapistrating}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Remedial Massage Therapist Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.remedialMassageTherapistrating}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                Acupuncturist/TCM Doctor Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formik.values.acupuncturistTCMDoctorrating}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutPutTable;
