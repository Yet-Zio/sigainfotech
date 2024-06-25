const stats = [
    {name: 'Service Availability', value: '24/7'},
    {name: 'Number Of Clients', value: '43'},
    {name: 'Projects Completed', value: '67'},
    {name: 'Client Satisfaction Rate', value: '98%'}
];

export const Metrics = () => {
    return (
        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
            {stats.map((item) => (
                <div key={item.name}
                     className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">{item.name}</dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-[#4f81a9]">{item.value}</dd>
                </div>
            ))}
        </dl>
    )
}
