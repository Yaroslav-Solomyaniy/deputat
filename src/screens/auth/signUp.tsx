import React, { useState } from "react";
import { Image, View } from "react-native";
import { router } from "expo-router";
import { email, object, string } from "zod";

// UI Components
import { Button } from "heroui-native/button";
import { InputGroup } from "heroui-native/input-group";
import { useToast } from "heroui-native/toast";

// Project Components & Hooks
import { SIonicons } from "@components/common/Icons";
import FormButton from "@components/form/FormButton";
import FormInput from "@components/form/FormInput";
import ScreenWrapper from "@components/layout/ScreenWrapper"; // Твой новый враппер
import useAppForm from "@hooks/form.hook";
import useAuthManage from "@services/zustand/auth.zustand";
import { sleep } from "@utils/helper";

// Assets
import logo from '@assets/images/android-icon-foreground.png';

const validationSchema = object({
    email: email("Не коректний e-mail").nonempty("Поле обов'язкове"),
    password: string().nonempty("Поле обов'язкове"),
    firstName: string().nonempty('Поле обов\'язкове'),
    lastName: string().nonempty('Поле обов\'язкове')
});

const SignUpPage = () => {
    const signIn = useAuthManage((state) => state.signIn);
    const { toast } = useToast();
    const [showPass, setShowPass] = useState<boolean>(false);

    const Form = useAppForm({
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        },
        validators: {
            onChange: validationSchema
        },
        onSubmit: async ({ value }) => {
            await sleep(2000);
            toast.show({
                label: "Success",
                variant: "success",
                description: "SignIn successful"
            });
            signIn();
        },
    });

    return (
        <ScreenWrapper
            bottomOffset={100}
            contentContainerClassName="p-4 gap-y-4 justify-center"
        >
            <View className="flex justify-center w-full flex-row">
                <Image source={logo} className="w-38 h-38" />
            </View>

            <Form.AppField name="firstName">
                {() => (
                    <FormInput
                        label="Ім'я"
                        placeholder="Іван"
                        autoCapitalize="none"
                    >
                        <InputGroup.Prefix isDecorative>
                            <SIonicons
                                size={20}
                                name="color-wand-outline"
                                className="text-default-foreground"
                            />
                        </InputGroup.Prefix>
                    </FormInput>
                )}
            </Form.AppField>

            <Form.AppField name="lastName">
                {() => (
                    <FormInput
                        label="Прізвище"
                        placeholder="Іванов"
                        autoCapitalize="none"
                    >
                        <InputGroup.Prefix isDecorative>
                            <SIonicons
                                size={20}
                                name="create"
                                className="text-default-foreground"
                            />
                        </InputGroup.Prefix>
                    </FormInput>
                )}
            </Form.AppField>

            <Form.AppField name="email">
                {() => (
                    <FormInput
                        label="Електронна пошта"
                        placeholder="Ваш email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    >
                        <InputGroup.Prefix isDecorative>
                            <SIonicons
                                size={20}
                                name="mail-outline"
                                className="text-default-foreground"
                            />
                        </InputGroup.Prefix>
                    </FormInput>
                )}
            </Form.AppField>

            <Form.AppField name="password">
                {() => (
                    <FormInput
                        label="Пароль"
                        placeholder="Ваш пароль"
                        autoCapitalize="none"
                        secureTextEntry={!showPass}
                    >
                        <InputGroup.Prefix isDecorative>
                            <SIonicons
                                size={20}
                                name="lock-closed-outline"
                                className="text-default-foreground"
                            />
                        </InputGroup.Prefix>
                        <InputGroup.Suffix>
                            <Button
                                isIconOnly
                                size="sm"
                                variant="ghost"
                                onPress={() => setShowPass(!showPass)}
                            >
                                <SIonicons
                                    size={20}
                                    name={showPass ? "eye" : "eye-off"}
                                    className="text-default-foreground"
                                />
                            </Button>
                        </InputGroup.Suffix>
                    </FormInput>
                )}
            </Form.AppField>

            <Button variant="ghost" className="self-end -mx-3">
                Забули пароль?
            </Button>

            <Form.AppForm>
                <FormButton>Увійти</FormButton>
            </Form.AppForm>

            <Button
                variant="ghost"
                className="self-center"
                onPress={() => router.push("/sign-up")}
            >
                Реєстрація
            </Button>
        </ScreenWrapper>
    );
};

export default SignUpPage;