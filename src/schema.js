import { importSchema } from 'graphql-import'
import { gql } from 'apollo-server'

const typeDefs = importSchema('schema.graphql')

export default gql(typeDefs)