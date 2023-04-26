import { For, onInit, useStore } from '@builder.io/mitosis';

interface  BaseNavLink {
    label: string;
    url: string;
}

interface FooterBaseLink {
    title: string;
    navlinks: BaseNavLink[];
}

interface FooterSocialLink {
    label: string;
    url: string;
    dpath: string;
    fill: "evenodd" | undefined;
    clip: "evenodd" | undefined;
}

interface FooterLogoLink {
    alt: string;
    url: string;
    label: string;
    img: string;
}

interface FooterBottomLink {
    url: string;
    label: string;
}

interface FooterComponentProp {
    baseLinks: FooterBaseLink[];
    socialLinks: FooterSocialLink[];
    logoLink: FooterLogoLink;
    bottomLink: FooterBottomLink;
}

export default function FooterComponent(props: FooterComponentProp) {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full container p-4 sm:p-6">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href={props.logoLink.url} class="flex items-center">
                            <img src={props.logoLink.img} class="h-8 mr-3" alt={props.logoLink.alt} />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{props.logoLink.label}</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <For each={props.baseLinks}>
                            {(item, index) => (
                                <div data-baselink-item={index}>
                                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{item.title}</h2>
                                    <ul class="text-gray-600 dark:text-gray-400">
                                        <For each={item.navlinks}>
                                            {(link, ind) => (
                                                <li class="mb-4" data-navlinks-item={ind}>
                                                    <a href={link.url} class="hover:underline">{link.label}</a>
                                                </li>
                                            )}
                                        </For>
                                    </ul>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href={props.bottomLink.url} class="hover:underline">{props.bottomLink.label}</a>. All Rights Reserved.
                </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <For each={props.socialLinks}>
                            {(item, index) => (
                                <a href={item.url} class="text-gray-500 hover:text-gray-900 dark:hover:text-white" data-sociallink-item={index}>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule={item.fill && item.fill} d={item.dpath} clip-rule={item.clip && item.clip}></path>
                                    </svg>
                                    <span class="sr-only">{item.label}</span>
                                </a>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </footer>
    );
}