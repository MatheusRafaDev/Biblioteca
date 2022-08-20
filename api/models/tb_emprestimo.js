import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_emprestimo extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_aluno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_aluno',
        key: 'id_aluno'
      }
    },
    id_livro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_livro',
        key: 'id_livro'
      }
    },
    dt_emprestismo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    'dt_devolução': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tp_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_emprestimo',
    timestamps: false,
    indexes: [
      {
        name: "id_aluno",
        using: "BTREE",
        fields: [
          { name: "id_aluno" },
        ]
      },
      {
        name: "id_livro",
        using: "BTREE",
        fields: [
          { name: "id_livro" },
        ]
      },
    ]
  });
  }
}
