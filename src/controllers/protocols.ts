export type HttpResponse = {
  statusCode: number,
  body: any
}

export type HttpRequest = {
  body?: any,
  headers?: any,
  params?: any
}

export interface Controller {
  handle: (httpRequest: HttpResponse) => Promise<HttpResponse>
}