import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

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
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeaderNavLink = component$((props: { data: HeaderNavLinkProp[] | any}) => {
    return (
        <>
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {props.data.map((link: HeaderNavLinkProp) => 
                    <>
                        {!!link.url && (
                            <li>
                                <a href={link.url} class="block py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{link.label}</a>
                            </li>
                        )}
                        {!link.url && (
                            <li>
                                <button id="submenu-dropdown-button" data-dropdown-toggle="submenu-dropdown" data-dropdown-placement="right-end" type="button" class="flex justify-between items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">
                                    <span class="flex items-center">
                                        <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d={link.dpath1} clip-rule="evenodd"></path>
                                        </svg>{link.label}
                                    </span>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d={link.dpath2} clip-rule="evenodd"></path>
                                        </svg>
                                </button>
                                <div id="submenu-dropdown" class="hidden z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                    <ul class="py-1 text-sm font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown-button">
                                        {link.submenu?.map((sublink: {suburl: string, sublabel: string}) => 
                                            <li>
                                                <a href={sublink.suburl} class="flex items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">{sublink.sublabel}</a>
                                            </li>   
                                        )}
                                    </ul>
                                </div>
                            </li>
                        )}
                    </>
                )}
            </ul>
        </>
    );
})

export default component$(() => {
    const { pathname } = useLocation();
  
    const builderContent = useResource$(() =>
      getContent({
        model: 'nav-link',
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
                    <HeaderNavLink 
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
