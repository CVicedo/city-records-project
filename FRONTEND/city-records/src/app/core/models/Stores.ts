export interface Store {
  _id: string,
  storeName: string,
  adress: string,
  ownerName: string,
  records:any[],
  email: string,
  coordinates: {
    latitude: number,
    longitude: number
  }
}
