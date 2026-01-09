"use client";
import Image from "next/image";
import bonusVoucher from "../../public/bonusVoucher.svg";
import paymentOffer from "../../public/paymentOffer.svg";
const lists = [
    {
        title: "Bonus gift cards",
        icon: paymentOffer,
        buttonText: "Claim gift cards »",
    },
    {
        title: "Payment offers",
        icon: bonusVoucher,
        buttonText: "Unlock offers »",
    },
]

export default function SignoutCard() {
    return (
        <section className="flex flex-col gap-4 mx-4 py-2 overflow-auto h-[12.3rem]  no-scrollbar ">
            <div className="flex flex-col gap-2">
                {lists.map((list, index) => (
                    <div key={list.title} className="flex flex-col  gap-2">
                        <h2 className="text-[#4B4E4B] text-sm font-semibold">{list.title}</h2>
                        <Image
                            src={list.icon}
                            alt={list.title}
                            width={"w-full"}
                            height={"h-full"}
                            className="object-contain"
                        />
                        <button className="bg-[#C16B3E] text-[#FFFFFF] py-2 rounded-sm cursor-pointer">{list.buttonText}</button>
                    </div>
                ))}
            </div>
        </section>
    )
}