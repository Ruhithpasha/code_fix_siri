export default function CourseProgress() {
    return (
        <section className="bg-[#f5f7f6] rounded-[16px] p-[20px] mb-[20px]">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">Course Progress</h3>
                <a className="text-[12px] text-blue-600">View All Tasks</a>
            </div>

            <div className="mt-[15px]">
                <div className="bg-[#4cff4c] rounded-[20px] p-[15px] flex gap-[15px] h-[100px]">
                    <div className="w-[80px] h-[70px] bg-white rounded-[16px] flex items-center justify-center">
                        <img src="/img/course.png" className="w-[70%]" />
                    </div>

                    <div className="text-white">
                        <p className="text-[12px] opacity-80">Current Course</p>
                        <p className="text-[16px] font-bold">Advanced UI/UX Principles</p>
                    </div>
                </div>

                <div className="flex items-center gap-[40px] mt-[25px]">
                    <div>
                        <p className="text-[12px] text-gray-600">Content</p>
                        <p>12 Material</p>
                    </div>

                    <div>
                        <p className="text-[12px] text-gray-600 flex items-center gap-1">
                            <span className="w-[10px] h-[10px] bg-green-500 rounded-full" />
                            Completion
                        </p>
                        <p>80%</p>
                    </div>

                    <div>
                        <p className="text-[12px] text-gray-600 flex items-center gap-1">
                            <span className="w-[10px] h-[10px] bg-red-500 rounded-full" />
                            Deadline
                        </p>
                        <p>15 hrs</p>
                    </div>

                    <button className="ml-auto bg-[#2563eb] text-white text-[12px] px-[20px] py-[10px] rounded-full">
                        Continue Learning
                    </button>
                </div>
            </div>
        </section>
    );
}
