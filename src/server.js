/**
 * This is the proxy to fake the http request.
 * For more info see: https://miragejs.com/docs/getting-started/introduction/
 */
import { Server, Model, Factory } from "miragejs"

import { randomIdsFromList, random } from "./utils"

const factories = {
  duck: Factory.extend({
    points() {
      return random(1, 3)
    },
  }),
  monster: Factory.extend({
    name(id) {
      return `Mounstro-${id}`
    },
    image(id) {
      // return `https://via.placeholder.com/300x500?text=Monster-${id}`
      const type = id % 3 === 0 ? "set2" : "set4"
      return `https://robohash.org/${id}?set=${type}`
    },
    score() {
      return Math.floor(Math.random() * (5 - 2)) + 1
    },
    isMonster(id) {
      return id % 3 === 0
    },
  }),
}

export default function fakeServer() {
  new Server({
    models: {
      monster: Model,
      duck: Model,
    },

    factories: factories,

    routes() {
      this.namespace = "api"

      // GET monsters
      this.get("/monsters", (schema) => {
        const allMonsters = schema.monsters.all()
        return randomIdsFromList(4, allMonsters.length).map(
          (id) => allMonsters.models[id]
        )
      })
      // GET ducks
      this.get("/duck", (schema) => {
        const allDucks = schema.ducks.all()
        return allDucks.models[random(0, allDucks.length)]
      })
    },

    seeds(server) {
      // 20 monsters
      server.createList("monster", 20)

      // 20 ducks
      server.createList("duck", 20)

      // seed the in-memory database
      server.db.dump()
    },
  })
}
