import { performPurchase } from "../src/exercicio1"

describe("Perform Purchase texts", () => {
  test("Verifying a user with a balance greater than the purchase value", () => {
    const user= {
      name: "Álvaro",
      balance: 2000
    }

    const result = performPurchase(user, 100)

    expect(result).toEqual({
      ...user,
      balance: 1900
    })
  })

  test("Verifying a user with a balance equal to the purchase value", () => {
    const user = {
      name: "Álvaro",
      balance: 100
    }

    const result = performPurchase(user, 100)

    expect(result).toEqual({
      ...user,
      balance: 0
    })
  })

  test("Verifying a user with a balance smaller than the purchase value", () => {
    const user = {
      name: "Álvaro",
      balance: 50
    }

    const result = performPurchase(user, 100)

    expect(result).toEqual(undefined)
  })
})

