import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const HeaderLogo = component$((props: {url: string, img: string, label: string, alt: string}) => {
    return (
        <a href={props.url} class="flex items-center">
            <img src={props.img} class="mr-3 h-6 sm:h-9" alt={props.alt} />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.label}</span>
        </a>
    );
})

export default component$(() => {
    const { pathname } = useLocation();
  
    const builderContent = useResource$(() =>
      getContent({
        model: 'header-logo',
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
                <HeaderLogo 
                    url = {content?.data?.url}
                    img = {content?.data?.img}
                    alt = {content?.data?.alt}
                    label = {content?.data?.label}
                />
            }
        />
      </div>
    );
  });
  
  export const head: DocumentHead = {
    title: 'Welcome to Qwik',
  };
