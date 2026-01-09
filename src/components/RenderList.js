"use client"

import Image from "next/image"

export default function RenderList({ lists, listName }) {
    return (
        <section className="mx-4 my-2 overflow-auto h-[14.5rem] no-scrollbar">
            <div className="text-sm font-semibold text-[#4B4E4B] my-2">{listName}</div>
            <div className="flex flex-col gap-2 ">
                {lists.map((list, index) => (
                    <div key={list.description + index} className="flex gap-2">

                        <Image
                            src={list.image}
                            alt={list.title}
                            width={40}
                            height={"h-full"}
                            className="object-contain"
                        />
                        <div className="w-full px-2 py-1">
                            <h2 className="text-[#4B4E4B] text-xs font-semibold flex justify-between">
                                {/* Fix for list.title */}
                                <div>
                                    {typeof list.title === "string" ? (
                                        list.title
                                    ) : (
                                        <Image src={list.title} alt="icon" width={70} height={50} className="object-contain" />
                                    )}
                                </div>

                                {/* Existing logic for list.title2 */}
                                {list.title2 && typeof list.title2 === "string" ? (
                                    <div>{list.title2}</div>
                                ) : (
                                    <>
                                        {list?.title2 && <Image src={list.title2} alt="icon" width={50} height={40} className="object-contain cursor-pointer" />}
                                    </>
                                )}
                            </h2>
                            <p className="text-[#7D817D] text-xs py-2 border-b ">{list.description}</p>
                            <button className="text-[#7D817D] py-2 rounded-xs cursor-pointer ">{list.readmore}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}