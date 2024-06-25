const solutions = [
    {name: 'Marketing', href: '#'},
    {name: 'Analytics', href: '#'},
    {name: 'Commerce', href: '#'},
    {name: 'Insights', href: '#'},
];
export const Solutions = () => {
    return (
        <div>
            <h3 className="text-base font-medium text-gray-900">Solutions</h3>
            <ul role="list" className="mt-4 space-y-4">
                {solutions.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
