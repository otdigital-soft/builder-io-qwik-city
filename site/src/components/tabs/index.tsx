import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface TabProp {
    tab: string;
    tabcontent: {
        before: string;
        bold: string;
        after: string;
    }
}

interface TabsComponentProps {
    tabs: TabProp[];
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const TabsComponent = component$((props: {data: TabsComponentProps | any}) => {
    return (
        <div>
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    {props.data.map((tabItem: TabProp) => 
                        <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{tabItem.tab}</button>
                    </li>
                    )}
                </ul>
            </div>
            <div id="myTabContent">
                {props.data.map((tabItem: TabProp) => 
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p class="text-sm text-gray-500 dark:text-gray-400">{tabItem.tabcontent.before}<strong>{tabItem.tabcontent.bold}</strong>{tabItem.tabcontent.after}</p>
                    </div>
                )}
            </div>
        </div>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'tabs',
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
                    <TabsComponent 
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
