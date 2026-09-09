// Search provider abstraction.
// Connect an approved search API here. DuckDuckGo Instant Answer is not a guaranteed shopping-price source.
async function searchPrices({query,country}) {
  return {status:'not_configured', query, country, results:[]};
}
module.exports={searchPrices};
