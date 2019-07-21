import {get,post} from './http.config.js'

let api = {
	getDemolist(data){
		return post('/api/login',data);
	}
}

export {api}