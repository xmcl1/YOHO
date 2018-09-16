import * as urls from '../commons/urls'

export class indexServices {
  static indexInfoByUserId (cb) {
    fetch(urls.SHOPCARTSAPI2).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}
export class indexServicee {
  static indexInfoByUserII (cb) {
    fetch(urls.SHOPCARTSAPO).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}
