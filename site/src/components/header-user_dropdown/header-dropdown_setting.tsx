import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface HeaderdropdownsettingsProps {
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

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeaderDropdownSettings = component$((props: HeaderdropdownsettingsProps | any) => {
    return (
        <>
            <button data-tooltip-target="tooltip-dark" type="button" class="inline-flex items-center p-2 mr-1 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d={props.data.dark.dpath}></path>
                </svg>
            </button>
            <div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {props.data.dark.label}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-statistics" type="button" class="hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg lg:inline-flex dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d={props.data.analytics.dpath}></path>
                </svg>
            </button>
            <div id="tooltip-statistics" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {props.data.analytics.label}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                <span class="sr-only">{props.data.usermenu.label}</span>
                <img class="w-8 h-8 rounded-full" src={props.data.usermenu.url} alt={props.data.headerdropdownsettings.usermenu.alt}/>
            </button>
        </>
    );
})

export default component$(() => {
    const { pathname } = useLocation();
  
    const builderContent = useResource$(() =>
      getContent({
        model: 'header-dropdown-setting',
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
                <HeaderDropdownSettings 
                    data={content?.data}
                />
            }
        />
      </div>
    );
  });
  
  export const head: DocumentHead = {
    title: 'Welcome to Qwik',
  };
