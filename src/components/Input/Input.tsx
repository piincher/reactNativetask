import { StyleSheet, TextInput, KeyboardTypeOptions } from "react-native";
import { Controller } from "react-hook-form";

interface props {
  name: string;
  rules: object;
  placeholder: string;
  phone?: boolean;
  maxlength?: number;
  keyboard?: KeyboardTypeOptions | undefined;
  control: any;
}
export const Input = ({
  name,
  rules,
  placeholder,
  control,
  maxlength,
  keyboard,
}: props) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            maxLength={maxlength}
            keyboardType={keyboard}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 60,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "orange",
  },
});
