export function setFunction(task) {
    localStorage.setItem("todos", JSON.stringify(task))
}

export function getFunction() {
    JSON.parse(localStorage.getItem("todos"))
}

export const appMounted = () => ({type: "APP_MOUNTED"})
export const appUnmounted = () => ({type: "APP_UNMOUNTED"})
