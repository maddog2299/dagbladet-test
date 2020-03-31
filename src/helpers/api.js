import {endpoints} from '../constants/index';
export default {
  fetch (path, conf) {
    return fetch(endpoints.BASCIC_URL + path, conf)
      .then(res => {
        if (res.ok) return res;
        return res.text().then(text => {
          throw new Error('error ' + res.status + '\n' + text)
        })
      })
      .catch(err => {
        console.warn('api error: ' + err.message)
      })
  },
  checkError (res) {
    if (!res.ok) return res.text().then(text => {
      throw new Error('error ' + res.status + '\n' + text)
    });
    return res
  },
  getArticles () {
    return this
      .fetch(endpoints.GET_ARTICLES)
      .then(res => res.json())
      .catch(this.checkError)
  }
}
