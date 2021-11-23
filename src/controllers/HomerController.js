import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'STRING',
      sobrenome: 'STRING',
      email: 'STRING',
      idade: 'INTEGER',
      peso: 'FLOAT',
      altura: 'FLOAT',
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
