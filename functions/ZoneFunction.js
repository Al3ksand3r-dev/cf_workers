export default {
  async all() {
    const resp = await fetch(`https://api.cloudflare.com/client/v4/zones`, {
      headers: {
        Authorization: 'Bearer ' + EDIT_DNS_TOKEN,
      },
    })
    return await resp.json()
  },
}
