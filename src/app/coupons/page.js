"use client"

import SignoutCard from "@/components/SignoutCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Notification from "@/components/Notification"
import Tabs from "@/components/Tabs";
import { useState } from "react";
import discount1500 from "../../../public/coupons/discount1500.svg"
import discount3000 from "../../../public/coupons/discount3000.svg"
import discount10 from "../../../public/coupons/discount10.svg"
import CopyButton from "../../../public/coupons/CopyButton.svg"
import RenderList from "@/components/RenderList";

import Myntra from "../../../public/giftCard/Myntra.svg"
import TitleIconMyntra from "../../../public/giftCard/titleIconMyntra.svg"
import Hammer from "../../../public/giftCard/Hammer.svg"
import TitleIconHammer from "../../../public/giftCard/titleIconHammer.svg"

import paymentOffer from "../../../public/payment/paymentOffer.svg"
import paymentOfferIcon from "../../../public/payment/paymentTitleIcon.svg"

const couponsList = [
    {
        image: discount1500,
        title: "LONGSTAY",
        title2: CopyButton,
        description: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
        readmore: "Read more"
    },
    {
        image: discount3000,
        title: "EARLYBIRD",
        title2: CopyButton,
        description: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
        readmore: "Read more"
    },
    {
        image: discount10,
        title: "RUSHDEAL",
        title2: CopyButton,
        description: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
        readmore: "Read more"
    },
]

const bounceList = [
    {
        image: Myntra,
        title: TitleIconMyntra,
        title2: "Collect",
        description: "Get this gift voucher on booking above ₹2000",
        readmore: "Read more"
    },
    {
        image: Hammer,
        title: TitleIconHammer,
        title2: "Collect",
        description: "Get this gift voucher on booking above ₹2000",
        readmore: "Read more"
    },
]

const paymentList = [
    {
        image: paymentOffer,
        title: paymentOfferIcon,

        description: "Get 10% off on booking above ₹1500",
        readmore: "Read more"
    },
]

export default function Coupons() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeTab, setActiveTab] = useState("Giftcards");
    return (
        <>
            <Notification />
            <Navbar />
            <Hero isLoggedIn={isLoggedIn} setIsLoggedIn={() => setIsLoggedIn(!isLoggedIn)}  />
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {!isLoggedIn ? (<SignoutCard />)
                : (
                    <>
                        {
                            activeTab === "Coupons" ? <RenderList lists={couponsList} listName={"Sitewide coupons:"} /> :

                                activeTab === "Giftcards" ? <RenderList lists={bounceList} listName={"Bounce gift cards:"} /> :
                                    <RenderList lists={paymentList} listName={"payment Offers:"} />
                        }

                    </>
                )}
            <Footer isLoggedIn={isLoggedIn} setIsLoggedIn={() => setIsLoggedIn(!isLoggedIn)} />
        </>
    )
}