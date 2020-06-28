var app = new Vue({
    el: '#app',
    data: {
        appid: '',
        appsecret: '',
        specials: [],
        searchResult: [
            { id: '1', name: '长沙市周南中学', added: '1' },
            { id: '2', name: '杭州市周南中学', added: '0' },
            { id: '3', name: '温州市周南有限公司', added: '0' },
        ],
        // 已选商户
        selectShops: [
            { id: '1', name: '长沙市周南中学' },
            { id: '2', name: '长沙市周南中学' },
            { id: '3', name: '长沙市周南中学' },
            { id: '4', name: '长沙市周南中学' },
            { id: '5', name: '长沙市周南中学' },
        ],
    },
    methods: {
        toCopyText: function (copyText) {
            console.log(copyText)
        },
        toAddShop: function (shopId) {
            console.log(shopId)
        },
        toDeleteShop: function (shopId) {
            console.log(shopId)
        },
    },
    created: function () {
        $('#app').addClass('show')
    },
})

var form = layui.form;

//监听提交
form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
});
