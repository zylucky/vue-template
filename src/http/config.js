// 接口配置文件
export default {
    //请求方式
    method: 'post',
    // 基础url前缀
    baseURL: process.env.VUE_APP_BASE_API,
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Appid': '123456',
        'Token': ''
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
}