migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pjsagmk7dpvhlm")

  collection.viewRule = "@request.auth.id = @collection.users.id"
  collection.createRule = "@request.auth.id = @collection.users.id"
  collection.updateRule = "@request.auth.id = @collection.users.id"
  collection.deleteRule = "@request.auth.id = @collection.users.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pjsagmk7dpvhlm")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
