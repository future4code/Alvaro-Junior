import { LOCATION, NACIONALITY, verifyAge } from "../src/exercicio3"

describe("Verify Age test", () => {
  test("Verifying verifyage function, when the user is brazilian and over 18 in a brazilian cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 20,
        nacionality: NACIONALITY.BRAZILIAN
      }
    ]

    const casino = {
      name: "Las Vegas",
      location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, users)

    expect(result).toEqual({
      brazilians: {
        allowed: users.map(user => user.name),
        unallowed: []
      },
      americans: {
        allowed: [],
        unallowed: []
      }
    })
  })

  test("Verifying verifyage function, when the user is american and over 18 in a brazilian cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 20,
        nacionality: NACIONALITY.AMERICAN
      }
    ]

    const casino = {
      name: "Las Vegas",
      location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, users)

    expect(result).toEqual({
      brazilians: {
        allowed: [],
        unallowed: []
      },
      americans: {
        allowed: users.map(user => user.name),
        unallowed: []
      }
    })
  })

  test("Verifying verifyage function, when the users are 19 in an american cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "André",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "James",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      }
    ]

    const casino = {
      name: "Paris",
      location: LOCATION.EUA
    }

    const result = verifyAge(casino, users)

    expect(result).toEqual({
      brazilians: {
        allowed: [],
        unallowed: users
        .filter(user => user.nacionality===NACIONALITY.BRAZILIAN)
        .map(user => user.name)
      },
      americans: {
        allowed: [],
        unallowed: users
        .filter(user => user.nacionality===NACIONALITY.AMERICAN)
        .map(user => user.name)
      }
    })
  })

  test("Verifying verifyage function, when the brazilian users are 19 and the americans users are 21 in an american cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "André",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "James",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
      }
    ]

    const casino = {
      name: "Paris",
      location: LOCATION.EUA
    }

    const result = verifyAge(casino, users)

    expect(result).toEqual({
      brazilians: {
        allowed: [],
        unallowed: users
        .filter(user => user.nacionality===NACIONALITY.BRAZILIAN)
        .map(user => user.name)
      },
      americans: {
        allowed: users
        .filter(user => user.nacionality===NACIONALITY.AMERICAN)
        .map(user => user.name),
        unallowed: []
      }
    })
  })

  test("Verifying verifyage function, quantity when a brazilian users are over 18 in a brazilian cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      }
    ]

    const casino = {
      name: "Paris",
      location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, users)

    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  })

  test("Verifying verifyage function, quantity when a american users are over 18 in a brazilian cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      }
    ]

    const casino = {
      name: "Paris",
      location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, users)

    expect(result.americans.unallowed.length).toEqual(0)
  })

  test("Verifying verifyage function, unallowed brazilain and american user when the users are 19 in an american cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "André",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "James",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      }
    ]

    const casino = {
      name: "Paris",
      location: LOCATION.EUA
    }

    const result = verifyAge(casino, users)

    expect(result.brazilians.unallowed).toContain("Álvaro")
    expect(result.americans.unallowed).toContain("James")
  })

  test("Verifying verifyage function, quantities when the brazilian users are 19 and the americans users are 21 in an american cassino", () => {
    const users = [
      {
        name: "Álvaro",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "André",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "James",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
      }
    ]

    const casino = {
      name: "Paris",
      location: LOCATION.EUA
    }

    const result = verifyAge(casino, users)

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  })
})