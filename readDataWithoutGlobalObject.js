const { MongoClient } = require('mongodb')

function main() {
  const uri =
    'mongodb+srv://MaryamBibi:walyatalataf786@sgms-cluster.fgd03.mongodb.net/mydb?retryWrites=true&w=majority'

  MongoClient.connect(uri, { useNewUrlParser: true }, async (err, client) => {
    if (err) {
      console.log('Failed')
      process.exit(1)
    } else {
      const db = client.db('mydb')

      const result = await db.collection('sensorgpsdatas').find()
      result.forEach((item) => {
        console.log(item)
      })
    }
  })
}

main()
