exports.min = function min(array) {
    if (typeof array != "undefined"
    && array != null
    && array.length != null
    && array.length > 0){
        return Math.min(...array);
    }else{
        return 0;
    }
        
    

}

exports.max = function max(array) {
    if (typeof array != "undefined"
    && array != null
    && array.length != null
    && array.length > 0){
        return Math.max(...array);
    }else{
        return 0;
    }
   
        
    
}

exports.avg = function avg(array) {
    if (typeof array != "undefined"
    && array != null
    && array.length != null
    && array.length > 0){
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total / array.length;
    }else{
        return 0;
    }
    
    
       
}
