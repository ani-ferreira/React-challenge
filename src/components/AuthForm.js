import { Button, Container } from "react-bootstrap";
import styles from "./AuthForm.module.css";
import * as yup from "yup";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../store/auth-context";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const accessUrl = "http://challenge-react.alkemy.org/";

  const makePostRequest = (props) => {
    axios({
      method: "post",
      url: `${accessUrl} `,
      data: {
        email: props.email,
        password: props.password,
      },
    })
      .then(function (response) {
        authCtx.login(response.data.token);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        alert("Intente otra vez por favor");
      });
  };

  const validationSchema = yup.object({
    password: yup.string().required("Completar"),
    email: yup.string().email().required("Completar"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values.email);
    makePostRequest(values);
  };

  return (
    <Container className={styles.container}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <div className="row">
            <label htmlFor="email">Email: </label>
            <Field
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="form-error">{msg}</div>}
            />
          </div>
          <br />
          <div className="row">
            <label htmlFor="password">Contraseña: </label>
            <Field
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="off"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="form-error">{msg}</div>}
            />
          </div>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default AuthForm;
