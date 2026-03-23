import assignmentList from "./AssignmentList.js";
import assignmentCreate from "./AssignmentCreate.js";
export default {
    components: { assignmentList, assignmentCreate },
    template: `
<section class="space-y-6">
  <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

  <assignment-list :assignments="filters.Completed" title="Completed Assignments"></assignment-list>
  
  <assignment-create @add="add"></assignment-create>
</section>
`,

    data() {
        return {
            assignments: [
                { name: 'Finish Project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id:3 }
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                Completed: this.assignments.filter(assignment => assignment.complete)

            };
        }
    },

    methods: {
        add(name) {

        this.assignments.push({
            name: name,
            completed: false,
            id: this.assignments.length + 1

        });
        }
    }
}