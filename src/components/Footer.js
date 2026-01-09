"use client";
import Search from "../../public/footer/search.svg";
import Offer from "../../public/footer/Offer.svg";
import Favorite from "../../public/footer/favorite.svg";
import Explore from "../../public/footer/explore.svg";
import Profile from "../../public/footer/profile.svg";
import Image from "next/image";

const lists = [
    {
        label: "Search",
        icon: Search,
    },
    {
        label: "Offers",
        icon: Offer,
    },
    {
        label: "Bookings",
        icon: Explore,
    },
    {
        label: "Wishlist",
        icon: Favorite,
    },
    {
        label: "Sign In",
        icon: Profile,
    },
]

export default function Footer({ isLoggedIn, setIsLoggedIn }) {
    return (
        <footer className="w-full bg-gray-100 text-[#7D817D] px-4 bottom-0 absolute  border">
            <div className="flex items-center justify-between py-2">
                {lists.map((list, index) => (
                    <div key={list.label} className="flex flex-col items-center cursor-pointer"
                        onClick={() => index === 4 && setIsLoggedIn()}
                    >
                        <Image
                            src={list.icon}
                            alt={list.label}
                            width={22}
                            height={22}
                            className="object-contain"
                        />
                        <span className={`${index == 1 ? "text-[#874B2C] font-semibold" : ""} text-xs`}>
                            {index === 4 && isLoggedIn ? "Profile" : list.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mx-auto my-2 h-1.25 rounded-md w-27 bg-[#646864]"></div>
        </footer>
    );
}