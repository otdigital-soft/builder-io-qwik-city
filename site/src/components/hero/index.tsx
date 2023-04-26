import { component$ } from '@builder.io/qwik';
import { DocumentHead} from '@builder.io/qwik-city';
import HeroBlogsComponent from './hero-blogs';
import HeroSummaryComponent from './hero-summary';
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export default component$(() => {
    return (
        <section class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
            <div class="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
                <HeroSummaryComponent/>
                <div class="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
                    <HeroBlogsComponent/>
                </div>
            </div>
        </section>
    );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
