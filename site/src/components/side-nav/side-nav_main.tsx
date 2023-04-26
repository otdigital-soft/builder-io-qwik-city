import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface SubMainMenuProp {
    suburl: string;
    sublabel: string;
}

interface SideMainNavProp {
    label: string | undefined;
    url: string | undefined;
    dropbutton: string;
    dpath1: string;
    dpath2: string;
    submenu: SubMainMenuProp[] | undefined
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const SideNavMain = component$((props: {data: SideMainNavProp[] | any}) => {
    return (
        <>  
            {props.data.map((item: SideMainNavProp) =>
                <>
                    {!!item.url && (
                        <li>
                            <a href={item.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d={item.dpath1}></path>
                                </svg>
                                <span class="ml-3">{item.label}</span>
                            </a>
                        </li>
                    )}
                    {!item.url && (
                        <li>
                            <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns={item.xmlns}>
                                    <path fill-rule="evenodd" d={item.dpath1} clip-rule="evenodd"></path>
                                </svg>
                                <span class="flex-1 ml-3 text-left whitespace-nowrap">{item.dropbutton}</span>
                                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d={item.dpath2} clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                                {item.submenu?.map((subItem) =>
                                    <li>
                                        <a href={subItem.suburl} class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subItem.sublabel}</a>
                                    </li>
                                )}
                            </ul>
                        </li>  
                    )}
                </>    
            )}
        </>
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'side-main-menu',
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
                <SideNavMain 
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
