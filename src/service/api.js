import {get,post} from './http.config.js'

let api = {
	getDemolist(data){
		return post('/api/user/login.do',data);
	}
}

export {api}