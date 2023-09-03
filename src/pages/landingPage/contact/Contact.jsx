import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  Typography,
  styled,
  TextField,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@mui/material";
// UTILS CONTEXTS


////////////////////// EXPORT FUNCTION //////////////////////
export default function Contact() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contenu: "",
  });
  const { firstName, lastName, email, contenu } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      const res = await fetch(
        "https://portfolio-three-ruddy-21.vercel.app/api/contact/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      setIsLoading(false);

      setValues({
        firstName: "",
        lastName: "",
        email: "",
        contenu: "",
      });

      if (!res.ok) {
        console.log("error");
        setMsgError(true);
        setTimeout(() => {
          setMsgError(false);
        }, "2000");
      } else {
        console.log("ok");
        setIsSended(true);
        setIsSended(() => {
          setMsgError(false);
        }, "2000");
      }
    }
  };

  ////////////////////// STYLES //////////////////////
  const RootContact = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {},
  }));

  const TypoTitlePage = styled(Typography)(({ theme }) => ({
    // color: darkMode ? "#000" : "#FFF",
    fontFamily: "'Dancing Script', cursive",
    margin: "65px",
  }));

  const stylesImgPersonnage2D = {
    height: `${matches ? "200px" : "300px"}`,
    width: `${matches ? "200px" : "300px"}`,
    marginBottom: "-50px",
  };

  const stylesForm = {
    alignItems: "center",
    borderRadius: "20px",
    background: "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px",
    flexDirection: "column",
    width: `${matches ? "250px" : "420px"}`,
  };

  const stylesInput = {
    width: "255px",
  };


  return (
    // Attention !!! Laisser le style dans la div et pas le transformer en Balise MUI car le formulmaire disfonctionnera !
    <div
      id='contact'
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
        width: "100vw",
      }}
    >
      <TypoTitlePage variant={matches ? "h4" : "h2"}>
        TEST Contact
      </TypoTitlePage>
      <Image
        alt='personnage2D Contact'
        height={300}
        src='/assets/imgs/personnage2D/contact.png'
        style={stylesImgPersonnage2D}
        width={300}
      />
      <form
        action='https://formspree.io/f/moqzvjwq'
        method='POST'
        // onSubmit={handleSubmit}
        style={stylesForm}
      >
        {msgError && (
          <Typography align='center' color='red' variant='h6'>
            Votre message n&apos;a pas été envoyé, veuillez remplir tous les
            champs
          </Typography>
        )}
        {isSended && (
          <Typography variant='h6'>
            Votre message a bien été envoyé avec succès
          </Typography>
        )}
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleChange}
          placeholder='Entrer votre prénom...'
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={handleChange}
          placeholder='Entrer votre nom de famille...'
        />
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='Entrer votre email...'
        />
        <textarea
          cols='30'
          name='contenu'
          onChange={handleChange}
          placeholder='Entrer votre message...'
          rows='10'
          style={{ resize: "none" }}
          value={contenu}
        />
        <Button variant='contained' type='submit'>
          Envoyer
        </Button>
        {/* "&&" raccourci de " {!isLoading ? <button type='submit'>Envoyer</button> : null}"  */}
        {/* {!isLoading && (
          <Button variant='contained' type='submit'>
            Envoyer
          </Button>
        )} */}
        {/* <Button variant='contained'>Envoyez</Button> */}
      </form>
    </div>
  );
}
