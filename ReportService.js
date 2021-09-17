var RESULT = new Array(
    getQueryString("result1"),
    getQueryString("result2"),
    getQueryString("result3"),
    getQueryString("result4"),
    getQueryString("result5"),
    getQueryString("result6"),
)

function getQueryString(key){
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null){
        return decodeURIComponent(r[2]);
    } else{
        return null;
    }
}