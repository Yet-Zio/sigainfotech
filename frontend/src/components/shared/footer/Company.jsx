const company = [
    {name: 'About', href: '#'},
    {name: 'Blog', href: '#'},
    {name: 'Jobs', href: '#'},
    {name: 'Press', href: '#'},
    {name: 'Partners', href: '#'},
];

export const Company = () => {
    return (
        <div>
            <h3 className="text-base font-medium text-gray-900">Company</h3>
            <ul role="list" className="mt-4 space-y-4">
                {company.map((item) => (
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
