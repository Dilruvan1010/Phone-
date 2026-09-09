// Price provider abstraction.
// Add an approved API/feed provider here. Do not scrape sites that prohibit it.
async function getCurrentPrices({device, country}) {
  return {status:'not_configured', device:device.id, country, prices:[]};
}
module.exports={getCurrentPrices};
