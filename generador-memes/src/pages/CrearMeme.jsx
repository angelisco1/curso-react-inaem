import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { ColorPicker, Portal, HStack, parseColor, Input, Field, Button, Heading, Stack } from '@chakra-ui/react'
import MemesService from '../services/memes.service'

const CrearMeme = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    data.userId = 1
    data.likes = 0

    console.log({data})

    try {
      const memeCreado = await MemesService.createMeme(data)
      await Swal.fire({
        title: 'Success',
        text: 'Se ha creado correctamente'
      })
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
        <Heading size="xl">CrearMeme</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field.Root maxW="300px">
            <Field.Label>
              Texto 1:
              <Field.RequiredIndicator />
            </Field.Label>
            <Input defaultValue="Texto 1" id="texto1" {...register('texto1', { required: 'El campo texto 1 es obligatorio' })} />
            {errors.texto1 && <Field.ErrorText>{errors.texto1.message}</Field.ErrorText>}
          </Field.Root>


          {/* <label htmlFor="texto1">Texto 1:</label>
          <input defaultValue="Texto 1" id="texto1" {...register('texto1', { required: 'El campo texto 1 es obligatorio' })} />
          {errors.texto1 && <p>{errors.texto1.message}</p>} */}
        </div>
        <div>
          <Field.Root maxW="300px">
            <Field.Label>
              Texto 2:
              <Field.RequiredIndicator />
            </Field.Label>
            <Input defaultValue="Texto 2" id="texto2" {...register('texto2', { required: 'El campo texto 2 es obligatorio' })} />
            {errors.texto2 && <Field.ErrorText>{errors.texto2.message}</Field.ErrorText>}
          </Field.Root>
          {/* <label htmlFor="texto2">Texto 2:</label> */}
          {/* <input defaultValue="Texto 2" id="texto2" {...register('texto2', { required: 'El campo texto 2 es obligatorio' })} /> */}
          {/* {errors.texto2 && <p>{errors.texto2.message}</p>} */}
        </div>
        <div>
          <Field.Root maxW="300px">
            <Field.Label>
              Url de la imagen:
              <Field.RequiredIndicator />
            </Field.Label>
            <Input id="url" defaultValue="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg.webp" {...register('url', { required: 'El campo url es obligatorio' })} />
            {errors.url && <Field.ErrorText>{errors.url.message}</Field.ErrorText>}
          </Field.Root>
          {/* <label htmlFor="url">Url de la imagen:</label> */}
          {/* <input id="url" defaultValue="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg.webp" {...register('url', { required: 'El campo url es obligatorio' })} /> */}
          {/* {errors.url && <p>{errors.url.message}</p>} */}
        </div>
        <div>
          <ColorPicker.Root id="color" defaultValue={parseColor("#000000")} maxW="200px" {...register('color', { required: 'El campo color es obligatorio', pattern: {
            value: /^rgba*/, message: 'El color no tiene un formato valido' }})} >
            {/* value: /^#[a-fA-F0-9]{6}$/, message: 'El color no es un hexadecimal' }})} > */}
            <ColorPicker.HiddenInput />
            <ColorPicker.Label htmlFor="color">Color:</ColorPicker.Label>
            <ColorPicker.Control>
              <ColorPicker.Input />
              <ColorPicker.Trigger />
            </ColorPicker.Control>
            <Portal>
              <ColorPicker.Positioner>
                <ColorPicker.Content>
                  <ColorPicker.Area />
                  <HStack>
                    <ColorPicker.EyeDropper size="xs" variant="outline" />
                    <ColorPicker.Sliders />
                  </HStack>
                </ColorPicker.Content>
              </ColorPicker.Positioner>
            </Portal>
          </ColorPicker.Root>
          {/* <label htmlFor="color">Color:</label> */}
          {/* <input type="color" id="color" defaultValue="#000000" {...register('color', { required: 'El campo color es obligatorio', pattern: {
            value: /^#[a-fA-F0-9]{6}$/, message: 'El color no es un hexadecimal' }})} /> */}
          {errors.color && <p>{errors.color.message}</p>}
        </div>

        <Button type="submit">Guardar</Button>
      </form>

      </Stack>
    </div>
  )
}

export default CrearMeme