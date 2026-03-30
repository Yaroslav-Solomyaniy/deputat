import { createFormHookContexts } from "@tanstack/react-form";
import React from "react";
import ActionButton, { ActionButtonProps } from "../common/ActionButton";

const { useFormContext } = createFormHookContexts();

type FormButtonProps = Omit<ActionButtonProps, "action" | "feedbackVariant"> & {
  loadingText?: string;
};

const FormButton: React.FC<FormButtonProps> = (props) => {
  const form = useFormContext();

  return (
    <ActionButton
      action={form.handleSubmit}
      isSubmitting={form.state.isSubmitting}
      {...props}
    />
  );
};

export default FormButton;
