import assignmentList from "./AssignmentList.js";
import assignmentCreate from "./AssignmentCreate.js";
export default {
    components: { assignmentList, assignmentCreate },
    template: `
<section class="flex gap-8">
  <assignment-list :assignments="filters.inProgress" title="In Progress">
    <assignment-create @add="add"></assignment-create>
  </assignment-list>

  <assignment-list 
      v-if="showCompleted"
      :assignments="filters.Completed" 
      title="Completed" 
      can-toggle
      @toggle="showCompleted = ! showCompleted"
  >
  </assignment-list>
</section>
`,

    data() {
        return {
            assignments: [],
            showCompleted: true
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

    created() {
      fetch('http://localhost:3000/assignments')
          .then(response => response.json())
          .then(assignments => {
              this.assignments = assignments;
          });
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