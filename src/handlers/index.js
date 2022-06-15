function handlePocketUrl(req, res) {
  /*
    Missing implementation.
    Steps:
    - Check if the current hash resolves to a URL
    - If it does, return the URL. Otherwise res.status(400)
   */
  const urlHash = req.params['urlHash']
  console.log(`Received handle short url request with urlHash: ${urlHash}`)
  res.sendStatus(200)
}

function createPocketUrl(req, res) {
  /*
    Missing implementation.
    Steps:
    - Validate if we already have a pocket url for the targetUrl
    - If we do, then we just return that pocker url.
    - Otherwise we want to create a unique urlHash, save it and return it to the client.
   */

  // req.body represents the payload sent by the client
  const urlToCut = req.body.targetUrl
  console.log(`Received handle the creation of a pocket url request with targetUrl: ${urlToCut}`)
  res.sendStatus(200)
}

module.exports = {
  handlePocketUrl,
  createPocketUrl
}
