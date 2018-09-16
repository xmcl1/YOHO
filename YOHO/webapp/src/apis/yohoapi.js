import * as urls from '../commons/urls'
export class indexServices {
  static indexInfoByUserId (cb) {
    fetch(urls.lixinyuan).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}
