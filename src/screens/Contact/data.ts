import { Platform, KeyboardTypeOptions } from "react-native";

const keyboard: KeyboardTypeOptions | undefined =
  Platform.OS === "android" && Platform.Version >= 21
    ? "phone-pad"
    : "name-phone-pad";
export const contactDummyData = [
  {
    id: "1",
    name: "name",
    rules: { required: true },
    placeholder: " Name",
  },
  {
    id: "2",
    name: "email",
    rules: {
      required: true,
      type: "email",
      pattern: {
        value: /\S+@\S+.\S+/u,
        message: "Invalid email format.Please try again.",
      },
    },
    placeholder: "Enter Email Address",
  },
  {
    id: "3",
    name: "mobileNumber",
    rules: {
      required: true,
      type: "phone",
      minLength: {
        value: 10,
        message: "Phone must have 10 digits.Please try again.",
      },
      maxLength: {
        value: 10,
        message: "Phone must not have more than 10 digits.Please try again.",
      },
    },
    placeholder: "Enter Mobile number",

    phone: true,
    maxlength: 10,
    keyboardType: keyboard,
  },
  {
    id: "4",
    name: "message",
    rules: { required: true },
    placeholder: "message",
  },
];
