import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as Yup from "yup";
import "./App.css";

const validationSchema = Yup.object().shape({
  input: Yup.string().required("Campo requerido"),
});

function App() {

  const handleValidateText = (text) => {
    axios.post('/validation-test4', {
      input: text.input
    })
    .then(function (response) {
      console.log(response, "Validación exitosa");
    })
    .catch(function (error) {
      console.log(error, "Error al validar");
    });
  }

  return (
    <div className="App">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h6" gutterBottom component="div">
            Test 4 - Validación de palíndromo
          </Typography>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Formik
                initialValues={{input: "",}}
                validationSchema={validationSchema}
                onSubmit={(value) => {handleValidateText(value);}}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field as={TextField} margin="dense" fullWidth variant="outlined" type="text" name="input"
                      label="Texto" multiline rows={4} placeholder="Escriba por favor el texto para validar si es palíndromo."
                      error={errors.input && touched.input} helperText={touched.input && errors.input}
                    />
                    <Button variant="contained" type="submit">Enviar</Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
