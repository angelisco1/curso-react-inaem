import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
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
      <h2>CrearMeme</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="texto1">Texto 1:</label>
          <input defaultValue="Texto 1" id="texto1" {...register('texto1', { required: 'El campo texto 1 es obligatorio' })} />
          {errors.texto1 && <p>{errors.texto1.message}</p>}
        </div>
        <div>
          <label htmlFor="texto2">Texto 2:</label>
          <input defaultValue="Texto 2" id="texto2" {...register('texto2', { required: 'El campo texto 2 es obligatorio' })} />
          {errors.texto2 && <p>{errors.texto2.message}</p>}
        </div>
        <div>
          <label htmlFor="url">Url de la imagen:</label>
          <input id="url" defaultValue="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg.webp" {...register('url', { required: 'El campo url es obligatorio' })} />
          {errors.url && <p>{errors.url.message}</p>}
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input type="color" id="color" defaultValue="#000000" {...register('color', { required: 'El campo color es obligatorio', pattern: {
            value: /^#[a-fA-F0-9]{6}$/, message: 'El color no es un hexadecimal' }})} />
          {errors.color && <p>{errors.color.message}</p>}
        </div>

        <button type="submit">Guardar</button>
      </form>

    </div>
  )
}

export default CrearMeme