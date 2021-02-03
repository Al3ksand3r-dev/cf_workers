export default {
  async all(req) {
    const resp = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${req.params.zone_id}/dns_records`,
      {
        headers: {
          Authorization: `Bearer ${EDIT_DNS_TOKEN}`,
        },
      },
    )
    return await resp.json()
  },

  async getOne(req) {
    const resp = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + req.params.id,
    )
    return await resp.json()
  },

  async createOne(req) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' +
        req.params.zone_id +
        '/dns_records',
      {
        body: JSON.stringify(await req.json()),
        headers: {
          Authorization: `Bearer ${EDIT_DNS_TOKEN}`,
        },
        method: 'POST',
      },
    )
    return await resp.json()
  },

  async deleteOne(req) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' +
        req.params.zone_id +
        '/dns_records/' +
        req.params.dns_id,
      {
        headers: {
          Authorization: `Bearer ${EDIT_DNS_TOKEN}`,
        },
        method: 'DELETE',
      },
    )
    return await resp.json()
  },

  async updateOne(req) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' +
        req.params.zone_id +
        '/dns_records/' +
        req.params.dns_id,
      {
        headers: {
          Authorization: `Bearer ${EDIT_DNS_TOKEN}`,
        },
        body: JSON.stringify(await req.json()),
        method: 'PATCH',
      },
    )
    return await resp.json()
  },
}
