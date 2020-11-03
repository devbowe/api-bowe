const schemaName = '';
const data = []

module.exports = {
  async up(db, client) {
    let params = data.map(res => {
      res.nameSlug= res.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      return res
    })
    await db.collection(schemaName).insertMany(params);
  },

  async down(db, client) {
    await db.collection(schemaName).deleteMany();
  }
};
