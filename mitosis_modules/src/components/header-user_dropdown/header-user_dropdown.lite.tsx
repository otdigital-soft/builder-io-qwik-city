import { For, onInit, useStore } from '@builder.io/mitosis';

interface HeaderPersonalLink {
    label: string;
    url: string
}

interface HeaderPageLink {
    label: string;
    url: string;
}

interface HeaderLogoProp {
    url: string;
    img: string;
    alt: string;
    label: string;
}

interface HeaderdropdownsettingsProp {
    dark: {
        dpath: string;
        label: string;
    };
    analytics: {
        dpath: string;
        label: string;
    };
    usermenu: {
        label: string;
        url: string;
        alt: string;
    };
    info: {
        name: string;
        email: string;
    };
}

interface HeaderSubInfoProp {
    likes: {
        url: string;
        label: string;
        dpath: string;
    };
    collections: {
        url: string;
        label: string;
        dpath: string;
    };
    version: {
        url: string;
        label: string;
        dpath1: string;
        dpath2: string;
    };
    signout: {
        label: string;
        url: string;
    };
    logout: {
        url: string;
        label: string;
    };
    openmenu: {
        label: string;
        dpath1: string;
        dpath2: string;
    }
}

interface HeaderUserDropdownComponentProps {
    personal: HeaderPersonalLink[];
    page: HeaderPageLink[];
    headerLogo: HeaderLogoProp;
    headerdropdownsettings: HeaderdropdownsettingsProp;
    headersubinfo: HeaderSubInfoProp;
}

export default function HeaderUserDropdownComponent(props: HeaderUserDropdownComponentProps) {
    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href={props.headerLogo.url} class="flex items-center">
                        <img src={props.headerLogo.img} class="mr-3 h-6 sm:h-9" alt={props.headerLogo.alt} />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.headerLogo.label}</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <button data-tooltip-target="tooltip-dark" type="button" class="inline-flex items-center p-2 mr-1 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d={props.headerdropdownsettings.dark.dpath}></path>
                            </svg>
                        </button>
                        <div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                            {props.headerdropdownsettings.dark.label}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button data-tooltip-target="tooltip-statistics" type="button" class="hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg lg:inline-flex dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d={props.headerdropdownsettings.analytics.dpath}></path>
                            </svg>
                        </button>
                        <div id="tooltip-statistics" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                            {props.headerdropdownsettings.analytics.label}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span class="sr-only">{props.headerdropdownsettings.usermenu.label}</span>
                            <img class="w-8 h-8 rounded-full" src={props.headerdropdownsettings.usermenu.url} alt={props.headerdropdownsettings.usermenu.alt}/>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                            <div class="py-3 px-4">
                                <span class="block text-sm font-semibold text-gray-900 dark:text-white">{props.headerdropdownsettings.info.name}</span>
                                <span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400">{props.headerdropdownsettings.info.email}</span>
                            </div>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <For each={props.personal}>
                                    {(item, index) => (
                                        <li data-personal-item={index}>
                                            <a href={item.url} class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">{item.label}</a>
                                        </li>
                                    )}
                                </For>
                            </ul>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <a href={props.headersubinfo.likes.url} class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d={props.headersubinfo.likes.dpath} clip-rule="evenodd"></path>
                                        </svg> {props.headersubinfo.likes.label}
                                    </a>
                                </li>
                                <li>
                                    <a href={props.headersubinfo.collections.url} class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d={props.headersubinfo.collections.dpath}></path>
                                        </svg> {props.headersubinfo.collections.label}
                                    </a>
                                </li>
                                <li>
                                    <a href={props.headersubinfo.version.url} class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="flex items-center">
                                            <svg class="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d={props.headersubinfo.version.dpath1}  clip-rule="evenodd"></path>
                                            </svg> {props.headersubinfo.version.label}
                                        </span>
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d={props.headersubinfo.version.dpath2} clip-role="evenodd"></path>
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <a href={props.headersubinfo.signout.url} class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{props.headersubinfo.signout.label}</a>
                                </li>
                            </ul>
                        </div>
                        <a href={props.headersubinfo.logout.url} class="text-primary-600 dark:text-primary-500 ml-1 lg:ml-3 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">{props.headersubinfo.logout.label}</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">{props.headersubinfo.openmenu.label}</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d={props.headersubinfo.openmenu.dpath1} clip-rule="evenodd"></path>
                            </svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d={props.headersubinfo.openmenu.dpath2} clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <For each={props.page}>
                                {(item, index) => (
                                    <li data-page-item={index}>
                                        <a href={item.url} class="block py-2 pr-4 pl-3 text-primary-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-primary-500 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{item.label}</a>
                                    </li>
                                )}
                            </For>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}