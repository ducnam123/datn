<<<<<<< Updated upstream:FE/src/pages/client/Profile/Information/InformationPage.tsx
const InformationPage = () => {
  return (
    <>
      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Thông tin người dùng
=======
import { useEffect, useState } from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="  text-textPrimary
        dark:text-textDark">
        <div className="flex min-w-full">
          <section className="mx-[20px] max-w-full bg-[##FCFCFC]  mt-[15px] nam:hidden">
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
              className="max-w-full   bsolute"
            />

            <div className="flex justify-between">
              <div>
                <img src={"user.jpg"} alt="" className="w-[200px]  h-[200px] relative bottom-10 left-12 w-[137px] h-[137px] rounded-full border-[10px] " />
              </div>

            </div>



            {/* thông tin form */}
            <section className=" max-w-full">
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
                    <select name="" id="" className="w-[430px] h-[44px] rounded-[8px] mr-[40px] p-[10px] border-2 border-sky-500">
                      <option value="">Nam</option>
                      <option value="">Nữ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-[10px]">Địa chỉ</label>
                    <input type="text" className="border-2 border-sky-500 w-[430px] h-[44px] rounded-[8px] p-[10px]" placeholder="Hà nội" />
                  </div>
                </section>


                <div className="nam:w-[434px] w-[898px] h-[125px] bg-[#fff] my-[20px] text-center rounded-[10px] border-2 border-sky-500">
                  <input type="file" className="w-[200px] bg-[#fff] text-center mt-[35px]" accept=".svg,.png,.jpg,.jpeg,.gif" />
                  <div>
                    <label htmlFor="file-input" id="file-label">Nhấp để tải lên hoặc kéo và thả svg, png, jpg hoặc gif</label>
                  </div>
                </div>

                <div className="nam:mb-[20px] mb-[20px]">
                  <button className=" mr-[20px] p-[10px] rounded-[8px] bg-[#fff]" >Hủy</button>
                  <button className=" p-[10px] mr-[30px] mt-[20px] rounded-[8px] text-[#fff] bg-[#475BE8]">Cập nhật</button>
                </div>
              </form>

            </section>
          </section>
        </div>
>>>>>>> Stashed changes:FE/src/pages/client/Profile/ProfilePage.tsx
      </div>




    </>
  );
};

export default InformationPage;
