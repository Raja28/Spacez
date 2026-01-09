"use client"
export default function Hero({ isLoggedIn, setIsLoggedIn }) {
    return (
        <section className="flex flex-col gap-4 px-4 py-4">
            <div className="text-[#4B4E4B] text-xl font-bold">Offers</div>
            <div className="flex flex-col gap-2">
                <span className="text-[#4B4E4B] text-sm">
                    {isLoggedIn ? "Book directly with us to get exclusive benefits " : "Sign in to unlock exclusive additional rewards"}
                </span>
                {!isLoggedIn && <button onClick={setIsLoggedIn} className="bg-[#C16B3E] text-[#FFFFFF] py-2 rounded-sm cursor-pointer">
                    Sign in
                </button>}
            </div>
        </section>
    )
}