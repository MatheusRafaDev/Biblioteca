import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_aluno extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_aluno: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_aluno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_telefone: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    nm_endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tp_sexo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nr_sala: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_aluno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_aluno" },
        ]
      },
    ]
  });
  }
}
