import ZoneFunction from '../functions/ZoneFunction'

const corsHeaders = {
  // 'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Content-type': 'application/json',
}

export default {
  async all() {
    const resp = JSON.stringify(await ZoneFunction.all())
    return new Response(resp, {
      headers: corsHeaders,
    })
  },
}
