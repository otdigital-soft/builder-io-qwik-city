import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface InnerPath {
    dpath: string;
    fill: "evenodd" | undefined;
    clip: "evenodd" | undefined;
}

interface FeatureItemProp {
    title: string;
    description: string;
    path1: InnerPath;
    path2: InnerPath | undefined;
}
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const FeatureContentComponent = component$((props: {data: FeatureItemProp[] | any}) => {
    return (
        <div>
            {props.data.map((item: FeatureItemProp) => 
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule={item.path1.fill && item.path1.fill} d={item.path1.dpath} clip-rule={item.path1.clip && item.path1.clip}></path>
                            {item.path2 && <path fill-rule={item.path2.fill && item.path2.fill} d={item.path2.dpath} clip-rule={item.path1.clip && item.path1.clip}></path>}
                        </svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">{item.title}</h3>
                    <p class="text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
            )}
        </div>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'footer-item',
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
                    <FeatureContentComponent 
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
