import { component$, Resource, useResource$} from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const FeatureSummaryComponent = component$((props: {title: string | undefined, description: string, url: string, svgpath: string}) => {
    return (
        <div class="mb-8 lg:mb-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{props.title}</h2>
            <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">{props.description}</p>
            <a href={props.url} class="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                Learn more
                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d={props.svgpath} clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'feature-summary',
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
                    <FeatureSummaryComponent 
                        title={content?.data?.title}
                        description={content?.data?.description}
                        url={content?.data?.url}
                        svgpath={content?.data?.svgpath}
                    />
                }
            />
        </div>
    );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
