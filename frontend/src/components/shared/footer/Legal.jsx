const legal = [
    {name: 'Claim', href: '#'},
    {name: 'Privacy', href: '#'},
    {name: 'Terms', href: '#'},
];
export const Legal = () => {
    return (
        <div className="mt-12 md:mt-0">
            <h3 className="text-base font-medium text-gray-900">Legal</h3>
            <ul role="list" className="mt-4 space-y-4">
                {legal.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
