import { useEffect, useState } from "react";

const InformationPage = () => {
  return (
    <>
      <div className="  text-textPrimary
      dark:text-textDark dark:bg-[#000] bg-[#EFEFEF] max-w-full">
        <div className="flex max-w-full">

          <section className="bg-[#FCFCFC] px-[15px] pt-[20px] bg-[#FCFCFC]  nam:hidden dark:bg-[#1A1D1F]">
            <ul>
              <li className="p-[15px]  hover:bg-sky-700 rounded-[12px]  w-[200px]"><a href="">Thông tin cá nhân</a></li>
              <li className="p-[15px]  hover:bg-sky-700 rounded-[12px]  w-[200px]"><a href="">Khách sạn đã đặt</a></li>
              <li className="p-[15px]  hover:bg-sky-700 rounded-[12px]  w-[200px]"><a href="">Khách sạn yêu thích</a></li>
              <li className="p-[15px]  hover:bg-sky-700 rounded-[12px]  w-[200px]"><a href="">Thông tin thanh toán</a></li>
              <li className="p-[15px]  hover:bg-sky-700 rounded-[12px]  w-[200px] font-[]"><a href="">Thông báo</a></li>
            </ul>
          </section>

          <section className="ml-[30px]">
            <h1 className=" text-[25px] font-bold my-[17px] ">Thông tin cá nhân</h1>
            <img
              alt="Avatar"
              src={"Banner.jpg" || "/Danh sách khánh sạn "}
              className="max-w-full"
            />
            {/* thông tin form */}
            <section className=" max-w-full dark:bg-[#1A1D1F] bg-[#FCFCFC] pb-[10px]">
              <div className="flex justify-between">
                <div>
                  <img src={"user.jpg"} alt="" className="w-[200px] h-[200px] relative bottom-[70px] left-12 w-[137px] h-[137px] rounded-full border-[10px] " />
                </div>

              </div>

              <h2 className="ml-[50px] text-base font-semibold mb-[20px]">Thông tin chi tiết</h2>

              <form action="" className="ml-[50px]">

                <section className="">
                  <div className="lg:flex">
                    <div className="nam:mb-[5px]">
                      <label className="block mb-[10px]">Tên người dùng</label>
                      <input type="text" className="border-2 border-sky-500 w-[430px] h-[44px] rounded-[8px] mr-[40px] p-[10px]" placeholder="tran văn lương" />
                    </div>
                    <div>
                      <label className="block mb-[10px]">Số điện thoại</label>
                      <input type="number" className="border-2 border-sky-500 w-[430px] h-[44px] rounded-[8px] p-[10px]" placeholder="0123456789" />
                    </div>
                  </div>
                </section>



                <section className="lg:flex my-[20px]">
                  <div className="nam:mb-[5px]">
                    <label className="block mb-[10px]">Ngày sinh</label>
                    <input type="number" className="border-2 border-sky-500 w-[430px] h-[44px] rounded-[8px] mr-[40px] p-[10px]" placeholder="01/01/2003" />
                  </div>
                  <div>
                    <label className="block mb-[10px]">email</label>
                    <input type="email" className="border-2 border-sky-500 w-[430px] h-[44px] rounded-[8px] p-[10px]" placeholder="luong@gmail.com" />
                  </div>
                </section>

                <section className="lg:flex">
                  <div className="nam:mb-[5px]">
                    <label className="block mb-[10px] ">Giới tính</label>
                    <select name="" id="" className="w-[430px] h-[44px] rounded-[8px] mr-[40px] p-[10px] 
                     border-2 border-sky-500 dark:text-black">
                      <option className=" dark:text-black" value="0">Chưa chọn</option>
                      <option className=" dark:text-black" value="1">Nam</option>
                      <option className=" dark:text-black" value="2">Nữ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-[10px]">Địa chỉ</label>
                    <input type="text" className="border-2 border-sky-500 w-[430px] h-[44px] rounded-[8px] p-[10px]" placeholder="Hà nội" />
                  </div>
                </section>


                <div className="nam:w-[434px] w-[898px] h-[125px] bg-[#fff]  my-[20px] text-center rounded-[10px] border-2 border-sky-500">
                  <input type="file" className="w-[200px] bg-[#fff] text-center mt-[35px] dark:text-black" accept=".svg,.png,.jpg,.jpeg,.gif" />
                  <div>
                    <label htmlFor="file-input" id="file-label" className=" dark:text-black">Nhấp để tải lên hoặc kéo và thả svg, png, jpg hoặc gif</label>
                  </div>
                </div>

                <div className="nam:mb-[20px] absolute top-[440px] right-9 max-w-lg">
                  <button className="max-w-lg mr-[20px] p-[10px] rounded-[8px] bg-[#fff] font-black border-2 dark:text-black" >Hủy</button>
                  <button className=" max-w-lg p-[10px] mr-[30px] mt-[20px] rounded-[8px] text-[#fff] bg-[#475BE8]">Cập nhật</button>
                </div>
              </form>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default InformationPage;
