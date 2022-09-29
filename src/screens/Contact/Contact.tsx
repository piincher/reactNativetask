import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { CustomButton } from "../../components/customButton/CustomButton";
import { Input } from "../../components/Input/Input";
import { sendMessage } from "../../store/actions/messageAction";
import { useAppDispatch } from "../../store/store";
import { contactDummyData } from "./data";
const { width } = Dimensions.get("window");
import { useForm } from "react-hook-form";
import { messageType } from "../../store/reducers/Message";
const Contact = () => {
  const { control, handleSubmit, reset, formState } = useForm<messageType>({
    mode: "onChange",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: messageType) => {
    try {
      dispatch(sendMessage(data));
      console.log(data);
      reset({
        name: "",
        email: "",
        message: "",
        mobileNumber: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 30,
          marginBottom: 400,
          width: width,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 36 }}>Contact us </Text>

        {contactDummyData.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <Input
                placeholder={data.placeholder}
                name={data.name}
                phone={data.phone}
                control={control}
                rules={data.rules}
                keyboard={data.keyboardType}
              />
            </React.Fragment>
          );
        })}

        <CustomButton
          text='submit'
          onSubmit={handleSubmit(onSubmit)}
          disabled={!formState.isValid}
        />
      </View>
    </ScrollView>
  );
};

export default Contact;
