import { component$ } from '@builder.io/qwik';
import { DocumentHead} from '@builder.io/qwik-city';
import FooterBaseLinkComponent from './footer-base_link';
import FooterLogo from './footer-logo';
import FooterSocialLinkComponent from './footer-social_link';
import FooterBottomLinkComponent from './footer-bottom_link';
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export default component$(() => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full container p-4 sm:p-6">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <FooterLogo/>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <FooterBaseLinkComponent/>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                <FooterBottomLinkComponent/>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <FooterSocialLinkComponent/>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
};
