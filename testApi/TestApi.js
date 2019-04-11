"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestApi = (function () {
    function TestApi() {
    }
    TestApi.getTopList = function () {
        return this.topList;
    };
    TestApi.getTopic = function (id) {
        for (var i = 0; i < this.topList.length; i++) {
            if (id == this.topList[i].tId) {
                return this.topList[i];
            }
        }
    };
    TestApi.getComment = function (cId) {
        for (var j = 0; j < this.topList.length; j++) {
            for (var i = 0; i < this.topList[j].cmtList.length; i++) {
                if (cId == this.topList[j].cmtList[i].cmtId) {
                    return this.topList[j].cmtList[i];
                }
            }
        }
    };
    TestApi.getMyParti = function (name) {
        var partiList = [];
        this.topList.forEach(function (topic) {
            topic.tName == name ? partiList.push(topic) : '';
            topic.cmtList.forEach(function (comment) {
                comment.cmtName == name ? partiList.push(comment) : '';
            });
        });
        return partiList;
    };
    TestApi.topList = [
        {
            tId: 1,
            tName: '葛干',
            tavatar: '',
            tDate: '2019/1/30',
            title: '#农药上最狗的英雄#',
            tLike: 63,
            context: '王者农药已经陪伴我们四年了，俗话说一入坑来深似海，从此女友是路人，毒友们觉得农药里面哪个英雄最狗！',
            cmtList: [
                {
                    cmtId: 1,
                    cmtName: '游明星',
                    cavatar: '',
                    title: '#农药上最狗的英雄#',
                    cmtContext: '表示从没有玩过荣耀，不知怎么回事，一万多买的苹果机竟然连农药都带不动，看着他们的安卓老年机都能玩，真心觉得整个了假手机...',
                    cmtDate: '2019/03/20',
                    like: '98'
                },
                {
                    cmtId: 2,
                    cmtName: '孙达',
                    cavatar: '',
                    title: '#农药上最狗的英雄#',
                    cmtContext: '农药是什么？我也没玩过农药，我觉得学习最快乐，不仅能学到东西，更能丰富自己的内涵，这个年头好学的孩子有肉吃。。。',
                    cmtDate: '2011/04/12',
                    like: '105'
                },
                {
                    cmtId: 3,
                    cmtName: '李泽',
                    cavatar: '',
                    title: '#农药上最狗的英雄#',
                    cmtContext: '最狗的英雄？那肯定是张良加东皇了，控到死你说恶心不恶心，曾经看过大神的李白进入控制全，一秒变金币，我的天，很嗨啊！',
                    cmtDate: '2022/12/3',
                    like: '96'
                }
            ]
        },
        {
            tId: 2,
            tName: '桂哥',
            tavatar: '',
            tDate: '2019/2/01',
            title: '#京都樱花节#',
            tLike: 63,
            context: '一年一度东京又迎来了樱花节，作为日本精神的象征，东京的樱花无疑是最美丽最动人的，小伙伴们，你们怎么看？',
            cmtList: [
                {
                    cmtId: 1,
                    cmtName: '游明星',
                    cavatar: '',
                    title: '#京都樱花节#',
                    cmtContext: '樱花一种象征美好爱情的美丽之花，同时也是被用于春天的象征之花，花开时色彩呈现粉红色让人爱不释手。时下正式武汉大学樱花的最佳观赏时期。花繁艳丽，满树烂漫，如云似霞，极为壮观。樱花颜色有红、粉红、朱红、艳红、白、粉白等颜色，韩国樱多白，日本樱多色，中国樱多粉。常见的樱花有17种左右，如椿寒樱，迎春樱，河津樱，飞寒樱等等。下面花草乐和你分享樱花花语表达的寓意和樱花的传说故事。',
                    cmtDate: '2019/03/20',
                    like: '98'
                },
                {
                    cmtId: 2,
                    cmtName: '孙达',
                    cavatar: '',
                    title: '#京都樱花节#',
                    cmtContext: '樱花花语：生命补充山樱的话语:花语是「向你微笑」、「精神美」西洋樱花的花语是「善良的教育」樱花热烈、纯洁、高尚，严冬过后是它最先把春天的气息带给日本人民，每年3月15日至4月15日为日本的“樱花节”。花开时节，人们携酒带肴在樱花树下席地而坐，边赏樱、边畅饮，真是人生一大乐趣。“欲问大和魂，朝阳底下看山樱”。日本人认为人生短暂，活着就要像樱花一样灿烂，即使死，也该果断离去。樱花凋落时，不污不染，很干脆，被尊为日本精神的象征。日本人不但赏樱，还吃樱，其樱花雪糕别有滋味。樱花的花语，拿走不客气~',
                    cmtDate: '2011/04/12',
                    like: '105'
                },
                {
                    cmtId: 3,
                    cmtName: '李泽',
                    cavatar: '',
                    title: '#京都樱花节#',
                    cmtContext: '安琪拉是手游《王者荣耀》中的英雄。曾经的安琪拉作为一名拥有召唤单位能力的英雄，深受许多玩家的喜爱。而改版后的安琪拉，技能全新更换，虽然没有了大熊为伴，但她多了一本大书。其大范围的攻击、稳定的眩晕和灵活免控的大招，让这位魔法少女更具有杀伤力。额~瞎评论那么多，来错频道了~',
                    cmtDate: '2022/12/3',
                    like: '56'
                },
                {
                    cmtId: 4,
                    cmtName: '葛干',
                    cavatar: '',
                    title: '#京都樱花节#',
                    cmtContext: '樱花不擅于解释和修饰，不擅于表达往往是最传情的表达，樱花代表着含蓄的爱情，看樱花，仿佛就能看见断桥深处的她',
                    cmtDate: '2022/12/3',
                    like: '56'
                }
            ]
        },
        {
            tId: 3,
            tName: '迪迦奥特曼',
            tavatar: '',
            tDate: '2019/12/11',
            title: '#那些年的抗日英雄#',
            tLike: 43,
            context: '转眼间鬼子又来了，在鬼子的采摘季节，你最看好哪位抗日英雄',
            cmtList: [
                {
                    cmtId: 1,
                    cmtName: '风',
                    cavatar: '',
                    title: '#那些年的抗日英雄#',
                    cmtContext: '抗日英雄当然首推可爱的小怪兽们啊，这些萌萌哒小怪兽冒着生命的危险，来到地球的日本地区进行违章建筑的拆除，以及惩治一些坏人，还和奥特曼最斗争，虽然都是被消灭，但是小怪兽们从来不曾退缩，你说方不方？',
                    cmtDate: '2019/03/20',
                    like: '32'
                },
                {
                    cmtId: 2,
                    cmtName: '巴拉克.奥巴马',
                    cavatar: '',
                    title: '#那些年的抗日英雄#',
                    cmtContext: '虽然我贵为总统，但是小时候也看过抗日神剧奥特曼，其中的怪兽们的事迹十分光辉，那时在非洲比较穷，为了让爸爸买电视，不得不答应他好好学习，结果一不留神成美国总统了，如今坐在白宫的我，再也找不到偷偷看奥特曼的感觉了~',
                    cmtDate: '2011/04/12',
                    like: '63'
                },
                {
                    cmtId: 3,
                    cmtName: '尼古拉.大卫科波菲尔',
                    cavatar: '',
                    title: '#那些年的抗日英雄#',
                    cmtContext: '必须是老版的《亮剑》莫属，还记得李云龙救他媳妇时，对着城头大喊，二营长，你他娘的意大利炮呢，然后，山本就去西天报道了。。。',
                    cmtDate: '2011/04/12',
                    like: '63'
                }
            ]
        }
    ];
    return TestApi;
}());
exports.TestApi = TestApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3RBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUFBO0lBMEtBLENBQUM7SUEzQ2Usa0JBQVUsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVhLGdCQUFRLEdBQXRCLFVBQXVCLEVBQVU7UUFFL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBSTVDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFFYSxrQkFBVSxHQUF4QixVQUF5QixHQUFXO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2RCxJQUFHLEdBQUcsSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUM7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRjtJQUVILENBQUM7SUFFYSxrQkFBVSxHQUF4QixVQUF5QixJQUFXO1FBQ2xDLElBQUksU0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFJekIsS0FBSyxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUEsQ0FBQyxDQUFBLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQztZQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBSTlCLE9BQU8sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUF4S2EsZUFBTyxHQUFHO1FBQ3RCO1lBQ0UsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsbURBQW1EO1lBQzVELE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxLQUFLLEVBQUUsWUFBWTtvQkFDbkIsVUFBVSxFQUFFLGdFQUFnRTtvQkFDNUUsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxJQUFJO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBRSxFQUFFO29CQUNYLEtBQUssRUFBRSxZQUFZO29CQUNuQixVQUFVLEVBQUUsMERBQTBEO29CQUN0RSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFVBQVUsRUFBRSwyREFBMkQ7b0JBQ3ZFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLHFEQUFxRDtZQUM5RCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLFVBQVUsRUFBRSw0TEFBNEw7b0JBQ3hNLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsRUFBRTtvQkFDWCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsVUFBVSxFQUFFLHlQQUF5UDtvQkFDclEsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBRSxFQUFFO29CQUNYLEtBQUssRUFBRSxTQUFTO29CQUNoQixVQUFVLEVBQUUseUlBQXlJO29CQUNySixPQUFPLEVBQUUsV0FBVztvQkFDcEIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLFVBQVUsRUFBRSx1REFBdUQ7b0JBQ25FLE9BQU8sRUFBRSxXQUFXO29CQUNwQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLDhCQUE4QjtZQUN2QyxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLEdBQUc7b0JBQ1osT0FBTyxFQUFFLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFVBQVUsRUFBRSxtR0FBbUc7b0JBQy9HLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFVBQVUsRUFBRSwyR0FBMkc7b0JBQ3ZILE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFVBQVUsRUFBRSwrREFBK0Q7b0JBQzNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBNkNKLGNBQUM7Q0FBQSxBQTFLRCxJQTBLQztBQTFLWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKua1i+ivleeUqOeahEFQaSAqL1xyXG5leHBvcnQgY2xhc3MgVGVzdEFwaSB7XHJcbiAgcHVibGljIHN0YXRpYyB0b3BMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICB0SWQ6IDEsXHJcbiAgICAgIHROYW1lOiAn6JGb5bmyJyxcclxuICAgICAgdGF2YXRhcjogJycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8xLzMwJyxcclxuICAgICAgdGl0bGU6ICcj5Yac6I2v5LiK5pyA54uX55qE6Iux6ZuEIycsXHJcbiAgICAgIHRMaWtlOiA2MyxcclxuICAgICAgY29udGV4dDogJ+eOi+iAheWGnOiNr+W3sue7j+mZquS8tOaIkeS7rOWbm+W5tOS6hu+8jOS/l+ivneivtOS4gOWFpeWdkeadpea3seS8vOa1t++8jOS7juatpOWls+WPi+aYr+i3r+S6uu+8jOavkuWPi+S7rOinieW+l+WGnOiNr+mHjOmdouWTquS4quiLsembhOacgOeLl++8gScsXHJcbiAgICAgIGNtdExpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMSxcclxuICAgICAgICAgIGNtdE5hbWU6ICfmuLjmmI7mmJ8nLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPlhpzoja/kuIrmnIDni5fnmoToi7Hpm4QjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfooajnpLrku47msqHmnInnjqnov4fojaPogIDvvIzkuI3nn6XmgI7kuYjlm57kuovvvIzkuIDkuIflpJrkubDnmoToi7nmnpzmnLrnq5/nhLbov57lhpzoja/pg73luKbkuI3liqjvvIznnIvnnYDku5bku6znmoTlronljZPogIHlubTmnLrpg73og73njqnvvIznnJ/lv4Pop4nlvpfmlbTkuKrkuoblgYfmiYvmnLouLi4nLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTkvMDMvMjAnLFxyXG4gICAgICAgICAgbGlrZTogJzk4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDIsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5a2Z6L6+JyxcclxuICAgICAgICAgIGNhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgdGl0bGU6ICcj5Yac6I2v5LiK5pyA54uX55qE6Iux6ZuEIycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5Yac6I2v5piv5LuA5LmI77yf5oiR5Lmf5rKh546p6L+H5Yac6I2v77yM5oiR6KeJ5b6X5a2m5Lmg5pyA5b+r5LmQ77yM5LiN5LuF6IO95a2m5Yiw5Lic6KW/77yM5pu06IO95Liw5a+M6Ieq5bex55qE5YaF5ra177yM6L+Z5Liq5bm05aS05aW95a2m55qE5a2p5a2Q5pyJ6IKJ5ZCD44CC44CC44CCJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDExLzA0LzEyJyxcclxuICAgICAgICAgIGxpa2U6ICcxMDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMyxcclxuICAgICAgICAgIGNtdE5hbWU6ICfmnY7ms70nLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPlhpzoja/kuIrmnIDni5fnmoToi7Hpm4QjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmnIDni5fnmoToi7Hpm4TvvJ/pgqPogq/lrprmmK/lvKDoia/liqDkuJznmofkuobvvIzmjqfliLDmrbvkvaDor7Tmgbblv4PkuI3mgbblv4PvvIzmm77nu4/nnIvov4flpKfnpZ7nmoTmnY7nmb3ov5vlhaXmjqfliLblhajvvIzkuIDnp5Llj5jph5HluIHvvIzmiJHnmoTlpKnvvIzlvojll6jllYrvvIEnLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMjIvMTIvMycsXHJcbiAgICAgICAgICBsaWtlOiAnOTYnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0SWQ6IDIsXHJcbiAgICAgIHROYW1lOiAn5qGC5ZOlJyxcclxuICAgICAgdGF2YXRhcjogJycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8yLzAxJyxcclxuICAgICAgdGl0bGU6ICcj5Lqs6YO95qix6Iqx6IqCIycsXHJcbiAgICAgIHRMaWtlOiA2MyxcclxuICAgICAgY29udGV4dDogJ+S4gOW5tOS4gOW6puS4nOS6rOWPiOi/juadpeS6huaoseiKseiKgu+8jOS9nOS4uuaXpeacrOeyvuelnueahOixoeW+ge+8jOS4nOS6rOeahOaoseiKseaXoOeWkeaYr+acgOe+juS4veacgOWKqOS6uueahO+8jOWwj+S8meS8tOS7rO+8jOS9oOS7rOaAjuS5iOeci++8nycsXHJcbiAgICAgIGNtdExpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMSxcclxuICAgICAgICAgIGNtdE5hbWU6ICfmuLjmmI7mmJ8nLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPkuqzpg73mqLHoirHoioIjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmqLHoirHkuIDnp43osaHlvoHnvo7lpb3niLHmg4XnmoTnvo7kuL3kuYvoirHvvIzlkIzml7bkuZ/mmK/ooqvnlKjkuo7mmKXlpKnnmoTosaHlvoHkuYvoirHvvIzoirHlvIDml7boibLlvanlkYjnjrDnsonnuqLoibLorqnkurrniLHkuI3ph4rmiYvjgILml7bkuIvmraPlvI/mrabmsYnlpKflrabmqLHoirHnmoTmnIDkvbPop4LotY/ml7bmnJ/jgILoirHnuYHoibPkuL3vvIzmu6HmoJHng4LmvKvvvIzlpoLkupHkvLzpnJ7vvIzmnoHkuLrlo67op4LjgILmqLHoirHpopzoibLmnInnuqLjgIHnsonnuqLjgIHmnLHnuqLjgIHoibPnuqLjgIHnmb3jgIHnsonnmb3nrYnpopzoibLvvIzpn6nlm73mqLHlpJrnmb3vvIzml6XmnKzmqLHlpJroibLvvIzkuK3lm73mqLHlpJrnsonjgILluLjop4HnmoTmqLHoirHmnIkxN+enjeW3puWPs++8jOWmguakv+Wvkuaose+8jOi/juaYpeaose+8jOays+a0peaose+8jOmjnuWvkuaoseetieetieOAguS4i+mdouiKseiNieS5kOWSjOS9oOWIhuS6q+aoseiKseiKseivreihqOi+vueahOWvk+aEj+WSjOaoseiKseeahOS8oOivtOaVheS6i+OAgicsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxOS8wMy8yMCcsXHJcbiAgICAgICAgICBsaWtlOiAnOTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMixcclxuICAgICAgICAgIGNtdE5hbWU6ICflrZnovr4nLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPkuqzpg73mqLHoirHoioIjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmqLHoirHoirHor63vvJrnlJ/lkb3ooaXlhYXlsbHmqLHnmoTor53or6066Iqx6K+t5piv44CM5ZCR5L2g5b6u56yR44CN44CB44CM57K+56We576O44CN6KW/5rSL5qix6Iqx55qE6Iqx6K+t5piv44CM5ZaE6Imv55qE5pWZ6IKy44CN5qix6Iqx54Ot54OI44CB57qv5rSB44CB6auY5bCa77yM5Lil5Yas6L+H5ZCO5piv5a6D5pyA5YWI5oqK5pil5aSp55qE5rCU5oGv5bim57uZ5pel5pys5Lq65rCR77yM5q+P5bm0M+aciDE15pel6IezNOaciDE15pel5Li65pel5pys55qE4oCc5qix6Iqx6IqC4oCd44CC6Iqx5byA5pe26IqC77yM5Lq65Lus5pC66YWS5bim6IK05Zyo5qix6Iqx5qCR5LiL5bit5Zyw6ICM5Z2Q77yM6L656LWP5qix44CB6L6555WF6aWu77yM55yf5piv5Lq655Sf5LiA5aSn5LmQ6Laj44CC4oCc5qyy6Zeu5aSn5ZKM6a2C77yM5pyd6Ziz5bqV5LiL55yL5bGx5qix4oCd44CC5pel5pys5Lq66K6k5Li65Lq655Sf55+t5pqC77yM5rS7552A5bCx6KaB5YOP5qix6Iqx5LiA5qC354G/54OC77yM5Y2z5L2/5q2777yM5Lmf6K+l5p6c5pat56a75Y6744CC5qix6Iqx5YeL6JC95pe277yM5LiN5rGh5LiN5p+T77yM5b6I5bmy6ISG77yM6KKr5bCK5Li65pel5pys57K+56We55qE6LGh5b6B44CC5pel5pys5Lq65LiN5L2G6LWP5qix77yM6L+Y5ZCD5qix77yM5YW25qix6Iqx6Zuq57OV5Yir5pyJ5ruL5ZGz44CC5qix6Iqx55qE6Iqx6K+t77yM5ou/6LWw5LiN5a6i5rCUficsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxMS8wNC8xMicsXHJcbiAgICAgICAgICBsaWtlOiAnMTA1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDMsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5p2O5rO9JyxcclxuICAgICAgICAgIGNhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgdGl0bGU6ICcj5Lqs6YO95qix6Iqx6IqCIycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5a6J55Cq5ouJ5piv5omL5ri444CK546L6ICF6I2j6ICA44CL5Lit55qE6Iux6ZuE44CC5pu+57uP55qE5a6J55Cq5ouJ5L2c5Li65LiA5ZCN5oul5pyJ5Y+s5ZSk5Y2V5L2N6IO95Yqb55qE6Iux6ZuE77yM5rex5Y+X6K645aSa546p5a6255qE5Zac54ix44CC6ICM5pS554mI5ZCO55qE5a6J55Cq5ouJ77yM5oqA6IO95YWo5paw5pu05o2i77yM6Jm954S25rKh5pyJ5LqG5aSn54aK5Li65Ly077yM5L2G5aW55aSa5LqG5LiA5pys5aSn5Lmm44CC5YW25aSn6IyD5Zu055qE5pS75Ye744CB56iz5a6a55qE55yp5pmV5ZKM54G15rS75YWN5o6n55qE5aSn5oub77yM6K6p6L+Z5L2N6a2U5rOV5bCR5aWz5pu05YW35pyJ5p2A5Lyk5Yqb44CC6aKdfueejuivhOiuuumCo+S5iOWkmu+8jOadpemUmemikemBk+S6hn4nLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMjIvMTIvMycsXHJcbiAgICAgICAgICBsaWtlOiAnNTYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogNCxcclxuICAgICAgICAgIGNtdE5hbWU6ICfokZvlubInLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPkuqzpg73mqLHoirHoioIjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmqLHoirHkuI3mk4Xkuo7op6Pph4rlkozkv67ppbDvvIzkuI3mk4Xkuo7ooajovr7lvoDlvoDmmK/mnIDkvKDmg4XnmoTooajovr7vvIzmqLHoirHku6PooajnnYDlkKvok4TnmoTniLHmg4XvvIznnIvmqLHoirHvvIzku7/kvZvlsLHog73nnIvop4Hmlq3moaXmt7HlpITnmoTlpbknLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMjIvMTIvMycsXHJcbiAgICAgICAgICBsaWtlOiAnNTYnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0SWQ6IDMsXHJcbiAgICAgIHROYW1lOiAn6L+q6L+m5aWl54m55pu8JyxcclxuICAgICAgdGF2YXRhcjogJycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8xMi8xMScsXHJcbiAgICAgIHRpdGxlOiAnI+mCo+S6m+W5tOeahOaKl+aXpeiLsembhCMnLFxyXG4gICAgICB0TGlrZTogNDMsXHJcbiAgICAgIGNvbnRleHQ6ICfovaznnLzpl7TprLzlrZDlj4jmnaXkuobvvIzlnKjprLzlrZDnmoTph4fmkZjlraPoioLvvIzkvaDmnIDnnIvlpb3lk6rkvY3mipfml6Xoi7Hpm4QnLFxyXG4gICAgICBjbXRMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDEsXHJcbiAgICAgICAgICBjbXROYW1lOiAn6aOOJyxcclxuICAgICAgICAgIGNhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgdGl0bGU6ICcj6YKj5Lqb5bm055qE5oqX5pel6Iux6ZuEIycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5oqX5pel6Iux6ZuE5b2T54S26aaW5o6o5Y+v54ix55qE5bCP5oCq5YW95Lus5ZWK77yM6L+Z5Lqb6JCM6JCM5ZOS5bCP5oCq5YW95YaS552A55Sf5ZG955qE5Y2x6Zmp77yM5p2l5Yiw5Zyw55CD55qE5pel5pys5Zyw5Yy66L+b6KGM6L+d56ug5bu6562R55qE5ouG6Zmk77yM5Lul5Y+K5oOp5rK75LiA5Lqb5Z2P5Lq677yM6L+Y5ZKM5aWl54m55pu85pyA5paX5LqJ77yM6Jm954S26YO95piv6KKr5raI54Gt77yM5L2G5piv5bCP5oCq5YW95Lus5LuO5p2l5LiN5pu+6YCA57yp77yM5L2g6K+05pa55LiN5pa577yfJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDE5LzAzLzIwJyxcclxuICAgICAgICAgIGxpa2U6ICczMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAyLFxyXG4gICAgICAgICAgY210TmFtZTogJ+W3tOaLieWFiy7lpaXlt7TpqawnLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPpgqPkupvlubTnmoTmipfml6Xoi7Hpm4QjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfomb3nhLbmiJHotLXkuLrmgLvnu5/vvIzkvYbmmK/lsI/ml7blgJnkuZ/nnIvov4fmipfml6XnpZ7liaflpaXnibnmm7zvvIzlhbbkuK3nmoTmgKrlhb3ku6znmoTkuovov7nljYHliIblhYnovonvvIzpgqPml7blnKjpnZ7mtLLmr5TovoPnqbfvvIzkuLrkuoborqnniLjniLjkubDnlLXop4bvvIzkuI3lvpfkuI3nrZTlupTku5blpb3lpb3lrabkuaDvvIznu5PmnpzkuIDkuI3nlZnnpZ7miJDnvo7lm73mgLvnu5/kuobvvIzlpoLku4rlnZDlnKjnmb3lrqvnmoTmiJHvvIzlho3kuZ/mib7kuI3liLDlgbflgbfnnIvlpaXnibnmm7znmoTmhJ/op4nkuoZ+JyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDExLzA0LzEyJyxcclxuICAgICAgICAgIGxpa2U6ICc2MydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAzLFxyXG4gICAgICAgICAgY210TmFtZTogJ+WwvOWPpOaLiS7lpKfljavnp5Hms6Loj7LlsJQnLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICB0aXRsZTogJyPpgqPkupvlubTnmoTmipfml6Xoi7Hpm4QjJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICflv4XpobvmmK/ogIHniYjnmoTjgIrkuq7liZHjgIvojqvlsZ7vvIzov5jorrDlvpfmnY7kupHpvpnmlZHku5blqrPlpofml7bvvIzlr7nnnYDln47lpLTlpKfllorvvIzkuozokKXplb/vvIzkvaDku5blqJjnmoTmhI/lpKfliKnngq7lkaLvvIznhLblkI7vvIzlsbHmnKzlsLHljrvopb/lpKnmiqXpgZPkuobjgILjgILjgIInLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTEvMDQvMTInLFxyXG4gICAgICAgICAgbGlrZTogJzYzJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF07XHJcbiAgLyrov5Tlm57or53popjliJfooaggKi9cclxuICBwdWJsaWMgc3RhdGljIGdldFRvcExpc3QoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnRvcExpc3Q7XHJcbiAgfVxyXG4gIC8qIOi/lOWbnuivnemimCovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRUb3BpYyhpZDogTnVtYmVyKTogYW55IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGDkvKDlhaXmlrnms5XnmoRpZO+8miR7aWR9YCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgdElkPWArdGhpcy50b3BMaXN0W2ldLnRJZCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGB0b3BMaXN0OmArdGhpcy50b3BMaXN0W2ldKTtcclxuICAgICAgLyppZO+8mk51bWJlciAqL1xyXG4gICAgICBpZiAoaWQgPT0gdGhpcy50b3BMaXN0W2ldLnRJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExpc3RbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyrov5Tlm57or53popjlhbPogZTnmoTor4TorrogKi9cclxuICBwdWJsaWMgc3RhdGljIGdldENvbW1lbnQoY0lkOiBOdW1iZXIpOiBhbnkge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRvcExpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvcExpc3Rbal0uY210TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGNJZD09dGhpcy50b3BMaXN0W2pdLmNtdExpc3RbaV0uY210SWQpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudG9wTGlzdFtqXS5jbXRMaXN0W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLyrojrflj5blj4LkuI7nmoTor53popjlj5Hooajlkozor4TorrogKi9cclxuICBwdWJsaWMgc3RhdGljIGdldE15UGFydGkobmFtZTpTdHJpbmcpOmFueXtcclxuICAgIGxldCBwYXJ0aUxpc3Q6QXJyYXk8T2JqZWN0Pj1bXTtcclxuICAgIHRoaXMudG9wTGlzdC5mb3JFYWNoKCh0b3BpYyk9PntcclxuICAgICAgLy8gaWYodG9waWMudE5hbWU9PW5hbWUpe1xyXG4gICAgICAvLyAgIHBhcnRpTGlzdC5wdXNoKHRvcGljKTtcclxuICAgICAgLy8gfVxyXG4gICAgICB0b3BpYy50TmFtZT09bmFtZT9wYXJ0aUxpc3QucHVzaCh0b3BpYyk6Jyc7XHJcbiAgICAgIHRvcGljLmNtdExpc3QuZm9yRWFjaCgoY29tbWVudCk9PntcclxuICAgICAgICAvLyBpZihjb21tZW50LmNtdE5hbWU9PW5hbWUpe1xyXG4gICAgICAgIC8vICAgcGFydGlMaXN0LnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBjb21tZW50LmNtdE5hbWU9PW5hbWU/cGFydGlMaXN0LnB1c2goY29tbWVudCk6Jyc7XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXJ0aUxpc3Q7XHJcbiAgfVxyXG59Il19