function Validation() {
    this.checkEmpty = function (value, spanId, message) {
        if(value.trim() === '') {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
        else {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
    }
    this.checkAccount = function (value, spanId, message, courses) {
        let isExist = false

            isExist = courses.some(some => {
            return some === value

             })
        if(isExist) {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
        else {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
    }
    this.checkName = function (value, spanId, message) {
        let pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"
        + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ"
        + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"

        let regex = new RegExp(pattern)

        if(regex.test(value)) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        } else {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    } 

    this.checkPassword = function(value, spanId, message) {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/
        if(regex.test(value)) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        } else {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
    this.checkEmail = function(value, spanId, message) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(regex.test(value)) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        } else {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
    this.checkLoaiND = function (value, spanId, message) {
        if(value === "Chọn loại người dùng") {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
     
        else {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
    }
    this.checkNN = function (value, spanId, message) {
        if(value === "Chọn ngôn ngữ") {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
     
        else {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
    }
    this.checkLength = function(value, spanId, message) {
        
        if(value.length <= 60) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
        else if(value = '') {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
        else {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
   
}