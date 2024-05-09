class Task {
    task_id: number;
    description: string;
    next: Task | null;

    constructor(task_id: number, description: string) {
        this.task_id = task_id;
        this.description = description;
        this.next = null;
    }
}

class TaskManager {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task_id: number, description: string): void {
        const newTask = new Task(task_id, description);
        this.tasks.push(newTask);
    }

    deleteTask(task_id: number): void {
        this.tasks = this.tasks.filter(task => task.task_id !== task_id);
    }

    displayTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }
        console.log("Tasks:");
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.task_id}, Description: ${task.description}`);
        });
    }
}

// Usage
const taskManager = new TaskManager();

while (true) {
    console.log("\n1. Add Task");
    console.log("2. Delete Task");
    console.log("3. Display Tasks");
    console.log("4. Exit");

    const choice = prompt("Enter your choice: ");

    if (choice === "1") {
        const task_id = parseInt(prompt("Enter task ID: "));
        const description = prompt("Enter task description: ");
        taskManager.addTask(task_id, description);
        console.log("Task added successfully.");
    } else if (choice === "2") {
        const task_id = parseInt(prompt("Enter task ID to delete: "));
        taskManager.deleteTask(task_id);
        console.log("Task deleted successfully.");
    } else if (choice === "3") {
        taskManager.displayTasks();
    } else if (choice === "4") {
        console.log("Exiting...");
        break;
    } else {
        console.log("Invalid choice. Please try again.");
    }
}
