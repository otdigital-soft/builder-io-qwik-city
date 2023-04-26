import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

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

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const SideLanguageNav = component$((props: {data: SideLanguageNavProp[] | any}) => {
    return (
        <>  
            <li>
                <a href={props.data.en.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id={props.data.en.id} viewBox="0 0 512 512">
                            <g fill-rule="evenodd">
                                <g stroke-width="1pt">
                                    <path fill={props.data.en.path1.fill} d={props.data.en.path1.dpath} transform={props.data.en.path1.transform}/>
                                    <path fill={props.data.en.path2.fill} d={props.data.en.path2.dpath} transform={props.data.en.path2.transform}/>
                                </g>
                                <path fill={props.data.en.path3.fill} d={props.data.en.path3.dpath} transform={props.data.en.path3.transform}/>
                                <path fill={props.data.en.path4.fill} d={props.data.en.path4.dpath} transform={props.data.en.path4.transform}/>
                            </g>
                        </svg>
                        {props.data.en.title}
                    </div>
                </a>
            </li>
            <li>
                <a href={props.data.de.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id={props.data.de.id} viewBox="0 0 512 512">
                            <path fill={props.data.de.path1.fill} d={props.data.de.path1.dpath}/>
                            <path d={props.data.de.path2.dpath}/>
                            <path fill={props.data.de.path3.fill} d={props.data.de.path3.dpath}/>
                        </svg>
                        {props.data.de.title}
                    </div>
                </a>
            </li>
            <li>
                <a href={props.data.it.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id={props.data.it.id} viewBox="0 0 512 512">
                            <g fill-rule="evenodd" stroke-width="1pt">
                                <path fill={props.data.it.path1.fill} d={props.data.it.path1.dpath}/>
                                <path fill={props.data.it.path2.fill} d={props.data.it.path2.dpath}/>
                                <path fill={props.data.it.path3.fill} d={props.data.it.path3.dpath}/>
                            </g>
                        </svg>
                        {props.data.it.title}
                    </div>
                </a>
            </li>
            <li>
                <a href={props.data.ch.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id={props.data.ch.id} viewBox="0 0 512 512">
                            <defs>
                                <path id={props.data.ch.path1.id} fill={props.data.ch.path1.fill} d={props.data.ch.path1.dpath}/>
                            </defs>
                            <path fill={props.data.ch.path2.fill} d={props.data.ch.path2.dpath}/>
                            <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"/>
                            <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"/>
                            <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"/>
                            <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"/>
                            <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"/>
                        </svg>
                        {props.data.ch.title}
                    </div>
                </a>
            </li>
        </>
        
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'side-language-nav',
        apiKey: apiKey,
        userAttributes: { urlPath: pathname },
        })
    );

    return (
        <div>
        <Resource
            value={builderContent}
            onPending={() => <>Loading...</>}
            onRejected={error => <>Error: {error.message}</>}
            onResolved={content => 
                <SideLanguageNav 
                    data = {content?.data}
                />
            }
        />
        </div>
    );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
