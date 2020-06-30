var $app = $('#app')
var form = layui.form;

// 渲染表单
form.render() // 如果有动态通过js修改过dom结构，记得重新调用下form.render()

// 渲染表单完毕后显示页面
$app.addClass('show')

// 重置字段
$('.btnReset').click(function () {
    const $this = $(this)
    $this.parent().find('input').val('')
})

// 开启文本复制功能
new ClipboardJS('.btnCopy')

//监听表单提交
form.on('submit(formDemo)', function(data){
    // data.field里是表单里填写的数据
    layer.msg(JSON.stringify(data.field));
    console.log(data)

    // 在这里发送请求
    $.ajax({
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        url: '/apis/text-api.do',
        dataType: 'json',
        processData: true,
        timeout: 20000,
        data: {}, // 换成实际需要的参数
        success: function (data, status, xhr) {
            layer.msg('请求成功')
        },
        fail: function (xhr, errorType, error) {
            layer.msg('请求失败')
        },
        complete: function (xhr, status) {
            layer.msg('请求结束，不管是成功还是失败')
        },
    })
    return false;
});


$app
    .on('click', '.btnAdd', function () {
        layer.msg('点击了添加按钮')
    })
    .on('click', '.btnDelete', function () {
        layer.msg('点击了删除按钮')
    })
    .on('click', '.btnSearch', function () {
        layer.msg('搜索框内输入的文字为：' + $('#fieldSearch').val())
    })
