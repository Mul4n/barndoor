interface Boulder {
  name: string,
  grade: string,
  id: string,
  holds: {
    [key: string]: number
  }
}

interface Action {
  type: string,
  boulder: Boulder
}
