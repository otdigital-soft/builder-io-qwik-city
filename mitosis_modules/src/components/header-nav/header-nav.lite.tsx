import { For, onInit, useStore } from '@builder.io/mitosis';

interface SubLinkProp {
    sublabel: string;
    suburl: string;
}

interface HeaderNavLinkProp {
    label: string;
    url: string | undefined;
    dpath1: string | undefined;
    dpath2: string | undefined;
    submenu: SubLinkProp[] | undefined;
}

interface HeaderLogoProp {
    url: string;
    img: string;
    alt: string;
    label: string
}

interface HeaderSeetingMenuProp {
    signin: {
        url: string;
        label: string;
    };
    signup: {
        url: string;
        label: string;
    };
    openmain: {
        label: string;
        dpath1: string;
        dpath2: string;
    }
}

interface HeaderNavComponentProps {
    navLinks: HeaderNavLinkProp[];
    headerLogo: HeaderLogoProp;
    headerSettingMenu: HeaderSeetingMenuProp;
}

export default function HeaderNavComponent(props: HeaderNavComponentProps) {
    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href={props.headerLogo.url} class="flex items-center">
                        <img src={props.headerLogo.img} class="mr-3 h-6 sm:h-9" alt={props.headerLogo.alt} />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.headerLogo.label}</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href={props.headerSettingMenu.signin.url} class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">{props.headerSettingMenu.signin.label}</a>
                        <a href={props.headerSettingMenu.signup.url} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">{props.headerSettingMenu.signup.label}</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">{props.headerSettingMenu.openmain.label}</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d={props.headerSettingMenu.openmain.dpath1} clip-rule="evenodd"></path>
                            </svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d={props.headerSettingMenu.openmain.dpath2} clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <For each={props.navLinks}>
                                {(link, index) => (
                                    <>
                                        {!!link.url && (
                                            <li data-navlink-item={index}>
                                                <a href={link.url} class="block py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{link.label}</a>
                                            </li>
                                        )}
                                        {!link.url && (
                                            <li data-navlink-item={index}>
                                                <button id="submenu-dropdown-button" data-dropdown-toggle="submenu-dropdown" data-dropdown-placement="right-end" type="button" class="flex justify-between items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">
                                                    <span class="flex items-center">
                                                        <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                                                            <path d={link.dpath1} clip-rule="evenodd"></path>
                                                        </svg>{link.label}
                                                    </span>
                                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                                                            <path d={link.dpath2} clip-rule="evenodd"></path>
                                                        </svg>
                                                </button>
                                                <div id="submenu-dropdown" class="hidden z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                    <ul class="py-1 text-sm font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown-button">
                                                        <For each={link.submenu}>
                                                            {(sublink, ind) => (
                                                                <li data-submenu-item={ind}>
                                                                    <a href={sublink.suburl} class="flex items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">{sublink.sublabel}</a>
                                                                </li>
                                                            )}
                                                        </For>
                                                    </ul>
                                                </div>
                                            </li>
                                        )}
                                    </>
                                )}
                            </For>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
