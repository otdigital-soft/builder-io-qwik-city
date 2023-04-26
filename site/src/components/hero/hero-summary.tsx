import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeroSummaryComponent = component$((props: {title: string | undefined, description: string, url: string, dpath: string}) => {
    return (
        <div class="mb-6 max-w-screen-lg lg:mb-0">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{props.title}</h1>
            <p class="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">{props.description}</p>
            <a href={props.url} class="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Learn more about the plan
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d={props.dpath} clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'hero-summary',
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
                <HeroSummaryComponent 
                    title={content?.data?.title}
                    description={content?.data?.description}
                    url={content?.data?.url}
                    dpath={content?.data?.dpath}
                />
            }
        />
        </div>
    );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
