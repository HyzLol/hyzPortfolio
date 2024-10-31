import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Desktop } from '~/components/desktop/desktop';

export default component$(() => {
  return (
    <div id = "wrapper">
        <Desktop></Desktop>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hyz's Portfolio",
  meta: [
    {
      name: "description",
      content: "Hyz's portfolio",
    },
  ],
};
