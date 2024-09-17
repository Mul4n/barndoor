interface Boulder {
  name: string,
  grade: string,
  _id: string,
  holds: {
    [key: string]: number
  }
}

interface NewBoulder {
  name: string,
  grade: string,
  holds: {
    [key: string]: number
  }
}

interface Action {
  type: string,
  boulder?: Boulder,
  boulders?: Boulder[]
}
