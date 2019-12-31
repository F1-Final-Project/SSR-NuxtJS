
import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
    httpLinkOptions: {
      uri: 'http://localhost:3005/graphql',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
  }
}
