migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pjsagmk7dpvhlm")

  collection.listRule = "@request.auth.id = @collection.users.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pjsagmk7dpvhlm")

  collection.listRule = null

  return dao.saveCollection(collection)
})
