export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

interface Casino {
  name: string;
  location: LOCATION;
}

interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export const verifyAge = (casino: Casino, users: User[]): Result => {
  const allowed: User[] = []
  const unallowed: User[] = []

  for(let user of users){
    if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user)
      } else {
        unallowed.push(user)
      }
    } else {
      if (user.age>=21) {
        allowed.push(user)
      } else {
        unallowed.push(user)
      }
    }
  }

  const brazilians: ResultItem = {
    allowed: allowed
    .filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
    .map(user => user.name),
    unallowed: unallowed
    .filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
    .map(user => user.name)
  }

  const americans: ResultItem = {
    allowed: allowed
    .filter(user => user.nacionality === NACIONALITY.AMERICAN)
    .map(user => user.name),
    unallowed: unallowed
    .filter(user => user.nacionality === NACIONALITY.AMERICAN)
    .map(user => user.name)
  }

  const result: Result = {
    brazilians,
    americans
  } 

  return result
}