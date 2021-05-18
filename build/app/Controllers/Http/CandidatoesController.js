"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Candidato_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Candidato"));
class CandidatoesController {
    async index({ response }) {
        try {
            const candidatos = await Candidato_1.default.all();
            return response.status(200).send(candidatos);
        }
        catch (error) {
            return response.status(500);
        }
    }
    async update({ response, request, params }) {
        try {
            const { id } = params;
            const data = request.all();
            await Candidato_1.default.findOrFail(id).then(async (candidato) => {
                candidato.merge(data);
                await candidato.save();
                return response.status(200).send(candidato);
            });
        }
        catch (error) {
            return response.status(500);
        }
    }
}
exports.default = CandidatoesController;
//# sourceMappingURL=CandidatoesController.js.map