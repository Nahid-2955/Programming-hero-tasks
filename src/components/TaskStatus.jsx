import React from 'react';

const TaskStatus = ({QueryTasks, setQueryTasks}) => {
    const removeTask = (taskId) => {
        setQueryTasks(prev => prev.filter(task => task.id !== taskId));
    };

    return (
        <div>
            {QueryTasks.map(task => (
                <div key={task.id} className="task-card border-b pb-4 mb-4 relative">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-lg font-semibold'>{task.issue_name}</h3>
                            <p className='text-sm'>{task.short_details}</p>
                            <div className='mt-2'>
                                <span className={`py-1 px-2 rounded-2xl text-sm ${task.status === 'open' ? 'bg-green-300' : 'bg-yellow-200'}`}>{task.status}</span>
                                <span className='ml-4 text-sm text-red-600'>{task.priority} Priority</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => removeTask(task.id)}
                            className="text-red-500"
                            title="Remove task"
                        >
                            Complete Task
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskStatus;