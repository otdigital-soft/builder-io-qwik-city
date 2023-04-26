import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface FooterSocialLink {
    label: string;
    url: string;
    dpath: string;
    fill: "evenodd" | undefined;
    clip: "evenodd" | undefined;
}
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const FooterSocialLinkComponent = component$((props: {data: FooterSocialLink[] | any}) => {
    return (
        <>
            {props.data.map((link: FooterSocialLink) => 
                <a href={link.url} class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule={link.fill && link.fill} d={link.dpath} clip-rule={link.clip && link.clip}></path>
                    </svg>
                    <span class="sr-only">{link.label}</span>
                </a>
            )}
        </>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'footer-soical-link',
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
                    <FooterSocialLinkComponent 
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
