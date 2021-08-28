import React, { useState } from 'react'

const skinType = [
    "Skin Type",
    "Combination Skin",
    "Dry Skin",
    "Oliy Skin",
    "Sensitive Skin"
]

const skinGoal = [
    "Acne & Blemish",
    "Oil Control",
    "Pores",
    "Hydration",
    "Lines & Wrinkles",
    "Lifting & Firming"
]

const productType = [
    "Cleansers & Toners",
    "Serums & Treatments",
    "Moisturizers",
    "Masks & Peels",
    "Eyes",
    "SPF",
    "Supplements"
]

export const Navbar = () => {

    const handleMenu = () => {
        console.log("dfkjvndfkj")
        const sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle("-translate-x-full")
    };

    const handleLargeMenu = () => {
        console.log("dfkjvndfkj")
        const largeMenu = document.querySelector(".large-menu")
        largeMenu.classList.toggle("hidden")
    };

    return (
        <div>
            <nav className="navbar fixed w-full pt-4 px-4 md:flex md:flex-col md:px-16 bg-white md:hover:border-b-2 border-gray-200">
                <div className="md:hidden flex justify-between items-center align-middle">
                    <img onClick={handleMenu} className="md:hidden cursor-pointer" src="image/menu.png" alt="menu" />
                    <h1 className="text-2xl text-center font-bold cursor-pointer">bio:cule</h1>
                    <div className="flex space-x-6">
                        <img className="cursor-pointer inline-block" src="image/search.png" alt="search" />
                        <img className="cursor-pointer" src="image/bag.png" alt="bag" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="hidden md:flex">
                        <h1 className="font-bold cursor-pointer text-4xl text-left">bio:cule</h1>
                    </div>
                    <div className="hidden md:flex justify-end space-x-10 align-middle items-center">
                        <img className="cursor-pointer" src="image/insta.png" alt="instagram" />
                        <img className="cursor-pointer" src="image/facebook.png" alt="facebook" />
                        <img className="cursor-pointer" src="image/yt.png" alt="yt" />
                        <img className="cursor-pointer" src="image/pin.png" alt="pin" />
                        <img className="cursor-pointer" src="image/tw.png" alt="tw" />
                    </div>
                </div>

                <div className="flex justify-between items-center align-middle">
                    <ul className="hidden md:flex space-x-14">
                        <li onMouseEnter={handleLargeMenu} onMouseLeave={handleLargeMenu} className="menu relative hover:border-b-2 border-black py-4 cursor-pointer">
                            <a href="#" className="text-gray-600 text-xl" >skin:care</a>
                        </li>
                        <li onMouseEnter={handleLargeMenu} onMouseLeave={handleLargeMenu} className="menu hover:border-b-2 border-black py-4 cursor-pointer">
                            <a href="#" className="text-gray-600 text-xl" >bio:edge</a>
                        </li>
                        <li onMouseEnter={handleLargeMenu} onMouseLeave={handleLargeMenu} className="menu hover:border-b-2 border-black py-4 cursor-pointer">
                            <a href="#" className="text-gray-600 text-xl" >b:logs</a>
                        </li>
                    </ul>
                    <div className="hidden md:flex justify-end space-x-10">
                        <img className="cursor-pointer" src="image/search.png" alt="search" />
                        <img className="cursor-pointer" src="image/like.png" alt="like" />
                        <img className="cursor-pointer" src="image/person.png" alt="person" />
                        <img className="cursor-pointer" src="image/bag.png" alt="bag" />
                    </div>
                </div>
                {/* // here goes all the menu for large screen */}
                <div className="large-menu hidden">
                    <div className="md:flex justify-between">
                        <ul className="text-lg font-bold py-3 cursor-pointer">Skin Type
                            {skinType.map((element) =>
                                <li className="font-normal text-sm py-3 cursor-pointer">{element}</li>
                            )}
                        </ul>
                        <ul className="text-lg font-bold py-3 cursor-pointer">Skin Type
                            {skinGoal.map((element) =>
                                <li className="font-normal text-sm py-3 cursor-pointer">{element}</li>
                            )}
                        </ul>   <ul className="text-lg font-bold py-3 cursor-pointer">Skin Type
                            {productType.map((element) =>
                                <li className="font-normal text-sm py-3 cursor-pointer">{element}</li>
                            )}
                            <div className="flex justify-between w-max pt-4 space-x-2 align-middle items-center border-b-2 border-black">
                                <a href="#" className="text-sm font-bold">
                                    All Products
                                </a>
                                <img src="image/arrow.png" />
                            </div>

                        </ul>
                        <div className="">
                            <img src="image/Frame.png" />
                        </div>
                    </div>
                </div>

            </nav>

            {/* here goes all the menu for small screen */}
            <div className="sidebar md:hidden flex pt-4 px-4 flex-col w-80 bg-red-200 absolute inset-y-0 left-0  transform -translate-x-full" >
                <div className="border-b border-gray-700">
                    <h1 className="text-2xl py-4 font-bold cursor-pointer">bio:cule</h1>
                    <a href="#" className="flex align-middle items-center space-x-2 py-2.5">
                        <img className="cursor-pointer" src="image/person.png" alt="person" />
                        <p>Login / Register</p>
                    </a>
                </div>
                <div className="border-b border-gray-700">
                    <h1 className="text-sm py-4 text-gray-500">skincare</h1>
                    <ul className="py-4 text-base font-bold cursor-pointer">Skin Type
                        {skinType.map((element) =>
                            <li className="hidden font-normal text-sm py-3 cursor-pointer">{element}</li>
                        )}
                    </ul>
                    <ul className="text-base font-bold py-4 cursor-pointer">Skin Goals
                        {skinGoal.map((element) =>
                            <li className="hidden font-normal text-sm py-3 cursor-pointer">{element}</li>
                        )}
                    </ul>
                    <ul className="text-base font-bold py-4 cursor-pointer">Product Type
                        {productType.map((element) =>
                            <li className="hidden font-normal text-sm py-3 cursor-pointer">{element}</li>
                        )}

                    </ul>
                </div>
                <div className="border-b border-gray-700">
                    <h1 className="text-sm py-4 text-gray-500">bio:edge</h1>
                    <ul>
                        <li className="py-4">
                            <a href="#" className="text-base font-bold cursor-pointer">in:gredients</a>
                        </li>
                        <li className="py-4">
                            <a href="#" className="py-4 text-base font-bold cursor-pointer">re:search</a>
                        </li>
                    </ul>
                </div>
                <div className="border-b border-gray-700">
                    <h1 className="text-sm py-4 text-gray-500">b:logs</h1>
                    <ul>
                        <li className="py-4">
                            <a href="#" className="text-base font-bold cursor-pointer">Beauty logs</a>
                        </li>
                    </ul>
                </div>
                <div className="border-b border-gray-700 py-4" >
                    <a href="#" className="text-base font-bold cursor-pointer">Wishlist</a>
                </div>
            </div>
        </div>
    )
}
