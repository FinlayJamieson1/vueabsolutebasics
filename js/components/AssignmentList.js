import assignment from "./Assignment.js";

export default {
    computed: {
        assignment() {
            return assignment
        },
        tags() {
            return ['science', 'maths', 'reading'];
        }
    },
    components: { assignment },
    template: `
<section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }} <span>({{ assignments.length }})</span></h2>
  
  <div class="flex gap-2">
    <button v-for="tag in tags" class="border rounded px-1 py-px">{{ tag }}</button>
  </div>

    <ul class="border border-gray-600 divide-y divide-gray-600">
        <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment">
        </assignment>
</ul>
</section>
`,

    props: {
        assignments: Array,
        title: String
    },
}