import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface SideSettingComponentProp {
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

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const SideSettingComponent = component$((props: {data: SideSettingComponentProp | any}) => {
    return (
        <>  
            <a href={props.data.furl} class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d={props.data.fdpath}></path>
                </svg>
            </a>
            <a href={props.data.surl} data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d={props.data.sdpath} clip-rule="evenodd"></path>
                </svg>
            </a>
            <div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                {props.data.title}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                    <path fill="#3c3b6e" d={props.data.tpath.dpath1}/>
                        <g fill="#fff">
                            <g id="d">
                                <g id="c">
                                    <g id="e">
                                        <g id="b">
                                            <path id="a" d={props.data.tpath.dpath2}/>
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
        </>
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'side-setting',
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
                <SideSettingComponent 
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
