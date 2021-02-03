import { handleRequest } from './handler'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, PATCH, OPTIONS',
}

function handleOptions(request) {
  let headers = request.headers
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    let respHeaders = {
      ...corsHeaders,
      'Access-Control-Allow-Headers': request.headers.get(
        'Access-Control-Request-Headers',
      ),
    }
    return new Response(null, { headers: respHeaders })
  } else {
    return new Response(null, {
      headers: { Allow: 'GET, HEAD, DELETE, POST, PATCH, OPTIONS' },
    })
  }
}

addEventListener('fetch', event => {
  if (event.request.method === 'OPTIONS') {
    event.respondWith(handleOptions(event.request))
  } else {
    event.respondWith(handleRequest(event.request))
  }
})
