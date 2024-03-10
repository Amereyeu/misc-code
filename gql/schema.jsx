import { object, string } from "yup";

const minSize = "Minimální počet znaků je 3.";
const maxSize = "Maximální počet znaků je 20.";
const requiredField = "Toto pole je třeba vyplnit";
const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
const emailMessage = "Vložte emailovou adresu ve správném formátu.";

export const contactFormSchema = object({
  name: string().min(3, minSize).max(20, maxSize).required(requiredField),
  email: string().matches(emailPattern, emailMessage).required(requiredField),
  message: string().required(requiredField),
});
