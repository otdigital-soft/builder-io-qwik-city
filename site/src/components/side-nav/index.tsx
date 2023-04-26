import { component$ } from '@builder.io/qwik';
import { DocumentHead} from '@builder.io/qwik-city';
import SideLanguageNav from './side-language';
import SideNavMain from './side-nav_main';
import SideServiceNav from './side-service';
import SideSettingComponent from './side-setting';
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export default component$(() => {
  return (
    <aside class="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
        <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul class="space-y-2">
              <SideNavMain/>
            </ul>
            <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <SideServiceNav/>
            </ul>
        </div>
        <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
            <SideSettingComponent/>
            <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
                <ul class="py-1" role="none">
                  <SideLanguageNav/>
                </ul>
            </div>
        </div>
    </aside>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
