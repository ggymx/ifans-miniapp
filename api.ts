async function getUser():Promise<User> {
    return  {
        name: 'hello',
        pic: 'http://xxxxx.png',
    }
}

async function getTopicList():Promise<HomePageResult> {
    let ary:Topic[] = []
    for(let i=0;i<10;i++) {
        ary.push({
            id: i,
            title: 'blabla',
        })
    }
    return ary
}

async test() {
    console.log(await getTopicList())
}