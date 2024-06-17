import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import Image from "next/image";

const notificationList = [
  {
    image: "/images/user/user-15.png",
    title: "New repayment received",
    subTitle: "Check their total repayment",
  },
  {
    image: "/images/user/user-02.png",
    title: "New message received",
    subTitle: "Abigail sent you new message",
  },
  {
    image: "/images/user/user-26.png",
    title: "New Payment received",
    subTitle: "Check your earnings",
  },
  {
    image: "/images/user/user-28.png",
    title: "Abayomi completed repayment",
    subTitle: "View their repayment sheet",
  },
  {
    image: "/images/user/user-27.png",
    title: "New message received",
    subTitle: "Chinedu sent you new message",
  },
];

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative hidden sm:block">
      <li>
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          href="#"
          className=""
        >
          <span className="">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7001 12.6913C17.718 15.5178 18.8518 18.2235 20.8584 20.2183C21.0327 20.3912 21.0856 20.6531 20.9916 20.8804L20.9912 20.8815C20.8964 21.107 20.676 21.2561 20.4284 21.2549M17.7001 12.6913L20.429 21.0549M17.7001 12.6913V12.5968V10.6642C17.7176 9.12752 17.2154 7.63071 16.275 6.41524C15.3984 5.28217 14.1892 4.45625 12.821 4.05095C13.2642 3.42355 13.3572 2.60324 13.0487 1.88438L13.0486 1.88426C12.6962 1.06444 11.8907 0.53333 10.9982 0.53333C10.1057 0.53333 9.30018 1.06444 8.94771 1.88426L8.94766 1.88438C8.63969 2.60199 8.73182 3.42065 9.17296 4.04761C7.82501 4.42985 6.62769 5.22584 5.75338 6.32787C4.81219 7.51196 4.30025 8.97972 4.30025 10.4925L4.30025 12.5968L4.30025 12.5973C4.30723 15.4578 3.17063 18.2015 1.14175 20.2183C0.967488 20.3912 0.914595 20.6531 1.00854 20.8804L1.00898 20.8814C1.10373 21.107 1.32419 21.2561 1.57172 21.2549M17.7001 12.6913L8.02208 21.2549M20.4284 21.2549C20.4282 21.2549 20.428 21.2549 20.4278 21.2549L20.429 21.0549M20.4284 21.2549H20.429V21.0549M20.4284 21.2549H13.9781M20.429 21.0549H13.8112M13.9781 21.2549C13.9899 21.1989 14.0002 21.1422 14.0089 21.085L13.8112 21.0549M13.9781 21.2549C13.6832 22.6549 12.4456 23.67 11.0001 23.67C9.55459 23.67 8.31709 22.6549 8.02208 21.2549M13.9781 21.2549H13.8112V21.0549M13.8112 21.0549L8.02208 21.2549M8.02208 21.2549H8.18896V21.0549L7.99125 21.0851C7.99999 21.1423 8.01028 21.1989 8.02208 21.2549ZM8.02208 21.2549H1.57172M1.57172 21.2549C1.57195 21.2549 1.57218 21.2549 1.57241 21.2549L1.57118 21.0549V21.2549H1.57172ZM12.7285 21.2549C12.4747 21.9799 11.7867 22.4798 11.0001 22.4798H11C10.2133 22.4798 9.52539 21.9799 9.27157 21.2549H12.7285ZM5.51233 10.4924L5.51233 10.4921C5.51037 8.98893 6.12478 7.55137 7.21241 6.51489L7.21249 6.51481C8.2998 5.47745 9.76426 4.93259 11.2651 5.00474C12.6959 5.09328 14.0376 5.73143 15.0099 6.78408L15.0099 6.78409C15.9834 7.83803 16.5119 9.2253 16.4874 10.6596L16.4873 10.6596V10.663L16.4873 12.5961C16.4873 12.5962 16.4873 12.5963 16.4873 12.5964C16.4786 15.3045 17.3944 17.9297 19.0743 20.0424H2.92542C4.60545 17.9296 5.52131 15.3045 5.51233 12.5964L5.51233 10.4924ZM11.0001 1.75485C11.4119 1.75485 11.7837 2.00277 11.9416 2.38396C12.0986 2.76431 12.012 3.20235 11.7209 3.49448C11.4287 3.7856 10.9906 3.87214 10.6103 3.71506C10.2292 3.5571 9.98134 3.1853 9.98134 2.7736C9.98134 2.21071 10.4372 1.75485 11.0001 1.75485Z" fill="#213F7D" stroke="#213F7D" stroke-width="0.4"/>
</svg>

            <span
              className={`absolute -top-0.5 right-0 z-1 h-2.5 w-2.5 rounded-full border-2 border-gray-2 bg-red-light dark:border-dark-3 ${
                !notifying ? "hidden" : "inline"
              }`}
            >
              <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-light opacity-75"></span>
            </span>
          </span>
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-27 mt-7.5 flex h-[550px] w-75 flex-col rounded-xl border-[0.5px] border-stroke bg-white px-5.5 pb-5.5 pt-5 shadow-default dark:border-dark-3 dark:bg-gray-dark sm:right-0 sm:w-[364px]`}
          >
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-medium text-dark dark:text-white">
                Notifications
              </h5>
              <span className="rounded-md bg-primary px-2 py-0.5 text-body-xs font-medium text-white">
                5 new
              </span>
            </div>

            <ul className="no-scrollbar mb-5 flex h-auto flex-col gap-1 overflow-y-auto">
              {notificationList.map((item, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center gap-4 rounded-[10px] p-2.5 hover:bg-gray-2 dark:hover:bg-dark-3"
                    href="#"
                  >
                    <span className="block h-14 w-14 rounded-full">
                      <Image
                        width={112}
                        height={112}
                        src={item.image}
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                        alt="User"
                      />
                    </span>

                    <span className="block">
                      <span className="block font-medium text-dark dark:text-white">
                        {item.title}
                      </span>
                      <span className="block text-body-sm font-medium text-dark-5 dark:text-dark-6">
                        {item.subTitle}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              className="flex items-center justify-center rounded-[7px] border border-primary p-2.5 font-medium text-primary hover:bg-blue-light-5 dark:border-dark-4 dark:text-dark-6 dark:hover:border-primary dark:hover:bg-blue-light-3 dark:hover:text-primary"
              href="#"
            >
              See all notifications
            </Link>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownNotification;
