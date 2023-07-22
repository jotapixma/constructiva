import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Buttons/Button'
import * as yup from 'yup';
import styles from './ContactForm.module.scss';

const ContactForm = ({title}) => {

  const schema = yup.object().shape({
    email: yup.string().email("El email debe poseer un formato correcto").required("El email es requerido"),
    name: yup.string().required("El nombre es requerido"),
    fullName: yup.string().required("El Apellido es requerido"),
    text: yup.string().required("El comentario es requerido"),
    // phone: yup.string().optional(),
  })

  const { register, handleSubmit, control, setValue, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    try {
      console.log('data:', data);
    } catch (e) {
      console.log('error')
    }
  }

  const onError = (error) => {
    console.log('Fetch error: ', error);
  }

  return (  
    <section className={styles.formPanel}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>  
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={styles.formBox}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                size="small"
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}  
                label="Nombre"
                placeholder="Nombre"
                {...register("name")}
                error={Boolean(errors.name)}
                helperText={errors.name ? errors.name.message : " "}
              />
            </Grid>
            <Grid item xs={12} md={6} >
              <TextField
                fullWidth
                size="small"
                required
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}              
                label="Apellido"
                // placeholder="nombre@mail.com"
                {...register("fullName")}
                // error={Boolean(errors.email)}
                // helperText={errors.email ? errors.email.message : " "}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12} md={12} >
              <TextField
                fullWidth
                size="small"
                required
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}              
                label="Correo electrónico"
                placeholder="nombre@mail.com"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : " "}
                // defaultValue={email}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                // label="Multiline"
                fullWidth
                id="standard-multiline-static"
                {...register("text")}
                placeholder="Mensaje"
                sx={{
                  '& .MuiInputBase-input':
                    { 
                    fontSize: '1rem',
                  },
                }}
                multiline
                rows={3}
                variant="filled"
                error={Boolean(errors.text)}
                helperText={errors.text ? errors.text.message : " "}
                className={styles.customBox}
              />
            </Grid>
          </Grid>
          <Button type="submit">Enviar comentario</Button>
        </Box>
      </Container>
    </section>
  );
}
 
export default ContactForm;