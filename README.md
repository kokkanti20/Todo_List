# Todo_List
## Input
- Users enter their task descriptions into the designated input field.
- Upon clicking the "Add Task" button, the description is captured as input and retained for subsequent processing.
## Process
- The application employs React's state management via the `useState` hook to monitor the task list.
- Clicking the "Add Task" button appends the task to the todo list.
- Every job in the list is generated utilizing the `.map()` function.
- Each completed job features a "Delete" option that allows users to eliminate it from the list.
- The state is continuously changed to represent additions and deletions.

## Output
- The application presents a list of tasks that updates dynamically according to user activities.
- Tasks are visually added to the list as they are introduced.
- Upon deletion of tasks, they are eliminated from the list, and the display is subsequently refreshed.

