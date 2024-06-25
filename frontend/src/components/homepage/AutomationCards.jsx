import {Link} from "react-router-dom";

const posts = [

    {
        title: 'Workflow Automation',
        href: '/',
        description:
            'Streamlining and automating repetitive tasks and processes within an organization to increase efficiency and reduce human error. This could include automating approvals, notifications, data entry, and other routine tasks.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'Marketing Automation',
        href: '/',
        description:
            'Automating marketing tasks such as email campaigns, social media posting, lead scoring, and customer segmentation. This helps in nurturing leads, improving customer engagement, and optimizing marketing efforts.',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'IT Operations Automation',
        href: '/',
        description:
            ' Automating IT tasks such as system monitoring, backup and recovery, software deployment, and network management. This ensures that IT infrastructure operates smoothly, reduces downtime, and improves overall system reliability.',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    }
]


export const AutomationCards = () => {
    return (
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <Link to={"/"} key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={post.imageUrl} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">

                            <Link to={post.href} className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                            </Link>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
