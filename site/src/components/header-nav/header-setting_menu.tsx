import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

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

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeaderSettingMenu = component$((props: {data: HeaderSeetingMenuProp | any}) => {
    return (
        <div class="flex items-center lg:order-2">
            <a href={props.data.signin.url} class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">{props.data.signin.label}</a>
            <a href={props.data.signup.url} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">{props.data.signup.label}</a>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">{props.data.openmain.label}</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d={props.data.openmain.dpath1} clip-rule="evenodd"></path>
                </svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d={props.data.openmain.dpath2} clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'header-setting-menu',
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
                <HeaderSettingMenu 
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
