const config = {
    // `url` 是用于请求的服务器 URL
    url: '/api/test',
    // `method` 是创建请求时使用的方法
    method: 'get', // default
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
}
export default config;