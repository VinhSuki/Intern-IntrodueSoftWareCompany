import AOS from 'aos'
const excuteAOS = (duration = 1000 , offset = 0 , once=true)=>{
    AOS.init({
        duration:duration, // Thời gian chạy hiệu ứng (ms)
        offset:offset, // Khoảng cách trước khi kích hoạt hiệu ứng
        once:once, // Hiệu ứng chỉ chạy 1 lần
        anchorPlacement: 'top-center'
    });
}

export default excuteAOS