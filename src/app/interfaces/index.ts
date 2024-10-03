export interface BoulderType {
  name: string,
  grade: string,
  _id: string,
  holds: {
    [key: string]: string
  }
}

export interface NewBoulderType {
  name: string,
  grade: string,
  holds: {
    [key: string]: string
  }
}

export interface ActionType {
  type: string,
  boulder?: BoulderType,
  boulders?: BoulderType[]
}
