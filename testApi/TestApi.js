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
            if (id === this.topList[i].tId) {
                return this.topList[i];
            }
        }
    };
    TestApi.getComment = function (tId, cId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3RBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUFBO0lBcUhBLENBQUM7SUFoQmUsa0JBQVUsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVhLGdCQUFRLEdBQXRCLFVBQXVCLEVBQVM7UUFDOUIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3BDLElBQUcsRUFBRSxLQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFFYSxrQkFBVSxHQUF4QixVQUF5QixHQUFVLEVBQUMsR0FBRztJQUd2QyxDQUFDO0lBbkhhLGVBQU8sR0FBRztRQUN0QjtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUMsRUFBRTtZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsd0NBQXdDO1lBQ2pELE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUMsRUFBRTtvQkFDVixVQUFVLEVBQUUsMkJBQTJCO29CQUN2QyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLDZCQUE2QjtvQkFDekMsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBQyxFQUFFO29CQUNWLFVBQVUsRUFBRSxrQ0FBa0M7b0JBQzlDLE9BQU8sRUFBRSxXQUFXO29CQUNwQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUMsRUFBRTtZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUMsRUFBRTtvQkFDVixVQUFVLEVBQUUseUJBQXlCO29CQUNyQyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLDhCQUE4QjtvQkFDMUMsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBQyxFQUFFO29CQUNWLFVBQVUsRUFBRSxjQUFjO29CQUMxQixPQUFPLEVBQUUsV0FBVztvQkFDcEIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFDLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWTtZQUNuQixLQUFLLEVBQUUsVUFBVTtZQUNqQixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBQyxFQUFFO29CQUNWLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLHVDQUF1QztvQkFDbkQsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxJQUFJO2lCQUNYO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFrQkosY0FBQztDQUFBLEFBckhELElBcUhDO0FBckhZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoq5rWL6K+V55So55qEQVBpICovXHJcbmV4cG9ydCBjbGFzcyBUZXN0QXBpIHtcclxuICBwdWJsaWMgc3RhdGljIHRvcExpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRJZDogMSxcclxuICAgICAgdE5hbWU6ICfokZvlubInLFxyXG4gICAgICB0YXZhdGFyOicnLFxyXG4gICAgICB0RGF0ZTogJzIwMTkvMS8zMCcsXHJcbiAgICAgIHRpdGxlOiAn5pW06JuK5aSn5L2c5oiYJyxcclxuICAgICAgdExpa2U6IDYzLFxyXG4gICAgICBjb250ZXh0OiAn5Y+I5Yiw5LqG5LiA5bm05LiA5bqm55qE5oSa5Lq66IqC77yM6IGq5piO55qE5o2j6JuL6ay86KCi6KCi5qyy5Yqo77yM56yo6JuL5Y+q6IO96KKr5o2J5byE77yM5bCx6Zeu5L2g5pa55LiN5pa577yfJyxcclxuICAgICAgY210TGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAxLFxyXG4gICAgICAgICAgY210TmFtZTogJ+a4uOaYjuaYnycsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+aIkeaYr+ebtOeUt+aIkeWus+aAle+8jOWYpOWYpOWYpOWYpOWYpOWYpO+8jOaBqeaBqe+8jOaDs+adpeaDs+WOu+i/mOaYr+aAlScsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxOS8wMy8yMCcsXHJcbiAgICAgICAgICBsaWtlOiAnOTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMixcclxuICAgICAgICAgIGNtdE5hbWU6ICflrZnovr4nLFxyXG4gICAgICAgICAgY2F2YXRhcjonJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmiJHku4rlpKnmhJ/lhpLkuobvvIzpvLvlrZDmnInngrnogr/vvIzooqvlpKnmsJTogI3kuobvvIzmiJHmr5TovoPlrrPmgJUuLi4nLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTEvMDQvMTInLFxyXG4gICAgICAgICAgbGlrZTogJzEwNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAzLFxyXG4gICAgICAgICAgY210TmFtZTogJ+adjuazvScsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+WQrOivtOa4uOaYjuaYn+aYr+ebtOeUt++8jOWtmei+vuaEn+WGkuS6hu+8jOaIkeinieW+l+S9nOS4uuS4gOS4quaYk+iAjeS9k+i0qO+8jOaIkeavlOi+g+Wus+aAlScsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAyMi8xMi8zJyxcclxuICAgICAgICAgIGxpa2U6ICc5NidcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRJZDogMixcclxuICAgICAgdE5hbWU6ICfmoYLlk6UnLFxyXG4gICAgICB0YXZhdGFyOicnLFxyXG4gICAgICB0RGF0ZTogJzIwMTkvMi8wMScsXHJcbiAgICAgIHRpdGxlOiAn5Lqs6YO95qix6Iqx6IqCJyxcclxuICAgICAgdExpa2U6IDYzLFxyXG4gICAgICBjb250ZXh0OiAn5Lqs6YO95qix6Iqx6IqC77yM5aaC6K+X5aaC55S777yM5Luk5Lq6576O5LiN6IOc5pS277yM5Zyo6L+Z5Liq6Iqx55qE5rW35rSL77yM5piv5ZCm5pyJ5LyK5Lq65Zyo5peBJyxcclxuICAgICAgY210TGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAxLFxyXG4gICAgICAgICAgY210TmFtZTogJ+a4uOaYjuaYnycsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+aIkeayoeeci+ingeS8iuS6uuWcqOaXge+8jOadjuazveWcqOaXgeWAkuaYr+ecn+eahOOAguOAguOAguOAguOAguOAgicsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxOS8wMy8yMCcsXHJcbiAgICAgICAgICBsaWtlOiAnOTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMixcclxuICAgICAgICAgIGNtdE5hbWU6ICflrZnovr4nLFxyXG4gICAgICAgICAgY2F2YXRhcjonJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfmqLHoirHvvJ/miJHku4rlpKnlj5HnjrDnsbPppa3ph4zpnaLmnInmqLHoirHvvIzkvIrkurrmmK/kuI3mmK/ooqvmiJHlkIPkuobjgILjgILjgIInLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTEvMDQvMTInLFxyXG4gICAgICAgICAgbGlrZTogJzEwNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAzLFxyXG4gICAgICAgICAgY210TmFtZTogJ+adjuazvScsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+aoseiKseacieeZveiPnOiKseS4gOagt+WlveWQg+WQl++8nycsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAyMi8xMi8zJyxcclxuICAgICAgICAgIGxpa2U6ICc1NidcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRJZDogMyxcclxuICAgICAgdE5hbWU6ICfov6rov6blpaXnibnmm7wnLFxyXG4gICAgICB0YXZhdGFyOicnLFxyXG4gICAgICB0RGF0ZTogJzIwMTkvMTIvMTEnLFxyXG4gICAgICB0aXRsZTogJ+mCo+S6m+W5tOeahOaKl+aXpeiLsembhCcsXHJcbiAgICAgIHRMaWtlOiA0MyxcclxuICAgICAgY29udGV4dDogJ+S7peWJjeeahOaKl+aXpeiLsembhO+8jOiKseW8j+eahOWPr+eIseaAquWFve+8jOWTquS4quacgOiuqeS6uumavuW/mCEnLFxyXG4gICAgICBjbXRMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDEsXHJcbiAgICAgICAgICBjbXROYW1lOiAn6aOOJyxcclxuICAgICAgICAgIGNhdmF0YXI6JycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn6ams5oiI6ams5pif5Lq677yM5pu+57uP6K6p6Zu35qyn5ZKM5Yir55qE5bCP5LyZ5Ly05omT55qE5q275Y675rS75p2lJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDE5LzAzLzIwJyxcclxuICAgICAgICAgIGxpa2U6ICczMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAyLFxyXG4gICAgICAgICAgY210TmFtZTogJ+W3tOaLieWFiy7lpaXpqazpqawnLFxyXG4gICAgICAgICAgY2F2YXRhcjonJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfomb3nhLbmiJHotLXkuLrmgLvnu5/vvIzkvYbmmK/lsI/ml7blgJnkuZ/nnIvov4fmipfml6XnpZ7liaflpaXnibnmm7zvvIzlhbbkuK3nmoTmgKrlhb3ku6znmoTkuovov7nljYHliIblhYnovoknLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTEvMDQvMTInLFxyXG4gICAgICAgICAgbGlrZTogJzYzJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF07XHJcbiAgLyrov5Tlm57or53popjliJfooaggKi9cclxuICBwdWJsaWMgc3RhdGljIGdldFRvcExpc3QoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnRvcExpc3Q7XHJcbiAgfVxyXG4gIC8qIOi/lOWbnuivnemimCovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRUb3BpYyhpZDpOdW1iZXIpOmFueXtcclxuICAgIGZvcihsZXQgaT0wO2k8dGhpcy50b3BMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICBpZihpZD09PXRoaXMudG9wTGlzdFtpXS50SWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExpc3RbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyrov5Tlm57or53popjlhbPogZTnmoTor4TorrogKi9cclxuICBwdWJsaWMgc3RhdGljIGdldENvbW1lbnQodElkOk51bWJlcixjSWQpOmFueXtcclxuIFxyXG4gICAgICBcclxuICB9XHJcbn0iXX0=