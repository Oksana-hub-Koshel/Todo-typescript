class TodosService{
    location = "https://jsonplaceholder.typicode.com/todos"

    getTodos = async () => {
        return await fetch(`${this.location}`)
            .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                },
            )
            .catch((error) => console.log(error.message))
    }
}
export default new TodosService()