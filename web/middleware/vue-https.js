export default function ({ req, res, redirect, store, route }) {
    if (process.server) {
      console.log(1111, res)
      console.log(22222, req)
      console.log(33333, redirect)
      console.log(444, store)
      console.log(555, route)

    }
}
