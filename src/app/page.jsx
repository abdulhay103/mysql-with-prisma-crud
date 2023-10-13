async function getData() {
    const res = await fetch(process.env.LOCAL_HOST + "api/category");
    if (!res.ok) {
        throw new Error("Data Fatching Fail");
    }
    return res.json();
}

export default async function Home() {
    const allData = await getData();
    const data = allData.data;
    console.log(data);
    return (
        <main className=" container mx-auto pt-20">
            <h1>Module-18 Assignment</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Parent Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Meta Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Slug
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Content
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                >
                                    <td className="px-6 py-4">
                                        {item.parentId}
                                    </td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4">
                                        {item.metaTitle}
                                    </td>
                                    <td className="px-6 py-4">{item.slug}</td>
                                    <td className="px-6 py-4">
                                        {item.content}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
