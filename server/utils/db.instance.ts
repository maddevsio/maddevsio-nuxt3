import { Sequelize } from 'sequelize'

const config = useRuntimeConfig()

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.public.ffEnvironment === 'development' ? '../prismicPages.sqlite' : './prismicPages.sqlite',
  logging: false,
})
