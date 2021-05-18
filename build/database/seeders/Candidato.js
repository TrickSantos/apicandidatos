"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Candidato_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Candidato"));
class CandidatoSeeder extends Seeder_1.default {
    async run() {
        await Candidato_1.default.createMany([
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
        ]);
    }
}
exports.default = CandidatoSeeder;
//# sourceMappingURL=Candidato.js.map