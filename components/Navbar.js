import React from 'react'

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
    return (
        <div>
            <nav className="navbar relative w-full md:grid md:grid-cols-2 pt-6 md:pt-8 px-4 md:px-16 space-y-4 bg-white md:hover:border-b-2 border-gray-200">
                <div className="md:hidden flex justify-between items-center align-middle">
                    <img className="md:hidden cursor-pointer" src="image/menu.png" alt="menu" />
                    <h1 className="text-2xl text-center font-bold cursor-pointer">bio:cule</h1>
                    <div className="flex space-x-6">
                        <img className="cursor-pointer inline-block" src="image/search.png" alt="search" />
                        <img className="cursor-pointer" src="image/bag.png" alt="bag" />
                    </div>
                </div>
                <div className="md:block hidden">
                    <h1 className="font-bold cursor-pointer text-4xl text-left">bio:cule</h1>
                </div>
                <div className="hidden md:flex justify-end space-x-10 align-middle items-center">
                    <img className="cursor-pointer" src="image/insta.png" alt="instagram" />
                    <img className="cursor-pointer" src="image/facebook.png" alt="facebook" />
                    <img className="cursor-pointer" src="image/yt.png" alt="yt" />
                    <img className="cursor-pointer" src="image/pin.png" alt="pin" />
                    <img className="cursor-pointer" src="image/tw.png" alt="tw" />
                </div>

                <ul className="hidden md:flex flex-row space-x-14">
                    <li className="menu hover:border-b-2 border-black pb-4 cursor-pointer">
                        <a href="#" className="text-gray-600 text-xl" >skin:care</a>
                    </li>
                    <li className="menu hover:border-b-2 border-black pb-4 cursor-pointer">
                        <a href="#" className="text-gray-600 text-xl" >bio:edge</a>
                    </li>
                    <li className="menu hover:border-b-2 border-black pb-4 cursor-pointer">
                        <a href="#" className="text-gray-600 text-xl" >b:logs</a>
                    </li>
                </ul>
                <div className="hidden md:flex justify-end space-x-10 align-middle items-center">
                    <img className="cursor-pointer" src="image/search.png" alt="search" />
                    <img className="cursor-pointer" src="image/like.png" alt="like" />
                    <img className="cursor-pointer" src="image/person.png" alt="person" />
                    <img className="cursor-pointer" src="image/bag.png" alt="bag" />
                </div>
                {/* // here goes all the menu for large screen */}
                <div className="hidden md:w-full md:grid grid-cols-2">
                    <div className="grid grid-cols-3 col-span-full">
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
                            <div className="flex justify-between w-max space-x-2 align-middle items-center border-b-2 border-black">
                                <a href="#" className="text-sm font-bold">
                                    All Products
                                </a>
                                <img src="image/arrow.png" />
                            </div>

                        </ul>
                    </div>
                    <div className="bg-local ">
                        <img src="" />
                    </div>
                </div>

            </nav>

            {/* here goes all the menu for small screen */}
            <div className="md:hidden flex pt-4 px-4 flex-col w-64 bg-#FFFEF4 absolute inset-y-0 left-0  transform -translate-x-full " >
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
