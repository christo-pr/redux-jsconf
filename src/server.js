/**
 * This is the proxy to fake the http request.
 * For more info see: https://miragejs.com/docs/getting-started/introduction/
 */
import { Server, Model, Factory } from "miragejs"

import { random } from "./utils"

const factories = {
  duck: Factory.extend({
    points() {
      return random(1, 3)
    },
  }),
}

export default function fakeServer() {
  new Server({
    models: {
      duck: Model,
    },

    factories: factories,

    routes() {
      this.namespace = "api"

      // GET ducks
      this.get("/duck", (schema) => {
        const allDucks = schema.ducks.all()
        return allDucks.models[random(0, allDucks.length)]
      })
    },

    seeds(server) {
      // 20 ducks
      server.createList("duck", 20)

      // seed the in-memory database
      server.db.dump()
    },
  })
}
