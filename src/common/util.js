/**
*公共方法
*/

/**
* 提示信息 -->类
* @param {String} info 需显示的提示内容
*/
import { Message } from 'element-ui';
class Messages {
	static sucMessage(info){
		Message({
    		message:info,
    		duration:2000,
    		showClose:true,
    		type: 'success'
    	});
	}
	static errMessage(info){
		Message({
    		message:info,
    		duration:2000,
    		showClose:true,
    		type: 'error'
    	});
	}
	static otherMessage(info){
		Message({
    		message:info,
    		duration:2000,
    		showClose:true
    	});
	}
}
export {Messages}
