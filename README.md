# axie-dev

### Steps to run this locally:
1. Clone this repo
2. Run 'npm install'
3. Run 'npm run dev'
4. Enter the GraphQL mutations an queries in http://localhost:8000/graphql (Apollo Studio)

### Endpoints:
1. **getAllAxies**: returns all Axies present in the MongoDB database
2. **getNFTCountByOwner**: invokes the balanceOf function from the AxieCore smart contract and returns the NFT count of the owner (ETH address is required as input)
3. **postAxies**: queries the first 300 Axies in price ascending order and stores them in the database in there respective collections (may take a few seconds to finish)
4. **deleteAxies**: clears out each collection

### Mutations and Queries for Apollo Studio:

*getAllAxies*
```
query {
  getAllAxies {
    axieId,
    name,
    stage, 
    class, 
    currentPrice
  }
}
```

*getNFTCountByOwner*
```
query($address: String!) {
  getNFTCountByOwner(address: $address)
}

// sample address
{
  "address": "0x9d28926450d1d718b82f5eb4771641b83c21d612"
}
```

*postAxies*
```
mutation {
  postAxies {
    axieId,
    name,
    stage, 
    class, 
    currentPrice
  }
}
```

*deleteAxies*
```
mutation {
  deleteAxies 
}
```
