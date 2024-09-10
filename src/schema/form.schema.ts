import * as yup from "yup";

export const formOneSchema = yup.object().shape({
  profileImage: yup.string().required("Please Upload the image"),
  DOB: yup.string().required("Please Enter Your Date Of Birth"),
  location: yup.string().required("Please Enter Your Location"),
  systemIssues: yup.array().min(1).required("Please Select Atleast One "),
  gender: yup.string().min(1).required(" Select One"),
});

export const formTwoSchema = yup.object().shape({
  physiotherapistrating: yup
    .number()
    .min(1, "Select PhysioTherapist Rating")
    .required("Select PhysioTherapist Rating"),
  chiropractorrating: yup
    .number()
    .min(1, "Select Chiropractor Rating")
    .required("select"),
  osteopathrating: yup.number().min(1, "Select os Rating").required("select"),
  myotherapistrating: yup
    .number()
    .min(1, "Select my Rating")
    .required("select"),
  remedialMassageTherapistrating: yup
    .number()
    .min(1, "Select rem Rating")
    .required("select"),
  acupuncturistTCMDoctorrating: yup
    .number()
    .min(1, "Select ac Rating")
    .required("select"),
});

export const formThreeSchema = yup.object().shape({
  selectIssue: yup.array().min(1, "Please Select Atleast One "),
});

export const formFourSchema = yup.object().shape({
  cancer: yup.string().min(1).required("Select One"),
  locationformfour: yup.string().required("Please Enter Your Location"),
  // treatment:yup.string().min(1,"Please Select Any One"),
  // message:yup.string().required("Please Enter Your "),
});

export const formFiveSchema = yup.object().shape({
  BSBNumber: yup.string().required("Please Enter Your BSB Number"),
  accountHolderName: yup
    .string()
    .required("Please Enter Your Account Holder Name"),
  accountNo: yup.string().required("Please Enter Your Account Number"),
});
