db.createUser({
  user: 'db_bowe',
  pwd: 'db_bowe',
  roles: [
    { role: 'dbOwner', db: 'db_bowe' }
  ]
})
