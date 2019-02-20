import { ApolloServer } from 'apollo-server'
import schema from './schema'

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
}

const server = new ApolloServer({ typeDefs: schema, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})