import { object, string } from "yup";

const requiredField = "Toto pole je třeba vyplnit";

const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;

export const contactFormSchema = object({
  name: string()
    .min(3, "Minimální počet znaků je 3.")
    .max(20, "Maximální počet znaků je 20.")
    .required(requiredField),
  email: string()
    .matches(emailPattern, {
      message: " Vložte emailovou adresu ve správném formátu.",
    })
    .required(requiredField),
  message: string().required(requiredField),
});

