import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface HeaderPersonalLink {
    label: string;
    url: string
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeaderPersonalLinkComponent = component$((props: {data: HeaderPersonalLink[] | any}) => {
    return (
        <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
            {props.data.map((link: HeaderPersonalLink) =>
                <li>
                    <a href={link.url} class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">{link.label}</a>
                </li>
            )}
        </ul>
    );
})

export default component$(() => {
  const { pathname } = useLocation();

  const builderContent = useResource$(() =>
    getContent({
      model: 'header-user-dropdown',
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
                <HeaderPersonalLinkComponent 
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
