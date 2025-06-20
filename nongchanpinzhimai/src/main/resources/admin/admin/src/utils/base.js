const base = {
    get() {
        return {
            url : "http://localhost:8080/nongchanpinzhimai/",
            name: "nongchanpinzhimai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nongchanpinzhimai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农产品直卖平台"
        } 
    }
}
export default base
