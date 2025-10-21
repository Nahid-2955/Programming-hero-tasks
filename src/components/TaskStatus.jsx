import React from 'react';
import './Resolved';
import Resolved from './Resolved';
import { toast } from 'react-toastify';

const TaskStatus = ({QueryTasks, setQueryTasks, setResolvedTasks}) => {
    const removeTask = (taskId) => {
        setQueryTasks(prev => prev.filter(task => task.id !== taskId));
    };
   
    return (
        <div>
            {QueryTasks.map(task => (
                <div key={task.id} className="task-card border-b pb-4 mb-4 relative">
                    <div className="justify-between items-start bg-gray-200 p-3 rounded-2xl">
                        <div>
                            <h3 className='text-lg font-semibold'>{task.issue_name}</h3>
                        </div>
                        <button 
                            onClick={() => {
                                toast("Task Completed!");
                                removeTask(task.id);
                                setResolvedTasks(prev => [...prev, task]);
                            }}
                            className="text-white bg-green-600 w-full py-3 rounded-2xl"
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