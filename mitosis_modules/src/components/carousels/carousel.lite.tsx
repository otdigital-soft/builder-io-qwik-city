import { For, onInit, useStore } from '@builder.io/mitosis';

export interface Image {
  image: string;
}

export interface Images {
  images: Image[];
}

export default function CarouselComponent(props: Images) {
  const state = useStore<Images>({
    images: [],
  });

  onInit(() => {
    state.images = props.images;
  });

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Image to loop over*/}
        <For each={state.images}>
          {(image, index) => (
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src={image.image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          )}
        </For>
      </div>
      {/* Slider indicators to loop over */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <For each={state.images}>
          {(image, index) => (
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            />
          )}
        </For>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
