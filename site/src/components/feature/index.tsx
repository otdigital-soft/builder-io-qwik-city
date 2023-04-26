import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import FeatureContentComponent from './feature-content';
import FeatureSummaryComponent from "./feature-summary";
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export default component$(() => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24 sm:py-16 lg:px-6">
                <FeatureSummaryComponent/>
                <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <FeatureContentComponent/>
                </div>
            </div>
        </section>
    );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
