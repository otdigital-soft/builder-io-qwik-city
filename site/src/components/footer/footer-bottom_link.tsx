import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const FooterBottomLinkComponent = component$((props: {label: string, url: string}) => {
    return (
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href={props.url} class="hover:underline">{props.label}</a>. All Rights Reserved.
        </span>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'footer-bottom-link',
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
                    <FooterBottomLinkComponent 
                        url={content?.data?.url}
                        label={content?.data?.label}
                    />
                }
            />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
};
