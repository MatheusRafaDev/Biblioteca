import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tb_aluno from  "./tb_aluno.js";
import _tb_emprestimo from  "./tb_emprestimo.js";
import _tb_livro from  "./tb_livro.js";

export default function initModels(sequelize) {
  const tb_aluno = _tb_aluno.init(sequelize, DataTypes);
  const tb_emprestimo = _tb_emprestimo.init(sequelize, DataTypes);
  const tb_livro = _tb_livro.init(sequelize, DataTypes);

  tb_emprestimo.belongsTo(tb_aluno, { as: "id_aluno_tb_aluno", foreignKey: "id_aluno"});
  tb_aluno.hasMany(tb_emprestimo, { as: "tb_emprestimos", foreignKey: "id_aluno"});
  tb_emprestimo.belongsTo(tb_livro, { as: "id_livro_tb_livro", foreignKey: "id_livro"});
  tb_livro.hasMany(tb_emprestimo, { as: "tb_emprestimos", foreignKey: "id_livro"});

  return {
    tb_aluno,
    tb_emprestimo,
    tb_livro,
  };
}
