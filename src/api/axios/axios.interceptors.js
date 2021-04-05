import instance from './instance'

//定义拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let date = new Date().toLocaleTimeString();
    console.log("%c%s", "color:black;font-size:12px;font-weight:800", "Request Send " + "(" + date + ")")
    console.dir(config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let date = new Date().toLocaleTimeString();
    console.log("%c%s", "color:black;font-size:12px;font-weight:800", "Response Receive " + "(" + date + ")")
    console.dir(response)
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;