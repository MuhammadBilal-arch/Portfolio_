'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { UserButton, useUser } from "@clerk/nextjs";
import { Protect } from "@clerk/nextjs";
import NotSignedInScreen from '../components/NotSignedIn';

const AdminLayout = ({ children }) => {
    const navigate = useRouter()
    const { user, isLoaded } = useUser(); // Get user info from Clerk
    const pathname = usePathname();
    const isActive = (path) => {
        return pathname === path ? 'bg-green-secondary-gradient' : '';
    };

    const providerRoutes = [
        {
            route: `/projects/analytics`,
            name: "Analytics",
            role: ['admin']
        },
        {
            route: `/projects`,
            name: "Projects",
            role: ['admin']
        },
    ]

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-purple-primary text-white">
                <div className="p-4">
                    {/* <img src={ASSETS.LOGO.LOGO.src} alt='' className='h-10' /> */}
                </div>
                <nav className='mt-5'>
                    <ul>
                        {
                            providerRoutes?.map((item, index) =>
                                <li
                                    key={index}
                                    className={`hover:bg-green-secondary-gradient duration-[2000] ${isActive(item?.route)}`}>
                                    <Link href={item?.route} legacyBehavior>
                                        <a className="block p-4 text-sm primary-family">{item?.name}</a>
                                    </Link>
                                </li>)
                        }
                    </ul>
                </nav>
            </aside>
            <main className="flex-1  bg-white z-[100]">
                <div className="hidden md:flex items-center h-[100px] space-x-4 w-full justify-end px-5 bg-purple-primary">
                    <Link href="/projects/add">
                        <button className="px-5 cursor-pointer py-1.5 bg-green-gradient duration-300 rounded-md text-white">Add Project</button>
                    </Link>
                    {
                        user ? (
                            <Link href={user ? "/" : "/auth/sign-in"}></Link>
                        ) : (
                            <Link href={user ? "/projects" : "/auth/sign-in"}>
                                <button
                                    className='px-5 cursor-pointer py-1.5 bg-green-gradient duration-300 rounded-md text-white'>
                                    {user ? "" : "Login"}
                                </button>
                            </Link>
                        )
                    }
                    <UserButton style={{ width: "50px" }} />
                </div>

                <Protect
                    fallback={<NotSignedInScreen />}
                >
                    <section className='border border-white-primary max-h-[calc(100vh-100px)] overflow-y-auto'>{children}</section>
                </Protect>
            </main>
        </div>
    );
};

export default AdminLayout;
