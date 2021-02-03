import { Router } from 'itty-router'
import ZoneController from './controllers/ZoneController'
import DnsController from './controllers/DnsController'

const router = Router()

router
  .get('/api/zones', ZoneController.all)
  .get('/api/zones/:zone_id/dns_records', DnsController.all)
  .get('/api/zones/dns_records', DnsController.getOne)
router.post('/api/zones/:zone_id/dns_records', DnsController.createOne)
router.delete(
  '/api/zones/:zone_id/dns_records/:dns_id',
  DnsController.deleteOne,
)
router.patch('/api/zones/:zone_id/dns_records/:dns_id', DnsController.updateOne)

export const handleRequest = request => router.handle(request)
