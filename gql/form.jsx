import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sendMail } from "../../lib/api";
import { contactFormSchema } from "./schema";

const onSubmit = async (values, actions) => {
  // console.log("val", values);
  // console.log("act", actions);

  const emailContent = `
    //tělo emailu
    <dl>
      <dt>Od:</dt> <dd> <strong>${values.name}</strong></dd>
      <dt>Emailová adresa:</dt> <dd><strong>${values.email}</strong></dd>
      <dt>Zpráva:</dt> <dd>${values.message}</dd>
    </dl>
    `;

  const data = await sendMail(
    //předmět emailu
    "Nová zpráva z webu test.amerey.eu",
    emailContent,
  );

  if (data.sent) {
    //email se úspěšně poslal
    toast.success("Email byl odeslán", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  actions.resetForm();
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  return (
    <>
      <div className="form-wrap">
        <form
          id="contact-form"
          role="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="form-row">
            <div className="split">
              <div className="form-group">
                <input
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  type="text"
                  placeholder="Jméno"
                  onBlur={handleBlur}
                  className={`form-control user ${errors.name && touched.name ? "invalid" : ""}`}
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <input
                  className={`form-control mail ${errors.email && touched.email ? "invalid" : ""}`}
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <textarea
                className={`form-control textarea ${errors.message && touched.message ? "invalid" : ""}`}
                placeholder="Vaše zpráva"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <button className="send" disabled={isSubmitting} type="submit">
                Odeslat
              </button>
            </div>
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};
export default BasicForm;

