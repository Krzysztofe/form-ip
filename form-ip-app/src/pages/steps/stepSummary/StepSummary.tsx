import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import HttpRequestState from "./HttpRequestState";
import { v4 as UUID } from "uuid";
import Captcha from "./Captcha";

const StepSummary = () => {
  const { formik } = useContext(StepsContext);

  const formikValues = Object.values(formik.values);

  const dataSummary = [
    "Imię",
    "Nazwisko",
    "Adres",
    "Telefon",
    "E-mail",
    "Pracodawca",
    "Pracodawca",
    "Miejsce Pracy",
    "Miejsce Pracy",
    "Umowa",
    "Wymiar czasu pracy",
    "Dział",
    "Login",
    "Przynależność do innych ziwązków",
  ];

  return (
    <>
      <HttpRequestState />

      <Box>
        <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
          Podsumowanie
        </Typography>

        {dataSummary.map((text, idx) => {
          return (
            <div key={UUID()}>
              {formikValues[idx] === "" ? null : (
                <Typography variant="body1" sx={{ p: 1 }}>
                  <span>
                    <strong>{text}: </strong>
                    {formikValues[idx]}
                  </span>
                </Typography>
              )}
            </div>
          );
        })}
        <Typography variant="body1" sx={{ p: 1 }}>
          <span>
            Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na
            przetważanie moich danych osobowych na zasadach i w celach w niej
            wskazanych.
          </span>
        </Typography>
        <Captcha />
      </Box>
    </>
  );
};

export default StepSummary;
