// Bài tập 1: Tính lương nhân viên
function staffSalary() {
    // Input:
    // lương một ngày
    const salaryPerDate = 100000;
    var workingDay = document.getElementById("dayWork").value;
    // Proccessing:
    var staffSalary = salaryPerDate * workingDay;
    //output:
    document.getElementById("salary").innerHTML = staffSalary+" VNĐ";
    console.log("Bài 1: salary= "+staffSalary+" VNĐ")
}
// Bài tập 2: Tính lương nhân viên
function Average() {
    // Input:
    // nhập 5 số
    var a1 = parseInt(document.getElementById("no1").value);
    var a2 = parseInt(document.getElementById("no2").value);
    var a3 = parseInt(document.getElementById("no3").value);
    var a4 = parseInt(document.getElementById("no4").value);
    var a5 = parseInt(document.getElementById("no5").value);
    // Proccessing:
    var avarageNum=(a1+a2+a3+a4+a5)/5;
    //output:
    console.log("Bài 2: số trung bình= " + avarageNum);
    document.getElementById("avarageNum").innerHTML = avarageNum;
}
// Bài tập 3: Quy đổi USD sang VNĐ
function transferMoney() {
    // Input:
    // giá USD hiện nay:
    const perUSD=23500;
    var totalUSD = parseInt(document.getElementById("usdID").value);
    // Proccessing:
    var totalVND=totalUSD*perUSD;
    //output:
    console.log("Bài 3: Số tiền đã quy đổi= " + totalVND + " VNĐ");
    document.getElementById("transferMoney").innerHTML = totalUSD + " USD --> " + totalVND + " VNĐ";
}
// Bài tập 4: Quy đổi USD sang VNĐ
function Area() {
    // Input:
    // kích thước chiều dài HCN:
    var xHCN = parseFloat(document.getElementById("hcnLength").value);
    //kích thước chiều rộng của HCN:
    var yHCN = parseFloat(document.getElementById("hcnWidth").value);
    // Proccessing:
    var areaHCN=xHCN*yHCN;
    var PerHCN=(xHCN+yHCN)*2;
    //output:
    console.log("Bài 4: diện tích hình chữ nhật= " + areaHCN);
    console.log("Bài 4: chu vi hình chữ nhật= " + PerHCN);
    document.getElementById("Area").innerHTML =areaHCN;
    document.getElementById("Perimeter").innerHTML =PerHCN;
}
// Bài tập 5: tính 2 ký số của một số có 2 chữ số
function SumXX() {
    // Input:
    // kích thước chiều dài HCN:
    var numberVal = parseInt(document.getElementById("num_Haikyso").value);
    // Proccessing:
    var number_hangchuc=Math.floor(numberVal/10);
    var number_hangdv=numberVal%10;
    var sumTotal=number_hangchuc+number_hangdv;
    //output:
    console.log("Tổng hai ký số:" + sumTotal);
    document.getElementById("sumResult").innerHTML = sumTotal;
}