import httpRequest from "../request";

export function getAllCity() {
  return httpRequest.get({
    url: '/city/all'
  })
}
