const quarterOf = (month) => {
    for(var i = 0; i <= 12; i++){
        if(month <= 3){
            return 1
        }
        else if(month <= 6) {
            return 2
        }
        else if(month <= 9) {
            return 3
        }
        else if(month <=12){
            return 4
        }else return "not turn in"
    }
}

console.log(quarterOf("12"))