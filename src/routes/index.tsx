import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LoginPage } from "~/components/loginPage/loginPage";

export default component$(() => {
  return (
    <div id = "wrapper">
		<LoginPage/>
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
