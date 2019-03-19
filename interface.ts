
interface User{
    name:string,
    pic?:string,
    sign?:string,
    followStatus:Array<number>, 
    fansNum:number,
    actiivtyNum:number,
    readonly id:string,
    readonly creatTime:Date,
}
// 信息类共有属性
interface Common{
    readonly id:string,
    text:string,
    readonly creatUser:string,
    readonly creatTime:Date,
    readonly delTime:Date,
    status:Array<number>,  
}
interface Topic extends Common{
    title:string,
    viewNum:number,
    joinNum:number,
    sumarry:string,
    hotFlag:boolean,
}
interface Post  extends Common{
    pic?:string,
    discussNum:number,
    likedNum:number,
    likedTime:Date,
    readonly relativeTopic:string,//关联话题ID
    readonly saw:boolean,
    liked:boolean,
}
interface Discuss  extends Common{
    num:number,
    likedNum:number,
    likedTime:Date,
    readonly relativeContribute:string,//关联投稿ID
    discussed:boolean,
}
interface Reply  extends Common{
    likedNum:number,
    likedTime:Date,
    readonly relativeDiscuss:string,//关联评论ID，
    readonly toUser:string,      //关联被回复方userID，
}

interface HomePageResult {
    topics: Topic[],
}

interface DiscussResult {
    discuss: Discuss,
    reply: Reply[],
}

interface TopicDetailResult {
    topic: Topic,
    discusses: DiscussResult[],
}