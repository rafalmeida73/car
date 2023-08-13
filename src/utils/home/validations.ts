import * as Yup from "yup";

export const schema = Yup.object().shape({
  password: Yup.string().required("Campo obrigatório"),
  login: Yup.string().required("Campo obrigatório"),
});
