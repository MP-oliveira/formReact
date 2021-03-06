import React from 'react'
import { TextField, Button } from "@material-ui/core";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id='email'
        label='Email'
        type='email'
        variant="outlined"
        margin="normal"
        fullWidth />
      <TextField
        id='senha'
        label='senha'
        type='password'
        variant="outlined"
        margin="normal"
        fullWidth />
      <Button
        type='submit'
        variant="contained"
        color="primary"
        fullWidth
      >
        Cadastrar
      </Button>

    </form>
  )
}

export default DadosUsuario