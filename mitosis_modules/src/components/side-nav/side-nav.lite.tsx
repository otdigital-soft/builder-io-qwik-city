import { For, onInit, useState } from '@builder.io/mitosis';

interface SubMainMenuProp {
    suburl: string;
    sublabel: string;
}

interface SideMainNavProp {
    label: string;
    url: string | undefined;
    dropbutton: string | undefined;
    dpath1: string;
    dpath2: string;
    submenu: SubMainMenuProp[];
}

interface SideServiceNavProp {
    label: string;
    url: string;
    dpath: string;
    fill: "evenodd" | undefined;
    clip: "evenodd" | undefined;
}

interface SideSettingProp {
    furl: string;
    fdpath: string;
    surl: string;
    sdpath: string;
    title: string;
    tpath: {
        dpath1: string;
        dpath2: string;
    }
}

interface SideLanguageNavProp {
    en: {
        url: string;
        id: string;
        title: string;
        path1: {
            dpath: string;
            fill: string;
            transform: string;
        };
        path2: {
            dpath: string;
            fill: string;
            transform: string;
        };
        path3: {
            dpath: string;
            fill: string;
            transform: string;
        };
        path4: {
            dpath: string;
            fill: string;
            transform: string;
        };
    };
    de: {
        url: string;
        id: string;
        title: string;
        path1: {
            fill: string;
            dpath: string;
        };
        path2: { dpath: string};
        path3: { 
            dpath: string;
            fill: string;
        };
    };
    it: {
        url: string;
        id: string;
        title: string;
        path1: {
            fill: string;
            dpath: string;
        };
        path2: {
            fill: string;
            dpath: string;
        };
        path3: {
            fill: string;
            dpath: string;
        };
    };
    ch: {
        url: string;
        id: string;
        title: string;
        path1: {
            id: string;
            fill: string;
            dpath: string;
        };
        path2: {
            fill: string;
            dpath: string;
        }
    };
}

interface SideNavComponentProps {
    main: SideMainNavProp[];
    services: SideServiceNavProp[];
    languages: SideLanguageNavProp;
    settings: SideSettingProp;
}

export default function SideNavComponent(props: SideNavComponentProps) {
    return (
        <aside class="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
            <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul class="space-y-2">
                    <For each={props.main}>
                        {(item, index) => (
                            <>
                                {!!item.url && (
                                    <li data-main-item={index}>
                                        <a href={item.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d={item.dpath1}></path>
                                            </svg>
                                            <span class="ml-3">{item.label}</span>
                                        </a>
                                    </li>
                                )}
                                {!item.url && (
                                    <li data-main-item={index}>
                                        <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d={item.dpath1} clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap">{item.dropbutton}</span>
                                            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d={item.dpath2} clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                                            <For each={item.submenu}>
                                                {(subItem, ind) => (
                                                    <li data-sub-item={ind}>
                                                        <a href={subItem.suburl} class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subItem.sublabel}</a>
                                                    </li>
                                                )}
                                            </For>
                                        </ul>
                                    </li>
                                )}
                            </>
                        )}
                    </For>
                </ul>
                <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <For each={props.services}>
                        {(item, index) => (
                            <li data-service-item={index}>
                                <a href={item.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule={item.fill && item.fill} d={item.dpath} clip-rule={item.clip && item.clip}></path>
                                    </svg>
                                    <span class="ml-3">{item.label}</span>
                                </a>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
            <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
                <a href={props.settings.furl} class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d={props.settings.fdpath}></path>
                    </svg>
                </a>
                <a href={props.settings.surl} data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d={props.settings.sdpath} clip-rule="evenodd"></path>
                    </svg>
                </a>
                <div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                    {props.settings.title}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                        <path fill="#3c3b6e" d={props.settings.tpath.dpath1}/>
                            <g fill="#fff">
                                <g id="d">
                                    <g id="c">
                                        <g id="e">
                                            <g id="b">
                                                <path id="a" d={props.settings.tpath.dpath2}/>
                                                    <use xlink:href="#a" y="420"/>
                                                    <use xlink:href="#a" y="840"/>
                                                    <use xlink:href="#a" y="1260"/></g>
                                                    <use xlink:href="#a" y="1680"/></g>
                                                    <use xlink:href="#b" x="247" y="210"/></g>
                                                    <use xlink:href="#c" x="494"/></g>
                                                    <use xlink:href="#d" x="988"/>
                                                    <use xlink:href="#c" x="1976"/>
                                                    <use xlink:href="#e" x="2470"/></g>
                    </svg>
                </button>
                <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
                    <ul class="py-1" role="none">
                        <li>
                            <a href={props.languages.en.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                                <div class="inline-flex items-center">
                                    <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id={props.languages.en.id} viewBox="0 0 512 512">
                                        <g fill-rule="evenodd">
                                            <g stroke-width="1pt">
                                                <path fill={props.languages.en.path1.fill} d={props.languages.en.path1.dpath} transform={props.languages.en.path1.transform}/>
                                                <path fill={props.languages.en.path2.fill} d={props.languages.en.path2.dpath} transform={props.languages.en.path2.transform}/>
                                            </g>
                                            <path fill={props.languages.en.path3.fill} d={props.languages.en.path3.dpath} transform={props.languages.en.path3.transform}/>
                                            <path fill={props.languages.en.path4.fill} d={props.languages.en.path4.dpath} transform={props.languages.en.path4.transform}/>
                                        </g>
                                    </svg>
                                    {props.languages.en.title}
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={props.languages.de.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                <div class="inline-flex items-center">
                                    <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id={props.languages.de.id} viewBox="0 0 512 512">
                                        <path fill={props.languages.de.path1.fill} d={props.languages.de.path1.dpath}/>
                                        <path d={props.languages.de.path2.dpath}/>
                                        <path fill={props.languages.de.path3.fill} d={props.languages.de.path3.dpath}/>
                                    </svg>
                                    {props.languages.de.title}
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={props.languages.it.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                <div class="inline-flex items-center">
                                    <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id={props.languages.it.id} viewBox="0 0 512 512">
                                        <g fill-rule="evenodd" stroke-width="1pt">
                                            <path fill={props.languages.it.path1.fill} d={props.languages.it.path1.dpath}/>
                                            <path fill={props.languages.it.path2.fill} d={props.languages.it.path2.dpath}/>
                                            <path fill={props.languages.it.path3.fill} d={props.languages.it.path3.dpath}/>
                                        </g>
                                    </svg>
                                    {props.languages.it.title}
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={props.languages.ch.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                                <div class="inline-flex items-center">
                                    <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id={props.languages.ch.id} viewBox="0 0 512 512">
                                        <defs>
                                            <path id={props.languages.ch.path1.id} fill={props.languages.ch.path1.fill} d={props.languages.ch.path1.dpath}/>
                                        </defs>
                                        <path fill={props.languages.ch.path2.fill} d={props.languages.ch.path2.dpath}/>
                                        <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"/>
                                        <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"/>
                                        <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"/>
                                        <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"/>
                                        <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"/>
                                    </svg>
                                    {props.languages.ch.title}
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}