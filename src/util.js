// @flow

const queryjoin = query =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

export class Query {
  constructor(...prequery) {
    this.prequery = Object.assign({}, ...prequery)
  }

  string(addition) {
    const query = Object.assign({}, this.prequery, addition)
    return queryjoin(query)
  }
}
