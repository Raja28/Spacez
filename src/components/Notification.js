"use client";
import Image from "next/image";
import Battery from "../../public/battery.png";
import Signal from "../../public/signal.png";
import Wifi from "../../public/wifi.png";


export default function Notification() {
    return (
        <section className="w-full px-4">
            <div className="flex items-center justify-between">
                {/* Left Side: Time */}
                <div className="text-sm font-semibold text-[#646864]">
                    9:30
                </div>

                {/* Right Side: Status Icons */}
                <div className="flex items-center gap-1.5">
                    <Image
                        src={Wifi}
                        alt="Wifi"
                        width={16}
                        height={16}
                        className="object-contain"
                    />
                    <Image
                        src={Signal}
                        alt="Signal"
                        width={16}
                        height={16}
                        className="object-contain"
                    />
                    <Image
                        src={Battery}
                        alt="Battery"
                        width={8}
                        height={8}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}


// export default function Notification() {
//     return (
//         <section className="border ">
//             <div className="flex justify-between">
//                 <div className="text-[#646864] font-semibold">
//                     9.30
//                 </div>
//                 <div >
//                     <Image src={Wifi} width={ } height={ } />
//                     <Image src={Signal} width={ } height={ } />
//                     <Image src={Battery} width={ } height={ } />

//                 </div>
//             </div>
//         </section>
//     );
// }