
//#11 firstLast6
function firstLast6 (arr) {
    if(arr[0]==6 || arr[arr.length-1]==6) {
        return true;
    }
    return false;
}

//#12  has_23
function has23 (arr) {
    if (arr.includes(2)||arr.includes(3)) {
        return true;
    }
    return false;
}

//#13  fix23
function fix23 (arr){
    for (var i=0;i<arr.length; i++){
        if ( arr[i]==2 && arr[i+1]==3) {
            arr[i+1]=0;
        }
    }
}

//#14 countYZ

function countYZ (str) {
    var count = 0
    str = str.toLowerCase()
    for (var i=0;i<str.length; i++){
        if((str[i]== "y" || str[i]=="z") && str[i+1]==" ") {
            count++;
        }
        if((str[i]=="y" || str[i]=="z") && i == str.length - 1){
            count++;
        }
    }
    return count;
}

//#15 endOther

function endOther (str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    if(str1.length >= str2.length) {
        if(str1.indexOf(str2) == str1.length-str2.length){
            return true;
        } else{
            return false;
        }
    }
    if(str2.length>str1.length) {
        if (str2.indexOf(str1) == str2.length-str1.length) {
            return true;
        }else{
            return false;
        }
    }
}

//#16 starOut

function starOut(str){
    var newstring = ""
    for (var i =0; i<str.length; i++) {
        if (str[i] != "*" && str[i-1] != "*" && str[i+1] != "*") {
            var newstring = newstring + str[i];
        }

    }
    return newstring;
}

//#17 getSandwich

function getSandwich(str){
    var breadcount = 0;
    for (var i = 0; i<str.length; i++){
        if (str.substring(i, i+5) == "bread"){
            breadcount += 1;

        }

    }
    if (breadcount>=2){
        return str.substring((str.indexOf("bread")+5) , str.lastIndexOf("bread"));

    } else {
        return "";
    }

}

//#18 canBalance

function canBalance(arr) {
    var sum1 = 0;
    var isEqual = false;
    for (var i = 0; i < arr.length; i++) {
        var sum2 = 0;
        sum1 += arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            sum2 += arr[j];

        }
        if (sum1 == sum2) {
            isEqual = true;
        }
    }
    return isEqual;
}


//19 countClumps

function countClumps(arr) {
    var clumpCount = 0
    for (var i=0; i<arr.length; i++) {
        if ((arr[i] == arr[i++]) && (arr[i] != arr[i+2])) {
            clumpCount = clumpCount++;
        }
    }
    return clumpCount;
}

//write 20th method
function evenlySpaced(a,b,c){
    if (a-b == b-c || b-c == c-a || c-a == a-b || c-b == b-a || a-c == c-b || b-a == a-c){
        return true;
    } else {
        return false;
    }

}
