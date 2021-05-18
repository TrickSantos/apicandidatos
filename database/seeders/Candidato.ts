import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Candidato from 'App/Models/Candidato'

export default class CandidatoSeeder extends BaseSeeder {
  public async run() {
    await Candidato.createMany([
      {
        nome: 'Candidato 1',
        status: 'Reprovado',
        assinado: false,
      },
      {
        nome: 'Candidato 2',
        status: 'Aguardando',
        assinado: true,
      },
      {
        nome: 'Candidato 3',
        status: 'Aguardando',
        assinado: false,
      },
      {
        nome: 'Candidato 4',
        status: 'Aguardando',
        assinado: true,
      },
      {
        nome: 'Candidato 5',
        status: 'Aguardando',
        assinado: false,
      },
      {
        nome: 'Candidato 6',
        status: 'Aguardando',
        assinado: true,
      },
      {
        nome: 'Candidato 7',
        status: 'Aguardando',
        assinado: false,
      },
      {
        nome: 'Candidato 8',
        status: 'Aguardando',
        assinado: true,
      },
      {
        nome: 'Candidato 9',
        status: 'Aguardando',
        assinado: false,
      },
    ])
  }
}
