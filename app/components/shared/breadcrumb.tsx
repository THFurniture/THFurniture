import { Link } from "react-router";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 py-3 px-4 bg-gradient-to-r from-[#2E2C2A]/[0.03] to-transparent rounded-xl backdrop-blur-sm">
                {/* Home icon */}
                <li className="flex items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-1.5 text-sm text-[#8B7355] hover:text-[#2E2C2A] transition-all duration-300 group"
                    >
                        <svg
                            className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <span className="sr-only md:not-sr-only">Home</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {/* Chevron separator */}
                        <svg
                            className="w-4 h-4 mx-1.5 text-[#D4D1CC] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>

                        {item.href ? (
                            <Link
                                to={item.href}
                                className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-all duration-300 capitalize relative group py-1"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#8B7355] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                            </Link>
                        ) : (
                            <span className="text-sm font-medium text-[#2E2C2A] capitalize py-1 px-2 bg-[#2E2C2A]/[0.05] rounded-md">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
