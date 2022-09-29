import { TouchableOpacity, Text } from "react-native";

interface props {
  text: string;
  onSubmit: () => void;
  disabled: boolean;
}
export const CustomButton = ({ text, onSubmit, disabled }: props) => {
  return (
    <TouchableOpacity onPress={onSubmit} disabled={disabled}>
      <Text
        style={{
          flexDirection: "row",
          borderRadius: 3,
          padding: 10,
          margin: 5,
          justifyContent: "center",
          backgroundColor: disabled ? "#D3D3D3" : "pink",
          borderWidth: 2,
          borderColor: disabled ? "#D3D3D3" : "pink",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
