interface Boulder {
  name: string,
  grade: string,
  _id: string,
  holds: {
    [key: string]: string
  }
}

interface NewBoulder {
  name: string,
  grade: string,
  holds: {
    [key: string]: string
  }
}

interface Action {
  type: string,
  boulder?: Boulder,
  boulders?: Boulder[]
}
