"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestApi = (function () {
    function TestApi() {
    }
    TestApi.getTopList = function () {
        return this.topList;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3RBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUFBO0lBd0dBLENBQUM7SUFIZSxrQkFBVSxHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBdEdhLGVBQU8sR0FBRztRQUN0QjtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUMsRUFBRTtZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsd0NBQXdDO1lBQ2pELE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUMsRUFBRTtvQkFDVixVQUFVLEVBQUUsMkJBQTJCO29CQUN2QyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLDZCQUE2QjtvQkFDekMsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBQyxFQUFFO29CQUNWLFVBQVUsRUFBRSxrQ0FBa0M7b0JBQzlDLE9BQU8sRUFBRSxXQUFXO29CQUNwQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUMsRUFBRTtZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUMsRUFBRTtvQkFDVixVQUFVLEVBQUUseUJBQXlCO29CQUNyQyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLDhCQUE4QjtvQkFDMUMsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBQyxFQUFFO29CQUNWLFVBQVUsRUFBRSxjQUFjO29CQUMxQixPQUFPLEVBQUUsV0FBVztvQkFDcEIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFDLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWTtZQUNuQixLQUFLLEVBQUUsVUFBVTtZQUNqQixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBQyxFQUFFO29CQUNWLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLHVDQUF1QztvQkFDbkQsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLElBQUksRUFBRSxJQUFJO2lCQUNYO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFLSixjQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKirmtYvor5XnlKjnmoRBUGkgKi9cclxuZXhwb3J0IGNsYXNzIFRlc3RBcGkge1xyXG4gIHB1YmxpYyBzdGF0aWMgdG9wTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgdElkOiAxLFxyXG4gICAgICB0TmFtZTogJ+iRm+W5sicsXHJcbiAgICAgIHRhdmF0YXI6JycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8xLzMwJyxcclxuICAgICAgdGl0bGU6ICfmlbTom4rlpKfkvZzmiJgnLFxyXG4gICAgICB0TGlrZTogNjMsXHJcbiAgICAgIGNvbnRleHQ6ICflj4jliLDkuobkuIDlubTkuIDluqbnmoTmhJrkurroioLvvIzogarmmI7nmoTmjaPom4vprLzooKLooKLmrLLliqjvvIznrKjom4vlj6rog73ooqvmjYnlvITvvIzlsLHpl67kvaDmlrnkuI3mlrnvvJ8nLFxyXG4gICAgICBjbXRMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDEsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5ri45piO5pifJyxcclxuICAgICAgICAgIGNhdmF0YXI6JycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5oiR5piv55u055S35oiR5a6z5oCV77yM5Zik5Zik5Zik5Zik5Zik5Zik77yM5oGp5oGp77yM5oOz5p2l5oOz5Y676L+Y5piv5oCVJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDE5LzAzLzIwJyxcclxuICAgICAgICAgIGxpa2U6ICc5OCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAyLFxyXG4gICAgICAgICAgY210TmFtZTogJ+Wtmei+vicsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+aIkeS7iuWkqeaEn+WGkuS6hu+8jOm8u+WtkOacieeCueiCv++8jOiiq+WkqeawlOiAjeS6hu+8jOaIkeavlOi+g+Wus+aAlS4uLicsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxMS8wNC8xMicsXHJcbiAgICAgICAgICBsaWtlOiAnMTA1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDMsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5p2O5rO9JyxcclxuICAgICAgICAgIGNhdmF0YXI6JycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5ZCs6K+05ri45piO5pif5piv55u055S377yM5a2Z6L6+5oSf5YaS5LqG77yM5oiR6KeJ5b6X5L2c5Li65LiA5Liq5piT6ICN5L2T6LSo77yM5oiR5q+U6L6D5a6z5oCVJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDIyLzEyLzMnLFxyXG4gICAgICAgICAgbGlrZTogJzk2J1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdElkOiAyLFxyXG4gICAgICB0TmFtZTogJ+ahguWTpScsXHJcbiAgICAgIHRhdmF0YXI6JycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8yLzAxJyxcclxuICAgICAgdGl0bGU6ICfkuqzpg73mqLHoirHoioInLFxyXG4gICAgICB0TGlrZTogNjMsXHJcbiAgICAgIGNvbnRleHQ6ICfkuqzpg73mqLHoirHoioLvvIzlpoLor5flpoLnlLvvvIzku6Tkurrnvo7kuI3og5zmlLbvvIzlnKjov5nkuKroirHnmoTmtbfmtIvvvIzmmK/lkKbmnInkvIrkurrlnKjml4EnLFxyXG4gICAgICBjbXRMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDEsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5ri45piO5pifJyxcclxuICAgICAgICAgIGNhdmF0YXI6JycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5oiR5rKh55yL6KeB5LyK5Lq65Zyo5peB77yM5p2O5rO95Zyo5peB5YCS5piv55yf55qE44CC44CC44CC44CC44CC44CCJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDE5LzAzLzIwJyxcclxuICAgICAgICAgIGxpa2U6ICc5OCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNtdElkOiAyLFxyXG4gICAgICAgICAgY210TmFtZTogJ+Wtmei+vicsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+aoseiKse+8n+aIkeS7iuWkqeWPkeeOsOexs+mlremHjOmdouacieaoseiKse+8jOS8iuS6uuaYr+S4jeaYr+iiq+aIkeWQg+S6huOAguOAguOAgicsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxMS8wNC8xMicsXHJcbiAgICAgICAgICBsaWtlOiAnMTA1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDMsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5p2O5rO9JyxcclxuICAgICAgICAgIGNhdmF0YXI6JycsXHJcbiAgICAgICAgICBjbXRDb250ZXh0OiAn5qix6Iqx5pyJ55m96I+c6Iqx5LiA5qC35aW95ZCD5ZCX77yfJyxcclxuICAgICAgICAgIGNtdERhdGU6ICcyMDIyLzEyLzMnLFxyXG4gICAgICAgICAgbGlrZTogJzU2J1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdElkOiAzLFxyXG4gICAgICB0TmFtZTogJ+i/qui/puWlpeeJueabvCcsXHJcbiAgICAgIHRhdmF0YXI6JycsXHJcbiAgICAgIHREYXRlOiAnMjAxOS8xMi8xMScsXHJcbiAgICAgIHRpdGxlOiAn6YKj5Lqb5bm055qE5oqX5pel6Iux6ZuEJyxcclxuICAgICAgdExpa2U6IDQzLFxyXG4gICAgICBjb250ZXh0OiAn5Lul5YmN55qE5oqX5pel6Iux6ZuE77yM6Iqx5byP55qE5Y+v54ix5oCq5YW977yM5ZOq5Liq5pyA6K6p5Lq66Zq+5b+YIScsXHJcbiAgICAgIGNtdExpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbXRJZDogMSxcclxuICAgICAgICAgIGNtdE5hbWU6ICfpo44nLFxyXG4gICAgICAgICAgY2F2YXRhcjonJyxcclxuICAgICAgICAgIGNtdENvbnRleHQ6ICfpqazmiIjpqazmmJ/kurrvvIzmm77nu4/orqnpm7fmrKflkozliKvnmoTlsI/kvJnkvLTmiZPnmoTmrbvljrvmtLvmnaUnLFxyXG4gICAgICAgICAgY210RGF0ZTogJzIwMTkvMDMvMjAnLFxyXG4gICAgICAgICAgbGlrZTogJzMyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY210SWQ6IDIsXHJcbiAgICAgICAgICBjbXROYW1lOiAn5be05ouJ5YWLLuWlpemprOmprCcsXHJcbiAgICAgICAgICBjYXZhdGFyOicnLFxyXG4gICAgICAgICAgY210Q29udGV4dDogJ+iZveeEtuaIkei0teS4uuaAu+e7n++8jOS9huaYr+Wwj+aXtuWAmeS5n+eci+i/h+aKl+aXpeelnuWJp+WlpeeJueabvO+8jOWFtuS4reeahOaAquWFveS7rOeahOS6i+i/ueWNgeWIhuWFiei+iScsXHJcbiAgICAgICAgICBjbXREYXRlOiAnMjAxMS8wNC8xMicsXHJcbiAgICAgICAgICBsaWtlOiAnNjMnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXTtcclxuICAvKui/lOWbnuWBh+aVsOaNriAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VG9wTGlzdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9wTGlzdDtcclxuICB9XHJcbn0iXX0=