import React from 'react'
import Delete from "../asserts/delete[1].png"
import notTick from "../asserts/not_tick[1].png"
import Tick from "../asserts/tick[1].png"




const TodoItem = ({ text, id, isComplete, deleteTodo, toggle }) => {
        return (
          <div className='flex items-center gap-3 my-3 cursor-pointer'>
            <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
              <img src={isComplete? Tick : notTick} alt="" srcset="" className='w-7' />
              <p
                className={`text-slate-700 ml-4 text-[17px] decoration-slate-400 ${
                  isComplete? "line-through" : ""
                }`}
              >
                {text}
              </p>
            </div>
            <img onClick={() => deleteTodo(id)} src={Delete} alt="" srcset="" className='w-3.5' />
          </div>
        );
      };

export default TodoItem
