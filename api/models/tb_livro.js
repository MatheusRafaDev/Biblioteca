import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_livro extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_livro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_livro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_autor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_descricao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    nm_categoria: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nm_editora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_ano: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_livro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_livro" },
        ]
      },
    ]
  });
  }
}
