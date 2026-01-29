import bellIcon from "../assets/Bell_icon.png";
import profileIcon from '../assets/profile_icon.png';

export default function Header() {
    return (
        <header className="h-[80px] bg-green-500 border-b border-gray-200 flex items-center justify-between px-[30px] z-10">
            <div className="relative flex items-center w-[200px]">
                <div className="w-[40px] h-[40px] bg-[#4cff4c] rounded-full absolute left-[65px]" />
                <h2 className="text-[30px] pl-[25px] font-semibold z-10">zetpeak</h2>
            </div>

            <div className="flex items-center gap-[30px]">
                <input
                    placeholder="Search..."
                    className="w-[250px] px-[20px] py-[10px] rounded-full border border-black bg-transparent"
                />

                <div className="flex gap-[20px]">
                    <img src={bellIcon} className="w-[20px] cursor-pointer" />
                    <img src={profileIcon} className="w-[20px] cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
