<<<<<<< HEAD:api/test.ts
import api from './'
=======
// import api from './'

// async function test() {
//   // console.log("获取首页话题列表：");
//   // console.log(await api.getHomeTopicList({}))
//   console.log("获取话题详情：");
//   console.log(await api.getTopic({id: 1}))
//   // console.log("获取投稿详情：");
//   // console.log(await api.getPost({id: 2}))
// }

// test().then().catch(console.log.bind(console))
import api from './api'
import { ITopicDetailParams } from './types/http_msg';


async function getTopic(obj:ITopicDetailParams):Promise<any>{
  return await api.getTopic(obj);
}
>>>>>>> c6b30b0db89f05afea2f6842b1de1fff78cfd8ed:common/test.ts

async function test() {
   console.log(await api.getHomeTopicList({}))
  console.log(await api.getTopic({id: 1}))
 console.log(await api.getPost({id: 2}))
 }

test().then().catch(console.log.bind(console))