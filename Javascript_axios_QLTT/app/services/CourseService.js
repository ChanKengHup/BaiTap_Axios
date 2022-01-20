function CourseService() {

    
    this.storeData = function () {
        
        return axios({
            method: 'get',
            url: 'https://61d6e2a235f71e0017c2e877.mockapi.io/courses',
          })
          .then(result => {
              let account = result.data
              let accounts = account.map(item => {
                  return item.taiKhoan
              })
              localStorage.setItem('courseUser', JSON.stringify(accounts))
            })
            
        }

    this.getData = function() {
        return axios({
            method: 'get',
            url: 'https://61d6e2a235f71e0017c2e877.mockapi.io/courses',
          })
    }

    this.pushData = function (course) {
        return axios({
            method: 'post',
            url: 'https://61d6e2a235f71e0017c2e877.mockapi.io/courses',
            data: course
          }) 
    }
    this.deleteData = function(id) {
        return axios({
            method: 'delete',
            url: `https://61d6e2a235f71e0017c2e877.mockapi.io/courses/${id}`,
           
          }) 
    }
    this.watchData = function (id) {
        return axios({
            method: 'get',
            url: `https://61d6e2a235f71e0017c2e877.mockapi.io/courses/${id}`,
           
          }) 
    }
    this.updateData = function(id, course) {
        return axios({
            method: 'put',
            url: `https://61d6e2a235f71e0017c2e877.mockapi.io/courses/${id}`,
            data: course
          }) 
    }
}