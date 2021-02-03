import DnsFunction from '../functions/DnsFunction'

const resHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-type': 'application/json',
  'Access-Control-Allow-Methods': 'POST, DELETE, GET, PATCH, OPTIONS',
}

export default {
  async all(req) {
    const resp = JSON.stringify(await DnsFunction.all(req))
    return new Response(resp, {
      headers: resHeaders,
    })
  },

  async getOne(req) {
    const resp = JSON.stringify(await DnsFunction.getOne(req))
    return new Response(resp, {
      headers: resHeaders,
    })
  },

  async createOne(req) {
    const resp = JSON.stringify(await DnsFunction.createOne(req))
    return new Response(resp, {
      headers: resHeaders,
    })
  },

  async deleteOne(req) {
    const resp = JSON.stringify(await DnsFunction.deleteOne(req))
    return new Response(resp, {
      headers: resHeaders,
    })
  },

  async updateOne(req) {
    const resp = JSON.stringify(await DnsFunction.updateOne(req))
    return new Response(resp, {
      headers: resHeaders,
    })
  },
}
