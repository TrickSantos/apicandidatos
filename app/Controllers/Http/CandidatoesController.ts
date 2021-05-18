import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Candidato from 'App/Models/Candidato'

export default class CandidatoesController {
  public async index({ response }: HttpContextContract) {
    try {
      const candidatos = await Candidato.all()
      return response.status(200).send(candidatos)
    } catch (error) {
      return response.status(500)
    }
  }

  public async update({ response, request, params }: HttpContextContract) {
    try {
      const { id } = params
      const data = request.all()
      await Candidato.findOrFail(id).then(async (candidato) => {
        candidato.merge(data)
        await candidato.save()
        return response.status(200).send(candidato)
      })
    } catch (error) {
      return response.status(500)
    }
  }
}
