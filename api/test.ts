import api from './'

async function test() {
   console.log(await api.getHomeTopicList({}))
  console.log(await api.getTopic({id: 1}))
 console.log(await api.getPost({id: 2}))
 }

test().then().catch(console.log.bind(console))