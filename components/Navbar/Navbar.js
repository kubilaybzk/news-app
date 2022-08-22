import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [logined, setLogined] = useState(true);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/*  Üst kısımda bulunan buton.*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobile(!mobile)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Orta kısımda bulunan linkler*/}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <span className="text-white text-xl">BzkNews</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Ana Sayfa
                </a>

                <a
                  href="/User"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Kullanıcı
                </a>

                <a
                  href="/Post"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Haberler
                </a>
              </div>
            </div>
          </div>
          {/* Giriş yasp kayıt ol butonlarının olduğu alan*/}
          <div className="flex flex-row justify-center items-center  gap-5 ">
            {logined ? (
              <>
                <Link href={`/Profile`}>
                <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-1 px-2 lg:py-2 lg:px-4 border border-white hover:border-transparent rounded">
                  Kullanıcı Adı
                </button>
                </Link>
                <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-1 px-2  lg:py-2 lg:px-4 border border-white hover:border-transparent rounded">
                  Çıkış yap
                </button>
              </>
            ) : (
              <>
                <Link href={"/SignIn"}>
                  <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-1 px-2 lg:py-2 lg:px-4 border border-white hover:border-transparent rounded">
                    Giriş Yap
                  </button>
                </Link>
                <Link href={"/SignUp"}>
                  <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-1 px-2  lg:py-2 lg:px-4 border border-white hover:border-transparent rounded">
                    Kayıt ol
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={mobile ? `block` : `hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Ana Sayfa
          </a>

          <a
            href="/User"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Kullanıcı
          </a>

          <a
            href="/Post"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Haberler
          </a>
        </div>
      </div>
    </nav>
  );
}
