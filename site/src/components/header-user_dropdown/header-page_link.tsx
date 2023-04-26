import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface HeaderPageLink {
    label: string;
    url: string
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeaderPageLinkComponent = component$((props: {data: HeaderPageLink[] | any}) => {
    return (
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {props.data.map((link: HeaderPageLink) =>
                <li>
                    <a href={link.url} class="block py-2 pr-4 pl-3 text-primary-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-primary-500 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{link.label}</a>
                </li>
            )}
        </ul>
    );
})

export default component$(() => {
  const { pathname } = useLocation();

  const builderContent = useResource$(() =>
    getContent({
      model: 'header-dropdwon-pagelink',
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
                <HeaderPageLinkComponent 
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