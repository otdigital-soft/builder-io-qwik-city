import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { getContent, RegisteredComponent, RenderContent } from '@builder.io/sdk-qwik';

export const apiKey = process.env.BUILDER_PUBLIC_API_KEY

export const MyFunComponent = component$((props: { text: string }) => {
    const state = useStore({
        count: 0,
    });

    return (
        <div>
            <h3>{props.text.toUpperCase()}</h3>
            <p>{state.count}</p>
            <button onClick$={() => state.count++}>Click me</button>
        </div>
    );
});

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
    {
        component: MyFunComponent,
        name: 'MyFunComponent',
        builtIn: true,
        inputs: [
            {
                name: 'text',
                type: 'string',
                defaultValue: 'Hello world',
            },
        ],
    },
];
