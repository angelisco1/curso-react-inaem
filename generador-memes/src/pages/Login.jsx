import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Input, Field, Button, Heading, Stack } from '@chakra-ui/react'
import AuthService from '../services/auth.service'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log({data})

    try {
      const dataAuth = await AuthService.login(data.email, data.password)
      console.log(dataAuth)
      await Swal.fire({
        title: 'Success',
        text: 'Te has logueado correctamente'
      })
      localStorage.setItem('authToken', dataAuth.token)
      navigate('/')
    } catch (err) {
      await Swal.fire({
        title: 'Error',
        text: err.message,
        icon: 'error',
      })
    }
  }

  // const handleSubmit = (fn) => {
  //   fn(stateForm)
  // }

  console.log(errors)

  return (
    <div>
      <Stack gap={4}>
        <Heading size="xl">Login</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field.Root maxW="300px">
            <Field.Label>
              Email:
              <Field.RequiredIndicator />
            </Field.Label>
            <Input defaultValue="cfalco@gmail.com" id="email" {...register('email', { required: 'El campo email es obligatorio' })} />
            {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
          </Field.Root>
        </div>
        <div>
          <Field.Root maxW="300px">
            <Field.Label>
              Password:
              <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" defaultValue="1234" id="password" {...register('password', { required: 'El campo password es obligatorio' })} />
            {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
          </Field.Root>
        </div>

        <Button type="submit">Guardar</Button>
      </form>

      </Stack>
    </div>
  )
}

export default Login