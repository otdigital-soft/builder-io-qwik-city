import { For, onInit, useStore } from '@builder.io/mitosis';

interface TooltipProp {
    buttonlabel: string;
    content: string;
}

interface TooltipComponentProps {
    tooltips: TooltipProp[]; 
}

export default function TooltipComponent(props: TooltipComponentProps) {
    return (
        <div>
            <For each={props.tooltips}>
                {(toolTip) => (
                    <>
                        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{toolTip.buttonlabel}</button>
                        <div id="tooltip-bottom" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {toolTip.content}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </>
                )}
            </For>
        </div>
    )
}