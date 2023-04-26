import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { getContent } from '@builder.io/sdk-qwik';

interface TooltipProp {
    buttonlabel: string;
    content: string;
}

interface TooltipComponentProps {
    tooltips: TooltipProp[]; 
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const Tooltip = component$((props: {data: TooltipComponentProps | any}) => {
    return (
        <div>
            {props.data.map((item: TooltipProp) => 
                <>
                    <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{item.buttonlabel}</button>
                    <div id="tooltip-bottom" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {item.content}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </>
            )}  
        </div>
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'tooltip',
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
                    <Tooltip 
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