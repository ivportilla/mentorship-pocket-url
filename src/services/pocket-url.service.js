const PocketRepository = require('../storage/pocket-repository')

class PocketUrlService {
  constructor(pocketRepo) {
    this.repo = pocketRepo;
  }
  // Create a unique hash for the URL
  createHash(url) {

  }

  // Persist the association hash -> URL
  associateHashWithUrl(hash, url) {

  }

  // Look for a previously saved URL
  urlLookup(hash) {

  }
}

module.exports = new PocketUrlService(PocketRepository)
