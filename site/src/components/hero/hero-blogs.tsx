import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface HeroBlogProp {
    title: string;
    description: string;
    url: string;
    dpath: string;
}
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeroBlogsComponent = component$((props: {data: HeroBlogProp[] | any}) => {
    return (
        <>
            {props.data.map((item: HeroBlogProp) => 
                <div>
                    <h2 class="mb-1 text-lg font-bold">{item.title}</h2>
                    <p class="mb-1 text-sm text-gray-400">{item.description}</p>
                    <a href={item.url} class="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                        Read more
                        <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d={item.dpath} clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            )}
        </>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'hero-blog',
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
                    <HeroBlogsComponent 
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
