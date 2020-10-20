import { Server, Model, Factory } from "miragejs"

export function random(min, max) {
  return Math.floor(Math.random() * (+max - +min) + +min)
}

export function randomIdsFromList(count, total) {
  const list = []

  while (list.length < count) {
    var r = random(0, total)
    if (list.indexOf(r) === -1) list.push(r)
  }

  return list
}

const factories = {
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
    },

    seeds(server) {
      // 20 monsters
      server.createList("monster", 20)

      // seed the in-memory database
      server.db.dump()
    },
  })
}
