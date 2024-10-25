import { component$ } from '@builder.io/qwik';
import { Desktop } from '~/components/desktop/desktop';

export default component$(() => {
  return (
    <div id = "wrapper">
        <Desktop/>
    </div>
  );
});