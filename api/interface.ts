
//用户
interface User{                         
    name:string,                        //用户昵称
    pic?:string,                        //头像
    sign?:string,                       //用户签名
    followStatus:Array<number>,         //关注状态：未关注0，已关注1，互相关注2
    fansNum:number,                     //粉丝数
    actiivtyNum:number,                 //动态数    
    readonly id:string,                 //用户唯一id，编码格式未定
    readonly creatTime:Date,            //用户生成时间
}

// 发布信息类共有属性
interface Common{
    readonly id:string,                 //信息唯一ID，不同类型有不同编码，编码格式未定
    text:string,                        //输入的所有信息，除图片
    readonly creatUser:string,          //关联创建用户ID
    readonly creatTime:Date,            //创建时间
    readonly delTime:Date,              //删除时间
    status:Array<number>,               //信息状态：草稿0，已发布1，已删除2
}
//话题，继承共有属性
interface Topic extends Common{         
    title:string,                       //话题名称
    pic?:string,                        //话题图片
    viewNum:number,                     //话题浏览量
    joinNum:number,                     //话题参与量
    sumarry:string,                     //话题简介
    hotFlag:boolean,                    //热议标志
}
//投稿，继承共有属性
interface Post  extends Common{         
    pic?:string,                        //话题图片    
    discussNum:number,                  //该投稿的评论数
    likedNum:number,                    //该投稿的点赞数
    likedTime:Date,                     //点赞时间
    readonly relativeTopic:string,      //关联话题ID
    readonly saw:boolean,               //投稿已查看标志
    liked:boolean,                      //投稿已赞标志
}
//评论，继承共有属性
interface Discuss  extends Common{      
    num:number,                         //评论数
    likedNum:number,                    //评论点赞数
    likedTime:Date,                     //评论点赞时间
    readonly relativePoste:string,      //关联投稿ID
    discussed:boolean,                  //已评论标志     
}
//评论回复，继承共有属性
interface Reply  extends Common{
    likedNum:number,                    //回复点赞数
    likedTime:Date,                     //回复点赞时间
    readonly relativeDiscuss:string,    //关联评论ID，
    readonly toUser:string,             //关联被回复方userID，
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