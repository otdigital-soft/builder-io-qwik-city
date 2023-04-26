import { For, onInit, useStore } from '@builder.io/mitosis';

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

export default function TabsComponent(props: TabsComponentProps) {
    return (
        <div>
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <For each={props.tabs}>
                        {(tabItem, index) => (
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{tabItem.tab}</button>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
            <div id="myTabContent">
                <For each={props.tabs}>
                    {(tabItem, index) => (
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p class="text-sm text-gray-500 dark:text-gray-400">{tabItem.tabcontent.before}<strong>{tabItem.tabcontent.bold}</strong>{tabItem.tabcontent.after}</p>
                        </div>
                    )}      
                </For>
            </div>
        </div>
    );
}