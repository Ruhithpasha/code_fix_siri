export default function TimeSpentTable() {
    return (
        <section className="bg-[#f5f7f6] rounded-[16px] p-[20px]">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">Average Time Spent</h3>
                <a className="text-[12px] text-blue-600">view all</a>
            </div>

            <table className="w-full mt-[10px] text-[13px]">
                <thead>
                    <tr className="border-b border-gray-300 text-left">
                        <th className="py-[10px]">Course name</th>
                        <th>Start Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Completed</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-b border-gray-300">
                        <td className="py-[10px]">UI/UX Design</td>
                        <td>4 Mar, 2025</td>
                        <td>6:20 pm</td>
                        <td>10:30 pm</td>
                        <td>85%</td>
                        <td>4hrs 10m</td>
                    </tr>

                    <tr>
                        <td className="py-[10px]">UI/UX Design</td>
                        <td>4 Mar, 2025</td>
                        <td>Yesterday</td>
                        <td>10:30 pm</td>
                        <td>40%</td>
                        <td>4hrs 10m</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
