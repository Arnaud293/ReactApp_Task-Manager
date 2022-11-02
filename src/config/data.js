const initialData = {
    tasks: {
        "task-1" : {id: "task-1", content: "Une random tâche"},
        "task-2" : {id: "task-2", content: "Autre random tâche"},
        "task-3" : {id: "task-3", content: "Encore une random tâche"},
        "task-4" : {id: "task-4", content: "Cette tâche est random"},
        "task-5" : {id: "task-5", content: "Je fais actuellement une random tâche"},
        "task-6" : {id: "task-6", content: "Je ferai cette random tâche"},
    },
    columns: {
        "column-1" : {
            id : "column-1",
            title: "Tâches à faire",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
        "column-2" : {
            id : "column-2",
            title: "Tâches en cours",
            taskIds: ["task-5"],
        },
        "column-3" : {
            id : "column-3",
            title: "Pour plus tard",
            taskIds: ["task-6"],
        },
    },
    columnsOrder : ["column-1", "column-2", "column-3"],
}

export default initialData;