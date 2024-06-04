/* eslint-disable react/no-unknown-property */
import qrCode from "../../assets/images/footer/qr.png";
import googleplay from "../../assets/images/footer/googleplay.png";
import appstore from "../../assets/images/footer/appstore.png";

const Footer = () => {
  return (
    <footer className="border-t mt-24">
      <div className="body-font">
        <div
          className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
          bis_skin_checked="1"
        >
          <div
            className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
            bis_skin_checked="1"
          >
            <p className="text-2xl">WorkNest</p>
            <p className="mt-2">Find you best job</p>
            
            <label className="flex items-center bg-transparent gap-2 border p-3 rounded-md w-fit mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="email"
                className="outline-none bg-transparent"
                placeholder="Enter your email "
              />
            </label>
          </div>
          <div
            className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
            bis_skin_checked="1"
          >
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 className="title-font font-medium tracking-widest text-lg md:text-xl mb-3">
                Support
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <p>Mirpur, Dhaka-1216, Bangladesh.</p>
                </li>
                <li>
                  <p>shamimhosan02@gmail.com</p>
                </li>
                <li>
                  <p>+88015-4000-3639</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 className="title-font font-medium  tracking-widest text-lg md:text-xl mb-3">
                Account
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <a className="cursor-pointer hover:underline">My Account</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">Login / Register</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">My Applications</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 className="title-font font-medium  tracking-widest text-lg md:text-xl mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <a className="cursor-pointer hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">Terms Of Use</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">FAQ</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">Contact</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 className="title-font font-medium tracking-widest text-lg md:text-xl mb-3">
                Download App
              </h2>
              <nav className="list-none mb-10">
                <p className="mb-3">Save $3 with App New User Only</p>
                <div className="flex items-center gap-3 mb-5">
                  <div>
                    <img src={qrCode} alt="qr code image" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <img src={googleplay} alt="google play image" />
                    </div>
                    <div>
                      <img src={appstore} alt="app store image" />
                    </div>
                  </div>
                </div>
                <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 ">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 ">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer text-center p-4 border-t">
        <aside>
          <p>Copyright © 2024 - All right reserved by WorkNest</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
