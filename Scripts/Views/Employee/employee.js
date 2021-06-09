$(document).ready(function () {
    $(".nav_dropdown").on("click", function () {
        if($("#nav-bar").attr("nav-type") == "big") {
            $(this).find(".dropdown_menu").slideToggle(300);
            $(this).find(".nav_link").toggleClass("clicked");
            $(this).find(".dropdown-icon").toggleClass("rotateIcon");
        } else {
            $(this).find(".right_menu").slideToggle(300);
            $(this).find(".nav_icon").toggleClass("clicked");
        }
    });
});

// Trang nhân viên
class EmployeePage extends BaseGrid {
   
    constructor(gridId){
        super(gridId);
 
        this.config();
     }
 
     // Cấu hình các url
     config(){
         let me = this,
             config = {
                 urlAdd: "v1/Employees",
                 urlEdit: "v1/Employees",
                 urlDelete: "v1/Employees"
             };
 
         Object.assign(me, config);
     }

     /**
     * 
     * @param {*} formId 
     */
    initFormDetail(formId){
        let me = this;

        me.formDetail = new EmployeeDetail(formId);
    }
}

// Khởi tạo đối tượng trang nhân viên
let employeePage = new EmployeePage("#gridEmployee");

// Khởi tạo một form detail
employeePage.initFormDetail("#formEmployeeDetail");