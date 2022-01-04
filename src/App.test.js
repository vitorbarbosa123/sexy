import { makeServer } from "./miragejs/server";

describe("App", () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  })

  afterEach(() => {
    server.shutdown()
  })

  test('App', () => {
      const users = server.createList("user", 3);

      console.log(JSON.parse(JSON.stringify(users)))
  })
})