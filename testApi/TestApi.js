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
    TestApi.topList = [
        {
            tId: 1,
            tName: '葛干',
            tavatar: '',
            tDate: '2019/1/30',
            title: '整蛊大作战',
            tLike: 63,
            context: '又到了一年一度的愚人节，聪明的捣蛋鬼蠢蠢欲动，笨蛋只能被捉弄，就问你方不方？',
            cmtList: [
                {
                    cmtId: 1,
                    cmtName: '游明星',
                    cavatar: '',
                    cmtContext: '我是直男我害怕，嘤嘤嘤嘤嘤嘤，恩恩，想来想去还是怕',
                    cmtDate: '2019/03/20',
                    like: '98'
                },
                {
                    cmtId: 2,
                    cmtName: '孙达',
                    cavatar: '',
                    cmtContext: '我今天感冒了，鼻子有点肿，被天气耍了，我比较害怕...',
                    cmtDate: '2011/04/12',
                    like: '105'
                },
                {
                    cmtId: 3,
                    cmtName: '李泽',
                    cavatar: '',
                    cmtContext: '听说游明星是直男，孙达感冒了，我觉得作为一个易耍体质，我比较害怕',
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
            title: '京都樱花节',
            tLike: 63,
            context: '京都樱花节，如诗如画，令人美不胜收，在这个花的海洋，是否有伊人在旁',
            cmtList: [
                {
                    cmtId: 1,
                    cmtName: '游明星',
                    cavatar: '',
                    cmtContext: '我没看见伊人在旁，李泽在旁倒是真的。。。。。。',
                    cmtDate: '2019/03/20',
                    like: '98'
                },
                {
                    cmtId: 2,
                    cmtName: '孙达',
                    cavatar: '',
                    cmtContext: '樱花？我今天发现米饭里面有樱花，伊人是不是被我吃了。。。',
                    cmtDate: '2011/04/12',
                    like: '105'
                },
                {
                    cmtId: 3,
                    cmtName: '李泽',
                    cavatar: '',
                    cmtContext: '樱花有白菜花一样好吃吗？',
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
            title: '那些年的抗日英雄',
            tLike: 43,
            context: '以前的抗日英雄，花式的可爱怪兽，哪个最让人难忘!',
            cmtList: [
                {
                    cmtId: 1,
                    cmtName: '风',
                    cavatar: '',
                    cmtContext: '马戈马星人，曾经让雷欧和别的小伙伴打的死去活来',
                    cmtDate: '2019/03/20',
                    like: '32'
                },
                {
                    cmtId: 2,
                    cmtName: '巴拉克.奥马马',
                    cavatar: '',
                    cmtContext: '虽然我贵为总统，但是小时候也看过抗日神剧奥特曼，其中的怪兽们的事迹十分光辉',
                    cmtDate: '2011/04/12',
                    like: '63'
                }
            ]
        }
    ];
    return TestApi;
}());
exports.TestApi = TestApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3RBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUFBO0lBK0hBLENBQUM7SUExQmUsa0JBQVUsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVhLGdCQUFRLEdBQXRCLFVBQXVCLEVBQVU7UUFFL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBSTVDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFFYSxrQkFBVSxHQUF4QixVQUF5QixHQUFXO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2RCxJQUFHLEdBQUcsSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUM7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRjtJQUVILENBQUM7SUE3SGEsZUFBTyxHQUFHO1FBQ3RCO1lBQ0UsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSx3Q0FBd0M7WUFDakQsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxFQUFFO29CQUNYLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsNkJBQTZCO29CQUN6QyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsVUFBVSxFQUFFLGtDQUFrQztvQkFDOUMsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLElBQUksRUFBRSxJQUFJO2lCQUNYO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxtQ0FBbUM7WUFDNUMsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxFQUFFO29CQUNYLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsOEJBQThCO29CQUMxQyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsVUFBVSxFQUFFLGNBQWM7b0JBQzFCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLEdBQUc7b0JBQ1osT0FBTyxFQUFFLEVBQUU7b0JBQ1gsVUFBVSxFQUFFLHlCQUF5QjtvQkFDckMsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxJQUFJO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsdUNBQXVDO29CQUNuRCxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQTRCSixjQUFDO0NBQUEsQUEvSEQsSUErSEM7QUEvSFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKirmtYvor5XnlKjnmoRBUGkgKi9cclxuZXhwb3J0IGNsYXNzIFRlc3RBcGkge1xyXG4gIHB1YmxpYyBzdGF0aWMgdG9wTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgdElkOiAxLFxyXG4gICAgICB0TmFtZTogJ+iRm+W5sicsXHJcbiAgICAgIHRhdmF0YXI6ICcnLFxyXG4gICAgICB0RGF0ZTogJzIwMTkvMS8zMCcsXHJcbiAgICAgIHRpdGxlOiAn5pW06JuK5aSn5L2c5oiYJyxcclxuICAgICAgdExpa2U6IDYzLFxyXG4gICAgICBjb250ZXh0OiAn5Y+I5Yiw5LqG5LiA5bm05LiA5bqm55qE5oSa5Lq66IqC77yM6IGq5piO55qE5o2j6JuL6ay86KCi6KCi5qyy5Yqo77yM56yo6JuL5Y+q6IO96KKr5o2J5byE77yM5bCx6Zeu5L2g5pa55LiN5pa577yfJyxcclxuICAgICAgY210TGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAxLFxyXG4gICAgICAgICAgY210TmFtZTogJ+a4uOaYjuaYnycsXHJcbiAgICAgICAgICBjYXZhdGFyOiAnJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmiJHmmK/nm7TnlLfmiJHlrrPmgJXvvIzlmKTlmKTlmKTlmKTlmKTlmKTvvIzmganmganvvIzmg7PmnaXmg7Pljrvov5jmmK/mgJUnLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTkvMDMvMjAnLFxyXG4gICAgICAgICAgbGlrZTogJzk4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDIsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5a2Z6L6+JyxcclxuICAgICAgICAgIGNhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+aIkeS7iuWkqeaEn+WGkuS6hu+8jOm8u+WtkOacieeCueiCv++8jOiiq+WkqeawlOiAjeS6hu+8jOaIkeavlOi+g+Wus+aAlS4uLicsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxMS8wNC8xMicsXHJcbiAgICAgICAgICBsaWtlOiAnMTA1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDMsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5p2O5rO9JyxcclxuICAgICAgICAgIGNhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+WQrOivtOa4uOaYjuaYn+aYr+ebtOeUt++8jOWtmei+vuaEn+WGkuS6hu+8jOaIkeinieW+l+S9nOS4uuS4gOS4quaYk+iAjeS9k+i0qO+8jOaIkeavlOi+g+Wus+aAlScsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAyMi8xMi8zJyxcclxuICAgICAgICAgIGxpa2U6ICc5NidcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRJZDogMixcclxuICAgICAgdE5hbWU6ICfmoYLlk6UnLFxyXG4gICAgICB0YXZhdGFyOiAnJyxcclxuICAgICAgdERhdGU6ICcyMDE5LzIvMDEnLFxyXG4gICAgICB0aXRsZTogJ+S6rOmDveaoseiKseiKgicsXHJcbiAgICAgIHRMaWtlOiA2MyxcclxuICAgICAgY29udGV4dDogJ+S6rOmDveaoseiKseiKgu+8jOWmguivl+WmgueUu++8jOS7pOS6uue+juS4jeiDnOaUtu+8jOWcqOi/meS4quiKseeahOa1t+a0i++8jOaYr+WQpuacieS8iuS6uuWcqOaXgScsXHJcbiAgICAgIGNtdExpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMSxcclxuICAgICAgICAgIGNtdE5hbWU6ICfmuLjmmI7mmJ8nLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5oiR5rKh55yL6KeB5LyK5Lq65Zyo5peB77yM5p2O5rO95Zyo5peB5YCS5piv55yf55qE44CC44CC44CC44CC44CC44CCJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDE5LzAzLzIwJyxcclxuICAgICAgICAgIGxpa2U6ICc5OCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAyLFxyXG4gICAgICAgICAgY210TmFtZTogJ+Wtmei+vicsXHJcbiAgICAgICAgICBjYXZhdGFyOiAnJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmqLHoirHvvJ/miJHku4rlpKnlj5HnjrDnsbPppa3ph4zpnaLmnInmqLHoirHvvIzkvIrkurrmmK/kuI3mmK/ooqvmiJHlkIPkuobjgILjgILjgIInLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTEvMDQvMTInLFxyXG4gICAgICAgICAgbGlrZTogJzEwNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAzLFxyXG4gICAgICAgICAgY210TmFtZTogJ+adjuazvScsXHJcbiAgICAgICAgICBjYXZhdGFyOiAnJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmqLHoirHmnInnmb3oj5zoirHkuIDmoLflpb3lkIPlkJfvvJ8nLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMjIvMTIvMycsXHJcbiAgICAgICAgICBsaWtlOiAnNTYnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0SWQ6IDMsXHJcbiAgICAgIHROYW1lOiAn6L+q6L+m5aWl54m55pu8JyxcclxuICAgICAgdGF2YXRhcjogJycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8xMi8xMScsXHJcbiAgICAgIHRpdGxlOiAn6YKj5Lqb5bm055qE5oqX5pel6Iux6ZuEJyxcclxuICAgICAgdExpa2U6IDQzLFxyXG4gICAgICBjb250ZXh0OiAn5Lul5YmN55qE5oqX5pel6Iux6ZuE77yM6Iqx5byP55qE5Y+v54ix5oCq5YW977yM5ZOq5Liq5pyA6K6p5Lq66Zq+5b+YIScsXHJcbiAgICAgIGNtdExpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMSxcclxuICAgICAgICAgIGNtdE5hbWU6ICfpo44nLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn6ams5oiI6ams5pif5Lq677yM5pu+57uP6K6p6Zu35qyn5ZKM5Yir55qE5bCP5LyZ5Ly05omT55qE5q275Y675rS75p2lJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDE5LzAzLzIwJyxcclxuICAgICAgICAgIGxpa2U6ICczMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAyLFxyXG4gICAgICAgICAgY210TmFtZTogJ+W3tOaLieWFiy7lpaXpqazpqawnLFxyXG4gICAgICAgICAgY2F2YXRhcjogJycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn6Jm954S25oiR6LS15Li65oC757uf77yM5L2G5piv5bCP5pe25YCZ5Lmf55yL6L+H5oqX5pel56We5Ymn5aWl54m55pu877yM5YW25Lit55qE5oCq5YW95Lus55qE5LqL6L+55Y2B5YiG5YWJ6L6JJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDExLzA0LzEyJyxcclxuICAgICAgICAgIGxpa2U6ICc2MydcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdO1xyXG4gIC8q6L+U5Zue6K+d6aKY5YiX6KGoICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRUb3BMaXN0KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3BMaXN0O1xyXG4gIH1cclxuICAvKiDov5Tlm57or53popgqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VG9waWMoaWQ6IE51bWJlcik6IGFueSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhg5Lyg5YWl5pa55rOV55qEaWTvvJoke2lkfWApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvcExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYHRJZD1gK3RoaXMudG9wTGlzdFtpXS50SWQpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgdG9wTGlzdDpgK3RoaXMudG9wTGlzdFtpXSk7XHJcbiAgICAgIC8qaWTvvJpOdW1iZXIgKi9cclxuICAgICAgaWYgKGlkID09IHRoaXMudG9wTGlzdFtpXS50SWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3BMaXN0W2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8q6L+U5Zue6K+d6aKY5YWz6IGU55qE6K+E6K66ICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRDb21tZW50KGNJZDogTnVtYmVyKTogYW55IHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50b3BMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3BMaXN0W2pdLmNtdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihjSWQ9PXRoaXMudG9wTGlzdFtqXS5jbXRMaXN0W2ldLmNtdElkKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnRvcExpc3Rbal0uY210TGlzdFtpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59Il19