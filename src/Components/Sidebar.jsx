import leftArrowIcon from '../assets/left-arrow.png';

export default function Sidebar({ collapsed, onToggle }) {
    return (
        <aside
            className={`transition-all duration-300 overflow-hidden mt-[20px] mb-[20px] ${collapsed ? "w-[40px]" : "w-[220px]"
                }`}
        >
            <nav className="h-full bg-[#4cff4c] text-white p-[16px] rounded-r-[20px] relative">
                <button
                    onClick={onToggle}
                    className="absolute top-0 right-0 w-[36px] h-[36px] rounded-full bg-[#4cff4c] flex items-center justify-center"
                >
                    <img
                        src={leftArrowIcon}
                        alt="Toggle"
                        className={`w-[22px] transition-transform ${collapsed ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {!collapsed && (
                    <>
                        <button className="w-[90%] ml-[10px] mt-[10px] py-[10px] rounded-full bg-white text-black font-bold">
                            Dashboard
                        </button>

                        <h4 className="mt-[15px] mb-[6px] text-[13px] bg-black text-center py-[6px]">
                            Course
                        </h4>

                        <ul className="text-center">
                            <li className="py-[8px] border-b border-white/30">My Course</li>
                            <li className="py-[8px] border-b border-white/30">Final Project</li>
                            <li className="py-[8px] border-b border-white/30">Certificate</li>
                        </ul>

                        <h4 className="mt-[15px] mb-[6px] text-[13px] bg-black text-center py-[6px]">
                            Project
                        </h4>

                        <ul className="text-center">
                            <li className="py-[8px] border-b border-white/30">Details</li>
                            <li className="py-[8px] border-b border-white/30">Progress</li>
                            <li className="py-[8px] border-b border-white/30">Assigned Task</li>
                            <li className="py-[8px] border-b border-white/30">Discussion</li>
                        </ul>
                    </>
                )}
            </nav>
        </aside>
    );
}
