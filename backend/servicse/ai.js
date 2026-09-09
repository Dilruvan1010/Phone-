// AI verification abstraction.
// Feed it retrieved source data; do not ask an LLM to invent current prices.
async function verifyPriceResults({device,results}) {
  return {status:'not_configured', device:device.id, verified:[]};
}
module.exports={verifyPriceResults};

