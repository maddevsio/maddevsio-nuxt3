export default defineNitroPlugin(async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true, alter: true })
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})
