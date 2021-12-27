import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = /*process.env.GRAPHQL_ENDPOINT || */'https://api-us-east-1.graphcms.com/v2/ckxj8o04c2yzs01xogjm8cm24/master'

export const client = new GraphQLClient(GRAPHQL_ENDPOINT)