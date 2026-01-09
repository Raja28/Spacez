"use client";
export default function Tabs({ activeTab, setActiveTab }) {
    return (
        <section className="border-b border-gray-300">
            <div className="flex justify-between px-4 ">
                {
                    ["Coupons", "Giftcards", "Payment Offers",].map((tab, index) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer text-xs py-1.5 transition-all duration-300 ease-in-out border-b-3 
                                ${activeTab === tab
                                    ? "font-semibold text-[#4B4E4B] border-[#4B4E4B]"
                                    : "text-[#7D817D] border-transparent"
                                }
            `}
                        >
                            {tab}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}