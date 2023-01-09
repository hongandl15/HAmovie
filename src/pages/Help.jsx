import React from 'react'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Help = () => {
    return (
        <>
        <Helmet title="Help Center">
        <Similar type = 'Popular'/>
        
        <div className='help'>
            <h1 className='help_header'>Trung tâm trợ giúp</h1>
            <input type="text" placeholder='Bạn cần trợ giúp vấn đề gì?' />
            <h2>
                Xin chào Ân Nguyễn
            </h2>
            <h3>
                Bạn có thể tham khảo những vấn đề dưới đây
            </h3>
            <div className='questions_container'>
                <div className='question'>
                    <h4>Quản lý tài khoản của tôi</h4>
                    <li>Các gói dịch vụ và mức giá</li>
                    <li>Tôi nhận được email cho biết có ai đó mới đăng nhập vào tài khoản của tôi</li>
                    <li>Làm sao để thay đổi gói của bạn</li>
                </div>
                <div className='question'>
                    <h4>Không xem được</h4>
                    <li>Cách thay đổi mật khẩu</li>
                    <li>Yêu cầu đăng ký khi cố gắng đăng nhập</li>
                    <li>Cho biết "Ứng dụng này không tương thích với thiết bị của bạn".</li>
                </div>
                <div className='question'>
                    <h4>Câu hỏi về thanh toán</h4>
                    <li>Cách thanh toán cho DA Movie</li>
                    <li>Tính phí và thanh toán</li>
                    <li>Thẻ quà tặng DA Movie</li>
                </div>
            </div>
        </div>
        </Helmet>
        </>
    )
}

export default Help
