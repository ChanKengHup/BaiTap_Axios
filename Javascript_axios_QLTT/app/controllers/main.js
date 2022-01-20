let courseApi = new CourseService()
let validation = new Validation()
function getCourse() {
    courseApi.getData()
    .then(function(result) {
        showCourse(result.data)
    })
    .catch(function(error) {
        console.log(error);
    })
}
getCourse()

function showCourse(courses) {
    let content = ""
    let stt = 1
    courses.map((course) => {
        content +=
        `
        <tr>
        <td>${stt}</td>
        <td>${course.taiKhoan}</td>
        <td>${course.matKhau}</td>
        <td>${course.hoTen}</td>
        <td>${course.email}</td>
        <td>${course.ngonNgu}</td>
        <td>${course.loaiND}</td>
        <td>
        <button onclick="deleteAccount('${course.id}')" class="btn btn-danger">Xóa</button>
        </td>
        <td>
        <button onclick="watchAccount('${course.id}')" class="btn btn-success" data-toggle="modal" data-target="#myModal">Xem</button>
        </td>
        </tr>
        `
        stt++
    })
    document.getElementById("tblDanhSachNguoiDung").innerHTML = content
}

document.getElementById("btnThemNguoiDung").onclick = function() {
    storeCourse()
    document.querySelector("#myModal .modal-footer").innerHTML = 
    `
    <button onclick="addCourse()" class="btn btn-success">Thêm khóa học</button>
    `
}
document.querySelector("#myModal .close").onclick = function () {
    document.getElementById("TaiKhoan").value = ''; 
    document.getElementById("HoTen").value = ''; 
    document.getElementById("MatKhau").value = ''; 
   document.getElementById("Email").value = ''; 
    document.getElementById("HinhAnh").value = ''; 
    document.getElementById("MoTa").value = ''; 

}
// Lưu dữ liệu để kiêm tra tài khoản 
function storeCourse() {
    courseApi.storeData(); 
 }
 storeCourse()

// thêm course
function addCourse() {
    let taiKhoan = document.getElementById("TaiKhoan").value;
    let hoTen = document.getElementById("HoTen").value;
    let matKhau = document.getElementById("MatKhau").value;
    let email = document.getElementById("Email").value;
    let hinhAnh = document.getElementById("HinhAnh").value;
    let loaiND = document.getElementById("loaiNguoiDung").value;
    let ngonNgu = document.getElementById("loaiNgonNgu").value;
    let moTa = document.getElementById("MoTa").value;
    storeCourse()


    let course = new Courses(taiKhoan,hoTen, matKhau,email,hinhAnh,loaiND,ngonNgu, moTa)


    let storeCourses = JSON.parse(localStorage.getItem("courseUser") ) 
    console.log(storeCourses);

    let isValid = true
    // tài khoản
    isValid &= validation.checkEmpty(taiKhoan, "tbAccount", "Vòng lòng nhập trường này") && validation.checkAccount(taiKhoan, "tbAccount", "Tài khoản đã tồn tại",storeCourses)
    // Họ tên
    isValid &= validation.checkEmpty(hoTen,"tbName", "Vòng lòng nhập trường này") && validation.checkName(hoTen,"tbName", "Họ tên chỉ chứ các kí tự chữ")

    if(isValid) {
        courseApi.pushData(course)
        .then((result) => {
            getCourse()
            console.log(result.data);
        })
        document.querySelector("#myModal .close").click()
    }
}
// xóa course 
function deleteAccount(id) {
    courseApi.deleteData(id)
    .then((result) => {
        getCourse()
         storeCourse()
    })
}
// xem course 
function watchAccount(id) {
    courseApi.watchData(id)
    .then((result) => {
         document.getElementById("TaiKhoan").value = result.data.taiKhoan;
         document.getElementById("HoTen").value = result.data.hoTen;
         document.getElementById("MatKhau").value = result.data.matKhau;
        document.getElementById("Email").value = result.data.email;
         document.getElementById("HinhAnh").value = result.data.hinhAnh;
        document.getElementById("loaiNguoiDung").value = result.data.loaiND;
         document.getElementById("loaiNgonNgu").value = result.data.ngonNgu;
         document.getElementById("MoTa").value = result.data.moTa;

         document.querySelector("#myModal .modal-footer").innerHTML = 
         `
         <button onclick="updateCourse('${result.data.id}')" class="btn btn-primary">Cập nhật</button>`
    
        })
}
// update course
function updateCourse(id) {
    let taiKhoan = document.getElementById("TaiKhoan").value;
    let hoTen = document.getElementById("HoTen").value;
    let matKhau = document.getElementById("MatKhau").value;
    let email = document.getElementById("Email").value;
    let hinhAnh = document.getElementById("HinhAnh").value;
    let loaiND = document.getElementById("loaiNguoiDung").value;
    let ngonNgu = document.getElementById("loaiNgonNgu").value;
    let moTa = document.getElementById("MoTa").value;


    let course = new Courses(taiKhoan,hoTen, matKhau,email,hinhAnh,loaiND,ngonNgu, moTa)

    courseApi.updateData(id, course)
    .then((result) => {
        getCourse()
    })
    .catch((error) => {
        console.log(error);
    })
    document.querySelector("#myModal .close").click()

}