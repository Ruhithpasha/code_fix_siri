export default function ProjectUpdates() {
    return (
        <section className="bg-[#f5f7f6] rounded-[16px] p-[20px] mb-[20px]">
            <h3 className="font-semibold mb-[10px]">Project Updates</h3>

            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[12px] text-gray-600">Latest Update</p>
                    <p>Project phase 2 feedback received.</p>
                </div>

                <div>
                    <p className="text-[12px] text-gray-600">Acknowledgment Status</p>
                    <p>Pending</p>
                </div>

                <button className="bg-[#2563eb] text-white text-[12px] px-[18px] py-[8px] rounded-full">
                    View Project Status
                </button>
            </div>
        </section>
    );
}
