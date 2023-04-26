import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface BaseNavLink {
    label: string;
    url: string;
}

interface FooterBaseLink {
    title: string;
    navlinks: BaseNavLink[];
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const FooterBaseLinkComponent = component$((props: {data: FooterBaseLink[] | any}) => {
    return (
        <>
            {props.data.map((link: FooterBaseLink) => 
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{link.title}</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        {link.navlinks.map((sublink: BaseNavLink) => 
                            <li class="mb-4">
                                <a href={sublink.url} class="hover:underline">{sublink.label}</a>
                            </li>
                        )}                                    
                    </ul>
                </div>
            )}
        </>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'footer-base-link',
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
                    <FooterBaseLinkComponent 
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
