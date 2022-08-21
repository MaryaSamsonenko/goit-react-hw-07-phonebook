import * as Yup from "yup";
import { NAME_REG_EXP, PHONE_REG_EXP } from "../constants/formRegExp";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(NAME_REG_EXP, "The name must contain only characters")
    .required("Required field"),
  phone: Yup.string()
    .matches(PHONE_REG_EXP, "Phone number is not valid")
    .required("Required field"),
});
