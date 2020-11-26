

// request.js

let baseURL='';
var http = '';

// 传参：methods请求方法，params参数，urls接口，isFormData参数格式是否FormData，header请求头
http = async function(url, data,method) {
	let resp = {};
	if('POST' == method){
		resp = await uni.request({url,data,method})
	}else{
		resp = await uni.request({url,data})
	}
	if(200 == resp[1].statusCode){
		return resp[1].data
	}else{
		return 'err'
	}
}

export default http

