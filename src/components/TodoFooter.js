function TodoFooter({ todos, onClearCopleted }) {
    const completedSize = todos.filter((todo) => todo.isComplrted).length;

    return (
        <div>
            <span>
                {completedSize}/{todos.length} Completed
            </span>
            <button onClick={onClearCopleted}>Clear Completed</button>
        </div>
    );
}

export default TodoFooter;
