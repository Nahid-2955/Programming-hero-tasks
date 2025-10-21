import React from 'react';
import { toast } from 'react-toastify';
const Resolved = ({ resolvedTasks, setResolvedTasks }) => {

    const removeResolve = (taskId) => {
        setResolvedTasks(prev => prev.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <div>
            {resolvedTasks.map(task => (
                <div key={task.id} className="task-card border-b pb-4 mb-4 relative">
                    <div className="justify-between items-start bg-gray-200 p-3 rounded-2xl">
                        <div>
                            <h3 className='text-lg font-semibold'>{task.issue_name}</h3>
                        </div>
                        <button 
                            onClick={() => {
                                toast("Task Removed!");
                                removeResolve(task.id);
                            }}
                            className="text-white bg-green-600 w-full py-3 rounded-2xl"
                            title="Remove task"
                        >
                            Done
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Resolved;