import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Candidatoes extends BaseSchema {
  protected tableName = 'candidatoes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('status')
      table.boolean('assinado').defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
