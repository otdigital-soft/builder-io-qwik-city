import { For, onInit, useStore } from '@builder.io/mitosis';

interface HeroBlogProp {
    title: string;
    description: string;
    url: string;
    dpath: string;
}

interface HeroSummaryProp {
    title: string;
    description: string;
    url: string;
    bgurl: string;
    dpath: string;
}

interface HeroComponentProps {
    heroBlogs: HeroBlogProp[];
    herosummary: HeroSummaryProp;
}

export default function HeroComponent(props: HeroComponentProps) {
    return (
        <section class={`bg-[url(${props.herosummary.bgurl})] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply`}>
            <div class="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
                <div class="mb-6 max-w-screen-lg lg:mb-0">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{props.herosummary.title}</h1>
                    <p class="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">{props.herosummary.description}</p>
                    <a href={props.herosummary.url} class="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Learn more about the plan
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d={props.herosummary.dpath} clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div class="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
                    <For each={props.heroBlogs}>
                        {(item, index) => (
                            <div data-blogs-item={index}>
                                <h2 class="mb-1 text-lg font-bold">{item.title}</h2>
                                <p class="mb-1 text-sm text-gray-400">{item.description}</p>
                                <a href={item.url} class="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                                    Read more
                                    <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d={item.dpath} clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}