import * as urls from '../commons/urls'
export class indexServices {
  static indexInfoByUserId (cb) {
    fetch(urls.SHOPCARTSAPI).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}

export class indexServices1 {
  static indexInfoByUserId1 (cb) {
    fetch(urls.SHOPCARTSAPI1).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}
