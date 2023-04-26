import { For, onInit, useStore } from '@builder.io/mitosis';

interface InnerPath {
    dpath: string;
    fill: "evenodd" | undefined;
    clip: "evenodd" | undefined;
}

interface FeatureProp {
    title: string;
    description: string;
    path1: InnerPath;
    path2: InnerPath | undefined;
}

interface FeatureSummaryProp {
    title: string;
    description: string;
    url: string;
    svgpath: string;
}

interface FeatureComponentProps {
    features: FeatureProp[];
    summary: FeatureSummaryProp;
}

export default function FeatureComponent(props: FeatureComponentProps) {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24 sm:py-16 lg:px-6">
                <div class="mb-8 lg:mb-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{props.summary.title}</h2>
                    <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">{props.summary.description}</p>
                    <a href={props.summary.url} class="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        Learn more
                        <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d={props.summary.svgpath} clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <For each={props.features}>
                        {(item, index) => (
                            <div data-feature-item={index}>
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
                    </For>
                </div>
            </div>
        </section>
    );
}