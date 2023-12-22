import {
  Card,
  CardContent,
  Fade,
  TextField,
  InputAdornment,
  CardActions,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AccountCircleRounded, EmailRounded } from "@mui/icons-material";
import { useFormik } from "formik";
import { contactUsSchema } from "../validations/contactUsValidation";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  const form = useRef();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: async () => {
      try {
        setSending(true);
        const result = await emailjs.sendForm(
          "service_xfgbakg",
          "template_ohjxm2t",
          form.current,
          "Q-m2IRGKct6DO1L5d"
        );
        toast.success("Email sent");
        formik.resetForm();
        setSending(false);
        console.log(result.text);
      } catch (error) {
        toast.error("The email was not sent");
        console.log(error.text);
      }
    },
    validationSchema: contactUsSchema,
  });

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Helmet>
        <title>CONTACT | MOHAMMAD GHORBANI</title>
      </Helmet>
      <Fade
        direction="right"
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
        }}
        {...(loading ? { timeout: 1000 } : {})}
      >
        <Grid container rowSpacing={4}>
          <Grid xs={9} sx={{ m: "auto", py: 20 }}>
            <Card
              sx={{
                borderRadius: 3,
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: 10,
              }}
            >
              <form ref={form} onSubmit={formik.handleSubmit}>
                <CardContent>
                  <Grid xs={12}>
                    <TextField
                      fullWidth
                      size="medium"
                      label="Name"
                      name="fullName"
                      variant="outlined"
                      helperText={
                        formik.touched.fullName ? formik.errors.fullName : null
                      }
                      error={Boolean(
                        formik.touched.fullName && formik.errors.fullName
                      )}
                      value={formik.values?.fullName}
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircleRounded />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      fullWidth
                      size="medium"
                      label="E-mail"
                      name="email"
                      variant="outlined"
                      helperText={
                        formik.touched.email ? formik.errors.email : null
                      }
                      error={Boolean(
                        formik.touched.email && formik.errors.email
                      )}
                      value={formik.values?.email}
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailRounded />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      size="medium"
                      label="Message"
                      name="message"
                      variant="outlined"
                      helperText={
                        formik.touched.message ? formik.errors.message : null
                      }
                      error={Boolean(
                        formik.touched.message && formik.errors.message
                      )}
                      value={formik.values?.message}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color={sending ? "secondary" : "success"}
                    sx={{ mt: 2, borderRadius: 2, color: "whitesmoke" }}
                    fullWidth
                    onClick={formik.handleSubmit}
                    disabled={sending}
                  >
                    {sending ? <CircularProgress size={25} /> : "Submit"}
                  </Button>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
};

export default ContactUs;
