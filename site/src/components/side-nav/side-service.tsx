import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface SideServiceNavProp {
    label: string;
    url: string;
    dpath: string;
    fill: "evenodd" | undefined;
    clip: "evenodd" | undefined;
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const SideServiceNav = component$((props: {data: SideServiceNavProp[] | any}) => {
    return (
        <>  
            {props.data.map((item: SideServiceNavProp) =>
                <li>
                    <a href={item.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule={item.fill && item.fill} d={item.dpath} clip-rule={item.clip && item.clip}></path>
                        </svg>
                        <span class="ml-3">{item.label}</span>
                    </a>
                </li>
            )}
        </>
        
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'side-service-menu',
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
                <SideServiceNav 
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
